import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-300 animate-fade-in-up">
            © 2024 Naman Pal. Built with <span className="text-blue-400 font-mono">React</span> and <span className="text-cyan-400 font-mono">Tailwind CSS</span>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;