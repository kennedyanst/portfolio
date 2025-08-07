// ./js/beams.js
(function () {
  const c = document.getElementById('beams');
  if (!c) return;
  const ctx = c.getContext('2d');

  // Configuração
  const CONFIG = {
    lines: 9,           // quantidade de faixas/linhas
    amplitude: 80,      // quanto ondula (px)
    frequency: 0.0025,  // densidade de ondas
    speed: 0.04,        // velocidade da animação
    thickness: 1.5,     // espessura das linhas
    alpha: 0.55,        // opacidade das linhas
    colorStart: '#ff6ec4',
    colorEnd:   '#7873f5',
    glow: 8            // leve blur para “brilho”
  };

  let time = 0;
  let w = 0, h = 0;

  function resize() {
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    w = c.clientWidth  = window.innerWidth;
    h = c.clientHeight = window.innerHeight;
    c.width  = Math.floor(w * dpr);
    c.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener('resize', resize, { passive: true });
  resize();

  function lerpColor(a, b, t) {
    const pa = parseInt(a.slice(1), 16);
    const pb = parseInt(b.slice(1), 16);
    const ar = (pa >> 16) & 0xff, ag = (pa >> 8) & 0xff, ab = pa & 0xff;
    const br = (pb >> 16) & 0xff, bg = (pb >> 8) & 0xff, bb = pb & 0xff;
    const rr = Math.round(ar + (br - ar) * t);
    const rg = Math.round(ag + (bg - ag) * t);
    const rb = Math.round(ab + (bb - ab) * t);
    return `rgb(${rr}, ${rg}, ${rb})`;
  }

  function draw() {
    time += CONFIG.speed;

    // Fundo sutil para “profundidade”
    ctx.clearRect(0, 0, w, h);
    const bgGrad = ctx.createLinearGradient(0, 0, w, h);
    bgGrad.addColorStop(0, 'rgba(0,0,0,0.75)');
    bgGrad.addColorStop(1, 'rgba(0,0,0,0.35)');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    ctx.lineWidth = CONFIG.thickness;
    ctx.globalAlpha = CONFIG.alpha;
    ctx.shadowBlur = CONFIG.glow;
    ctx.shadowColor = CONFIG.colorEnd;

    // Desenha várias curvas (beams)
    for (let i = 0; i < CONFIG.lines; i++) {
      const t = i / Math.max(1, CONFIG.lines - 1);
      const color = lerpColor(CONFIG.colorStart, CONFIG.colorEnd, t);
      ctx.strokeStyle = color;

      // desloca cada linha para criar paralaxe
      const phase = time + i * 0.6;
      const yBase = h * (0.15 + 0.1 * i); // distribui verticalmente

      ctx.beginPath();
      // start
      ctx.moveTo(0, yBase + Math.sin(phase) * CONFIG.amplitude);

      // curva 1 (quadratic)
      const cp1x = w * 0.25;
      const cp1y = yBase + Math.sin(phase + w * CONFIG.frequency * 0.5) * CONFIG.amplitude;
      const p1x  = w * 0.5;
      const p1y  = yBase + Math.sin(phase + w * CONFIG.frequency * 1.0) * CONFIG.amplitude;
      ctx.quadraticCurveTo(cp1x, cp1y, p1x, p1y);

      // curva 2
      const cp2x = w * 0.75;
      const cp2y = yBase + Math.sin(phase + w * CONFIG.frequency * 1.5) * CONFIG.amplitude;
      const p2x  = w;
      const p2y  = yBase + Math.sin(phase + w * CONFIG.frequency * 2.0) * CONFIG.amplitude;
      ctx.quadraticCurveTo(cp2x, cp2y, p2x, p2y);

      ctx.stroke();
    }

    // reset alpha e sombra
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
})();
