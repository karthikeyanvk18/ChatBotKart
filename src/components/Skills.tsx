
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const technicalSkills = ["Python", "SQL", "Flask", "Django", "Database Development", "API Integration", "Git"];
  const softSkills = ["Critical Thinking", "Problem Solving", "Team Collaboration", "Leadership", "Communication"];
  
  const certifications = [
    { name: "HTML and CSS", provider: "GUVI", year: "2024" },
    { name: "Python Fundamentals", provider: "Infosys", year: "2024", details: "Variables, data types, and operators." },
    { name: "Introduction SQL", provider: "SIMPLILEARN", year: "2024" },
    { name: "Quantitative Aptitude Basics", provider: "Great Learning", year: "2023", details: "Variables, data types, and operators." },
    { name: "Introduction to Digital Marketing", provider: "Great Learning", year: "2023" },
    { name: "Investment Risk Management", provider: "Coursera", year: "2024", details: "Investment in SIP" },
    { name: "Artificial Intelligence Beginners Guide", provider: "SIMPLILEARN", year: "2024", details: "What is AI, Some Basics in Generative AI" },
    { name: "AWSome Day Online Conference", provider: "Amazon", year: "2024", details: "Some Basic About in AWS" }
  ];
  
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-navy-700 mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <Badge key={index} className="bg-blue-100 text-blue-800 border-blue-200 px-3 py-1 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Soft Skills */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-navy-700 mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge key={index} className="bg-purple-100 text-purple-800 border-purple-200 px-3 py-1 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Certifications */}
        <h3 className="text-xl font-semibold text-navy-700 mb-4">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-4">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-navy-700">{cert.name}</h4>
                    <Badge variant="outline" className="bg-blue-50 text-blue-600 text-xs">
                      {cert.year}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-1">{cert.provider}</p>
                  {cert.details && (
                    <p className="text-gray-500 text-sm mt-auto">{cert.details}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
