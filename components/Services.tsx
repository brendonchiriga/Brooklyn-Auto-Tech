import React from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Car Alarms & Immobilisers",
    desc: "Professional installation of aftermarket security systems designed to protect your vehicle from theft and unauthorised access.",
    image: "https://lh3.googleusercontent.com/d/1xi0xrleZ94cQbiU2FvhLiVwLfmSLj5Qo" // Car alarm
  },
  {
    title: "Reverse View Systems",
    desc: "Clear rear-view camera systems and sensors for safer parking and reversing. Includes seamless dashboard integration.",
    image: "https://lh3.googleusercontent.com/d/15PJak41PhyolnT0hHts2AXneoqyEFstK" // Reverse cam (Updated)
  },
  {
    title: "Dash Cameras",
    desc: "Front and dual-channel dash cam installation for added security and evidence recording. Hard-wired for clean aesthetics.",
    image: "https://lh3.googleusercontent.com/d/1zmkJmmAluU4c9b16X9OmT54QA3jpnIwH" // Dash cam (Updated)
  },
  {
    title: "Car Radios & Head Units",
    desc: "Upgrade your sound system with professionally fitted aftermarket head units. GPS, Bluetooth, and modern connectivity.",
    image: "https://lh3.googleusercontent.com/d/1TvSi-CSDbfB5ABXdiaFrkU_KzbKKLCgM" // Car radio
  },
  {
    title: "Turbo Timers",
    desc: "Safe turbo cooldown management through correct electronic installation. Essential for turbocharged vehicle longevity.",
    image: "https://lh3.googleusercontent.com/d/1_SdP5abSUu6Is6vLibXDYTCe4cPh4kCN" // Turbo timer
  },
  {
    title: "Parking Sensors",
    desc: "Precision-installed ultrasonic sensors for improved parking assistance and obstacle detection.",
    image: "https://lh3.googleusercontent.com/d/1mxNPNoAQOLkahxw2RcRmuaNdSwBTSMAc" // Reverse sensors
  },
  {
    title: "Vehicle Tracking",
    desc: "Secure tracking system installation for fleet or private vehicles. Know where your vehicle is at all times.",
    image: "https://lh3.googleusercontent.com/d/1dM6oWBDbE80nuXVC7ZpE89245nYaQaBI" // Vehicle tracking
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 scroll-mt-28">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 text-center">
           <div className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-3">
              Our Expertise
           </div>
           <h2 className="text-4xl font-extrabold text-brand-primary">
              PREMIUM <span className="text-brand-accent">SERVICES</span>
           </h2>
           <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
             We ensure full compatibility checks and use correct fusing for electrical safety on every job.
           </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
           {services.map((item, idx) => (
             <div key={idx} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-brand-accent transition-colors">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                    
                    <div className="pt-4 border-t border-gray-50 mt-auto">
                        <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-primary group-hover:text-brand-accent transition-colors">
                            Get Quote <ArrowRight size={14} />
                        </a>
                    </div>
                </div>
             </div>
           ))}
        </div>

        <div className="mt-20 text-center">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-10 py-4 rounded font-bold uppercase tracking-widest text-xs hover:bg-opacity-90 transition-colors shadow-lg">
                Book Your Service
            </a>
        </div>

      </div>
    </section>
  );
};

export default Services;