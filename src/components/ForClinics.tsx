import React from 'react';
import { Clock, DollarSign, TrendingUp, Users, Award, ChevronRight } from 'lucide-react';

const ForClinics = () => {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Save Staff Time",
      description: "Automate routine tasks so staff can focus on complex cases that need human expertise. Reduce call times and paperwork review.",
      metric: "Focus on Complex Cases",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      title: "Reduce Denials",
      description: "AI-powered tools help staff quickly identify and contest inappropriate denials, improving approval rates and cash flow.",
      metric: "Smarter Denial Reviews",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
      title: "Speed Up Payments",
      description: "Automated tracking and intelligent alerts help staff prioritize follow-ups and resolve payment delays more efficiently.",
      metric: "Streamlined Follow-ups",
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const features = [
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Automated Routine Tasks",
      description: "Handle standard verifications automatically while flagging complex cases for staff review."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      title: "Intelligent Denial Analysis",
      description: "AI-powered insights help staff quickly identify which denials are worth contesting."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
      title: "Smart Follow-up Alerts",
      description: "Automated tracking with intelligent prioritization for more efficient payment resolution."
    }
  ];

  return (
    <section id="for-clinics" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for Dental Clinics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Efficover is designed specifically for dental practices. We don't replace your office staff - 
            we automate what we can and provide intelligent tools to help them work more efficiently on complex cases.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`${benefit.color} border-2 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center shadow-md">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {benefit.description}
              </p>
              <div className="bg-white rounded-lg p-3 font-bold text-gray-900">
                {benefit.metric}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Key Features for Dental Practices
            </h3>
            <p className="text-gray-600 text-lg">
              Built specifically for dental workflow challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-gray-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Streamline Your Workflow?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              See how Efficover can automate routine tasks while empowering your staff to handle complex cases more efficiently. 
              HIPAA-compliant and designed specifically for dental practice workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg flex items-center justify-center space-x-2"
              >
                <span>Schedule a Demo</span>
                <ChevronRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 font-semibold text-lg"
              >
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForClinics;