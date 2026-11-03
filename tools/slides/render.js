// Uso: node tools/slides/render.js tools/slides/content/semana-AAAA-SS.json media/sSS
// Requiere servidor local en la raíz del repo: python3 -m http.server 8766
const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path');
(async () => {
  const [contentFile, outDir] = process.argv.slice(2);
  const data = JSON.parse(fs.readFileSync(contentFile, 'utf8'));
  fs.mkdirSync(outDir, { recursive: true });
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  await p.goto('http://localhost:8766/tools/slides/template.html'); await p.waitForTimeout(300);
  for (const [name, slides] of Object.entries(data.carruseles)) {
    for (let i = 0; i < slides.length; i++) {
      const sl = slides[i];
      const over = await p.evaluate(({ html, center, pg }) => {
        document.getElementById('c').innerHTML = html;
        document.getElementById('s').className = center ? 's c' : 's';
        document.getElementById('pg').textContent = pg;
        const foot = document.querySelector('.foot').getBoundingClientRect(); let max = 0;
        document.querySelectorAll('#c > *').forEach(e => { max = Math.max(max, e.getBoundingClientRect().bottom); });
        return Math.round(max - foot.top);
      }, { html: sl.html, center: !!sl.center, pg: `${i + 1}/${slides.length}` });
      await p.waitForTimeout(250);
      if (over > -10) console.log('AVISO: el contenido pisa el pie en', name, i + 1, '(', over, 'px). Recorta el texto.');
      const f = path.join(outDir, `${name}-${String(i + 1).padStart(2, '0')}.jpg`);
      await p.screenshot({ path: f, type: 'jpeg', quality: 90 }); console.log('ok', f);
    }
  }
  await b.close();
})();
