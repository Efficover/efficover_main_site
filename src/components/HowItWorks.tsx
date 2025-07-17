import React from 'react';
import { CheckCircle, Search, FileText, Zap, Brain } from 'lucide-react';

const HowItWorks = () => {
  const features = [
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: "Insurance Coverage Verification",
      description: "Verifies routine coverage using both electronic eligibility checks and voice agents that contact payers directly. Complex or incomplete cases are flagged for staff follow-up.",
      benefits: ["Automated routine verification", "Voice agent payer calls", "Complex case flagging"]
    },
    {
      icon: <FileText className="h-8 w-8 text-cyan-600" />,
      title: "Claims Tracking and Status Updates",
      description: "Auto-generates claims from completed procedures and tracks their status. AI reads insurance documents and procedure notes to flag errors, ensure claim accuracy, and assist with appeals.",
      benefits: ["Claim tracking and automation", "AI-assisted denial detection", "Contestable claim flagging"]
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: "PMS Integration",
      description: "Integrates easily with leading dental PMS systems through APIs or file uploads, keeping schedules, patient data, and insurance info in sync—without disrupting current workflows.",
      benefits: ["Quick PMS setup", "No workflow changes", "HIPAA-compliant sync"]
    },
    {
      icon: <Brain className="h-8 w-8 text-green-600" />,
      title: "AI-Assisted Decision Support",
      description: "Uses AI to read benefits, EOBs, and clinical notes to identify missing or incorrect info before claim submission. Staff get clear recommendations to resolve issues faster.",
      benefits: ["Intelligent pre-checks", "Documentation error detection", "Staff-ready resolution tips"]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Efficover Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our intelligent platform automates routine insurance tasks while providing smart tools 
            to help your staff efficiently handle complex cases and make better decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;