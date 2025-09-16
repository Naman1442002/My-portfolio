import React from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 animate-fade-in-up flex justify-center items-center space-x-2">
          <span className="text-3xl animate-wave">👋</span>
          <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-2">
            Get In Touch
          </h2>
          <span className="text-3xl animate-wave">👋</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up delay-200">
          
          {/* Left Card: Quick Connect */}
          <div className="animate-fade-in-left delay-300">
            <div className="w-full h-64 bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 border border-slate-200 flex items-center justify-center">
              <div className="text-center space-y-4">
                
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                
                {/* Text */}
                <div className="space-y-2">
                  <div className="text-slate-700 font-semibold">Let's Connect</div>
                  <div className="text-slate-500 text-sm">Ready for new opportunities</div>
                </div>
                
                {/* Clickable Icons */}
                <div className="flex justify-center space-x-3">
                  <a
                    href="mailto:naman1442002@gmail.com"
                    className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <Mail className="w-4 h-4 text-blue-600" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/naman-pal-67b914245"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <Linkedin className="w-4 h-4 text-blue-600" />
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Right Card: Detailed Contact */}
          <div className="space-y-8 animate-fade-in-right delay-500">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Let's work together
              </h3>
              <p className="text-lg text-slate-600 mb-8">
                I'm always interested in discussing new opportunities, 
                innovative projects, and ways to contribute to your team's success.
              </p>
            </div>

            <div className="space-y-6 animate-stagger">

              {/* Email */}
              <a
                href="mailto:naman1442002@gmail.com"
                className="flex items-center p-4 bg-white rounded-2xl hover:bg-blue-50 hover:shadow-xl transition-all duration-300 group hover:scale-105 border border-slate-100"
              >
                <Mail className="w-6 h-6 text-blue-600 mr-4 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="font-semibold text-slate-800">Email</h4>
                  <p className="text-slate-600">naman1442002@gmail.com</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/naman-pal-67b914245"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white rounded-2xl hover:bg-blue-50 hover:shadow-xl transition-all duration-300 group hover:scale-105 border border-slate-100"
              >
                <Linkedin className="w-6 h-6 text-blue-600 mr-4 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="font-semibold text-slate-800">LinkedIn</h4>
                  <p className="text-slate-600">www.linkedin.com/in/naman-pal-67b914245</p>
                </div>
              </a>

              {/* Location (Clickable Google Maps) */}
              <a
                href="https://www.google.com/maps/place/Faridabad,+Haryana,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300"
              >
                <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h4 className="font-semibold text-slate-800">Location</h4>
                  <p className="text-slate-600">Faridabad, India</p>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
