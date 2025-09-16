import React from 'react';
import { Github, Linkedin, Mail, MapPin, Code2, Zap, Cpu } from 'lucide-react';

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
          {/* Professional Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative bg-slate-900 px-8 py-4 rounded-3xl leading-none flex items-center">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Cpu className="w-8 h-8 text-blue-400 animate-pulse" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      Naman Pal
                    </div>
                    <div className="text-xs text-slate-400 font-mono tracking-wider">
                      FULL_STACK_DEV
                    </div>
                  </div>
                  <Zap className="w-6 h-6 text-yellow-400 animate-bounce" />
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 animate-fade-in-up delay-200">
            <span className="inline-flex items-center space-x-2">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 px-3 py-1 rounded-full text-sm font-mono font-bold text-slate-900">React</span>
              <span className="text-slate-300 text-2xl">×</span>
              <span className="bg-gradient-to-r from-orange-400 to-red-400 px-3 py-1 rounded-full text-sm font-mono font-bold text-slate-900">Java</span>
              <span className="text-slate-300 text-2xl">×</span>
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 px-3 py-1 rounded-full text-sm font-mono font-bold text-slate-900">Spring Boot</span>
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
            className="flex items-center bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 text-white px-6 py-3 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 border border-slate-600/30 group"
          >
            <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/naman-pal-67b914245"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 group"
          >
            <Linkedin className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            LinkedIn
          </a>
          <a
            href="mailto:naman1442002@gmail.com"
            className="flex items-center bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 text-white px-6 py-3 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 border border-slate-600/30 group"
          >
            <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Email
          </a>
        </div>

        <div className="max-w-2xl mx-auto animate-fade-in-up delay-700">
          <img
            src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Full Stack Development"
            className="w-full h-64 object-cover rounded-2xl shadow-2xl mb-6 border border-slate-600/30 hover:scale-105 transition-transform duration-500 hover:shadow-blue-500/25"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;