import { useEffect, useState } from 'react';

const links = [
  ['about', 'About'],
  ['missions', 'Missions'],
  ['constellation', 'GitHub'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#top" className="nav__logo" onClick={() => setOpen(false)}>
        <span className="nav__spark" aria-hidden="true">✦</span> NovaDev
      </a>
      <button
        className="nav__toggle"
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="sr-only">Menu</span>
        <span className={`burger ${open ? 'burger--open' : ''}`} aria-hidden="true" />
      </button>
      <nav id="nav-links" className={`nav__links ${open ? 'nav__links--open' : ''}`}>
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
