
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

// Portfolio data for the chatbot to use
const portfolioData = {
  name: "Karthikeyan P",
  location: "Karur, Tamil Nadu, India",
  email: "codingmax17@gmail.com",
  phone: "6379822744",
  linkedin: "in/karthikeyan-p-138564250",
  github: "github.com/karthikeyanvk18",
  summary: "Innovative and tech-savvy Python and SQL developer with a strong commitment to clean coding practices and robust database solutions. Proven ability to design, implement, and maintain storage frameworks while ensuring security and performance optimization. Adept at collaborating with multi-disciplinary teams to deliver dynamic software engineering solutions.",
  experience: [
    {
      role: "Python Developer",
      company: "Outliers AI",
      period: "September 2024 - Till Now",
      description: "Working as a Python Developer at Outliers AI."
    }
  ],
  projects: [
    {
      name: "E-Voting",
      period: "June 2022 - April 2024",
      description: "Worked on E-Voting project."
    },
    {
      name: "Detecting and Counting of Vehicles Using Image Processing",
      period: "January 2023 - April 2023",
      link: "www.jetir.org/view?paper=JETIR2304744",
      description: "Research project on vehicle detection and counting using image processing techniques."
    },
    {
      name: "Application of Artificial Intelligence in the Internet of Things",
      period: "January 2023 - March 2023",
      link: "www.jetir.org/view?paper=JETIR2303408",
      description: "Research on applying AI in IoT systems."
    }
  ],
  certifications: [
    "HTML and CSS (GUVI, 2024)",
    "Python Fundamentals (Infosys, 2024)",
    "Introduction SQL (SIMPLILEARN, 2024)",
    "Quantitative Aptitude Basics (Great Learning, 2023)",
    "Introduction to Digital Marketing (Great Learning, 2023)",
    "Investment Risk Management (Coursera, 2024)",
    "Artificial Intelligence Beginners Guide (SIMPLILEARN, 2024)",
    "AWSome Day Online Conference (Amazon, 2024)"
  ],
  education: [
    {
      degree: "Master of Computer Application",
      institution: "Hindusthan College of Arts & Science College",
      location: "Coimbatore, Tamil Nadu",
      year: "2023",
      gpa: "7.8",
      focus: "Focus on Advanced Programming and Database Management."
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "National College",
      location: "Trichy",
      year: "2021",
      gpa: "7.7",
      focus: "Emphasis on Database Systems and Software Development."
    },
    {
      degree: "12th",
      institution: "Holy Madonna's Matriculation Higher Secondary School",
      location: "Lalapettai, Tamil Nadu",
      year: "2018",
      percentage: "51%"
    },
    {
      degree: "10th",
      institution: "Holy Madonna's Matriculation Higher Secondary School",
      location: "Lalapettai, Tamil Nadu",
      year: "2016",
      percentage: "80%"
    }
  ],
  skills: {
    technical: ["Python", "SQL", "Flask", "Django", "Database Development", "API Integration", "Git"],
    soft: ["Critical Thinking", "Problem Solving", "Team Collaboration", "Leadership", "Communication"]
  }
};

// Function to generate responses based on user input
const generateResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  
  // Greetings
  if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
    return `Hello! I'm a chatbot assistant for ${portfolioData.name}. How can I help you today? You can ask about his experience, projects, skills, education, or anything else from his portfolio.`;
  }
  
  // Name
  if (lowerInput.includes("your name") || lowerInput.includes("who are you")) {
    return `I'm a chatbot representing ${portfolioData.name}, a Python and SQL Developer. How can I assist you?`;
  }
  
  // Contact information
  if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("phone")) {
    return `You can contact ${portfolioData.name} via:
    - Email: ${portfolioData.email}
    - Phone: ${portfolioData.phone}
    - LinkedIn: ${portfolioData.linkedin}`;
  }
  
  // Experience
  if (lowerInput.includes("experience") || lowerInput.includes("work") || lowerInput.includes("job")) {
    const expText = portfolioData.experience.map(exp => `${exp.role} at ${exp.company} (${exp.period})`).join('\n');
    return `${portfolioData.name}'s work experience includes:\n${expText}\n\nHe is currently working as a Python Developer at Outliers AI.`;
  }
  
  // Projects
  if (lowerInput.includes("project")) {
    const projText = portfolioData.projects.map(proj => `- ${proj.name} (${proj.period})`).join('\n');
    return `${portfolioData.name} has worked on the following projects:\n${projText}\n\nYou can ask about any specific project for more details.`;
  }
  
  // Education
  if (lowerInput.includes("education") || lowerInput.includes("degree") || lowerInput.includes("college") || lowerInput.includes("university")) {
    return `Educational background:
    - Master of Computer Application from Hindusthan College (2023, GPA: 7.8)
    - Bachelor of Science in Computer Science from National College (2021, GPA: 7.7)
    - 12th from Holy Madonna's School (2018, 51%)
    - 10th from Holy Madonna's School (2016, 80%)`;
  }
  
  // Skills
  if (lowerInput.includes("skill") || lowerInput.includes("know") || lowerInput.includes("capable")) {
    return `Technical skills: ${portfolioData.skills.technical.join(', ')}
    
Soft skills: ${portfolioData.skills.soft.join(', ')}`;
  }
  
  // Certifications
  if (lowerInput.includes("certification") || lowerInput.includes("course") || lowerInput.includes("training")) {
    return `Certifications include:\n${portfolioData.certifications.join('\n')}`;
  }
  
  // Specific project inquiries
  if (lowerInput.includes("e-voting") || lowerInput.includes("voting")) {
    return `The E-Voting project was developed between June 2022 and April 2024. It's a digital voting system that securely manages the election process.`;
  }
  
  if (lowerInput.includes("vehicle") || lowerInput.includes("image processing") || lowerInput.includes("detecting")) {
    return `"Detecting and Counting of Vehicles Using Image Processing" was a research project conducted from January to April 2023. The paper is available at: www.jetir.org/view?paper=JETIR2304744`;
  }
  
  if (lowerInput.includes("ai") || lowerInput.includes("artificial intelligence") || lowerInput.includes("iot") || lowerInput.includes("internet of things")) {
    return `"Application of Artificial Intelligence in the Internet of Things" was a research project exploring how AI can enhance IoT systems. The paper was published in March 2023 and is available at: www.jetir.org/view?paper=JETIR2303408`;
  }
  
  // Location
  if (lowerInput.includes("location") || lowerInput.includes("where") || lowerInput.includes("city") || lowerInput.includes("from")) {
    return `${portfolioData.name} is from ${portfolioData.location}.`;
  }
  
  // About/Summary
  if (lowerInput.includes("about") || lowerInput.includes("summary") || lowerInput.includes("who is") || lowerInput.includes("tell me about")) {
    return portfolioData.summary;
  }
  
  // Python skills
  if (lowerInput.includes("python")) {
    return `${portfolioData.name} is proficient in Python programming, with experience in various frameworks like Flask and Django. He's currently working as a Python Developer at Outliers AI.`;
  }
  
  // SQL skills
  if (lowerInput.includes("sql") || lowerInput.includes("database")) {
    return `${portfolioData.name} has strong SQL and database development skills, with emphasis on robust database solutions and performance optimization.`;
  }
  
  // Default response
  return `I'm not sure about that specific information. You can ask about ${portfolioData.name}'s experience, projects, education, skills, or contact information. How else can I help you?`;
};

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: `Hello! I'm ${portfolioData.name}'s assistant. How can I help you today?`, isUser: false }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isUser: true
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    
    // Generate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: generateResponse(input),
        isUser: false
      };
      
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 500);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div 
        className={cn(
          "chatbot-container bg-white w-full max-w-md h-[550px] flex flex-col",
          "transform transition-all duration-300 ease-in-out",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )}
      >
        {/* Chatbot header */}
        <div className="p-4 bg-blue-600 text-white rounded-t-lg flex justify-between items-center">
          <h3 className="font-semibold">Chat with Karthikeyan's Assistant</h3>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-blue-700 rounded-full h-8 w-8 p-0">
            <X size={18} />
          </Button>
        </div>
        
        {/* Chat messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map(message => (
            <div 
              key={message.id} 
              className={cn(
                "chatbot-message mb-4 p-3 rounded-lg",
                message.isUser ? "user-message" : "bot-message"
              )}
            >
              {message.text.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < message.text.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input area */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700">
              <Send size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
