import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Core Java', level: 90, color: 'from-blue-500 to-blue-700' },
    { name: 'Spring Boot', level: 85, color: 'from-green-500 to-green-700' },
    { name: 'REST APIs', level: 85, color: 'from-purple-500 to-purple-700' },
    { name: 'Hibernate', level: 70, color: 'from-orange-500 to-orange-700' },
    { name: 'SQL', level: 80, color: 'from-red-500 to-red-700' },
    { name: 'Microservices', level: 80, color: 'from-indigo-500 to-indigo-700' },
    { name: 'Docker', level: 60, color: 'from-cyan-500 to-cyan-700' },
    { name: 'Cloud', level: 55, color: 'from-teal-500 to-teal-700' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white to-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up delay-200">
          <div className="animate-fade-in-right">
            <div className="w-full h-64 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 rounded-2xl shadow-2xl mb-8 hover:scale-105 transition-transform duration-500 border border-slate-200 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center animate-pulse">
                    <span className="text-white font-bold text-sm">Java</span>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center animate-pulse delay-200">
                    <span className="text-white font-bold text-xs">Boot</span>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center animate-pulse delay-300">
                    <span className="text-white font-bold text-xs">SQL</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-pulse delay-500">
                    <span className="text-white font-bold text-xs">API</span>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center animate-pulse delay-700">
                    <span className="text-white font-bold text-xs">μS</span>
                  </div>
                </div>
                <div className="text-slate-600 font-mono text-sm animate-fade-in-up delay-1000">
                  Full Stack Development
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-stagger">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-slate-800 font-mono">{skill.name}</h3>
                  <span className="text-slate-600 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out animate-skill-bar`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;