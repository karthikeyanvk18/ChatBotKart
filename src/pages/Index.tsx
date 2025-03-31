
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const handleOpenChat = () => {
    setIsChatOpen(true);
  };
  
  const handleCloseChat = () => {
    setIsChatOpen(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar openChat={handleOpenChat} />
      <Hero openChat={handleOpenChat} />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Footer />
      <Chatbot isOpen={isChatOpen} onClose={handleCloseChat} />
    </div>
  );
};

export default Index;
