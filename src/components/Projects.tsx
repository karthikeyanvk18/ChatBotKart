
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* E-Voting Project */}
          <Card className="h-full">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-semibold text-navy-800">E-Voting</CardTitle>
                <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                  2022-2024
                </Badge>
              </div>
              <CardDescription className="text-gray-600">
                June 2022 - April 2024
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Developed a secure electronic voting system with robust authentication 
                and vote verification mechanisms to ensure integrity of the electoral process.
              </p>
            </CardContent>
          </Card>
          
          {/* Vehicle Detection Project */}
          <Card className="h-full">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-semibold text-navy-800">
                  Detecting and Counting of Vehicles Using Image Processing
                </CardTitle>
                <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                  2023
                </Badge>
              </div>
              <CardDescription className="text-gray-600">
                January 2023 - April 2023
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Research project on vehicle detection and counting using image processing 
                techniques, optimized for real-time traffic analysis.
              </p>
              <Button variant="outline" className="w-full flex items-center justify-center gap-2" asChild>
                <a href="http://www.jetir.org/view?paper=JETIR2304744" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  View Publication
                </a>
              </Button>
            </CardContent>
          </Card>
          
          {/* AI in IoT Project */}
          <Card className="h-full">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-semibold text-navy-800">
                  Application of Artificial Intelligence in the Internet of Things
                </CardTitle>
                <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                  2023
                </Badge>
              </div>
              <CardDescription className="text-gray-600">
                January 2023 - March 2023
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Research on applying AI techniques to enhance IoT systems, 
                focusing on improving efficiency and automation capabilities.
              </p>
              <Button variant="outline" className="w-full flex items-center justify-center gap-2" asChild>
                <a href="http://www.jetir.org/view?paper=JETIR2303408" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  View Publication
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
