// Uso: node tools/video/record.js semana-AAAA-SS 1 media/sSS/video1_nombre.mp4
// Requiere servidor local en la raíz del repo (python3 -m http.server 8766) y ffmpeg.
const { chromium } = require('playwright'); const fs = require('fs'); const { execFileSync } = require('child_process'); const os = require('os'); const path = require('path');
(async () => {
  const [tl, v, out] = process.argv.slice(2);
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'rec-'));
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1080, height: 1920 }, recordVideo: { dir: tmp, size: { width: 1080, height: 1920 } } });
  const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto(`http://localhost:8766/tools/video/stage.html?t=${tl}&v=${v}`);
  await p.waitForFunction(() => window.DONE === true, null, { timeout: 120000, polling: 200 });
  const vid = p.video(); await ctx.close(); const webm = await vid.path(); await b.close();
  if (errs.length) console.log('ERRORES EN LA PÁGINA:', errs);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  const tmpOut = out.replace(/\.mp4$/, '.tmp.mp4');
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-ss', '0.8', '-i', webm, '-f', 'lavfi', '-i', 'anullsrc=r=44100:cl=stereo',
    '-vf', 'fps=30,format=yuv420p', '-c:v', 'libx264', '-crf', '20', '-preset', 'veryfast', '-c:a', 'aac', '-b:a', '64k', '-shortest', '-movflags', '+faststart', tmpOut]);
  fs.renameSync(tmpOut, out); console.log('ok', out);
})();
