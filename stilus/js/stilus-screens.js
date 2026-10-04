/* Iconos y pantallas del "móvil" interactivo (todo dibujado con HTML/CSS, sin capturas) */
(function () {
  "use strict";

  var P = {
    menu: '<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    clip: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    chat: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
    bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
    alert: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    right: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
    left: '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
    ext: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
    search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    sun: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
    moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    qr: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/><rect x="3" y="14" width="7" height="7"/><line x1="21" y1="14" x2="21" y2="21"/><line x1="14" y1="21" x2="17" y2="21"/>',
    login: '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
    school: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    globe: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',
    up: '<polyline points="18 15 12 9 6 15"/>',
    chev: '<polyline points="6 9 12 15 18 9"/>',
    plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    refresh: '<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>',
    info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'
  };

  function ico(name, size) {
    var s = size || 16;
    return '<svg class="ico" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[name] || "") + "</svg>";
  }
  window.ICO = ico;

  /* ---------- piezas reutilizables ---------- */
  var skel = function (w) { return '<i class="u-sk" style="width:' + (w || 80) + '%"></i>'; };

  function appHead() {
    return '<div class="u-apphead"><span class="u-brand">STILUS <b>Familias</b></span><i class="u-av">' + ico("user", 12) + "</i></div>" +
      '<div class="u-student"><i>AL</i><div><b>Nombre del alumno/a</b><small>Curso y etapa</small></div></div>';
  }
  function webHead() {
    return '<div class="u-webhead"><b class="u-logo">educa<span>cyl</span></b><span class="u-wh-r"><i>' + ico("user", 13) + "</i><i>" + ico("menu", 13) + "</i></span></div>";
  }

  function centro(hot) {
    return appHead() +
      '<div class="u-card"><h5>' + ico("school", 14) + " Centro Educativo</h5>" +
      '<button class="u-btn alt" ' + (hot === 1 ? "data-hot" : "") + ">SOLICITAR TUTORÍA</button>" +
      '<button class="u-btn alt" ' + (hot === 2 ? "data-hot" : "") + ">JUSTIFICAR AUSENCIA</button>" +
      '<div class="u-tutor"><small>TUTOR/A</small><b>Nombre del tutor/a</b>' + skel(60) + skel(40) +
      '<button class="u-btn sm">MÁS INFORMACIÓN</button></div></div>';
  }

  function comunicaciones(hot) {
    return appHead() +
      '<div class="u-crumb">HOME › <b>COMUNICACIONES</b></div>' +
      '<div class="u-title"><h4>' + ico("chat", 15) + " Comunicaciones</h4>" +
      '<button class="u-ibtn dark" aria-label="Configuración" ' + (hot ? "data-hot" : "") + ">" + ico("gear", 14) + "</button></div>" +
      '<small class="u-mute">Consulta las comunicaciones recibidas.</small>' +
      '<div class="u-filter"><label>Tipo</label><div class="u-sel">Recibidas ' + ico("chev", 12) + "</div></div>" +
      '<div class="u-msg"><b>Nombre Apellidos</b><small>Hoy</small>' + skel(85) + "</div>" +
      '<div class="u-msg"><b>Nombre Apellidos</b><small>Ayer</small>' + skel(70) + "</div>" +
      '<div class="u-msg"><b>Nombre Apellidos</b><small>Hace 2 días</small>' + skel(78) + "</div>";
  }

  function modal(title, body) {
    return '<div class="u-dim"></div><div class="u-modal"><div class="u-modal-h">' + title + ico("x", 12) + '</div><div class="u-modal-b">' + body + "</div></div>";
  }

  var MOTIVOS = { rend: "Rendimiento escolar", comp: "Comportamiento", orient: "Orientación educativa" };

  function opt(key, label, st, hot) {
    var on = st.motivo === key;
    return '<button class="u-opt' + (on ? " on" : "") + '" data-pick="' + key + '" ' + (hot ? "data-hot-visual" : "") + '><i>' + (on ? ico("check", 10) : "") + "</i>" + label + "</button>";
  }

  /* ---------- pantallas ---------- */
  window.SCREENS = {
    "acceso-1": function () {
      return '<div class="u-web">' + webHead() +
        '<div class="u-hero"><small>Portal de Educación</small><b>Educación en Castilla y León</b></div>' +
        '<div class="u-menu"><span>Inicio</span><span>Familias</span><span>Profesorado</span>' +
        '<button class="u-btn gray" data-hot>Acceso privado</button></div>' +
        '<div class="u-news"><h5>Actualidad</h5>' + skel(95) + skel(80) + skel(88) + skel(60) + "</div></div>";
    },
    "acceso-2": function () {
      return '<div class="u-web u-login"><b class="u-logo big">educa<span>cyl</span></b>' +
        "<p>Nombre de Usuario y Contraseña.</p>" +
        '<label class="u-label">Usuario</label><div class="u-field"><span class="typed" data-type="tu.usuario"></span></div>' +
        '<label class="u-label">Contraseña</label><div class="u-field"><span class="typed" data-type="••••••••"></span></div>' +
        '<button class="u-btn" data-hot>Iniciar sesión</button>' +
        '<ul class="u-links"><li>No recuerdo mis datos de acceso</li><li>No tengo cuenta en el Portal</li></ul></div>';
    },
    "acceso-3": function () {
      return '<div class="u-web">' + webHead() +
        '<div class="u-user"><b>Tu nombre</b><div class="u-row"><button class="u-btn gray sm">Mis datos</button><button class="u-btn danger sm">Cerrar sesión</button></div>' +
        '<button class="u-btn alt" data-hot>' + ico("user", 13) + " Acceso a mi zona privada</button></div>" +
        '<div class="u-news"><h5>Actualidad</h5>' + skel(95) + skel(80) + skel(88) + "</div></div>";
    },
    "acceso-4": function () {
      var t = function (c, l, name, hot) {
        return '<div class="u-tile" ' + (hot ? "data-hot" : "") + '><i style="--c:' + c + '">' + l + "</i><span>" + name + "</span></div>";
      };
      return '<div class="u-web"><div class="u-zone"><small>zona de</small><b>usuario</b></div>' +
        "<h5>Accesos personales</h5><div class='u-grid'>" +
        t("#1F497D", "C", "Correo") + t("#4F81BD", "O", "OneDrive") + t("#C0504D", "365", "Office") + t("#8064A2", "T", "Teams") + t("#4BACC6", "A", "Aula Virtual") +
        "</div><h5>Accesos a aplicaciones</h5><div class='u-grid'>" +
        t("#F79646", "F", "Fiction Express") + t("#9BBB59", "I", "Infoeduca") + t("#4F81BD", "L", "LEOCYL") + t("#1F497D", "S", "STILUS Familias", true) + t("#4BACC6", "S", "Manual") +
        "</div></div>";
    },
    "avisos-1": function () {
      return appHead() +
        '<div class="u-card"><h5>' + ico("chat", 14) + " Comunicaciones</h5><small class='u-mute'>Últimas comunicaciones</small>" +
        '<div class="u-li"><b>Hoy</b> · Nueva comunicación</div><div class="u-li"><b>Ayer</b> · Respuesta recibida</div><div class="u-li"><b>Hace 3 días</b> · Aviso del centro</div>' +
        '<button class="u-btn sm" data-hot>VER TODAS</button></div>' +
        '<div class="u-card"><h5>' + ico("alert", 14) + " Incidencias</h5>" + skel(90) + skel(70) + "</div>";
    },
    "avisos-2": function () { return comunicaciones(true); },
    "avisos-3": function () {
      return comunicaciones(false) + modal("Configurar opciones ",
        '<label class="u-check on"><i>' + ico("check", 10) + "</i> Notificación por email</label>" +
        '<label class="u-label">Dirección de e-mail</label><div class="u-field"><span class="typed" data-type="tu@correo.es"></span></div>' +
        '<small class="u-warn">' + ico("alert", 12) + " Revisa que esté bien escrito</small>" +
        '<button class="u-btn" data-hot>Guardar</button>');
    },
    "tutoria-1": function () { return centro(1); },
    "tutoria-2": function (st) {
      return centro(0) + modal("Solicitar tutoría ",
        '<label class="u-label">Tutor/a</label><div class="u-sel full">Nombre del tutor/a ' + ico("chev", 12) + "</div>" +
        '<label class="u-label">Motivos</label><div class="u-opts">' +
        opt("rend", MOTIVOS.rend, st, true) + opt("comp", MOTIVOS.comp, st) + opt("orient", MOTIVOS.orient, st) + "</div>" +
        '<small class="u-mute">Toca un motivo para elegirlo</small>');
    },
    "tutoria-3": function (st) {
      return centro(0) + modal("Solicitar tutoría ",
        '<label class="u-label">Tutor/a</label><div class="u-sel full">Nombre del tutor/a ' + ico("chev", 12) + "</div>" +
        '<label class="u-label">Motivos</label><div class="u-sel full">' + MOTIVOS[st.motivo] + " " + ico("chev", 12) + "</div>" +
        '<button class="u-btn" data-hot>ACEPTAR</button>');
    },
    "ausencias-1": function () { return centro(2); },
    "ausencias-2": function (st) {
      var fields = st.dia
        ? '<label class="u-label">Fecha desde</label><div class="u-field">dd/mm/aaaa</div>' +
          '<label class="u-label">Fecha hasta</label><div class="u-field">dd/mm/aaaa</div>'
        : '<label class="u-label">Fecha y sesión desde</label><div class="u-two"><div class="u-field">dd/mm/aaaa</div><div class="u-field">08:30</div></div>' +
          '<label class="u-label">Fecha y sesión hasta</label><div class="u-two"><div class="u-field">dd/mm/aaaa</div><div class="u-field">11:10</div></div>';
      return centro(0) + modal("Justificar ausencia ",
        '<small class="u-mute">INFORMO que mi hijo/a no asistirá a clases durante el periodo que indico a continuación.</small>' +
        '<label class="u-check' + (st.dia ? " on" : "") + '" data-day><i>' + (st.dia ? ico("check", 10) : "") + "</i> Día completo</label>" +
        '<div class="u-hotbox" data-hot>' + fields + "</div>" +
        '<small class="u-warn">' + ico("alert", 12) + " Comprueba mes y año</small>");
    },
    "ausencias-3": function (st) {
      return centro(0) + modal("Justificar ausencia ",
        '<label class="u-label">Adjuntos</label>' +
        '<button class="u-btn gray" ' + (st.attached ? "" : 'data-hot data-action="attach"') + ">" + ico("clip", 13) + " Adjuntar archivo</button>" +
        (st.attached ? '<div class="u-chip">' + ico("clip", 12) + " JustificanteMedico.pdf " + ico("x", 11) + "</div>" : "") +
        '<small class="u-mute">Máx. 10 MB · PDF, Word, PNG o JPG</small>' +
        '<label class="u-label">Justificación</label><div class="u-area"></div>');
    },
    "ausencias-4": function () {
      return centro(0) + modal("Justificar ausencia ",
        '<div class="u-chip">' + ico("clip", 12) + " JustificanteMedico.pdf " + ico("x", 11) + "</div>" +
        '<label class="u-label">Justificación</label><div class="u-area"><span class="typed" data-type="Enfermedad"></span></div>' +
        '<button class="u-btn" data-hot>GUARDAR</button><button class="u-btn alt sm">CERRAR</button>');
    }
  };
})();
