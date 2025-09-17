import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

// Tech Bubble Hero Component
const TechBubbleHero = () => {
  const numBubbles = 60;
  const width = 400;
  const height = 400;

  const colors = [
    "bg-gradient-to-tr from-blue-400 to-blue-600",
    "bg-gradient-to-tr from-purple-400 to-purple-600",
    "bg-gradient-to-tr from-pink-400 to-pink-600",
    "bg-gradient-to-tr from-teal-400 to-teal-600",
    "bg-gradient-to-tr from-yellow-400 to-yellow-500",
    "bg-gradient-to-tr from-indigo-400 to-indigo-600",
  ];

  // Generate bubbles with minimum spacing
  const bubbles = [];
  for (let i = 0; i < numBubbles; i++) {
    let size = 15 + Math.random() * 50;
    let x, y;
    let tries = 0;

    // Ensure bubbles don’t overlap exactly
    do {
      x = Math.random() * (width - size);
      y = Math.random() * (height - size);
      tries++;
    } while (
      bubbles.some(
        (b) => Math.hypot(b.x - x, b.y - y) < (b.size + size) * 0.8
      ) && tries < 50
    );

    bubbles.push({
      x,
      y,
      size,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: 3 + Math.random() * 3,
      delay: Math.random() * 2,
      zIndex: Math.floor(Math.random() * 10), // optional for depth
    });
  }

  return (
    <div className="relative w-[400px] h-[400px]">
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          className={`absolute ${bubble.color} rounded-full opacity-70 shadow-xl`}
          style={{
            width: bubble.size,
            height: bubble.size,
            top: bubble.y,
            left: bubble.x,
            zIndex: bubble.zIndex,
          }}
          animate={{
            scale: [0, 1, 0], // pop-in and pop-out
            opacity: [0, 1, 0], // blinking effect
          }}
          transition={{
            repeat: Infinity,
            duration: bubble.duration,
            ease: "easeInOut",
            delay: bubble.delay,
          }}
        />
      ))}
    </div>
  );
};

// Full Hero Section
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center px-4 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            Naman Pal
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 font-medium">
            Full Stack Developer | React | Java | Spring Boot
          </h2>

          <div className="flex items-center justify-center md:justify-start text-gray-400 gap-2 mt-2">
            <MapPin className="w-5 h-5" />
            <span>Faridabad, India</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center md:justify-start mt-6">
            <a
              href="https://github.com/Naman1442002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/naman-pal-67b914245"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:naman1442002@gmail.com"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Resume Download Button */}
          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/Naman_Pal_Java_2years_Exp.pdf"
              download
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 relative overflow-hidden"
            >
              Download Resume
              <span className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 animate-bounce opacity-70"></span>
              <span className="absolute w-2 h-2 bg-white rounded-full bottom-2 right-3 animate-ping opacity-50"></span>
            </a>
          </div>
        </div>

        {/* Right Content: Tech Bubble Hero */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          <TechBubbleHero />
        </div>
      </div>
    </section>
  );
};

export default Hero;
