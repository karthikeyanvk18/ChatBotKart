
import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-2">Karthikeyan P</h2>
            <p className="text-gray-300">Python & SQL Developer</p>
          </div>
          
          <div className="flex flex-col space-y-2">
            <a href="mailto:codingmax17@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition">
              <Mail size={16} />
              <span>codingmax17@gmail.com</span>
            </a>
            <a href="tel:+916379822744" className="flex items-center gap-2 text-gray-300 hover:text-white transition">
              <Phone size={16} />
              <span>6379822744</span>
            </a>
            <a href="https://www.linkedin.com/in/karthikeyan-p-138564250" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition">
              <Linkedin size={16} />
              <span>in/karthikeyan-p-138564250</span>
            </a>
            <a href="https://github.com/karthikeyanvk18" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition">
              <Github size={16} />
              <span>github.com/karthikeyanvk18</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Karthikeyan P. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
