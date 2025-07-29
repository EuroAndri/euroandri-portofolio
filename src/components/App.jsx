import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-sans bg-black text-white">

      <Navbar />
      <main className="pt-20">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
