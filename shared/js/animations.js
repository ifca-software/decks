/**
 * Entrance animation triggers.
 * When a slide becomes active, elements with [data-animate] get .animate-in + .delay-N.
 * When a slide becomes inactive, classes are removed so animations replay on revisit.
 */
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
