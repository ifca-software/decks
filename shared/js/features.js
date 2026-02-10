/**
 * DeckFeatures — copy-link, keyboard hint, presenter mode, analytics, embed.
 * Loaded after slide-engine.js. Reads DeckEngine for state.
 */
(function() {
  var isEmbed = new URLSearchParams(location.search).has('embed');

  // === EMBED MODE ===
  if (isEmbed) {
    document.body.classList.add('embed');
    return;
  }

  // === COPY LINK BUTTON ===
  function buildCopyButton() {
    var btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.setAttribute('aria-label', 'Copy slide link');
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 9.5L9.5 6.5"/><path d="M11 7.5L12.5 6a2.12 2.12 0 10-3-3L8 4.5"/><path d="M5 8.5L3.5 10a2.12 2.12 0 103 3L8 11.5"/></svg>';
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      navigator.clipboard.writeText(location.href).then(function() {
        btn.classList.add('copied');
        setTimeout(function() { btn.classList.remove('copied'); }, 1500);
      });
    });
    document.body.appendChild(btn);
  }

  // === KEYBOARD/SWIPE HINT ===
  function showHint() {
    if (localStorage.getItem('deck-hint-seen')) return;

    var hint = document.createElement('div');
    hint.className = 'deck-hint';
    hint.textContent = 'Use arrow keys or swipe to navigate';
    document.body.appendChild(hint);

    setTimeout(function() { hint.classList.add('visible'); }, 800);

    function dismiss() {
      hint.classList.remove('visible');
      localStorage.setItem('deck-hint-seen', '1');
      setTimeout(function() { if (hint.parentNode) hint.parentNode.removeChild(hint); }, 300);
      document.removeEventListener('keydown', dismiss);
      document.removeEventListener('click', dismiss);
      document.removeEventListener('touchstart', dismiss);
    }

    // Auto-dismiss after 4 seconds
    setTimeout(dismiss, 4000);

    document.addEventListener('keydown', dismiss);
    document.addEventListener('click', dismiss);
    document.addEventListener('touchstart', dismiss);
  }

  // === PRESENTER MODE ===
  var presenterActive = false;
  var presenterBar = null;
  var presenterTimer = null;
  var startTime = null;

  function togglePresenter() {
    presenterActive = !presenterActive;
    if (presenterActive) {
      startTime = Date.now();
      if (!presenterBar) buildPresenterBar();
      presenterBar.classList.add('visible');
      updatePresenter();
      presenterTimer = setInterval(updatePresenter, 1000);
    } else {
      if (presenterBar) presenterBar.classList.remove('visible');
      clearInterval(presenterTimer);
    }
  }

  function buildPresenterBar() {
    presenterBar = document.createElement('div');
    presenterBar.className = 'presenter-bar';
    presenterBar.innerHTML =
      '<span class="presenter-timer">00:00</span>' +
      '<span class="presenter-divider">|</span>' +
      '<span class="presenter-current"></span>' +
      '<span class="presenter-next"></span>';
    document.body.appendChild(presenterBar);
  }

  function updatePresenter() {
    if (!presenterBar || !presenterActive) return;
    var engine = window.DeckEngine;
    if (!engine) return;

    var cur = engine.getCurrentSlide();
    var tot = engine.getTotal();

    var elapsed = Math.floor((Date.now() - startTime) / 1000);
    var mins = Math.floor(elapsed / 60);
    var secs = elapsed % 60;
    presenterBar.querySelector('.presenter-timer').textContent =
      String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');

    presenterBar.querySelector('.presenter-current').textContent =
      (cur + 1) + '/' + tot + ' — ' + (engine.getTitle(cur) || 'Slide ' + (cur + 1));

    var nextLabel = cur < tot - 1
      ? 'Next: ' + (engine.getTitle(cur + 1) || 'Slide ' + (cur + 2))
      : 'Last slide';
    presenterBar.querySelector('.presenter-next').textContent = nextLabel;
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'p' || e.key === 'P') {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.metaKey || e.ctrlKey) return; // Don't interfere with Ctrl+P (print)
      togglePresenter();
    }
  });

  // === ANALYTICS ===
  var slideTimings = [];
  var lastSlide = 0;
  var lastTime = Date.now();

  function trackSlideChange(from, to) {
    var now = Date.now();
    slideTimings.push({
      slide: from,
      slug: window.DeckEngine ? window.DeckEngine.getSlug(from) : null,
      duration_ms: now - lastTime
    });
    lastSlide = to;
    lastTime = now;

    if (presenterActive) updatePresenter();
  }

  function hookEngine() {
    if (window.DeckEngine) {
      window.DeckEngine.onSlideChange = trackSlideChange;
    }
  }

  window.addEventListener('beforeunload', function() {
    slideTimings.push({
      slide: lastSlide,
      slug: window.DeckEngine ? window.DeckEngine.getSlug(lastSlide) : null,
      duration_ms: Date.now() - lastTime
    });
    // Log to console; replace with sendBeacon to an analytics endpoint later
    if (slideTimings.length > 0) {
      console.log('[DeckAnalytics]', JSON.stringify(slideTimings));
    }
  });

  // === PROSPECT NAME (?prospect= query param) ===
  function applyProspectName() {
    var params = new URLSearchParams(location.search);
    var prospect = params.get('prospect');
    if (!prospect) return;

    var titleSlide = document.querySelector('.slide[data-slug="title"]') || document.querySelector('.slide');
    if (!titleSlide) return;

    var subtitle = titleSlide.querySelector('.subtitle');
    if (subtitle) {
      subtitle.innerHTML = '<span class="prospect-name">Prepared for ' + prospect + '</span> &mdash; ' + subtitle.innerHTML;
    }

    document.title = document.title.replace(' — IFCA', ' — ' + prospect + ' — IFCA');
  }

  // === ROI CALCULATOR (data-roi on slide) ===
  function initRoiCalculator() {
    var roiSlide = document.querySelector('[data-roi]');
    if (!roiSlide) return;

    var config;
    try { config = JSON.parse(roiSlide.getAttribute('data-roi')); } catch(e) { return; }
    if (!config || !config.base || !config.unit) return;

    var scalables = roiSlide.querySelectorAll('[data-roi-val]');
    if (scalables.length === 0) return;

    // Store original values
    var originals = [];
    for (var i = 0; i < scalables.length; i++) {
      originals.push({
        el: scalables[i],
        base: parseFloat(scalables[i].getAttribute('data-roi-val')),
        html: scalables[i].innerHTML
      });
    }

    // Build input row
    var row = document.createElement('div');
    row.className = 'roi-input-row';
    row.innerHTML = '<span class="roi-label">Your portfolio:</span>' +
      '<input type="number" min="1" value="' + config.base + '" aria-label="Number of ' + config.unit + '">' +
      '<span class="roi-label">' + config.unit + '</span>';
    var input = row.querySelector('input');

    // Insert before the first card-grid
    var firstGrid = roiSlide.querySelector('.card-grid');
    if (firstGrid) {
      firstGrid.parentNode.insertBefore(row, firstGrid);
    }

    // Prevent click/key navigation when interacting with input
    input.addEventListener('click', function(e) { e.stopPropagation(); });
    input.addEventListener('keydown', function(e) { e.stopPropagation(); });

    function formatRM(val) {
      if (Math.abs(val) >= 1000000) {
        return 'RM ' + (val / 1000000).toFixed(2).replace(/\.?0+$/, '') + 'M';
      }
      var parts = Math.round(val).toString().split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return 'RM ' + parts.join('.');
    }

    function update() {
      var val = parseFloat(input.value) || config.base;
      var ratio = val / config.base;
      for (var i = 0; i < originals.length; i++) {
        var newVal = originals[i].base * ratio;
        originals[i].el.textContent = formatRM(newVal);
      }
    }

    input.addEventListener('input', update);
  }

  // === INIT ===
  function init() {
    buildCopyButton();
    showHint();
    hookEngine();
    applyProspectName();
    initRoiCalculator();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
