import React from 'react';
import { Server, Database, Cloud } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up delay-200">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Full Stack Java Developer with 2 years of experience building scalable backend services 
              and microservices using Spring Boot, Core Java, and REST APIs. Skilled in SQL databases, 
              messaging systems (RabbitMQ, Kafka), caching (Redis), and deploying applications on 
              Tomcat and Nginx. Hands-on with API orchestration, frontend integrations, and system 
              design for high-performance applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-stagger">
              <div className="text-center p-6 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100">
                <Server className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-800 mb-2">Backend Services</h3>
                <p className="text-sm text-slate-600">Scalable microservices architecture</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100 delay-100">
                <Database className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-800 mb-2">Database Design</h3>
                <p className="text-sm text-slate-600">SQL optimization and data modeling</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100 delay-200">
                <Cloud className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-800 mb-2">Cloud Deployment</h3>
                <p className="text-sm text-slate-600">Production-ready deployments</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-left delay-300">
            <img
              src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Software Development"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 border border-slate-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;