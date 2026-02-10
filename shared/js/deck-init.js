/**
 * deck-init.js — bundled JS (all modules inlined in dependency order).
 * Source files remain in this directory for editing.
 * Eliminates 5 sequential script-load round-trips.
 *
 * Order: glossary → animations → tooltips → slide-engine → features → init glue
 */

/* ═══════════════════════════════════════════
   1. GLOSSARY
   ═══════════════════════════════════════════ */
var DeckGlossary = {
  terms: {},

  sharedTerms: {
    'EBITDA': { def: 'Earnings Before Interest, Taxes, Depreciation & Amortisation — a measure of operating profitability.', url: 'https://en.wikipedia.org/wiki/EBITDA' },
    'ROI': { def: 'Return on Investment — net gain divided by cost, expressed as a multiple or percentage.', url: 'https://en.wikipedia.org/wiki/Return_on_investment' },
    'SLA': { def: 'Service Level Agreement — a contractual commitment on performance (e.g. response time, uptime).', url: 'https://en.wikipedia.org/wiki/Service-level_agreement' },
    'PM compliance': 'Preventive Maintenance compliance — the percentage of scheduled maintenance tasks completed on time.',
    'REIT': { def: 'Real Estate Investment Trust — a company that owns and operates income-producing real estate.', url: 'https://en.wikipedia.org/wiki/Real_estate_investment_trust' },
    'CAPEX': { def: 'Capital Expenditure — spending on long-term assets like equipment and buildings.', url: 'https://en.wikipedia.org/wiki/Capital_expenditure' },
    'OPEX': { def: 'Operational Expenditure — day-to-day running costs.', url: 'https://en.wikipedia.org/wiki/Operating_expense' },
    'NOI': { def: 'Net Operating Income — revenue minus operating expenses, before tax and financing.', url: 'https://en.wikipedia.org/wiki/Net_operating_income' },
    'NPS': { def: 'Net Promoter Score — a measure of customer satisfaction and loyalty (-100 to +100).', url: 'https://en.wikipedia.org/wiki/Net_promoter_score' },
    'BMS': { def: 'Building Management System — centralised controls for HVAC, lighting, fire, and electrical systems.', url: 'https://en.wikipedia.org/wiki/Building_management_system' },
    'CMMS': { def: 'Computerised Maintenance Management System — software for scheduling and tracking maintenance.', url: 'https://en.wikipedia.org/wiki/Computerized_maintenance_management_system' },
    'CAFM': 'Computer-Aided Facility Management — what FMX is.',
    'MTBF': { def: 'Mean Time Between Failures — average time a piece of equipment runs before breaking down.', url: 'https://en.wikipedia.org/wiki/Mean_time_between_failures' },
    'MTTR': { def: 'Mean Time To Repair — average time to restore equipment after a failure.', url: 'https://en.wikipedia.org/wiki/Mean_time_to_repair' },
    'FMX': { def: 'IFCA\'s Facility Management platform — mobile-first, built for ASEAN.', url: 'https://www.ifca.asia' },
    'MOH': { def: 'Ministry of Health Malaysia — regulates private healthcare facilities.', url: 'https://www.moh.gov.my' },
    'BOMBA': { def: 'Fire and Rescue Department of Malaysia — enforces fire safety compliance.', url: 'https://www.bomba.gov.my' },
    'JKKP': { def: 'Department of Occupational Safety and Health (DOSH) — enforces workplace safety.', url: 'https://www.dosh.gov.my' },
    'DOSH': { def: 'Department of Occupational Safety and Health — workplace safety regulator.', url: 'https://www.dosh.gov.my' },
    'PE': { def: 'Private Equity — investment firms that acquire and improve companies for returns.', url: 'https://en.wikipedia.org/wiki/Private_equity' },
    'OEM': { def: 'Original Equipment Manufacturer — the company that made the equipment (e.g. Siemens, GE).', url: 'https://en.wikipedia.org/wiki/Original_equipment_manufacturer' },
    'KPI': { def: 'Key Performance Indicator — a measurable value showing how effectively a target is being achieved.', url: 'https://en.wikipedia.org/wiki/Performance_indicator' },
    'ESG': { def: 'Environmental, Social & Governance — sustainability framework increasingly required by investors.', url: 'https://en.wikipedia.org/wiki/Environmental,_social,_and_corporate_governance' },
  },

  init: function() {
    this.terms = Object.assign({}, this.sharedTerms);
  },

  addTerms: function(extras) {
    Object.assign(this.terms, extras);
  },

  getTerm: function(term) {
    var entry = this.terms[term] || this.terms[term.toUpperCase()] || null;
    if (!entry) return null;
    if (typeof entry === 'string') return { def: entry, url: null };
    return { def: entry.def, url: entry.url || null };
  },

  getDefinition: function(term) {
    var t = this.getTerm(term);
    return t ? t.def : null;
  },

  bind: function() {
    if (!this.terms || Object.keys(this.terms).length === 0) {
      this.init();
    }
  }
};

DeckGlossary.init();

/* ═══════════════════════════════════════════
   2. ANIMATIONS
   ═══════════════════════════════════════════ */
var DeckAnimations = {
  activate: function(slide) {
    if (!slide) return;
    var items = slide.querySelectorAll('[data-animate]');
    for (var i = 0; i < items.length; i++) {
      var el = items[i];
      var delay = el.getAttribute('data-delay') || '0';
      el.classList.add('animate-in', 'delay-' + delay);
    }
  },

  deactivate: function(slide) {
    if (!slide) return;
    var items = slide.querySelectorAll('[data-animate]');
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('animate-in',
        'delay-0', 'delay-1', 'delay-2', 'delay-3', 'delay-4', 'delay-5');
    }
  }
};

/* ═══════════════════════════════════════════
   3. TOOLTIPS
   ═══════════════════════════════════════════ */
(function() {
  var tooltip = null;
  var hoverTimer = null;
  var hideTimer = null;
  var longPressTimer = null;
  var activeTarget = null;

  function createTooltip() {
    tooltip = document.createElement('div');
    tooltip.className = 'jargon-tooltip';
    tooltip.innerHTML = '<span class="tooltip-term"></span><span class="tooltip-body"></span><a class="tooltip-link" target="_blank" rel="noopener">Learn more &#8599;</a>';
    document.body.appendChild(tooltip);

    tooltip.addEventListener('mouseenter', function() {
      clearTimeout(hideTimer);
    });
    tooltip.addEventListener('mouseleave', function() {
      scheduleHide();
    });
  }

  function getSlideTheme(el) {
    var slide = el.closest('.slide');
    if (!slide) return 'dark';
    if (slide.classList.contains('bg-white') || slide.classList.contains('bg-gray')) return 'light';
    return 'dark';
  }

  function show(target) {
    if (!tooltip) createTooltip();
    clearTimeout(hideTimer);

    var term = target.getAttribute('data-term') || target.textContent.trim();
    var entry = DeckGlossary.getTerm(term);
    if (!entry) return;

    var theme = getSlideTheme(target);
    tooltip.className = 'jargon-tooltip tooltip-' + theme;
    tooltip.querySelector('.tooltip-term').textContent = term;
    tooltip.querySelector('.tooltip-body').textContent = entry.def;

    var link = tooltip.querySelector('.tooltip-link');
    if (entry.url) {
      link.href = entry.url;
      link.style.display = '';
    } else {
      link.style.display = 'none';
    }

    var rect = target.getBoundingClientRect();
    var tooltipWidth = 280;

    var left = rect.left + rect.width / 2 - tooltipWidth / 2;
    left = Math.max(12, Math.min(left, window.innerWidth - tooltipWidth - 12));

    tooltip.style.left = left + 'px';
    tooltip.style.top = '0px';
    tooltip.classList.add('visible');

    var tooltipHeight = tooltip.offsetHeight;
    var spaceAbove = rect.top;
    var spaceBelow = window.innerHeight - rect.bottom;

    if (spaceBelow >= tooltipHeight + 8 || spaceBelow >= spaceAbove) {
      tooltip.style.top = (rect.bottom + 8) + 'px';
    } else {
      tooltip.style.top = (rect.top - tooltipHeight - 8) + 'px';
    }

    activeTarget = target;
  }

  function hide() {
    if (tooltip) tooltip.classList.remove('visible');
    activeTarget = null;
    clearTimeout(hoverTimer);
    clearTimeout(hideTimer);
    clearTimeout(longPressTimer);
  }

  function scheduleHide() {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(hide, 300);
  }

  document.addEventListener('mouseover', function(e) {
    var target = e.target.closest('.jargon');
    if (!target) return;
    clearTimeout(hoverTimer);
    clearTimeout(hideTimer);
    hoverTimer = setTimeout(function() { show(target); }, 200);
  });

  document.addEventListener('mouseout', function(e) {
    var target = e.target.closest('.jargon');
    if (!target) return;
    clearTimeout(hoverTimer);
    scheduleHide();
  });

  document.addEventListener('touchstart', function(e) {
    var target = e.target.closest('.jargon');
    if (!target) return;

    longPressTimer = setTimeout(function() {
      e.preventDefault();
      show(target);
      target._tooltipShown = true;
    }, 500);
  }, { passive: false });

  document.addEventListener('touchend', function(e) {
    clearTimeout(longPressTimer);
    var target = e.target.closest('.jargon');
    if (target && target._tooltipShown) {
      e.preventDefault();
      e.stopPropagation();
      target._tooltipShown = false;
    }
  });

  document.addEventListener('touchmove', function() {
    clearTimeout(longPressTimer);
  });

  document.addEventListener('click', function(e) {
    if (activeTarget && !e.target.closest('.jargon') && !e.target.closest('.jargon-tooltip')) {
      hide();
    }
  });
})();

/* ═══════════════════════════════════════════
   4. SLIDE ENGINE
   ═══════════════════════════════════════════ */
(function() {
  var slides, total, current;
  var slugMap = {};
  var indexMap = {};
  var menuOpen = false;
  var suppressHashUpdate = false;

  function init() {
    slides = document.querySelectorAll('.slide');
    total = slides.length;
    current = 0;

    for (var i = 0; i < slides.length; i++) {
      var slug = slides[i].getAttribute('data-slug');
      if (slug) {
        slugMap[slug] = i;
        indexMap[i] = slug;
      }
    }

    buildMenu();
    bindKeys();
    bindClick();
    bindTouch();
    bindPopstate();

    var startSlide = getSlideFromHash();
    showSlide(startSlide, true);

    if (indexMap[startSlide]) {
      history.replaceState({ slide: startSlide }, '', '#' + indexMap[startSlide]);
    }
  }

  function getSlideFromHash() {
    var hash = location.hash.replace('#', '');
    if (!hash) return 0;
    if (slugMap.hasOwnProperty(hash)) return slugMap[hash];
    var n = parseInt(hash);
    if (!isNaN(n) && n >= 0 && n < total) return n;
    return 0;
  }

  function updateHash(index) {
    if (suppressHashUpdate) return;
    var slug = indexMap[index];
    if (slug && slug !== 'title') {
      history.pushState({ slide: index }, '', '#' + slug);
    } else {
      history.pushState({ slide: index }, '', location.pathname);
    }
  }

  var transitionClasses = ['fade-out', 'fade-in', 'slide-out-left', 'slide-in-right', 'slide-out-right', 'slide-in-left'];

  function clearTransitions(el) {
    for (var i = 0; i < transitionClasses.length; i++) {
      el.classList.remove(transitionClasses[i]);
    }
  }

  function showSlide(n, instant) {
    if (n === current && !instant) return;
    n = Math.max(0, Math.min(n, total - 1));
    if (n === current && !instant) return;

    var prevIndex = current;
    var prev = slides[current];
    var next = slides[n];
    var direction = n > current ? 'forward' : 'backward';

    if (typeof DeckAnimations !== 'undefined') {
      DeckAnimations.deactivate(prev);
    }

    clearTransitions(prev);
    clearTransitions(next);

    if (instant) {
      prev.classList.remove('active');
      next.classList.add('active');
    } else {
      prev.classList.remove('active');
      if (direction === 'forward') {
        prev.classList.add('slide-out-left');
        next.classList.add('slide-in-right');
      } else {
        prev.classList.add('slide-out-right');
        next.classList.add('slide-in-left');
      }
      setTimeout(function() { clearTransitions(prev); }, 300);
      setTimeout(function() { clearTransitions(next); next.classList.add('active'); }, 450);
    }

    current = n;

    if (!instant) {
      updateHash(n);
      if (window.DeckEngine && window.DeckEngine.onSlideChange) {
        window.DeckEngine.onSlideChange(prevIndex, n);
      }
    }

    var progress = document.getElementById('progress');
    if (progress) progress.style.width = ((current / (total - 1)) * 100) + '%';

    var counter = document.getElementById('counter');
    if (counter) {
      counter.textContent = (current + 1) + ' / ' + total;
      var isLight = next.classList.contains('bg-white') || next.classList.contains('bg-gray');
      counter.style.color = isLight ? 'rgba(46,44,40,0.25)' : 'rgba(226,224,218,0.3)';
    }

    var delay = instant ? 0 : 450;
    setTimeout(function() {
      if (typeof DeckAnimations !== 'undefined') {
        DeckAnimations.activate(next);
      }
    }, delay);

    updateMenuActive();
    next.scrollTop = 0;
  }

  function bindPopstate() {
    window.addEventListener('popstate', function(e) {
      suppressHashUpdate = true;
      if (e.state && typeof e.state.slide === 'number') {
        showSlide(e.state.slide);
      } else {
        showSlide(getSlideFromHash());
      }
      suppressHashUpdate = false;
    });
  }

  function bindKeys() {
    document.addEventListener('keydown', function(e) {
      if (menuOpen && e.key === 'Escape') { toggleMenu(); return; }
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault(); showSlide(current + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'Backspace') {
        e.preventDefault(); showSlide(current - 1);
      } else if (e.key === 'Home') {
        e.preventDefault(); showSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault(); showSlide(total - 1);
      }
    });
  }

  function bindClick() {
    document.addEventListener('click', function(e) {
      if (e.target.closest('.slide-menu') || e.target.closest('.menu-btn')) return;
      if (e.target.closest('a')) return;
      if (e.target.closest('.jargon')) return;
      if (e.target.closest('.copy-btn') || e.target.closest('.presenter-bar')) return;
      if (e.target.closest('[data-detail]')) return;
      if (e.target.closest('.detail-drawer') || e.target.closest('.detail-backdrop')) return;
      if (e.target.closest('.notes-drawer') || e.target.closest('.notes-backdrop') || e.target.closest('.notes-btn')) return;
      if (e.target.closest('.roi-input-row')) return;

      if (menuOpen) { toggleMenu(); return; }

      if (e.clientX > window.innerWidth * 0.3) {
        showSlide(current + 1);
      } else {
        showSlide(current - 1);
      }
    });
  }

  function bindTouch() {
    var touchStartX = 0, touchStartY = 0;
    document.addEventListener('touchstart', function(e) {
      if (e.target.closest('.slide-menu') || e.target.closest('.menu-btn')) return;
      if (e.target.closest('.detail-drawer') || e.target.closest('.detail-backdrop')) return;
      if (e.target.closest('.notes-drawer') || e.target.closest('.notes-backdrop') || e.target.closest('.notes-btn')) return;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    });
    document.addEventListener('touchend', function(e) {
      if (e.target.closest('.slide-menu') || e.target.closest('.menu-btn')) return;
      if (e.target.closest('.detail-drawer') || e.target.closest('.detail-backdrop')) return;
      if (e.target.closest('.notes-drawer') || e.target.closest('.notes-backdrop') || e.target.closest('.notes-btn')) return;
      if (e.target.closest('.jargon') && e.target.closest('.jargon')._tooltipShown) return;
      var diffX = touchStartX - e.changedTouches[0].clientX;
      var diffY = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
        if (menuOpen) { toggleMenu(); return; }
        diffX > 0 ? showSlide(current + 1) : showSlide(current - 1);
      }
    });
  }

  function buildMenu() {
    var btn = document.createElement('button');
    btn.className = 'menu-btn';
    btn.setAttribute('aria-label', 'Menu');
    btn.innerHTML = '<span></span><span></span><span></span>';
    document.body.appendChild(btn);
    btn.addEventListener('click', function(e) { e.stopPropagation(); toggleMenu(); });

    var menu = document.createElement('nav');
    menu.className = 'slide-menu';

    var list = document.createElement('ol');
    list.className = 'menu-slides';
    for (var i = 0; i < slides.length; i++) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      var slug = slides[i].getAttribute('data-slug');
      a.href = slug && slug !== 'title' ? '#' + slug : '#';
      a.textContent = slides[i].getAttribute('data-title') || ('Slide ' + (i + 1));
      a.setAttribute('data-slide', i);
      a.addEventListener('click', function(e) {
        e.preventDefault(); e.stopPropagation();
        showSlide(parseInt(this.getAttribute('data-slide')));
        toggleMenu();
      });
      li.appendChild(a);
      list.appendChild(li);
    }
    menu.appendChild(list);

    var siblings = document.querySelectorAll('meta[name="deck-sibling"]');
    if (siblings.length > 0) {
      var h = document.createElement('p');
      h.className = 'menu-section-label';
      h.textContent = 'More Decks';
      menu.appendChild(h);
      var ul = document.createElement('ul');
      ul.className = 'menu-siblings';
      for (var j = 0; j < siblings.length; j++) {
        var sib = siblings[j];
        var sibLi = document.createElement('li');
        var sibA = document.createElement('a');
        sibA.href = sib.getAttribute('data-href');
        sibA.textContent = sib.getAttribute('data-label');
        sibLi.appendChild(sibA);
        ul.appendChild(sibLi);
      }
      menu.appendChild(ul);
    }

    var homeLink = document.createElement('a');
    homeLink.href = getBasePath();
    homeLink.className = 'menu-home';
    homeLink.innerHTML = '&larr; All Decks';
    menu.appendChild(homeLink);

    var backdrop = document.createElement('div');
    backdrop.className = 'menu-backdrop';
    backdrop.addEventListener('click', function(e) { e.stopPropagation(); toggleMenu(); });

    document.body.appendChild(backdrop);
    document.body.appendChild(menu);
  }

  function getBasePath() {
    var base = document.querySelector('meta[name="deck-base"]');
    return base ? base.getAttribute('content') : '../../';
  }

  function toggleMenu() {
    menuOpen = !menuOpen;
    var menu = document.querySelector('.slide-menu');
    var btn = document.querySelector('.menu-btn');
    var backdrop = document.querySelector('.menu-backdrop');
    if (menu) menu.classList.toggle('open', menuOpen);
    if (btn) btn.classList.toggle('open', menuOpen);
    if (backdrop) backdrop.classList.toggle('open', menuOpen);
  }

  function updateMenuActive() {
    var items = document.querySelectorAll('.menu-slides a');
    for (var i = 0; i < items.length; i++) {
      items[i].classList.toggle('active', i === current);
    }
  }

  window.DeckEngine = {
    showSlide: showSlide,
    getCurrentSlide: function() { return current; },
    getTotal: function() { return total; },
    getSlug: function(index) { return indexMap[index] || null; },
    getTitle: function(index) { return slides[index] ? (slides[index].getAttribute('data-title') || null) : null; },
    onSlideChange: null
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/* ═══════════════════════════════════════════
   5. FEATURES (copy-link, hint, presenter, analytics)
   ═══════════════════════════════════════════ */
(function() {
  var isEmbed = new URLSearchParams(location.search).has('embed');

  if (isEmbed) {
    document.body.classList.add('embed');
    return;
  }

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

  function showHint() {
    if (localStorage.getItem('deck-hint-seen')) return;

    var hint = document.createElement('div');
    hint.className = 'deck-hint';
    hint.textContent = ('ontouchstart' in window) ? 'Swipe to navigate' : 'Use arrow keys to navigate';
    document.body.appendChild(hint);

    setTimeout(function() { hint.classList.add('visible'); }, 800);

    function dismiss() {
      hint.classList.remove('visible');
      localStorage.setItem('deck-hint-seen', '1');
      setTimeout(function() { if (hint.parentNode) hint.parentNode.removeChild(hint); }, 300);
      document.removeEventListener('keydown', dismiss);
      document.removeEventListener('click', dismiss);
      document.removeEventListener('touchstart', dismiss);
      showDetailHint();
    }

    setTimeout(dismiss, 4000);

    document.addEventListener('keydown', dismiss);
    document.addEventListener('click', dismiss);
    document.addEventListener('touchstart', dismiss);
  }

  function showDetailHint() {
    if (localStorage.getItem('deck-detail-hint-seen')) return;
    if (!('ontouchstart' in window)) return;
    if (!document.querySelector('[data-detail]')) return;

    var hint = document.createElement('div');
    hint.className = 'deck-hint';
    hint.textContent = 'Tap highlighted items for more detail';
    document.body.appendChild(hint);

    setTimeout(function() { hint.classList.add('visible'); }, 600);

    function dismiss() {
      hint.classList.remove('visible');
      localStorage.setItem('deck-detail-hint-seen', '1');
      setTimeout(function() { if (hint.parentNode) hint.parentNode.removeChild(hint); }, 300);
      document.removeEventListener('touchstart', dismiss);
    }

    setTimeout(dismiss, 4000);
    document.addEventListener('touchstart', dismiss);
  }

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
      if (e.metaKey || e.ctrlKey) return;
      togglePresenter();
    }
  });

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

    // Scale labels: elements with data-roi-scale update their number dynamically
    var scaleLabels = roiSlide.querySelectorAll('[data-roi-scale]');
    var scaleLabelData = [];
    for (var j = 0; j < scaleLabels.length; j++) {
      scaleLabelData.push({
        el: scaleLabels[j],
        factor: parseFloat(scaleLabels[j].getAttribute('data-roi-scale')),
        template: scaleLabels[j].innerHTML
      });
    }

    function update() {
      var val = parseFloat(input.value) || config.base;
      var ratio = val / config.base;
      for (var i = 0; i < originals.length; i++) {
        var newVal = originals[i].base * ratio;
        originals[i].el.textContent = formatRM(newVal);
      }
      // Update scale labels (e.g., "5-property REIT" → "15-property REIT")
      for (var k = 0; k < scaleLabelData.length; k++) {
        var s = scaleLabelData[k];
        var scaledCount = Math.round(val * s.factor);
        s.el.innerHTML = s.template.replace(/\d+/, scaledCount);
      }
    }

    input.addEventListener('input', update);
  }

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

/* ═══════════════════════════════════════════
   6. DETAIL DRAWER
   ═══════════════════════════════════════════ */
(function() {
  var backdrop, drawer, closeBtn, contentEl;
  var drawerOpen = false;
  var touchStartX = 0;

  function build() {
    backdrop = document.createElement('div');
    backdrop.className = 'detail-backdrop';
    backdrop.addEventListener('click', function(e) { e.stopPropagation(); close(); });

    drawer = document.createElement('div');
    drawer.className = 'detail-drawer drawer-dark';
    drawer.innerHTML = '<button class="drawer-close" aria-label="Close">&times;</button><div class="drawer-content"></div>';
    closeBtn = drawer.querySelector('.drawer-close');
    contentEl = drawer.querySelector('.drawer-content');
    closeBtn.addEventListener('click', function(e) { e.stopPropagation(); close(); });

    // Swipe right to close
    drawer.addEventListener('touchstart', function(e) {
      touchStartX = e.touches[0].clientX;
    });
    drawer.addEventListener('touchend', function(e) {
      var diff = e.changedTouches[0].clientX - touchStartX;
      if (diff > 60) close();
    });

    document.body.appendChild(backdrop);
    document.body.appendChild(drawer);
  }

  function getTheme(el) {
    var slide = el.closest('.slide');
    if (!slide) return 'dark';
    if (slide.classList.contains('bg-white') || slide.classList.contains('bg-gray')) return 'light';
    return 'dark';
  }

  function open(target) {
    if (!drawer) build();

    var theme = getTheme(target);
    drawer.className = 'detail-drawer drawer-' + theme + ' open';
    backdrop.classList.add('open');
    drawerOpen = true;

    // Get content: <template data-detail-content> child, or data-detail attribute string
    var tmpl = target.querySelector('template[data-detail-content]');
    if (tmpl) {
      contentEl.innerHTML = '';
      contentEl.appendChild(tmpl.content.cloneNode(true));
    } else {
      var text = target.getAttribute('data-detail');
      if (text && text !== '' && text !== 'true') {
        contentEl.innerHTML = '<p>' + text + '</p>';
      } else {
        contentEl.innerHTML = '<p style="opacity:0.4;font-style:italic">No detail content provided.</p>';
      }
    }
  }

  function close() {
    if (!drawer) return;
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    drawerOpen = false;
  }

  function isOpen() { return drawerOpen; }

  // Click handler for [data-detail] elements
  document.addEventListener('click', function(e) {
    var target = e.target.closest('[data-detail]');
    if (!target) return;
    e.stopPropagation();
    open(target);
  });

  // Escape to close
  document.addEventListener('keydown', function(e) {
    if (drawerOpen && e.key === 'Escape') {
      e.preventDefault();
      close();
    }
    // Block slide navigation while drawer is open
    if (drawerOpen && (e.key === 'ArrowRight' || e.key === 'ArrowLeft' ||
        e.key === 'ArrowUp' || e.key === 'ArrowDown' ||
        e.key === ' ' || e.key === 'Enter')) {
      e.stopPropagation();
    }
  }, true);

  // Close on slide change
  var prevOnChange = window.DeckEngine ? window.DeckEngine.onSlideChange : null;
  function hookSlideChange() {
    if (!window.DeckEngine) return;
    var existing = window.DeckEngine.onSlideChange;
    window.DeckEngine.onSlideChange = function(from, to) {
      close();
      if (existing) existing(from, to);
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hookSlideChange);
  } else {
    hookSlideChange();
  }

  window.DeckDetailDrawer = { open: open, close: close, isOpen: isOpen };
})();

/* ═══════════════════════════════════════════
   7. SALES NOTES DRAWER
   ═══════════════════════════════════════════ */
(function() {
  var params = new URLSearchParams(location.search);
  var notesEnabled = params.has('notes');
  if (!notesEnabled) return;

  var backdrop, drawer, closeBtn, contentEl, notesBtn;
  var drawerOpen = false;

  function build() {
    // Notes button
    notesBtn = document.createElement('button');
    notesBtn.className = 'notes-btn visible';
    notesBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M2 3h12M2 7h8M2 11h10"/></svg> Notes';
    notesBtn.addEventListener('click', function(e) { e.stopPropagation(); toggle(); });
    document.body.appendChild(notesBtn);

    // Backdrop
    backdrop = document.createElement('div');
    backdrop.className = 'notes-backdrop';
    backdrop.addEventListener('click', function(e) { e.stopPropagation(); close(); });

    // Drawer
    drawer = document.createElement('div');
    drawer.className = 'notes-drawer';
    drawer.innerHTML = '<button class="drawer-close" aria-label="Close">&times;</button>' +
      '<p class="notes-label">Sales Notes</p>' +
      '<div class="notes-content"></div>';
    closeBtn = drawer.querySelector('.drawer-close');
    contentEl = drawer.querySelector('.notes-content');
    closeBtn.addEventListener('click', function(e) { e.stopPropagation(); close(); });

    document.body.appendChild(backdrop);
    document.body.appendChild(drawer);
  }

  function getNotesForSlide(index) {
    var slides = document.querySelectorAll('.slide');
    if (!slides[index]) return null;
    var tmpl = slides[index].querySelector('template[data-sales-notes]');
    return tmpl || null;
  }

  function updateContent() {
    if (!contentEl) return;
    var engine = window.DeckEngine;
    var index = engine ? engine.getCurrentSlide() : 0;
    var tmpl = getNotesForSlide(index);
    if (tmpl) {
      contentEl.innerHTML = '';
      contentEl.appendChild(tmpl.content.cloneNode(true));
    } else {
      contentEl.innerHTML = '<p class="notes-empty">No notes for this slide.</p>';
    }
  }

  function open() {
    if (!drawer) build();
    updateContent();
    drawer.classList.add('open');
    backdrop.classList.add('open');
    drawerOpen = true;
  }

  function close() {
    if (!drawer) return;
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    drawerOpen = false;
  }

  function toggle() {
    if (drawerOpen) close(); else open();
  }

  // Keyboard shortcut: 'n' to toggle
  document.addEventListener('keydown', function(e) {
    if (e.key === 'n' || e.key === 'N') {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.metaKey || e.ctrlKey) return;
      e.preventDefault();
      toggle();
    }
    // Escape closes notes
    if (drawerOpen && e.key === 'Escape') {
      e.preventDefault();
      close();
    }
  });

  // Update notes on slide change
  function hookSlideChange() {
    if (!window.DeckEngine) return;
    var existing = window.DeckEngine.onSlideChange;
    window.DeckEngine.onSlideChange = function(from, to) {
      if (existing) existing(from, to);
      if (drawerOpen) updateContent();
    };
  }

  function init() {
    build();
    hookSlideChange();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/* ═══════════════════════════════════════════
   8. INIT GLUE (progress bar, counter, DeckInit API)
   ═══════════════════════════════════════════ */
(function () {
  var progress = document.createElement('div');
  progress.className = 'progress';
  progress.id = 'progress';

  var counter = document.createElement('div');
  counter.className = 'slide-counter';
  counter.id = 'counter';

  document.body.insertBefore(counter, document.body.firstChild);
  document.body.insertBefore(progress, document.body.firstChild);

  function applyConfig(config) {
    if (!config) return;
    if (config.glossary) {
      DeckGlossary.addTerms(config.glossary);
    }
    DeckGlossary.bind();
  }

  window.DeckInit = function (config) {
    applyConfig(config);
  };
})();
