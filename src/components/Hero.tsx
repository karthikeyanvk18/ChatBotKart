
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

interface HeroProps {
  openChat: () => void;
}

const Hero: React.FC<HeroProps> = ({ openChat }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy-800 mb-6">
            Hello, I'm <span className="text-blue-600">Karthikeyan P</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-navy-600 mb-8">
            Python and SQL Developer
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl">
            Innovative and tech-savvy Python and SQL developer with a strong commitment to clean coding practices 
            and robust database solutions. Proven ability to design, implement, and maintain storage frameworks 
            while ensuring security and performance optimization.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin size={16} className="text-blue-600" />
              <span>Karur, Tamil Nadu, India</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Mail size={16} className="text-blue-600" />
              <a href="mailto:codingmax17@gmail.com" className="hover:text-blue-600 transition">
                codingmax17@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Phone size={16} className="text-blue-600" />
              <a href="tel:+916379822744" className="hover:text-blue-600 transition">
                6379822744
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Linkedin size={16} className="text-blue-600" />
              <a href="https://www.linkedin.com/in/karthikeyan-p-138564250" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                in/karthikeyan-p-138564250
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Github size={16} className="text-blue-600" />
              <a href="https://github.com/karthikeyanvk18" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                github.com/karthikeyanvk18
              </a>
            </div>
          </div>
          
          <Button 
            onClick={openChat}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-6 text-base"
          >
            Chat with me about my work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
