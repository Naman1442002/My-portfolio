import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Professional Tagline */}
        <p className="text-gray-400 text-sm md:text-base animate-fade-in-up">
          © 2024 Naman Pal. Innovating with code, creating meaningful digital experiences.
        </p>

        {/* Social Links */}
        <div className="flex gap-6 animate-fade-in-up delay-200">
          {/* GitHub */}
          <a
            href="https://github.com/Naman1442002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/naman-pal-67b914245"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          {/* Email */}
          <a
            href="mailto:naman1442002@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
