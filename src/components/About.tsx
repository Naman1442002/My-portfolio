import React from 'react';
import { Server, Database, Cloud } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up flex justify-center items-center space-x-2">
          <span className="text-3xl animate-wave">👋</span>
          <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-2">
            About Me
          </h2>
          <span className="text-3xl animate-wave">👋</span>
        </div>

        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-pulse"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up delay-200">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              I’m a <span className="font-semibold">Java Backend Developer</span> with 
              <span className="font-semibold"> 2 years of experience</span> building REST APIs 
              and microservices using <span className="font-semibold">Spring Boot and Core Java</span>. 
              My work involves integrating <span className="font-semibold">MySQL and Redis</span>, 
              implementing messaging systems like <span className="font-semibold">RabbitMQ and Kafka</span>, 
              and deploying applications on <span className="font-semibold">Tomcat and Nginx</span>.
              <br /><br />
              Beyond coding, I focus on solving performance bottlenecks, writing clean and testable code, 
              and collaborating within Agile teams to deliver business-driven solutions. 
              I’m also expanding my knowledge in <span className="font-semibold">system design</span> 
              and exploring <span className="font-semibold">cloud-native deployments</span> to grow further as a backend engineer.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-stagger">
              <div className="text-center p-6 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100">
                <Server className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-800 mb-2">Backend Services</h3>
                <p className="text-sm text-slate-600">REST APIs & Microservices</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100 delay-100">
                <Database className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-800 mb-2">Database Design</h3>
                <p className="text-sm text-slate-600">SQL optimization & caching</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100 delay-200">
                <Cloud className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-800 mb-2">Deployment</h3>
                <p className="text-sm text-slate-600">Tomcat, Nginx & cloud basics</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-left delay-300">
            <div className="w-full h-96 bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 border border-slate-200 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="flex justify-center space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce-slow">
                    <span className="text-white font-bold text-2xl">J</span>
                  </div>
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce-slow delay-200">
                    <span className="text-white font-bold text-xl">SB</span>
                  </div>
                </div>
                <div className="flex justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg animate-float">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg animate-float delay-300">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg animate-float delay-500">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-slate-600 font-mono text-sm">
                  <div className="animate-pulse">Backend Development</div>
                  <div className="animate-pulse delay-200">Microservices</div>
                  <div className="animate-pulse delay-400">System Design (Learning)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
