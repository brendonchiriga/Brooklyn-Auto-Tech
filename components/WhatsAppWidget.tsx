import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const services = [
  "Smart Home Alarms",
  "CCTV and Cameras",
  "Electric Motors",
  "Access Control Systems",
  "Biometric Time Management",
  "Dash and Reverse Cams",
  "Trackers",
  "Turbo Timers",
  "Vehicle Alarms",
  "Push Start Button Installation",
  "Other Inquiry"
];

const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [selectedService, setSelectedService] = useState(services[0]);
  const phoneNumber = "263774944694"; // Primary WhatsApp Number

  const handleWhatsAppRedirect = () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    const message = `Hi Brooklyn Auto Tech, my name is ${name}. I am interested in ${selectedService}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group relative"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={32} fill="currentColor" />
          <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1.5 rounded-lg shadow-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-100">
            Chat with us
          </span>
        </button>
      )}

      {/* WhatsApp Form Window */}
      {isOpen && (
        <div className="bg-white w-[320px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-[#075E54] p-5 text-white">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle size={24} fill="currentColor" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">WhatsApp Business</h3>
                  <p className="text-[10px] text-green-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    Typically replies in minutes
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>
            <p className="text-xs text-gray-100 opacity-90 leading-relaxed">
              Hello! Please fill in your details to start a chat with our technical team.
            </p>
          </div>

          {/* Form Body */}
          <div className="p-6 space-y-5 bg-gray-50">
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Your Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366] transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Required Service</label>
              <select 
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366] transition-all appearance-none cursor-pointer"
              >
                {services.map((service, idx) => (
                  <option key={idx} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <button 
              onClick={handleWhatsAppRedirect}
              className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#128C7E] transition-all flex items-center justify-center gap-2 group"
            >
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              Start WhatsApp Chat
            </button>
          </div>

          {/* Footer */}
          <div className="p-3 text-center bg-white">
            <p className="text-[9px] text-gray-400 uppercase tracking-tighter">
              Powered by Brooklyn Auto Tech Support
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppWidget;
