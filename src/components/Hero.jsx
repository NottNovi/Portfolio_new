import { useEffect, useState } from 'react';
import { profile } from '../data/content.js';

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % profile.rotating.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="hero">
      <div className="nova" aria-hidden="true">
        <div className="nova__halo" />
        <div className="nova__core" />
        <div className="nova__ray nova__ray--h" />
        <div className="nova__ray nova__ray--v" />
      </div>

      <p className="eyebrow">
        <span className="dot" /> Transmission from {profile.location}
      </p>
      <h1 className="hero__title">
        Nova<span>Dev</span>
      </h1>
      <p className="hero__role">
        {profile.name} · {profile.role}
      </p>
      <p className="hero__tagline">{profile.tagline}</p>
      <p className="hero__rotating" aria-live="polite">
        Currently orbiting:{' '}
        <span key={i} className="hero__word">
          {profile.rotating[i]}
        </span>
      </p>
      <div className="hero__cta">
        <a className="btn btn--primary" href="#missions">Explore missions</a>
        <a className="btn btn--ghost" href="#contact">Open a channel</a>
      </div>
      <a className="hero__scroll" href="#about" aria-label="Scroll to About">
        <span />
      </a>
    </section>
  );
}
