/**
 * Tooltip system for jargon terms.
 * Desktop: hover after 200ms shows tooltip. Tooltip stays if user mouses over it.
 * Mobile: long-press (500ms) shows tooltip without triggering navigation.
 * External links: if a term has a URL, a "Learn more" link opens in a new tab.
 */
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

    // Keep tooltip visible when user hovers over it (to click the link)
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

    // Position near the target
    var rect = target.getBoundingClientRect();
    var tooltipWidth = 280;

    // Horizontal: center on target, clamp to viewport
    var left = rect.left + rect.width / 2 - tooltipWidth / 2;
    left = Math.max(12, Math.min(left, window.innerWidth - tooltipWidth - 12));

    // Show to measure height, then decide above/below
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

  // Desktop: hover
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

  // Mobile: long-press
  document.addEventListener('touchstart', function(e) {
    var target = e.target.closest('.jargon');
    if (!target) return;

    longPressTimer = setTimeout(function() {
      e.preventDefault();
      show(target);
      // Flag to prevent click-to-nav from firing
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

  // Tap anywhere to dismiss on mobile (but not on the tooltip link)
  document.addEventListener('click', function(e) {
    if (activeTarget && !e.target.closest('.jargon') && !e.target.closest('.jargon-tooltip')) {
      hide();
    }
  });
})();
