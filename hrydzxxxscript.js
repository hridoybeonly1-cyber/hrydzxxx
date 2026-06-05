(function () {
  "use strict";

  if (typeof window.RAMA_BOOKMARK_LOAD === "undefined") {
    console.log("%cAccess Denied - Bookmark Required", "color:#ff0000;font-size:15px;font-weight:bold");
    return;
  }

  const _0x5e548e = {
    k: "https://raw.githubusercontent.com/hridoybeonly1-cyber/hrydzxxx/main/button.txt",
    r: "https://raw.githubusercontent.com/hridoybeonly1-cyber/hrydzxxx/main/hrydzx.txt",
    t: "https://raw.githubusercontent.com/hridoybeonly1-cyber/hrydzxxx/main/button.txt"
  };

  (async function () {

    // REMOVE EXISTING AUTH BOX IF PRESENT
    const existing = document.getElementById("rama-auth-box");
    if (existing) existing.remove();

    // ── INJECT CDN STYLESHEETS ──────────────────────────────────────────────
    const cdnLinks = [
      "https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap",
      "https://cdn-bt4team.pages.dev/assets/vendor/fonts/fontawesome.css",
      "https://cdn-bt4team.pages.dev/assets/vendor/fonts/tabler-icons.css",
      "https://cdn-bt4team.pages.dev/assets/vendor/css/rtl/core.css",
      "https://cdn-bt4team.pages.dev/assets/vendor/css/rtl/theme-default.css",
      "https://cdn-bt4team.pages.dev/assets/css/demo.css",
      "https://cdn-bt4team.pages.dev/assets/vendor/libs/node-waves/node-waves.css",
      "https://cdn-bt4team.pages.dev/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
    ];
    cdnLinks.forEach(href => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const l = document.createElement("link");
        l.rel = "stylesheet"; l.href = href;
        document.head.appendChild(l);
      }
    });

    // ── OVERLAY BACKDROP ───────────────────────────────────────────────────
    const overlay = document.createElement("div");
    overlay.id = "rama-overlay";
    overlay.style.cssText = `
      position:fixed;top:0;left:0;width:100%;height:100%;
      background:rgba(0,0,0,0.75);z-index:2147483646;
      display:flex;align-items:center;justify-content:center;
      font-family:'Public Sans',sans-serif;
    `;

    // ── AUTH BOX (BT4 card style) ──────────────────────────────────────────
    const _0xd9eed1 = document.createElement("div");
    _0xd9eed1.id = "rama-auth-box";
    _0xd9eed1.style.cssText = `
      background:#25293c;color:#fff;border-radius:12px;
      box-shadow:0 10px 40px rgba(0,0,0,0.8);
      width:320px;box-sizing:border-box;overflow:hidden;
      border:1px solid rgba(255,255,255,0.08);
      z-index:2147483647;
    `;
    _0xd9eed1.innerHTML = `
      <!-- Card Header (navbar style) -->
      <div style="background:#2f3349;padding:16px 20px;display:flex;align-items:center;gap:10px;border-bottom:1px solid rgba(255,255,255,0.08);">
        <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#00cfe8;"></span>
        <span style="font-weight:700;font-size:15px;letter-spacing:.5px;color:#e4e6ef;">HRYDZX AINCRAD BYPASS</span>
      </div>

      <!-- Card Body -->
      <div style="padding:24px 20px;">
        <p style="margin:0 0 6px 0;font-size:11px;color:#a1acb8;text-transform:uppercase;letter-spacing:.8px;">License Key</p>
        <input type="text" id="rama-key-input" placeholder="Enter key here"
          style="width:100%;padding:10px 12px;margin-bottom:16px;border:1px solid rgba(255,255,255,0.1);
                 border-radius:6px;background:#1e2236;color:#e4e6ef;
                 box-sizing:border-box;font-size:13px;outline:none;font-family:inherit;"
          onfocus="this.style.borderColor='#00cfe8'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'"
        >

        <button id="rama-login-btn"
          style="width:100%;background:#00cfe8;color:#fff;border:none;padding:11px;
                 border-radius:6px;font-weight:700;cursor:pointer;font-size:13px;
                 margin-bottom:10px;font-family:inherit;letter-spacing:.5px;
                 transition:opacity .2s;">
          VERIFY KEY
        </button>

        <button id="rama-telegram-btn"
          style="width:100%;background:#229ED9;color:#fff;border:none;padding:11px;
                 border-radius:6px;font-weight:700;cursor:pointer;font-size:13px;
                 font-family:inherit;letter-spacing:.5px;">
          TELEGRAM HRYDZXXX
        </button>

        <div id="rama-status"
          style="margin-top:14px;font-size:12px;font-weight:600;color:#a1acb8;text-align:center;min-height:18px;">
          READY
        </div>
      </div>
    `;

    overlay.appendChild(_0xd9eed1);
    document.body.appendChild(overlay);

    // Responsive width
    if (window.innerWidth < 400) {
      _0xd9eed1.style.width = "92%";
    }

    const _0x115557 = document.getElementById("rama-login-btn");
    const _0xa73a22 = document.getElementById("rama-telegram-btn");
    const _0x4e244b = document.getElementById("rama-key-input");
    const _0x55c81e = document.getElementById("rama-status");

    // ── TELEGRAM BUTTON ────────────────────────────────────────────────────
    _0xa73a22.addEventListener("click", async () => {
      try {
        const res = await fetch(_0x5e548e.t + "?t=" + Date.now());
        const url = (await res.text()).trim();
        if (url.startsWith("http")) window.open(url, "_blank");
      } catch (_) {}
    });

    // ── LOGIN BUTTON ───────────────────────────────────────────────────────
    _0x115557.addEventListener("click", async () => {
      const _0x485046 = _0x4e244b.value.trim();

      if (!_0x485046) {
        _0x55c81e.innerHTML = "<span style='color:#ff4444;'>PLEASE INPUT KEY!</span>";
        return;
      }

      _0x55c81e.innerHTML = "<span style='color:#00cfe8;'>CONNECTING SERVER...</span>";
      _0x115557.disabled = _0xa73a22.disabled = true;

      try {
        const _0x4a3e2c = await fetch(_0x5e548e.k + "?t=" + Date.now());
        const _0x85f258 = await _0x4a3e2c.text();
        const _0x1b9391 = _0x85f258.split("\n").map(s => s.trim()).filter(s => s !== "");

        if (_0x1b9391.includes(_0x485046)) {
          _0x55c81e.innerHTML = "<span style='color:#28c76f;'>KEY VALIDATED! ✓</span>";

          setTimeout(async () => {
            overlay.remove();

            // ── LOADING OVERLAY (BT4 style) ──────────────────────────────
            const _0x4761a5 = document.createElement("div");
            _0x4761a5.style.cssText = `
              position:fixed;top:0;left:0;width:100%;height:100%;
              background:rgba(30,34,54,0.92);z-index:2147483647;
              display:flex;align-items:center;justify-content:center;
              font-family:'Public Sans',sans-serif;
            `;
            _0x4761a5.innerHTML = `
              <div style="text-align:center;background:#25293c;padding:32px 28px;border-radius:12px;
                          border:1px solid rgba(255,255,255,0.08);box-shadow:0 10px 40px rgba(0,0,0,0.6);width:260px;">
                <div style="width:50px;height:50px;border:5px solid #2f3349;border-top:5px solid #00cfe8;
                             border-radius:50%;margin:0 auto 20px auto;animation:rama-spin 1s linear infinite;"></div>
                <p id="rama-check-text" style="color:#00cfe8;font-size:15px;font-weight:700;margin:0;letter-spacing:.5px;">
                  CHECKING UPDATE...
                </p>
              </div>
              <style>
                @keyframes rama-spin { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
              </style>
            `;
            document.body.appendChild(_0x4761a5);

            let _0x566f72 = false;
            try {
              const res = await fetch("https://rm.rama-modz.workers.dev/");
              const txt = await res.text();
              if (txt.includes("GitHub Updated")) _0x566f72 = true;
            } catch (_) {}

            await new Promise(r => setTimeout(r, 5000));

            const checkText = document.getElementById("rama-check-text");
            if (_0x566f72) {
              checkText.innerHTML = "<span style='color:#28c76f;'>Link Updated Successfully! ✓</span>";
            } else {
              checkText.innerHTML = "<span style='color:#ff4444;'>No Update Available!</span>";
            }

            await new Promise(r => setTimeout(r, 1500));
            _0x4761a5.remove();

            // ── FETCH REDIRECT URL ────────────────────────────────────────
            const rdRes = await fetch(_0x5e548e.r + "?t=" + Date.now());
            const _0x4165b7 = (await rdRes.text()).trim();

            if (_0x4165b7.startsWith("http")) {

              // ── COUNTDOWN OVERLAY (BT4 style) ────────────────────────
              const _0x384096 = document.createElement("div");
              _0x384096.style.cssText = `
                position:fixed;top:0;left:0;width:100%;height:100%;
                background:rgba(30,34,54,0.95);z-index:2147483647;
                display:flex;align-items:center;justify-content:center;
                font-family:'Public Sans',sans-serif;
              `;

              const _0x4779a6 = Math.floor(Math.random() * 4) + 22;
              _0x384096.innerHTML = `
                <div style="text-align:center;">
                  <div style="position:relative;width:220px;height:220px;margin:0 auto;">
                    <svg width="220" height="220" style="transform:rotate(-90deg);">
                      <circle cx="110" cy="110" r="98" fill="none" stroke="#2f3349" stroke-width="18"></circle>
                      <circle id="progress" cx="110" cy="110" r="98" fill="none"
                        stroke="#00cfe8" stroke-width="18"
                        stroke-dasharray="615" stroke-dashoffset="615"
                        stroke-linecap="round"></circle>
                    </svg>
                    <div id="countdown-text"
                      style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
                             font-size:46px;font-weight:700;color:#00cfe8;">
                      ${_0x4779a6}
                    </div>
                  </div>
                  <p style="margin-top:20px;color:#e4e6ef;font-size:16px;font-weight:700;letter-spacing:1px;">
                    REDIRECTING...
                  </p>
                  <p style="margin-top:4px;color:#a1acb8;font-size:11px;">Powered by BT4 Theme</p>
                </div>
              `;
              document.body.appendChild(_0x384096);

              let _0x48150c = _0x4779a6;
              const _0x22958b = _0x384096.querySelector("#progress");
              const _0x17b3dc = _0x384096.querySelector("#countdown-text");
              const _0x3094fb = 615;

              const _0x16f2c2 = setInterval(() => {
                _0x48150c--;
                _0x17b3dc.textContent = _0x48150c;
                _0x22958b.style.strokeDashoffset = _0x3094fb * (_0x48150c / _0x4779a6);
                if (_0x48150c <= 0) {
                  clearInterval(_0x16f2c2);
                  _0x384096.remove();
                  window.location.replace(_0x4165b7);
                }
              }, 1000);
            }
          }, 800);

        } else {
          _0x55c81e.innerHTML = "<span style='color:#ff4444;'>INVALID LICENSE KEY!</span>";
          _0x115557.disabled = _0xa73a22.disabled = false;
        }

      } catch (_) {
        _0x55c81e.innerHTML = "<span style='color:#ff4444;'>SERVER ERROR!</span>";
        _0x115557.disabled = _0xa73a22.disabled = false;
      }
    });

  })();
})();
