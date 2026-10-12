import { useState } from 'react';
import { missions } from '../data/content.js';
import SectionHead from './SectionHead.jsx';

function Planet({ a, b, ring }) {
  return (
    <div className="planet" style={{ '--pa': a, '--pb': b }} aria-hidden="true">
      <div className="planet__sphere" />
      {ring && <div className="planet__ring" />}
    </div>
  );
}

function MissionCard({ m }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="mission reveal" style={{ '--pa': m.planet.a, '--pb': m.planet.b }}>
      <header className="mission__head">
        <Planet {...m.planet} />
        <div>
          <p className="mono-label">
            {m.code} · Planet {m.planet.name}
          </p>
          <h3 className="mission__name">{m.name}</h3>
          <p className="mission__cat">{m.category}</p>
        </div>
      </header>

      <p className={`status status--${m.statusTone}`}>
        <span className="status__dot" /> {m.status}
      </p>
      <p className="mission__summary">{m.summary}</p>

      <div className={`mission__log ${open ? 'mission__log--open' : ''}`} id={`log-${m.id}`}>
        <div className="mission__log-inner">
          <p className="mono-label">Mission log</p>
          <ul>
            {m.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="mission__foot">
        <ul className="chips">
          {m.stack.map((s) => (
            <li key={s} className="chip">{s}</li>
          ))}
        </ul>
        <button
          className="mission__toggle"
          aria-expanded={open}
          aria-controls={`log-${m.id}`}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close log' : 'Open mission log'}
        </button>
      </footer>
      {m.link && (
        <a className="mission__link" href={m.link} target="_blank" rel="noreferrer">
          View project ↗
        </a>
      )}
    </article>
  );
}

export default function Missions() {
  return (
    <section id="missions" className="section">
      <SectionHead index="02" kicker="Mission control" title="Featured missions">
        Each project is a planet in the NovaDev system. Open a mission log for the engineering detail.
      </SectionHead>
      <div className="missions">
        {missions.map((m) => (
          <MissionCard key={m.id} m={m} />
        ))}
      </div>
    </section>
  );
}
