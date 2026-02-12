import React from 'react';
import { CheckCircle2, Wrench, ShieldCheck, Truck, Shield } from 'lucide-react';

const standards = [
  {
    title: "Neat & Professional Wiring",
    desc: "We take pride in concealed routing and organized looms that mimic factory standards.",
    icon: <Wrench size={32} />
  },
  {
    title: "Correct Fusing",
    desc: "Electrical safety is paramount. We use correct fusing to protect your vehicle's sensitive electronics.",
    icon: <ShieldCheck size={32} />
  },
  {
    title: "Manufacturer Guidelines",
    desc: "Every installation adheres to strict manufacturer specifications to ensure warranty compliance.",
    icon: <CheckCircle2 size={32} />
  },
  {
    title: "Mobile Service Available",
    desc: "Convenience comes to you. We offer mobile installation services across Zimbabwe by arrangement.",
    icon: <Truck size={32} />
  }
];

const Stats: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-white scroll-mt-28">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-3">
                Our Standards
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-6">
                WHY CHOOSE <br/>
                <span className="text-brand-accent">BROOKLYN?</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
                We don't just install; we integrate. Our commitment to quality ensures your aftermarket upgrades function seamlessly with your vehicle's existing systems.
            </p>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {standards.map((item, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-8 text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-brand-accent shadow-sm mb-6">
                        {item.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>

        {/* Installation Standards List - Full Width */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
            {/* Deep Rich Background - Same as Contact */}
            <div className="absolute inset-0 bg-brand-primary"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-[#11083d] to-black"></div>
            
            {/* Tech Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.05]" 
                style={{ 
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`, 
                  backgroundSize: '50px 50px' 
                }}>
            </div>

            {/* Center Glow - Adjusted for Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[400px] bg-brand-accent/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 p-8 md:p-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
                {/* Left Side */}
                <div className="lg:w-5/12 text-left">
                    <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-xl mb-6 text-brand-accent backdrop-blur-sm border border-white/5 shadow-lg">
                        <Shield size={32} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">Installation Standards</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Our guarantee of quality on every job we undertake. We don't cut corners when it comes to your vehicle's safety.
                    </p>
                </div>

                {/* Right Side */}
                <div className="lg:w-6/12 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        {[
                            "Installation using customer-supplied parts",
                            "Sourcing compatible systems on request",
                            "Vehicle system compatibility checks",
                            "No cutting corners"
                        ].map((li, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                                <div className="mt-1 w-6 h-6 rounded-full bg-brand-accent flex items-center justify-center shrink-0 shadow-lg shadow-brand-accent/20">
                                    <div className="w-2.5 h-2.5 bg-brand-primary rounded-full"></div>
                                </div>
                                <span className="font-medium text-lg text-white">{li}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Stats;