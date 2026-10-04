/* Contenido de las guías (extraído del PowerPoint definitivo) */
window.GUIDES = [
  {
    id: "acceso",
    tab: "Entrar en Stilus",
    title: "Entra en Stilus Familias",
    lead: "Un único acceso para justificar faltas, ver incidencias y hablar con el centro.",
    icon: "login",
    color: "#4BACC6",
    notice: "Ojo: necesitas cuenta Educacyl. Si no la tienes, créala antes.",
    tips: [
      "Necesitas una cuenta Educacyl. Si no la tienes, créala antes de empezar.",
      "Desde Stilus Familias puedes justificar faltas con un clic, ver ausencias e incidencias en tiempo real y comunicarte con el centro."
    ],
    steps: [
      { title: "Acceso privado", screen: "acceso-1",
        text: "Entra en <b>www.educa.jcyl.es</b> y pulsa <b>Acceso privado</b>, en el menú de la web." },
      { title: "Usuario y contraseña", screen: "acceso-2",
        text: "Escribe tu <b>usuario</b> y tu <b>contraseña</b> de Educacyl y pulsa <b>Iniciar sesión</b>." },
      { title: "Zona privada", screen: "acceso-3",
        text: "Pulsa <b>Acceso a mi zona privada</b>." },
      { title: "STILUS Familias", screen: "acceso-4",
        text: "Dentro de la zona privada, pulsa el botón <b>STILUS Familias</b>." }
    ],
    done: "¡Ya estás en Stilus Familias! Disfruta de sus ventajas."
  },
  {
    id: "avisos",
    tab: "Avisos por correo",
    title: "Activa los avisos en tu correo",
    lead: "Recibe un correo en tu email personal cada vez que haya un mensaje nuevo en Stilus.",
    icon: "bell",
    color: "#8064A2",
    notice: "Ojo: revisa que el correo esté bien escrito.",
    tips: [
      "Revisa que el correo esté bien escrito antes de pulsar Guardar.",
      "Recibirás un correo cada vez que tengas una comunicación nueva en Stilus.",
      "Para empezar, necesitas acceder a Stilus Familias."
    ],
    steps: [
      { title: "Entra en Comunicaciones", screen: "avisos-1",
        text: "Pulsa <b>VER TODAS</b> en el bloque de Comunicaciones." },
      { title: "Abre la configuración", screen: "avisos-2",
        text: "Toca el icono del <b>engranaje</b>, en la parte superior derecha." },
      { title: "Activa el aviso por email", screen: "avisos-3",
        text: "Marca <b>Notificación por email</b>, escribe tu correo y pulsa <b>Guardar</b>. ¡Revisa que esté bien escrito!" }
    ],
    done: "¡Listo! Recibirás un correo con cada comunicación nueva de Stilus."
  },
  {
    id: "tutoria",
    tab: "Cita con el tutor",
    title: "Pide cita al tutor",
    lead: "Solicita una tutoría desde casa, cómodamente, con un par de clics.",
    icon: "users",
    color: "#9BBB59",
    notice: "Ojo: la respuesta del tutor te llegará al apartado de Comunicaciones.",
    tips: [
      "Tendrás que esperar la respuesta del tutor.",
      "La respuesta te llegará al apartado de Comunicaciones de Stilus Familias.",
      "Conviene tener activados los avisos por correo para enterarte en cuanto responda."
    ],
    steps: [
      { title: "Ve a Centro Educativo", screen: "tutoria-1",
        text: "Desliza hasta <b>Centro Educativo</b> y pulsa <b>SOLICITAR TUTORÍA</b>." },
      { title: "Elige el motivo", screen: "tutoria-2",
        text: "Selecciona el <b>motivo</b> de la tutoría: rendimiento escolar, comportamiento u orientación educativa." },
      { title: "Acepta el envío", screen: "tutoria-3",
        text: "Comprueba el tutor y el motivo y pulsa el botón azul para <b>aceptar el envío</b>." }
    ],
    done: "¡Tutoría solicitada! Espera la respuesta del tutor."
  },
  {
    id: "ausencias",
    tab: "Justificar ausencias",
    title: "Justifica una ausencia",
    lead: "Justifica ausencias desde casa, cómodamente, con un par de clics.",
    icon: "file",
    color: "#C0504D",
    notice: "Ojo: el tutor del grupo debe aceptarla. Si la rechaza, corrige el error.",
    tips: [
      "La justificación tiene que ser aceptada por el tutor del grupo.",
      "Si es rechazada, presta atención y corrige el error.",
      "Comprueba que el mes y el año son correctos: un error puede provocar el rechazo.",
      "Tamaño máximo de los archivos: 10 MB. Se admiten PDF, Word, PNG y JPG."
    ],
    steps: [
      { title: "Ve a Justificar Ausencia", screen: "ausencias-1",
        text: "Desliza hasta <b>Centro Educativo</b> y pulsa <b>JUSTIFICAR AUSENCIA</b>." },
      { title: "Indica la fecha", screen: "ausencias-2", extra: "segment",
        text: "¿Falta el día completo? <b>Sí</b>: marca <b>Día completo</b> y elige las fechas. <b>No</b>: indica fecha y hora de inicio y de fin. <b>Comprueba el mes y el año.</b>" },
      { title: "Adjunta los justificantes", screen: "ausencias-3",
        text: "Pulsa <b>Adjuntar archivo</b> y elige tu justificante. Máximo 10 MB; se admiten PDF, Word, PNG y JPG." },
      { title: "Escribe el motivo y guarda", screen: "ausencias-4",
        text: "Escribe el <b>motivo</b> de la justificación y pulsa <b>GUARDAR</b>." }
    ],
    done: "¡Justificante enviado! Espera la respuesta del tutor del grupo."
  }
];
