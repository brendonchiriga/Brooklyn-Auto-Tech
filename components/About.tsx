import React from 'react';
import { Settings, ShieldCheck, Zap, MapPin, Wrench } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gray-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          
          {/* Image Section */}
          <div className="lg:w-1/2 relative group">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500">
                 <img 
                   src="https://lh3.googleusercontent.com/d/1hyEIDQaYXv8FKIIOZYQ2W33ivaVEPLPe" 
                   alt="Brooklyn Auto Tech Workshop" 
                   className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                 
                 {/* Floating Quote Card - Hidden on mobile */}
                 <div className="hidden md:block absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex gap-4 items-start">
                        <div className="p-3 bg-brand-accent rounded-lg text-brand-primary shrink-0 shadow-lg">
                            <Wrench size={24} />
                        </div>
                        <div className="text-white">
                            <p className="font-bold italic text-lg leading-relaxed text-gray-100">
                                "We focus on neat wiring, correct fusing, and full compatibility with your vehicle’s systems."
                            </p>
                        </div>
                    </div>
                 </div>
             </div>
             
             {/* Decorative Element */}
             <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-accent/10 rounded-2xl -z-10 offset-4"></div>
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/10 text-brand-accent rounded-full text-[10px] font-extrabold tracking-[0.2em] uppercase mb-6">
                <Settings size={12} /> About The Workshop
             </div>
             
             <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-primary mb-6 leading-tight">
                WHO WE <span className="text-brand-accent">ARE</span>
             </h2>

             <div className="space-y-6 mb-10">
                <p className="text-gray-600 leading-relaxed">
                    Based in Harare, Brooklyn Auto Electronics is an independent service dedicated to raising the standard of aftermarket installations.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    Unlike general mechanics, we specialise specifically in <strong className="text-brand-accent">electronic integration</strong>. Whether it's a security system to protect your asset or a multimedia upgrade for your comfort, we treat every vehicle with the respect it deserves, strictly following manufacturer guidelines.
                </p>
             </div>

             {/* Feature Grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                 <div className="flex flex-col gap-3 p-5 rounded-xl bg-gray-50 border border-gray-100 hover:border-brand-accent/30 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-brand-accent shadow-sm group-hover:bg-brand-accent group-hover:text-brand-primary transition-colors">
                        <Zap size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-1">Neat Wiring</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">Concealed routing mimicking factory looms for a clean, professional finish.</p>
                    </div>
                 </div>
                 
                 <div className="flex flex-col gap-3 p-5 rounded-xl bg-gray-50 border border-gray-100 hover:border-brand-accent/30 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-brand-accent shadow-sm group-hover:bg-brand-accent group-hover:text-brand-primary transition-colors">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-1">Correct Fusing</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">Ensuring electrical safety to protect your vehicle's sensitive ECU and wiring.</p>
                    </div>
                 </div>
             </div>

             {/* Footer Info */}
             <div className="flex items-center gap-4 pt-8 border-t border-gray-100">
                 <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center shrink-0 shadow-lg">
                    <MapPin size={20} />
                 </div>
                 <div>
                     <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Service Area</p>
                     <p className="text-gray-900 font-bold text-sm">
                        Workshop in Harare • <span className="text-brand-accent">Mobile Service Available</span>
                     </p>
                 </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;