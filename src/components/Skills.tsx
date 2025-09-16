import React, { useEffect, useRef, useState } from "react";
import { FaJava, FaReact, FaDatabase, FaDocker, FaCloud } from "react-icons/fa";
import { SiSpringboot, SiHibernate, SiPostman } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "React", level: 75, color: "from-blue-500 to-cyan-400" },
    { name: "Core Java", level: 90, color: "from-yellow-500 to-yellow-400" },
    { name: "Spring Boot", level: 90, color: "from-green-500 to-green-400" },
    { name: "REST APIs", level: 85, color: "from-purple-500 to-purple-400" },
    { name: "Hibernate", level: 70, color: "from-orange-500 to-orange-400" },
    { name: "SQL", level: 85, color: "from-red-500 to-red-400" },
    { name: "Microservices", level: 75, color: "from-indigo-500 to-indigo-400" },
    { name: "Docker", level: 65, color: "from-cyan-500 to-cyan-400" },
    { name: "Cloud", level: 55, color: "from-teal-500 to-teal-400" },
  ];

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false); // reset when section leaves viewport
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 bg-gradient-to-br from-slate-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12 flex justify-center items-center space-x-2">
          <span className="text-3xl animate-bounce">💻</span>
          <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-2">
            Technical Skills
          </h2>
          <span className="text-3xl animate-bounce">💻</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side Overview */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center pt-6 tracking-wide">
              Technical Expertise
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center space-y-2">
                <FaJava className="text-orange-500 text-4xl" />
                <span className="text-sm font-medium text-slate-700">Java</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <SiSpringboot className="text-green-500 text-4xl" />
                <span className="text-sm font-medium text-slate-700">Spring Boot</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FaReact className="text-sky-500 text-4xl" />
                <span className="text-sm font-medium text-slate-700">React</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <SiPostman className="text-purple-500 text-4xl" />
                <span className="text-sm font-medium text-slate-700">APIs</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FaProjectDiagram className="text-indigo-500 text-4xl" />
                <span className="text-sm font-medium text-slate-700">Microservices</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FaDatabase className="text-red-500 text-4xl" />
                <span className="text-sm font-medium text-slate-700">SQL</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <SiHibernate className="text-orange-400 text-4xl" />
                <span className="text-sm font-medium text-slate-700">Hibernate</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FaDocker className="text-cyan-500 text-4xl" />
                <span className="text-sm font-medium text-slate-700">Docker</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FaCloud className="text-teal-500 text-4xl" />
                <span className="text-sm font-medium text-slate-700">Cloud</span>
              </div>
            </div>

            <p className="text-slate-600 text-center mt-10 font-mono text-base md:text-lg leading-relaxed px-6">
              Building scalable, modern full-stack applications with a focus on clean architecture, 
              robust backend systems, and engaging user experiences powered by React, Java, and Spring Boot.
            </p>
          </div>

          {/* Right Side Progress Bars */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-3000 hover:scale-105 border border-slate-100"
                style={{ transitionDelay: `${index * 1}ms` }} // stagger
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-slate-800 font-mono">{skill.name}</h3>
                  <span className="text-slate-600 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-[width] duration-20000 linear`} // slower
                    style={{ width: visible ? `${skill.level}%` : "0%" }}
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
