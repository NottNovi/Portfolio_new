import { about } from '../data/content.js';
import SectionHead from './SectionHead.jsx';

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHead index="01" kicker="Pilot profile" title="The engineer behind the nova" />
      <div className="about">
        <div className="about__text reveal">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="about__principles reveal">
          <p className="mono-label">Flight rules</p>
          <ol>
            {about.principles.map((p, i) => (
              <li key={p.title}>
                <span className="principle__n">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
