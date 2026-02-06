/**
 * Slide engine — navigation, progress bar, counter, slide-out menu.
 * Expects: .slide elements, #progress, #counter in DOM.
 * Integrates with DeckAnimations (animations.js) and DeckGlossary (glossary.js).
 */
(function() {
  var slides, total, current;
  var menuOpen = false;

  function init() {
    slides = document.querySelectorAll('.slide');
    total = slides.length;
    current = 0;

    buildMenu();
    showSlide(0, true);
    bindKeys();
    bindClick();
    bindTouch();
  }

  function showSlide(n, instant) {
    if (n === current && !instant) return;
    n = Math.max(0, Math.min(n, total - 1));
    if (n === current && !instant) return;

    var prev = slides[current];
    var next = slides[n];

    // Deactivate animations on previous slide
    if (typeof DeckAnimations !== 'undefined') {
      DeckAnimations.deactivate(prev);
    }

    if (instant) {
      // No crossfade on first load
      prev.classList.remove('active');
      next.classList.add('active');
    } else {
      // Crossfade: fade out old, fade in new
      prev.classList.remove('active');
      prev.classList.add('fade-out');
      next.classList.add('fade-in');

      setTimeout(function() {
        prev.classList.remove('fade-out');
      }, 200);

      setTimeout(function() {
        next.classList.remove('fade-in');
        next.classList.add('active');
      }, 450);
    }

    current = n;

    // Progress bar
    var progress = document.getElementById('progress');
    if (progress) progress.style.width = ((current / (total - 1)) * 100) + '%';

    // Counter
    var counter = document.getElementById('counter');
    if (counter) {
      counter.textContent = (current + 1) + ' / ' + total;
      var isLight = next.classList.contains('bg-white') || next.classList.contains('bg-gray');
      counter.style.color = isLight ? 'rgba(46,44,40,0.25)' : 'rgba(226,224,218,0.3)';
    }

    // Trigger entrance animations
    var delay = instant ? 0 : 450;
    setTimeout(function() {
      if (typeof DeckAnimations !== 'undefined') {
        DeckAnimations.activate(next);
      }
    }, delay);

    // Update active menu item
    updateMenuActive();

    // Scroll to top if slide has overflow
    next.scrollTop = 0;
  }

  // === KEYBOARD ===
  function bindKeys() {
    document.addEventListener('keydown', function(e) {
      if (menuOpen && e.key === 'Escape') {
        toggleMenu();
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        showSlide(current + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'Backspace') {
        e.preventDefault();
        showSlide(current - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        showSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        showSlide(total - 1);
      }
    });
  }

  // === CLICK (70/30 split) ===
  function bindClick() {
    document.addEventListener('click', function(e) {
      // Don't navigate if clicking menu or its trigger
      if (e.target.closest('.slide-menu') || e.target.closest('.menu-btn')) return;
      // Don't navigate if clicking a link
      if (e.target.closest('a')) return;
      // Don't navigate if clicking a jargon tooltip target
      if (e.target.closest('.jargon')) return;

      if (menuOpen) {
        toggleMenu();
        return;
      }

      if (e.clientX > window.innerWidth * 0.3) {
        showSlide(current + 1);
      } else {
        showSlide(current - 1);
      }
    });
  }

  // === TOUCH SWIPE ===
  function bindTouch() {
    var touchStartX = 0;
    var touchStartY = 0;

    document.addEventListener('touchstart', function(e) {
      if (e.target.closest('.slide-menu') || e.target.closest('.menu-btn')) return;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    });

    document.addEventListener('touchend', function(e) {
      if (e.target.closest('.slide-menu') || e.target.closest('.menu-btn')) return;
      // If a jargon tooltip was just shown, skip navigation
      if (e.target.closest('.jargon') && e.target.closest('.jargon')._tooltipShown) return;

      var diffX = touchStartX - e.changedTouches[0].clientX;
      var diffY = touchStartY - e.changedTouches[0].clientY;

      // Only trigger on horizontal swipes (not vertical scrolling)
      if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
        if (menuOpen) {
          toggleMenu();
          return;
        }
        diffX > 0 ? showSlide(current + 1) : showSlide(current - 1);
      }
    });
  }

  // === SLIDE-OUT MENU ===
  function buildMenu() {
    // Hamburger button
    var btn = document.createElement('button');
    btn.className = 'menu-btn';
    btn.setAttribute('aria-label', 'Menu');
    btn.innerHTML = '<span></span><span></span><span></span>';
    document.body.appendChild(btn);
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMenu();
    });

    // Menu panel
    var menu = document.createElement('nav');
    menu.className = 'slide-menu';

    // Landing page link
    var homeLink = document.createElement('a');
    homeLink.href = getBasePath();
    homeLink.className = 'menu-home';
    homeLink.textContent = 'All Decks';
    menu.appendChild(homeLink);

    // Slide list
    var list = document.createElement('ol');
    list.className = 'menu-slides';
    for (var i = 0; i < slides.length; i++) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#';
      a.textContent = slides[i].getAttribute('data-title') || ('Slide ' + (i + 1));
      a.setAttribute('data-slide', i);
      a.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var idx = parseInt(this.getAttribute('data-slide'));
        showSlide(idx);
        toggleMenu();
      });
      li.appendChild(a);
      list.appendChild(li);
    }
    menu.appendChild(list);

    // Sibling decks (read from meta tags)
    var siblings = document.querySelectorAll('meta[name="deck-sibling"]');
    if (siblings.length > 0) {
      var siblingHeader = document.createElement('p');
      siblingHeader.className = 'menu-section-label';
      siblingHeader.textContent = 'More Decks';
      menu.appendChild(siblingHeader);

      var sibList = document.createElement('ul');
      sibList.className = 'menu-siblings';
      for (var j = 0; j < siblings.length; j++) {
        var sib = siblings[j];
        var sibLi = document.createElement('li');
        var sibA = document.createElement('a');
        sibA.href = sib.getAttribute('data-href');
        sibA.textContent = sib.getAttribute('data-label');
        sibLi.appendChild(sibA);
        sibList.appendChild(sibLi);
      }
      menu.appendChild(sibList);
    }

    // Backdrop
    var backdrop = document.createElement('div');
    backdrop.className = 'menu-backdrop';
    backdrop.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMenu();
    });

    document.body.appendChild(backdrop);
    document.body.appendChild(menu);
  }

  function getBasePath() {
    // Decks are always at product/segment/index.html — 2 levels deep
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

  // Expose for external use
  window.DeckEngine = {
    showSlide: showSlide,
    getCurrentSlide: function() { return current; },
    getTotal: function() { return total; }
  };

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
