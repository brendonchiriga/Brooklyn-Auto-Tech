import React from 'react';
import { Phone, CheckSquare, Settings, ThumbsUp } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Contact Us",
    desc: "Reach out via phone or WhatsApp to discuss your needs.",
    icon: <Phone size={24} />
  },
  {
    num: "02",
    title: "Confirm Details",
    desc: "We verify your vehicle make, model, and system requirements.",
    icon: <CheckSquare size={24} />
  },
  {
    num: "03",
    title: "Installation",
    desc: "Visit our workshop or we come to you (mobile service).",
    icon: <Settings size={24} />
  },
  {
    num: "04",
    title: "Handover",
    desc: "Full testing and demonstration of your new system.",
    icon: <ThumbsUp size={24} />
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-brand-primary">HOW IT WORKS</h2>
            <div className="h-1 w-20 bg-brand-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
                <div key={idx} className="relative text-center group">
                    {/* Connector Line */}
                    {idx !== steps.length - 1 && (
                        <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
                    )}
                    
                    <div className="w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-400 group-hover:border-brand-accent group-hover:text-brand-accent transition-all duration-300 mb-6 z-10 relative">
                        {step.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm px-4">{step.desc}</p>
                    
                    <div className="absolute top-0 right-0 opacity-10 text-6xl font-black text-gray-400 -z-10 select-none">
                        {step.num}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;