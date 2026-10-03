# Stilus Familias · Guía para familias
**IES Comuneros de Castilla · Burgos**

Web estática e interactiva (HTML + CSS + JavaScript, sin dependencias ni proceso de compilación) con las guías para las familias:

1. **Entrar en Stilus Familias** (4 pasos)
2. **Activar los avisos por correo** (3 pasos)
3. **Pedir cita al tutor** (3 pasos)
4. **Justificar ausencias** (4 pasos)

Incluye un móvil interactivo (se avanza tocando el punto naranja), botoneras, desplegables, ventanas emergentes, lista «Antes de empezar», buscador de preguntas frecuentes, código QR, modo claro/oscuro y diseño adaptado a móvil.

## Estructura

```
index.html            Página principal
404.html              Página de error
vercel.json           Configuración de Vercel (cabeceras y caché)
css/styles.css        Estilos
js/data.js            Textos de las guías (editar aquí para cambiar pasos)
js/screens.js         Pantallas dibujadas del móvil
js/app.js             Lógica (guías, diálogos, FAQ, tema…)
assets/               Favicon, logotipo, código QR e imagen para compartir
```

## 1. Probarla en tu ordenador

Abre `index.html` con doble clic. Para probarla como en internet:

```bash
python3 -m http.server 8000
# y abre http://localhost:8000
```

## 2. Subirla a GitHub

**Opción A — desde la web de GitHub (sin instalar nada)**
1. Entra en github.com → **New repository** → nombre, por ejemplo, `stilus-familias`.
2. Pulsa **uploading an existing file** y arrastra **el contenido** de esta carpeta (no la carpeta en sí), incluidas `css`, `js` y `assets`.
3. **Commit changes**.

**Opción B — con Git**
```bash
git init
git add .
git commit -m "Guía Stilus Familias - IES Comuneros de Castilla"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/stilus-familias.git
git push -u origin main
```

## 3. Enlazarla con Vercel

1. Entra en [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
2. **Add New… → Project** y elige el repositorio `stilus-familias` (**Import**).
3. Ajustes: **Framework Preset: Other**, deja vacíos *Build Command* y *Output Directory* (o pon `./`).
4. Pulsa **Deploy**. En unos segundos tendrás una dirección como `https://stilus-familias.vercel.app`.

A partir de ahí, cada vez que cambies algo en GitHub (**commit/push**), Vercel publica la nueva versión automáticamente.

**Dominio propio (opcional):** Project → *Settings → Domains* → añade tu dominio y sigue las instrucciones de DNS.

## 4. Antes de publicar (recomendado)

- **Imagen al compartir en WhatsApp/redes:** en `index.html` cambia `content="assets/og.png"` por la dirección completa, por ejemplo `https://stilus-familias.vercel.app/assets/og.png`.
- **Cambiar un texto o un paso:** edita `js/data.js` (pasos, consejos, mensajes finales) o `index.html` (preguntas frecuentes, enlaces).
- **Cambiar colores:** variables al principio de `css/styles.css` (`--navy`, `--orange`, `--teal`…).
- **Logotipo del instituto:** si quieres añadirlo, guarda la imagen en `assets/` y sustituye el icono de la cabecera (`.brand-mark` en `index.html`).

## Notas

- La web **no recoge datos personales**: solo guarda en el navegador de cada persona el progreso de las guías, la lista «Antes de empezar» y el tema claro/oscuro.
- Stilus Familias y Educacyl son servicios de la Consejería de Educación de la Junta de Castilla y León. Esta web solo explica cómo usarlos. Las pantallas del móvil son ilustraciones propias con datos de ejemplo, no capturas reales.
- El código QR apunta a `https://www.educa.jcyl.es/familias/es/stilus-familias`.
- Las tipografías (Sora y Nunito Sans) se cargan de Google Fonts; si no están disponibles, la web usa la fuente del sistema.
