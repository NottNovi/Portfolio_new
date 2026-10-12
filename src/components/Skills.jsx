import { skills } from '../data/content.js';
import SectionHead from './SectionHead.jsx';

function Ring({ items, radius, duration, cls }) {
  return (
    <div
      className={`orbit ${cls}`}
      style={{ '--r': radius, '--dur': `${duration}s` }}
    >
      {items.map((s, i) => (
        <div
          key={s}
          className="orbit__slot"
          style={{ '--a': `${(360 / items.length) * i}deg` }}
        >
          <span className="orbit__chip">{s}</span>
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  const all = [...skills.inner, ...skills.middle, ...skills.outer];
  return (
    <section id="skills" className="section">
      <SectionHead index="04" kicker="Gravity well" title="Skills in orbit" />
      <div className="skills reveal">
        <div className="skills__system" aria-hidden="true">
          <div className="skills__core">✦</div>
          <Ring items={skills.inner} radius="var(--r1)" duration={40} cls="orbit--1" />
          <Ring items={skills.middle} radius="var(--r2)" duration={60} cls="orbit--2" />
          <Ring items={skills.outer} radius="var(--r3)" duration={85} cls="orbit--3" />
        </div>
        <ul className="skills__list">
          {all.map((s) => (
            <li key={s} className="chip">{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
