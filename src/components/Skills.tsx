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
            <img
              src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Programming"
              className="w-full h-64 object-cover rounded-2xl shadow-2xl mb-8 hover:scale-105 transition-transform duration-500 border border-slate-200"
            />
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