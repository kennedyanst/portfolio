// beams.js – efeito de “beams” sem libs (HTML/CSS/JS puros)

(() => {
  const canvas = document.getElementById('beams');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: true });

  const DPR = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
  let W = 0, H = 0, T0 = performance.now();

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = Math.floor(W * DPR);
    canvas.height = Math.floor(H * DPR);
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  window.addEventListener('resize', resize);
  resize();

  // Paleta
  const PALETTES = [
    ['#FF6EC4', '#7873F5'], // rosa -> roxo
    ['#3DDAD7', '#00F5D4'], // ciano -> verde água
    ['#FDBB2D', '#22C1C3'], // amarelo -> turquesa
    ['#FF7E5F', '#FEB47B']  // coral -> pêssego
  ];

  // Beams (linhas) com variação de onda
  const N = 7;
  const beams = Array.from({ length: N }, (_, i) => {
    const yBase = (H * (i + 1)) / (N + 1);
    const pal = PALETTES[i % PALETTES.length];
    return {
      yBase,
      amp: 20 + Math.random() * 60,         // amplitude
      freq: 0.004 + Math.random() * 0.003,  // frequência da onda
      speed: 0.3 + Math.random() * 0.6,     // velocidade
      phase: Math.random() * Math.PI * 2,
      thickness: 6 + Math.random() * 10,
      colorA: pal[0],
      colorB: pal[1],
      drift: (Math.random() * 2 - 1) * 0.2   // deriva vertical sutil
    };
  });

  function lerp(a, b, t) { return a + (b - a) * t; }

  function draw(t) {
    ctx.clearRect(0, 0, W, H);

    ctx.globalCompositeOperation = 'lighter'; // soma as luzes

    for (const b of beams) {
      // posição base com uma leve deriva
      const yCenter = b.yBase + Math.sin(t * 0.0005 + b.phase) * 20;

      // gradiente por beam
      const grad = ctx.createLinearGradient(0, yCenter, W, yCenter);
      grad.addColorStop(0, b.colorA);
      grad.addColorStop(1, b.colorB);

      ctx.strokeStyle = grad;
      ctx.lineWidth = b.thickness;
      ctx.shadowBlur = 20;
      ctx.shadowColor = b.colorB;

      ctx.beginPath();
      const step = 16;
      for (let x = -100, first = true; x <= W + 100; x += step) {
        const y =
          yCenter +
          Math.sin(x * b.freq + t * 0.002 * b.speed + b.phase) * b.amp +
          Math.sin((x + t * 0.15) * (b.freq * 0.35)) * (b.amp * 0.25);

        if (first) {
          ctx.moveTo(x, y);
          first = false;
        } else {
          // curva suave entre os pontos
          const xc = x - step / 2;
          const yc =
            yCenter +
            Math.sin((xc) * b.freq + t * 0.002 * b.speed + b.phase) * b.amp +
            Math.sin((xc + t * 0.15) * (b.freq * 0.35)) * (b.amp * 0.25);
          ctx.quadraticCurveTo(xc, yc, x, y);
        }
      }
      ctx.stroke();

      // linha “glow” mais fina por cima
      ctx.lineWidth = Math.max(1, b.thickness * 0.45);
      ctx.shadowBlur = 35;
      ctx.stroke();

      // leve drift vertical
      b.yBase = lerp(b.yBase, b.yBase + b.drift, 0.003);
    }

    ctx.globalCompositeOperation = 'source-over';
  }

  function loop(t) {
    draw(t - T0);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();
