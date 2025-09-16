import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Zap } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'timeline', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg border-b border-slate-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2 group">
              <div className="relative">
                <Cpu className={`w-6 h-6 transition-colors duration-300 ${
                  scrolled ? 'text-blue-400' : 'text-blue-300'
                } group-hover:animate-pulse`} />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <div className={`font-bold transition-colors duration-300 ${
                scrolled ? 'text-white' : 'text-white'
              }`}>
                <span className="text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Naman
                </span>
                <span className="text-lg text-slate-300 mx-1">•</span>
                <span className="text-sm font-mono text-slate-400">DEV</span>
              </div>
              <Zap className={`w-4 h-4 transition-colors duration-300 ${
                scrolled ? 'text-yellow-400' : 'text-yellow-300'
              } group-hover:animate-bounce`} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                  activeSection === item.id
                    ? scrolled 
                      ? 'text-blue-400 bg-blue-500/20 border border-blue-500/30' 
                      : 'text-blue-300 bg-blue-500/20 border border-blue-500/30'
                    : scrolled
                      ? 'text-slate-300 hover:text-blue-400 hover:bg-slate-700/50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                scrolled
                  ? 'text-slate-300 hover:text-blue-400 hover:bg-slate-700/50'
                  : 'text-white hover:text-blue-300 hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700/50">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-left rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-blue-500/20 border border-blue-500/30'
                      : 'text-slate-300 hover:text-blue-400 hover:bg-slate-700/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;