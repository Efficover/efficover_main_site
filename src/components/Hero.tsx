import React from 'react';
import { ArrowRight, Calendar, Shield, Users, FileText, Clock } from 'lucide-react';
import ToothIcon from './ToothIcon';
import Logo from './Logo';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-cyan-50 pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Automate dental insurance workflows so your team can focus on{' '}
                <span className="text-blue-600">care, not paperwork</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Efficover streamlines routine dental insurance tasks like coverage verification, claims tracking, and EOB processing. Intelligent tools help your staff quickly handle complex cases, reduce phone time, and improve cash flow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 group"
              >
                <span className="text-lg font-semibold">Request Demo</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-105 text-lg font-semibold"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Insurance Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Coverage Verified</span>
                    <span className="text-green-600 font-semibold">98%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Claims Processed</span>
                    <span className="text-blue-600 font-semibold">247</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-700">Pending Reviews</span>
                    <span className="text-yellow-600 font-semibold">12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Full-width features section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-sm text-gray-600 font-medium">HIPAA Compliant</p>
          </div>
          <div className="text-center">
            <div className="bg-cyan-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <Users className="h-8 w-8 text-cyan-600" />
            </div>
            <p className="text-sm text-gray-600 font-medium">Easy PMS Integration</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <Calendar className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-sm text-gray-600 font-medium">24/7 Support</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <FileText className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-sm text-gray-600 font-medium">Automated EOB Processing</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
            <p className="text-sm text-gray-600 font-medium">Faster VOC Turnaround</p>
          </div>
          <div className="text-center">
            <div className="bg-teal-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <ToothIcon className="h-8 w-8 text-teal-600" />
            </div>
            <p className="text-sm text-gray-600 font-medium">Built for Dental</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;