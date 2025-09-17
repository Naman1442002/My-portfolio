import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const Timeline = () => {
  const experiences = [
    {
      title: 'Journey at Fonada',
      role: 'Java Developer',
      period: 'Oct 2023 – Sep 2025',
      description: `I began as an intern focusing on REST API security and MySQL optimization. 
      Over time, I transitioned into a full-time role where I built scalable microservices, 
      integrated ChatGPT APIs, and solved production-level challenges with RabbitMQ, Redis, 
      and Nginx deployments. This journey helped me grow from learning the fundamentals 
      to handling real-world systems end-to-end.`,
      tags: ['Spring Boot', 'REST APIs', 'MySQL', 'RabbitMQ', 'Redis', 'ChatGPT API', 'Nginx'],
    },
  ];

  const education = [
    {
      degree: 'B.Sc (Hons) Computer Science',
      school: 'Keshav Mahavidyalaya, University of Delhi',
      period: '2020 – 2023',
      color: 'from-green-600 to-green-700',
      details: ['CGPA: 8.25'],
    },
    {
      degree: 'Senior Secondary (Class XII)',
      school: 'CBSE Board',
      period: '2019 – 2020',
      color: 'from-blue-600 to-blue-700',
      details: ['Percentage: 92%'],
    },
    {
      degree: 'Secondary (Class X)',
      school: 'CBSE Board',
      period: '2018 – 2019',
      color: 'from-purple-600 to-purple-700',
      details: ['Percentage: 82%'],
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 space-y-20">

        {/* Experience Section */}
        <div>
          <div className="text-center mb-12 animate-fade-in-up flex justify-center items-center space-x-2">
            <span className="text-3xl animate-bounce">💼</span>
            <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Experience
            </h2>
            <span className="text-3xl animate-bounce">💼</span>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-pulse mb-12"></div>

          {experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:scale-105 max-w-4xl mx-auto"
            >
              <div className="flex items-center mb-4">
                <div
                  className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-md"
                >
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
                  <p className="text-slate-600">{exp.title}</p>
                </div>
              </div>
              <span className="inline-block text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full text-sm mb-4">
                {exp.period}
              </span>
              <p className="text-slate-600 leading-relaxed mb-6">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div>
          <div className="text-center mb-12 animate-fade-in-up flex justify-center items-center space-x-2">
            <span className="text-3xl animate-bounce">🎓</span>
            <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-600">
              Education
            </h2>
            <span className="text-3xl animate-bounce">🎓</span>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-teal-600 mx-auto rounded-full animate-pulse mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${edu.color} rounded-full flex items-center justify-center shadow-md`}
                  >
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-slate-800">{edu.degree}</h3>
                    <p className="text-slate-600">{edu.school}</p>
                  </div>
                </div>
                <span className="inline-block text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full text-sm mb-4">
                  {edu.period}
                </span>
                {edu.details.map((d, idx) => (
                  <p key={idx} className="text-slate-600">{d}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
