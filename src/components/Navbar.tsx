
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

interface NavbarProps {
  openChat: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ openChat }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-lg md:text-xl font-display font-semibold text-navy-800">
            Karthikeyan P
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-navy-700 hover:text-blue-600 transition">About</a>
          <a href="#experience" className="text-navy-700 hover:text-blue-600 transition">Experience</a>
          <a href="#projects" className="text-navy-700 hover:text-blue-600 transition">Projects</a>
          <a href="#education" className="text-navy-700 hover:text-blue-600 transition">Education</a>
          <a href="#skills" className="text-navy-700 hover:text-blue-600 transition">Skills</a>
        </nav>
        <Button 
          onClick={openChat}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
        >
          <MessageSquare size={16} />
          <span className="hidden md:inline">Chat with me</span>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
