// Twinkling sparkle background — same effect as the main portfolio page.
(function setupCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const COLORS = ['236, 72, 153', '192, 132, 252', '167, 139, 250', '244, 114, 182'];
  let sparkles;
  const COUNT = Math.min(110, Math.floor((window.innerWidth * window.innerHeight) / 14000));

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function makeSparkle() {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.6 + 0.6,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      phase: Math.random(),
      speed: 0.15 + Math.random() * 0.45,
      drift: (Math.random() - 0.5) * 0.08
    };
  }

  function init() {
    resize();
    sparkles = Array.from({ length: COUNT }, makeSparkle);
  }

  let lastT = performance.now();
  function tick(now) {
    const dt = Math.min(0.05, (now - lastT) / 1000);
    lastT = now;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (const s of sparkles) {
      s.phase += s.speed * dt;
      s.y += s.drift;
      if (s.y < -2) s.y = window.innerHeight + 2;
      if (s.y > window.innerHeight + 2) s.y = -2;

      const a = Math.max(0, Math.sin(s.phase * Math.PI * 2)) * 0.85 + 0.05;

      const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 6);
      grad.addColorStop(0, `rgba(${s.color}, ${a * 0.55})`);
      grad.addColorStop(1, `rgba(${s.color}, 0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r * 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(${s.color}, ${a})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(tick);
  }

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    init();
    for (const s of sparkles) {
      ctx.fillStyle = `rgba(${s.color}, 0.5)`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    return;
  }

  window.addEventListener('resize', init);
  init();
  requestAnimationFrame(tick);
})();
