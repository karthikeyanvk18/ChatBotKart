
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Education</h2>
        
        <div className="space-y-6">
          {/* Master's Degree */}
          <Card>
            <CardHeader className="pb-2">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <CardTitle className="text-xl font-semibold text-navy-800">
                  Master of Computer Application
                </CardTitle>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    2023
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 border-green-200">
                    GPA: 7.8
                  </Badge>
                </div>
              </div>
              <div className="text-gray-600">
                Hindusthan College of Arts & Science College, Coimbatore, Tamil Nadu
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Focus on Advanced Programming and Database Management.
              </p>
            </CardContent>
          </Card>
          
          {/* Bachelor's Degree */}
          <Card>
            <CardHeader className="pb-2">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <CardTitle className="text-xl font-semibold text-navy-800">
                  Bachelor of Science in Computer Science
                </CardTitle>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    2021
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 border-green-200">
                    GPA: 7.7
                  </Badge>
                </div>
              </div>
              <div className="text-gray-600">
                National College, Trichy
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Emphasis on Database Systems and Software Development.
              </p>
            </CardContent>
          </Card>
          
          {/* 12th Standard */}
          <Card>
            <CardHeader className="pb-2">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <CardTitle className="text-xl font-semibold text-navy-800">
                  12th Standard
                </CardTitle>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    2018
                  </Badge>
                  <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">
                    51%
                  </Badge>
                </div>
              </div>
              <div className="text-gray-600">
                Holy Madonna's Matriculation Higher Secondary School, Lalapettai, Tamil Nadu
              </div>
            </CardHeader>
          </Card>
          
          {/* 10th Standard */}
          <Card>
            <CardHeader className="pb-2">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <CardTitle className="text-xl font-semibold text-navy-800">
                  10th Standard
                </CardTitle>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    2016
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 border-green-200">
                    80%
                  </Badge>
                </div>
              </div>
              <div className="text-gray-600">
                Holy Madonna's Matriculation Higher Secondary School, Lalapettai, Tamil Nadu
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
