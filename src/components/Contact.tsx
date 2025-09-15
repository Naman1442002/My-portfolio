import React from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up delay-200">
          <div className="animate-fade-in-left delay-300">
            <img
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Contact"
              className="w-full h-64 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 border border-slate-200"
            />
          </div>

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

              <div className="flex items-center p-4 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h4 className="font-semibold text-slate-800">Location</h4>
                  <p className="text-slate-600">Noida, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;