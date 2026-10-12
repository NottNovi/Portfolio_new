import Starfield from './components/Starfield.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Missions from './components/Missions.jsx';
import Constellation from './components/Constellation.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import useReveal from './components/useReveal.js';

export default function App() {
  useReveal();
  return (
    <>
      <Starfield />
      <Nav />
      <main>
        <Hero />
        <About />
        <Missions />
        <Constellation />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <span>✦ NovaDev</span>
        <span>Built by Joel · {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
