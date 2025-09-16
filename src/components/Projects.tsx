import React from "react";
import { Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Rich Communication Services (RCS) Platform",
      company: "Fonada",
      period: "Jan 2024 – Present",
      description: "Backend of multimedia messaging platform with secure auth & campaign management.",
      tech: ["Java", "Spring Boot", "MySQL", "Redis", "RabbitMQ", "REST APIs"],
    },
    {
      title: "SMS Platform",
      company: "Fonada",
      period: "Nov 2022 – Dec 2023",
      description: "Backend system for SMS processing & callback handling.",
      tech: ["Java", "Spring Boot", "MySQL", "Redis", "RabbitMQ", "JWT", "REST APIs"],
    },
    {
      title: "Disposition Analyzer",
      company: "Fonada",
      period: "2023",
      description: "Analyzed chat/call dispositions & generated summaries.",
      tech: ["Java", "Spring Boot", "MySQL", "OpenAI APIs", "RabbitMQ"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading with animated emoji */}
        <div className="text-center mb-12 animate-fade-in-up flex justify-center items-center space-x-2">
          <span className="text-3xl animate-bounce">🚀</span>
          <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-2">
            Projects
          </h2>
          <span className="text-3xl animate-bounce">🚀</span>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 flex overflow-hidden"
            >
              {/* Image/Icon - 40% */}
              <div className="w-2/5 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Text content - 60% */}
              <div className="w-3/5 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">{project.title}</h3>
                  <p className="text-sm text-slate-500 mb-2">{project.period}</p>
                  <p className="text-sm text-slate-600 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
