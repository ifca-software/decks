/* auth-gate.js — login gate for IFCA hiring decks
   Separate password from sales decks.
   Include as <script src="../js/auth-gate.js"></script> in <head>. */
(function () {
  var HASH = '087763209f9c75c99c6d147b6e7dbc3c31123aad935d2df1ea5344106dc687f3';
  var KEY = 'ifca_hiring_auth';

  // Fast path — already authenticated
  if (localStorage.getItem(KEY) === HASH) return;

  // Hide body immediately (before paint)
  var s = document.createElement('style');
  s.textContent = 'body{visibility:hidden!important}#auth-gate,#auth-gate *{visibility:visible!important}';
  document.head.appendChild(s);

  document.addEventListener('DOMContentLoaded', function () {
    // Build overlay
    var overlay = document.createElement('div');
    overlay.id = 'auth-gate';
    overlay.innerHTML =
      '<div style="max-width:360px;width:90%;background:rgba(26,32,56,0.95);border:1px solid rgba(226,224,218,0.12);border-radius:16px;padding:48px 36px;text-align:center;box-shadow:0 24px 80px rgba(0,0,0,0.5)">' +
        '<div style="display:inline-block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;padding:5px 12px;border-radius:100px;background:rgba(126,231,135,0.15);color:#7ee787;margin-bottom:20px">IFCA Hiring</div>' +
        '<h1 style="font-size:28px;font-weight:800;letter-spacing:-0.03em;margin:0 0 8px;color:#e8ecf0">Job Description</h1>' +
        '<p style="font-size:14px;color:rgba(232,236,240,0.45);margin:0 0 32px;line-height:1.5">Enter the password to continue.</p>' +
        '<form id="auth-form" autocomplete="off">' +
          '<input id="auth-pw" type="password" placeholder="Password" autocomplete="current-password" style="width:100%;box-sizing:border-box;padding:12px 16px;border-radius:8px;border:1px solid rgba(226,224,218,0.15);background:rgba(226,224,218,0.06);color:#e8ecf0;font-size:15px;font-family:inherit;outline:none;margin-bottom:12px;transition:border-color 0.2s">' +
          '<button type="submit" style="width:100%;padding:12px;border-radius:8px;border:none;background:#7ee787;color:#0d1117;font-size:15px;font-weight:600;font-family:inherit;cursor:pointer;transition:background 0.2s">Enter</button>' +
          '<p id="auth-err" style="font-size:13px;color:#f87171;margin:12px 0 0;display:none">Incorrect password.</p>' +
        '</form>' +
      '</div>';
    Object.assign(overlay.style, {
      position: 'fixed', inset: '0', zIndex: '999999',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#0f1220',
      fontFamily: "'Inter',-apple-system,BlinkMacSystemFont,sans-serif"
    });
    document.body.appendChild(overlay);

    var form = document.getElementById('auth-form');
    var pw = document.getElementById('auth-pw');
    var err = document.getElementById('auth-err');
    pw.focus();

    pw.addEventListener('focus', function () { pw.style.borderColor = '#7ee787'; });
    pw.addEventListener('blur', function () { pw.style.borderColor = 'rgba(226,224,218,0.15)'; });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var val = pw.value;
      if (!val) return;

      // SHA-256 via SubtleCrypto
      var buf = new TextEncoder().encode(val);
      crypto.subtle.digest('SHA-256', buf).then(function (ab) {
        var hex = Array.from(new Uint8Array(ab)).map(function (b) {
          return b.toString(16).padStart(2, '0');
        }).join('');

        if (hex === HASH) {
          localStorage.setItem(KEY, HASH);
          overlay.remove();
          s.remove();
        } else {
          err.style.display = 'block';
          pw.value = '';
          pw.focus();
        }
      });
    });
  });
})();
