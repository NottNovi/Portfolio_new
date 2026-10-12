import { contact } from '../data/content.js';
import SectionHead from './SectionHead.jsx';

export default function Contact() {
  const channels = [
    contact.github && { label: 'GitHub', value: contact.github.replace('https://', ''), href: contact.github },
    contact.linkedin && { label: 'LinkedIn', value: 'Connect on LinkedIn', href: contact.linkedin },
    contact.email && { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  ].filter(Boolean);

  return (
    <section id="contact" className="section">
      <SectionHead index="05" kicker="Open channel" title="Let’s build something that works in the real world" />
      <div className="contact reveal">
        <p>
          Interested in automation, energy systems, or bringing engineering discipline to a software
          product? Send a signal.
        </p>
        <div className="contact__channels">
          {channels.map((c) => (
            <a key={c.label} className="channel" href={c.href} target="_blank" rel="noreferrer">
              <span className="mono-label">{c.label}</span>
              <span className="channel__value">{c.value} ↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
