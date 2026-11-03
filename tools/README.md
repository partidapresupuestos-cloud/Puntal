# Herramientas de contenido de Puntal

Generan las imágenes de carrusel (1080×1350) y los vídeos verticales (1080×1920) con la estética de la marca y la app real. Las usa el departamento de marketing cada semana.

## Preparación (desde la raíz del repositorio)
```bash
python3 -m http.server 8766 &   # sirve la web, la app y estas herramientas
```
Hace falta Playwright (Node) con Chromium y ffmpeg.

## Carruseles
1. Copia `slides/content/semana-2026-45.json` como `slides/content/semana-AAAA-SS.json` y cambia los textos.
   - Cada carrusel es una lista de diapositivas `{ "center": false, "html": "..." }`. `center: true` centra en vertical las que tienen poco texto.
   - Piezas disponibles (clases CSS): `.eb` antetítulo, `h1` / `h2` titulares (`<em>` en amarillo), `p`, `.big` número grande, `.tbl` tabla de partidas, `.chips`, `ul/li`, `.calc` cálculo, `.cta` caja amarilla, `.mail`, `.note`, `.phone` (captura de móvil `img/phone-editor.png`), `.shot` (captura `img/shot-doc.jpg`).
   - Máximo 7 diapositivas por carrusel. Si aparece "AVISO: el contenido pisa el pie", recorta el texto.
2. `node tools/slides/render.js tools/slides/content/semana-AAAA-SS.json media/sSS`

## Vídeos
1. Copia `video/timelines/semana-2026-45.js` como `video/timelines/semana-AAAA-SS.js` y escribe un vídeo por función en `window.T = { '1': async()=>{...}, ... }`.
   - Ayudantes: `setup()` (app limpia con datos de ejemplo), `cap(html)` texto superior, `card(html)` tarjeta a pantalla completa, `uncard()`, `see(selector)`, `tap(selector)` toque con círculo, `type(selector, texto, ms)`, `wait(ms)`, `A('código')` ejecuta código dentro de la app (`go("banco")`, `ACTS.nuevo()`, `importPacks(csv)`…), `END` tarjeta final con la llamada a la acción.
   - 15-30 segundos. Termina siempre con `card(END); await wait(4200);`.
   - Solo datos de ejemplo ("Instalaciones Ejemplo", "Cliente de ejemplo").
2. `node tools/video/record.js semana-AAAA-SS 1 media/sSS/video1_tema.mp4` (uno por vídeo). Sale con pista de audio en silencio: la música se añade al publicar.

## Publicar
Sube `media/sSS/` a `main`. Para Metricool usa los enlaces directos:
`https://raw.githubusercontent.com/partidapresupuestos-cloud/Puntal/main/media/sSS/ARCHIVO`
