import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-white to-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className="relative animate-fade-in-up delay-200">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          {/* Current Position */}
          <div className="relative flex items-center mb-12 animate-fade-in-right delay-300">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div className="ml-6 md:ml-8 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 max-w-2xl border border-slate-100">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold text-slate-800">Java Developer</h3>
                  <span className="text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full">Apr 2024 – Present</span>
                </div>
                <p className="text-lg text-slate-600 mb-2">Fonada, Noida</p>
                <ul className="text-slate-600 space-y-1">
                  <li>• Built scalable backend services for bot onboarding, RCS campaign management, and analytics</li>
                  <li>• Designed real-time callback handler with multithreaded architecture</li>
                  <li>• Integrated OpenAI APIs for chat summarization and disposition analysis</li>
                  <li>• Implemented Redis caching, RabbitMQ messaging, and MySQL query optimizations</li>
                  <li>• Deployed services on Tomcat and Nginx for production</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Internship */}
          <div className="relative flex items-center mb-12 animate-fade-in-right delay-500">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div className="ml-6 md:ml-8 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 max-w-2xl border border-slate-100">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold text-slate-800">Java Developer Intern</h3>
                  <span className="text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full">Oct 2023 – Apr 2024</span>
                </div>
                <p className="text-lg text-slate-600 mb-2">Fonada, Noida</p>
                <ul className="text-slate-600 space-y-1">
                  <li>• Developed Spring Boot microservices for bot onboarding and LLM API integrations</li>
                  <li>• Implemented REST APIs, RabbitMQ queues, and MySQL persistence layers</li>
                  <li>• Contributed to unit testing, debugging, and documentation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="relative flex items-center animate-fade-in-right delay-700">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="ml-6 md:ml-8 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 max-w-2xl border border-slate-100">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold text-slate-800">B.Sc (Hons) Computer Science</h3>
                  <span className="text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full">2021 – 2023</span>
                </div>
                <p className="text-lg text-slate-600 mb-2">Keshav Mahavidyalaya, University of Delhi</p>
                <p className="text-slate-600">
                  <span className="font-semibold">CGPA:</span> <span className="text-green-600 font-bold">8.25</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;