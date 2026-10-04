/* Stilus Familias · Guía interactiva — IES Comuneros de Castilla (Burgos) */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var GUIDES = window.GUIDES, SCREENS = window.SCREENS, ICO = window.ICO;
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var OFFICIAL = "https://www.educa.jcyl.es/familias/es/stilus-familias";

  var store = {
    get: function (k, d) { try { var v = localStorage.getItem("sf:" + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem("sf:" + k, JSON.stringify(v)); } catch (e) {} }
  };

  /* ---------- iconos ---------- */
  function hydrate(root) {
    $$("[data-ico]", root).forEach(function (el) {
      if (el.dataset.done) return;
      el.innerHTML = ICO(el.dataset.ico, +el.dataset.size || 20);
      el.dataset.done = "1";
    });
  }
  hydrate();

  /* ---------- toast ---------- */
  var toastT;
  function toast(msg) {
    var t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove("show"); }, 2400);
  }

  /* ---------- tema ---------- */
  var root = document.documentElement;
  function applyTheme(t, save) {
    root.setAttribute("data-theme", t);
    if (save) store.set("theme", t);
    $("#themeIco").innerHTML = ICO(t === "dark" ? "sun" : "moon", 20);
    $("#themeBtn").setAttribute("aria-label", t === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
    var m = $('meta[name="theme-color"]'); if (m) m.setAttribute("content", t === "dark" ? "#0A172E" : "#1F497D");
  }
  applyTheme(root.getAttribute("data-theme") || "light", false);
  $("#themeBtn").addEventListener("click", function () {
    applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark", true);
  });

  /* ---------- menú móvil, cabecera, progreso, volver arriba ---------- */
  var burger = $("#burger"), nav = $("#nav");
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  });
  $$("a", nav).forEach(function (a) { a.addEventListener("click", function () { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }); });

  var header = $(".site-header"), bar = $("#progress"), toTop = $("#toTop");
  function onScroll() {
    var y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = "scaleX(" + (h > 0 ? Math.min(1, y / h) : 0) + ")";
    header.classList.toggle("scrolled", y > 12);
    toTop.hidden = y < 700;
  }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); });

  /* ---------- sección activa ---------- */
  if ("IntersectionObserver" in window) {
    var links = {}; $$("[data-sec]").forEach(function (a) { links[a.dataset.sec] = a; });
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { $$("[data-sec]").forEach(function (a) { a.classList.remove("active"); }); if (links[e.target.id]) links[e.target.id].classList.add("active"); }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["inicio", "guias", "empezar", "dudas", "enlaces"].forEach(function (id) { var s = document.getElementById(id); if (s) so.observe(s); });

    var ro = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); ro.unobserve(e.target); } });
    }, { threshold: 0.12 });
    $$(".reveal").forEach(function (el) { ro.observe(el); });
  } else { $$(".reveal").forEach(function (el) { el.classList.add("in"); }); }

  /* ---------- hero: frase rotatoria y contadores ---------- */
  var phrases = ["justificar una falta", "pedir cita al tutor", "activar los avisos", "entrar en Stilus"], pi = 0, rot = $("#rot");
  if (!reduce) {
    setInterval(function () {
      rot.classList.add("out");
      setTimeout(function () { pi = (pi + 1) % phrases.length; rot.textContent = phrases[pi]; rot.classList.remove("out"); }, 320);
    }, 2600);
  }
  $$("[data-count]").forEach(function (el) {
    var to = +el.dataset.count; if (reduce) return;
    var t0 = performance.now(); el.textContent = "0";
    (function tick(t) { var p = Math.min(1, (t - t0) / 1100); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); })(t0);
  });

  /* ---------- ventanas emergentes ---------- */
  function openDlg(id) {
    var d = document.getElementById(id); if (!d) return;
    if (typeof d.showModal === "function") { if (!d.open) d.showModal(); } else d.setAttribute("open", "");
  }
  function closeDlg(d) { if (typeof d.close === "function") d.close(); else d.removeAttribute("open"); }
  $$("dialog").forEach(function (d) {
    d.addEventListener("click", function (e) { if (e.target === d) closeDlg(d); });
    $$("[data-close]", d).forEach(function (b) { b.addEventListener("click", function () { closeDlg(d); }); });
  });
  $$("[data-open]").forEach(function (b) { b.addEventListener("click", function () { openDlg(b.dataset.open); }); });
  $("#qrBtn").addEventListener("click", function () { openDlg("dlg-qr"); });

  function copyLink() {
    var done = function () { toast("Enlace copiado ✓"); };
    if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(OFFICIAL).then(done, fallback); } else fallback();
    function fallback() {
      var ta = document.createElement("textarea"); ta.value = OFFICIAL; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); done(); } catch (e) { toast("No se pudo copiar"); } ta.remove();
    }
  }
  $("#copyBtn").addEventListener("click", copyLink);
  $$("[data-copy]").forEach(function (b) { b.addEventListener("click", copyLink); });
  $("#shareBtn").addEventListener("click", function () {
    var data = { title: "Stilus Familias · Guía para familias", text: "Guía del IES Comuneros de Castilla para usar Stilus Familias", url: location.href.split("#")[0] };
    if (navigator.share) { navigator.share(data).catch(function () {}); }
    else if (navigator.clipboard) { navigator.clipboard.writeText(data.url).then(function () { toast("Enlace de la guía copiado ✓"); }); }
    else toast("Copia la dirección de esta página para compartirla");
  });

  /* ---------- confeti ---------- */
  function confetti() {
    if (reduce) return;
    var c = $("#confetti"), ctx = c.getContext("2d"), W = c.width = window.innerWidth, Hh = c.height = window.innerHeight;
    var cols = ["#F79646", "#4BACC6", "#9BBB59", "#8064A2", "#C0504D", "#4F81BD", "#FFFFFF"];
    var ps = []; for (var i = 0; i < 140; i++) ps.push({ x: W / 2 + (Math.random() - .5) * 120, y: Hh * .55, vx: (Math.random() - .5) * 14, vy: -Math.random() * 15 - 4, s: Math.random() * 7 + 4, r: Math.random() * 6, vr: (Math.random() - .5) * .4, c: cols[i % cols.length] });
    var t0 = performance.now(); c.style.display = "block";
    (function frame(t) {
      var el = t - t0; ctx.clearRect(0, 0, W, Hh);
      ps.forEach(function (p) { p.vy += .35; p.x += p.vx; p.y += p.vy; p.r += p.vr; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c; ctx.globalAlpha = Math.max(0, 1 - el / 2600); ctx.fillRect(-p.s / 2, -p.s / 3, p.s, p.s * .6); ctx.restore(); });
      if (el < 2600) requestAnimationFrame(frame); else { ctx.clearRect(0, 0, W, Hh); c.style.display = "none"; }
    })(t0);
  }

  /* ---------- guías interactivas ---------- */
  var st = { guide: GUIDES[0], step: 0, dia: true, motivo: "rend", attached: false };
  var typers = [], token = 0;

  function resetState() { st.dia = true; st.motivo = "rend"; st.attached = false; }

  function renderTabs() {
    var done = store.get("done", []);
    $("#guideTabs").innerHTML = GUIDES.map(function (g) {
      var on = g.id === st.guide.id;
      return '<button type="button" role="tab" class="gtab' + (on ? " is-active" : "") + '" id="tab-' + g.id + '" aria-selected="' + on + '" tabindex="' + (on ? 0 : -1) + '" data-id="' + g.id + '" style="--gc:' + g.color + '">' +
        '<span class="gtab-ico">' + ICO(g.icon, 26) + "</span>" +
        '<span class="gtab-txt"><b>' + g.tab + "</b><small>" + g.steps.length + " pasos</small></span>" +
        '<span class="gtab-done"' + (done.indexOf(g.id) > -1 ? "" : " hidden") + ">" + ICO("check", 14) + "</span></button>";
    }).join("");
    var n = done.length;
    $("#doneCounter").textContent = n ? (n === GUIDES.length ? "🎉 Has completado todas las guías" : n + " de " + GUIDES.length + " guías completadas") : "";
  }

  function renderPanel() {
    var g = st.guide, i = st.step, last = g.steps.length - 1;
    $("#pBadge").style.setProperty("--gc", g.color); $("#pBadge").innerHTML = ICO(g.icon, 22);
    $("#pTitle").textContent = g.title; $("#pLead").textContent = g.lead;
    $("#pNotice").innerHTML = ICO("alert", 18) + "<span>" + g.notice + "</span>";
    $("#steps").innerHTML = g.steps.map(function (s, k) {
      var cls = k === i ? " is-active" : k < i ? " is-done" : "";
      var extra = "";
      if (s.extra === "segment") {
        extra = '<div class="seg" role="group" aria-label="¿Falta el día completo?">' +
          '<button type="button" data-dia="1" aria-pressed="' + st.dia + '">Sí, el día completo</button>' +
          '<button type="button" data-dia="0" aria-pressed="' + !st.dia + '">No, solo unas horas</button></div>';
      }
      return '<li class="step' + cls + '"><button type="button" class="step-head" data-i="' + k + '" aria-expanded="' + (k === i) + '"' + (k === i ? ' aria-current="step"' : "") + ">" +
        '<span class="step-n">' + (k < i ? ICO("check", 15) : k + 1) + '</span><span class="step-t">' + s.title + "</span>" + ICO("chev", 18) + "</button>" +
        '<div class="step-body"><div><p>' + s.text + "</p>" + (k === i ? extra : "") + "</div></div></li>";
    }).join("");
    $("#btnPrev").disabled = i === 0;
    $("#btnNextTxt").textContent = i === last ? "Finalizar" : "Siguiente";
    var pct = Math.round(((i + 1) / g.steps.length) * 100);
    $("#meterBar").style.width = pct + "%"; $("#meter").setAttribute("aria-valuenow", pct);
  }

  function runTyping(el) {
    typers.forEach(clearInterval); typers = [];
    $$(".typed", el).forEach(function (t) {
      var txt = t.dataset.type; if (reduce) { t.textContent = txt; return; }
      var k = 0; t.classList.add("typing");
      var iv = setInterval(function () { k++; t.textContent = txt.slice(0, k); if (k >= txt.length) { clearInterval(iv); t.classList.remove("typing"); } }, 75);
      typers.push(iv);
    });
  }

  function renderScreen() {
    var el = $("#screen"), step = st.guide.steps[st.step];
    el.classList.remove("in"); el.innerHTML = SCREENS[step.screen](st); void el.offsetWidth; el.classList.add("in");
    $$("[data-hot]", el).forEach(function (h) { h.setAttribute("tabindex", "0"); h.setAttribute("role", "button"); });
    runTyping(el);
  }

  function go(n) {
    var last = st.guide.steps.length - 1;
    st.step = Math.max(0, Math.min(last, n)); token++;
    renderPanel(); renderScreen();
  }
  function next() { if (st.step < st.guide.steps.length - 1) go(st.step + 1); else finish(); }

  function selectGuide(id, opts) {
    var g = GUIDES.filter(function (x) { return x.id === id; })[0]; if (!g) return;
    st.guide = g; st.step = 0; resetState(); token++;
    renderTabs(); renderPanel(); renderScreen();
    try { history.replaceState(null, "", "#guia-" + id); } catch (e) {}
    if (opts && opts.scroll) $("#player").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }

  function finish() {
    var done = store.get("done", []);
    if (done.indexOf(st.guide.id) < 0) { done.push(st.guide.id); store.set("done", done); }
    renderTabs();
    var idx = GUIDES.indexOf(st.guide), nextG = GUIDES[(idx + 1) % GUIDES.length];
    $("#doneMsg").textContent = st.guide.done;
    $("#doneAll").hidden = done.length < GUIDES.length;
    var nb = $("#doneNext"); nb.innerHTML = "Siguiente guía: " + nextG.tab + " " + ICO("right", 16); nb.dataset.id = nextG.id;
    confetti(); openDlg("dlg-done");
  }
  $("#doneNext").addEventListener("click", function () { closeDlg($("#dlg-done")); selectGuide(this.dataset.id, { scroll: true }); });
  $("#doneAgain").addEventListener("click", function () { closeDlg($("#dlg-done")); selectGuide(st.guide.id, { scroll: true }); });

  /* eventos del reproductor */
  $("#guideTabs").addEventListener("click", function (e) { var b = e.target.closest(".gtab"); if (b) selectGuide(b.dataset.id); });
  $("#guideTabs").addEventListener("keydown", function (e) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    var i = GUIDES.indexOf(st.guide), n = (i + (e.key === "ArrowRight" ? 1 : -1) + GUIDES.length) % GUIDES.length;
    selectGuide(GUIDES[n].id); $("#tab-" + GUIDES[n].id).focus();
  });
  $("#btnNext").addEventListener("click", next);
  $("#btnPrev").addEventListener("click", function () { go(st.step - 1); });
  $("#btnReset").addEventListener("click", function () { resetState(); go(0); });
  $("#btnTips").addEventListener("click", function () {
    $("#tipsList").innerHTML = st.guide.tips.map(function (t) { return "<li>" + ICO("check", 16) + "<span>" + t + "</span></li>"; }).join("");
    $("#tipsTitle").textContent = st.guide.title; openDlg("dlg-tips");
  });
  $("#steps").addEventListener("click", function (e) {
    var seg = e.target.closest("[data-dia]");
    if (seg) { st.dia = seg.dataset.dia === "1"; $$("[data-dia]").forEach(function (b) { b.setAttribute("aria-pressed", (b.dataset.dia === "1") === st.dia); }); renderScreen(); return; }
    var h = e.target.closest(".step-head"); if (h) go(+h.dataset.i);
  });

  var screenEl = $("#screen");
  function later(fn, ms) { var t = token; setTimeout(function () { if (t === token) fn(); }, reduce ? 0 : ms); }
  screenEl.addEventListener("click", function (e) {
    var pick = e.target.closest("[data-pick]");
    if (pick) { st.motivo = pick.dataset.pick; renderScreen(); later(next, 650); return; }
    var day = e.target.closest("[data-day]");
    if (day) { st.dia = !st.dia; $$("[data-dia]").forEach(function (b) { b.setAttribute("aria-pressed", (b.dataset.dia === "1") === st.dia); }); renderScreen(); return; }
    var hot = e.target.closest("[data-hot]");
    if (hot) {
      if (hot.dataset.action === "attach") { st.attached = true; renderScreen(); later(next, 800); } else next();
    }
  });
  screenEl.addEventListener("keydown", function (e) {
    if ((e.key === "Enter" || e.key === " ") && e.target.matches("[data-hot]")) { e.preventDefault(); e.target.click(); }
  });

  /* ---------- lista "antes de empezar" ---------- */
  var chks = $$("[data-chk]"), saved = store.get("chk", {}), C = 2 * Math.PI * 26;
  var ringFg = $("#ringFg"); ringFg.style.strokeDasharray = C;
  function updateRing() {
    var n = chks.filter(function (c) { return c.checked; }).length;
    ringFg.style.strokeDashoffset = C * (1 - n / chks.length);
    $("#ringTitle").textContent = n + " de " + chks.length;
    $("#ringMsg").textContent = n === chks.length ? "¡Todo listo! Elige una guía y empieza." : n ? "¡Vas bien! Sigue marcando." : "Marca lo que ya tengas.";
  }
  chks.forEach(function (c) {
    c.checked = !!saved[c.dataset.chk];
    c.addEventListener("change", function () { saved[c.dataset.chk] = c.checked; store.set("chk", saved); updateRing(); });
  });
  updateRing();

  /* ---------- preguntas frecuentes ---------- */
  var faq = $$("#faqList details"), norm = function (s) { return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); };
  $("#faqSearch").addEventListener("input", function () {
    var q = norm(this.value.trim()), shown = 0;
    faq.forEach(function (d) { var ok = !q || norm(d.textContent).indexOf(q) > -1; d.hidden = !ok; if (ok) shown++; if (q && ok) d.open = true; });
    $("#faqEmpty").hidden = shown > 0;
  });
  $("#faqOpen").addEventListener("click", function () { faq.forEach(function (d) { if (!d.hidden) d.open = true; }); });
  $("#faqClose").addEventListener("click", function () { faq.forEach(function (d) { d.open = false; }); });

  /* ---------- arranque ---------- */
  var m = /^#guia-(\w+)/.exec(location.hash);
  renderTabs();
  if (m && GUIDES.some(function (g) { return g.id === m[1]; })) {
    selectGuide(m[1]);
    setTimeout(function () { $("#guias").scrollIntoView(); }, 60);
  } else { renderPanel(); renderScreen(); }
  window.__stilusReady = true;
})();
