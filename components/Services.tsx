import React from 'react';
import { ArrowRight } from 'lucide-react';

const homeServices = [
  {
    title: "Smart Home Alarms",
    desc: "Advanced security systems with mobile alerts and remote monitoring to keep your home safe 24/7.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "CCTV and Cameras",
    desc: "High-definition surveillance systems with night vision and remote access for complete property visibility.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Electric Motors",
    desc: "Professional installation and repair of gate motors and garage door automation for convenience and security.",
    image: "https://lh3.googleusercontent.com/d/1zh93Dy_qYeqnVY3_ZT9mDwGg_KTMk2Iq"
  },
  {
    title: "Access Control Systems",
    desc: "Secure entry management using keypads, card readers, and intercoms for residential and commercial properties.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Biometric Time Management",
    desc: "Fingerprint and facial recognition systems for accurate staff attendance and secure area access.",
    image: "https://lh3.googleusercontent.com/d/1x9uFXDFxR5BV58WIIv9oKhi_Ixx0gp4H"
  }
];

const vehicleServices = [
  {
    title: "Dash and Reverse Cams",
    desc: "Front and rear camera systems for evidence recording and safer parking. Hard-wired for a clean finish.",
    image: "https://lh3.googleusercontent.com/d/1zmkJmmAluU4c9b16X9OmT54QA3jpnIwH"
  },
  {
    title: "Trackers",
    desc: "Real-time GPS tracking for private and fleet vehicles. Monitor location and movement from your phone.",
    image: "https://lh3.googleusercontent.com/d/1dM6oWBDbE80nuXVC7ZpE89245nYaQaBI"
  },
  {
    title: "Turbo Timers",
    desc: "Essential cooldown management for turbocharged engines, ensuring longevity and preventing damage.",
    image: "https://lh3.googleusercontent.com/d/1_SdP5abSUu6Is6vLibXDYTCe4cPh4kCN"
  },
  {
    title: "Vehicle Alarms",
    desc: "Premium security systems with shock sensors and immobilisers to protect your vehicle from theft.",
    image: "https://lh3.googleusercontent.com/d/1xi0xrleZ94cQbiU2FvhLiVwLfmSLj5Qo"
  },
  {
    title: "Push Start Button Installation",
    desc: "Modernise your vehicle with a professional push-to-start ignition system for added convenience.",
    image: "https://lh3.googleusercontent.com/d/1KOvi2IRkiKQAQ8qf2IJeyALFQ5i_ByHY"
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

        {/* Home Security Group */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-bold text-brand-primary whitespace-nowrap">Home Security</h3>
            <div className="h-px bg-gray-200 w-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
             {homeServices.map((item, idx) => (
               <div key={idx} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                  <div className="h-40 overflow-hidden relative">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                      <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                      />
                  </div>
                  
                  <div className="p-5 flex flex-col flex-grow">
                      <h4 className="font-bold text-base text-gray-900 mb-2 group-hover:text-brand-accent transition-colors">{item.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-grow">{item.desc}</p>
                      
                      <div className="pt-3 border-t border-gray-50 mt-auto">
                          <a href="#contact" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-primary group-hover:text-brand-accent transition-colors">
                              Get Quote <ArrowRight size={12} />
                          </a>
                      </div>
                  </div>
               </div>
             ))}
          </div>
        </div>

        {/* Vehicle Security Group */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-bold text-brand-primary whitespace-nowrap">Vehicle Security</h3>
            <div className="h-px bg-gray-200 w-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
             {vehicleServices.map((item, idx) => (
               <div key={idx} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                  <div className="h-40 overflow-hidden relative">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                      <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                      />
                  </div>
                  
                  <div className="p-5 flex flex-col flex-grow">
                      <h4 className="font-bold text-base text-gray-900 mb-2 group-hover:text-brand-accent transition-colors">{item.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-grow">{item.desc}</p>
                      
                      <div className="pt-3 border-t border-gray-50 mt-auto">
                          <a href="#contact" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-primary group-hover:text-brand-accent transition-colors">
                              Get Quote <ArrowRight size={12} />
                          </a>
                      </div>
                  </div>
               </div>
             ))}
          </div>
        </div>

        <div className="text-center">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-brand-green text-white px-10 py-4 rounded font-bold uppercase tracking-widest text-xs hover:bg-opacity-90 transition-colors shadow-lg">
                Book Your Service
            </a>
        </div>

      </div>
    </section>
  );
};

export default Services;