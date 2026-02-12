import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-gray-900 scroll-mt-28">
      
      {/* Deep Rich Background */}
      <div className="absolute inset-0 bg-brand-primary"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-[#11083d] to-black"></div>
      
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`, 
            backgroundSize: '50px 50px' 
          }}>
      </div>

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-brand-accent/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
             <div className="inline-block px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent font-bold text-xs tracking-[0.2em] uppercase mb-8 backdrop-blur-md">
                Get In Touch
             </div>
             
             <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8 text-white">
                READY TO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-yellow-200 to-brand-accent drop-shadow-sm">UPGRADE?</span>
             </h2>
             
             <p className="text-gray-300 mb-16 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Contact us today for professional installation and advice. We are available for workshop visits and mobile services.
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Location */}
                <div className="flex flex-col items-center p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-brand-accent/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center text-brand-accent mb-6 group-hover:from-brand-accent group-hover:to-yellow-500 group-hover:text-brand-primary transition-all shadow-xl border border-white/10">
                        <MapPin size={28} />
                    </div>
                    <h4 className="font-bold text-xl mb-3 text-white">Visit Workshop</h4>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        67 Selous Ave<br/>
                        Harare, Zimbabwe
                    </p>
                </div>

                {/* Phone */}
                <div className="flex flex-col items-center p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-brand-accent/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center text-brand-accent mb-6 group-hover:from-brand-accent group-hover:to-yellow-500 group-hover:text-brand-primary transition-all shadow-xl border border-white/10">
                        <Phone size={28} />
                    </div>
                    <h4 className="font-bold text-xl mb-3 text-white">Call Us</h4>
                    <div className="flex flex-col gap-2 text-sm">
                        <a href="tel:+263774944694" className="text-gray-400 hover:text-white transition-colors font-medium">+263 774 944 694</a>
                        <a href="tel:+263710866893" className="text-gray-400 hover:text-white transition-colors font-medium">+263 710 866 893</a>
                    </div>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-brand-accent/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center text-brand-accent mb-6 group-hover:from-brand-accent group-hover:to-yellow-500 group-hover:text-brand-primary transition-all shadow-xl border border-white/10">
                        <Mail size={28} />
                    </div>
                    <h4 className="font-bold text-xl mb-3 text-white">Email Us</h4>
                    <a href="mailto:info@brooklynauto.co.zw" className="text-gray-400 hover:text-white transition-colors text-sm break-all">
                        info@brooklynauto.co.zw
                    </a>
                </div>
             </div>
          </div>
      </div>
    </section>
  );
};

export default Contact;