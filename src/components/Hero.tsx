import React from 'react';
import { Github, Linkedin, Mail, MapPin, Code2, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-ping"></div>
      </div>
      
      {/* Floating code elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-blue-400/20 text-6xl font-mono animate-float">{'<>'}</div>
        <div className="absolute top-40 right-20 text-purple-400/20 text-4xl font-mono animate-float-delayed">{'{}'}</div>
        <div className="absolute bottom-32 left-20 text-cyan-400/20 text-5xl font-mono animate-bounce-slow">[]</div>
        <div className="absolute bottom-20 right-10 text-green-400/20 text-3xl font-mono animate-pulse">()</div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          {/* Animated Logo */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-75 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-3 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-6 h-6 animate-pulse" />
                  <span className="text-2xl font-bold font-mono">{'<Naman'}</span>
                  <Code2 className="w-6 h-6 animate-spin-slow" />
                  <span className="text-2xl font-bold font-mono">{'Pal />'}</span>
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-blue-300 mb-6 animate-fade-in-up delay-200">
            <span className="inline-flex items-center space-x-2">
              <span className="text-orange-400 font-mono">React</span>
              <span className="text-blue-300">+</span>
              <span className="text-red-400 font-mono">Java</span>
              <span className="text-blue-300">+</span>
              <span className="text-green-400 font-mono">Spring Boot</span>
            </span>
          </h2>
          <div className="flex items-center justify-center text-slate-300 mb-8 animate-fade-in-up delay-300">
            <MapPin className="w-5 h-5 mr-2" />
            <span className="text-lg">Noida, India</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-up delay-500">
          <a
            href="https://github.com/Naman1442002"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 border border-white/20"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/naman-pal-67b914245"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </a>
          <a
            href="mailto:naman1442002@gmail.com"
            className="flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 border border-white/20"
          >
            <Mail className="w-5 h-5 mr-2" />
            Email
          </a>
        </div>

        <div className="max-w-2xl mx-auto animate-fade-in-up delay-700">
          <img
            src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Full Stack Development"
            className="w-full h-64 object-cover rounded-2xl shadow-2xl mb-6 border border-white/20 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;