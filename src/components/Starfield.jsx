import { useEffect, useRef } from 'react';

// Three-layer parallax starfield with twinkle and the odd shooting star.
// Honors prefers-reduced-motion by drawing a single still frame.
export default function Starfield() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w, h, dpr, stars, raf;
    let scrollY = window.scrollY;
    let mx = 0, my = 0;
    const shooting = [];

    const layers = [
      { count: 0.00012, speed: 0.04, size: [0.4, 0.9] },
      { count: 0.00006, speed: 0.1, size: [0.8, 1.4] },
      { count: 0.00002, speed: 0.22, size: [1.2, 2.0] },
    ];
    const tints = ['#ffffff', '#cfd8ff', '#ffe2c2', '#ffc6e2', '#bfefff'];

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = [];
      layers.forEach((L, li) => {
        const n = Math.round(w * h * L.count);
        for (let i = 0; i < n; i++) {
          stars.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: L.size[0] + Math.random() * (L.size[1] - L.size[0]),
            layer: li,
            tw: Math.random() * Math.PI * 2,
            tws: 0.5 + Math.random() * 1.5,
            c: tints[Math.floor(Math.random() * tints.length)],
          });
        }
      });
    }

    function spawnShootingStar() {
      shooting.push({
        x: Math.random() * w * 0.8 + w * 0.1,
        y: Math.random() * h * 0.4,
        vx: 6 + Math.random() * 4,
        vy: 2.5 + Math.random() * 2,
        life: 0,
        max: 50 + Math.random() * 30,
      });
    }

    function draw(t) {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        const L = layers[s.layer];
        const px = s.x - mx * L.speed * 30;
        let py = (s.y - scrollY * L.speed - my * L.speed * 30) % h;
        if (py < 0) py += h;
        const alpha = reduce ? 0.8 : 0.55 + 0.45 * Math.sin(s.tw + (t / 1000) * s.tws);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = s.c;
        ctx.beginPath();
        ctx.arc(((px % w) + w) % w, py, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      for (let i = shooting.length - 1; i >= 0; i--) {
        const s = shooting[i];
        s.life++;
        s.x += s.vx;
        s.y += s.vy;
        const fade = 1 - s.life / s.max;
        const g = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 14, s.y - s.vy * 14);
        g.addColorStop(0, `rgba(255,244,224,${fade})`);
        g.addColorStop(1, 'rgba(255,79,154,0)');
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 14, s.y - s.vy * 14);
        ctx.stroke();
        if (s.life > s.max) shooting.splice(i, 1);
      }
    }

    function loop(t) {
      if (Math.random() < 0.003) spawnShootingStar();
      draw(t);
      raf = requestAnimationFrame(loop);
    }

    const onScroll = () => { scrollY = window.scrollY; if (reduce) draw(0); };
    const onMouse = (e) => {
      mx = e.clientX / w - 0.5;
      my = e.clientY / h - 0.5;
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll, { passive: true });
    if (reduce) {
      draw(0);
    } else {
      window.addEventListener('mousemove', onMouse);
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return (
    <div className="sky" aria-hidden="true">
      <div className="nebula nebula--a" />
      <div className="nebula nebula--b" />
      <canvas ref={ref} />
    </div>
  );
}
