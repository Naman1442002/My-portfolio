import React from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'CoreAI Engine',
      description: 'Modular backend for bot creation, tool integration, and campaign management',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'RabbitMQ', 'Kafka', 'REST APIs']
    },
    {
      title: 'Disposition Analyzer',
      description: 'Summarized and classified bot-user chat sessions using OpenAI APIs and analytics',
      tech: ['Java', 'Spring Boot', 'OpenAI APIs', 'MySQL', 'RabbitMQ']
    },
    {
      title: 'Callback Handler',
      description: 'Real-time callback delivery with multithreaded queueing logic for multiple clients',
      tech: ['Java', 'Spring Boot', 'Multithreading', 'RabbitMQ', 'Redis']
    },
    {
      title: 'Tool-Calling API Orchestrator',
      description: 'Runtime API trigger system with dynamic data injection and fallback handling',
      tech: ['Java', 'Spring Boot', 'REST APIs', 'Redis', 'MySQL']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-stagger">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-100 group p-6"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-4">
                <div className="w-full h-32 bg-gradient-to-br from-blue-100 via-purple-50 to-cyan-100 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:via-purple-100 group-hover:to-cyan-200 transition-all duration-500">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                      <Code2 className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-mono text-slate-600 font-semibold">
                      {project.title.split(' ')[0]}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-mono font-medium hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <button className="flex items-center text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-105">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </button>
                  <button className="flex items-center text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-105">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </button>
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