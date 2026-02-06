/**
 * Deck loader — single entry point for all shared deck infrastructure.
 *
 * Injects the progress bar and slide counter into the DOM, then loads
 * the five shared scripts in order.  Each deck only needs:
 *
 *   <script src="../../shared/js/deck-init.js"></script>
 *   <script>
 *     DeckInit({ glossary: { ... } });
 *   </script>
 */
(function () {
  /* ── 1. Inject progress bar + counter before slides ── */
  var progress = document.createElement('div');
  progress.className = 'progress';
  progress.id = 'progress';

  var counter = document.createElement('div');
  counter.className = 'slide-counter';
  counter.id = 'counter';

  document.body.insertBefore(counter, document.body.firstChild);
  document.body.insertBefore(progress, document.body.firstChild);

  /* ── 2. Resolve base path from this script's own src ── */
  var scripts = document.getElementsByTagName('script');
  var me = scripts[scripts.length - 1];
  var base = me.src.replace(/js\/deck-init\.js$/, 'js/');

  /* ── 3. Sequential script loader ── */
  var queue = [
    base + 'glossary.js',
    base + 'animations.js',
    base + 'tooltips.js',
    base + 'slide-engine.js',
    base + 'features.js'
  ];

  function loadNext(i, cb) {
    if (i >= queue.length) { cb(); return; }
    var s = document.createElement('script');
    s.src = queue[i];
    s.onload = function () { loadNext(i + 1, cb); };
    document.body.appendChild(s);
  }

  /* ── 4. Public API ── */
  window._deckReady = false;
  window._deckPendingConfig = null;

  window.DeckInit = function (config) {
    if (window._deckReady) {
      applyConfig(config);
    } else {
      window._deckPendingConfig = config;
    }
  };

  function applyConfig(config) {
    if (!config) return;
    if (config.glossary) {
      DeckGlossary.addTerms(config.glossary);
    }
    DeckGlossary.bind();
  }

  /* ── 5. Kick off ── */
  loadNext(0, function () {
    window._deckReady = true;
    if (window._deckPendingConfig) {
      applyConfig(window._deckPendingConfig);
    }
  });
})();
