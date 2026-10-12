(function () {
  var root = document.documentElement;
  var media = window.matchMedia("(prefers-color-scheme: light)");

  /* ---------- theme ---------- */
  function isLight() {
    var t = root.getAttribute("data-theme");
    return t ? t === "light" : media.matches;
  }
  // Images that come in a dark and a light version (radar, project headers).
  function syncImages() {
    var light = isLight();
    document.querySelectorAll("img[data-dark][data-light]").forEach(function (img) {
      var want = light ? img.dataset.light : img.dataset.dark;
      if (img.getAttribute("src") !== want) img.setAttribute("src", want);
    });
  }
  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = isLight() ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      syncImages();
    });
  }
  if (media.addEventListener) media.addEventListener("change", syncImages);
  syncImages();

  /* ---------- mobile menu ---------- */
  var header = document.getElementById("site-header");
  var burger = document.getElementById("burger");
  function setMenu(open) {
    header.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  if (header && burger) {
    burger.addEventListener("click", function () { setMenu(!header.classList.contains("open")); });
    header.querySelectorAll(".mobile-menu a").forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && header.classList.contains("open")) setMenu(false);
    });
  }

  /* ---------- active section in the nav ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
  if ("IntersectionObserver" in window && links.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach(function (a) {
      var el = document.querySelector(a.getAttribute("href"));
      if (el) io.observe(el);
    });
  }

  /* ---------- copy email ---------- */
  var copy = document.getElementById("copy-email");
  var email = document.getElementById("email");
  if (copy && email) {
    copy.addEventListener("click", function () {
      var text = email.textContent.trim();
      function done() { copy.textContent = "Copied"; setTimeout(function () { copy.textContent = "Copy"; }, 1600); }
      function fallback() {
        var range = document.createRange();
        range.selectNodeContents(email);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallback);
      else fallback();
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
