
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Experience</h2>
        
        <Card className="mb-6">
          <CardHeader className="pb-2">
            <div className="flex flex-wrap justify-between items-start gap-2">
              <CardTitle className="text-xl font-semibold text-navy-800">Python Developer</CardTitle>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                September 2024 - Present
              </Badge>
            </div>
            <p className="text-gray-600 font-medium">Outliers AI</p>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Currently working as a Python Developer at Outliers AI, focusing on developing AI-powered solutions.
            </p>
          </CardContent>
        </Card>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-navy-700 mb-4">Coursework</h3>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <CardTitle className="text-xl font-semibold text-navy-800">30 Days Master Class in AI</CardTitle>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  2024
                </Badge>
              </div>
              <p className="text-gray-600 font-medium">Novi Tech R&D Private Limited</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Completed an intensive masterclass in AI, working on projects using artificial intelligence technologies.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-navy-700 mb-4">Involvement</h3>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <CardTitle className="text-xl font-semibold text-navy-800">Game Developing</CardTitle>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  March 2023 - September 2024
                </Badge>
              </div>
              <p className="text-gray-600 font-medium">Coding Maxi</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Involved in game development projects at Coding Maxi, applying programming skills to create interactive gaming experiences.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
