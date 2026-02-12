import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full font-sans bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center relative bg-white z-50">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
           <img 
              src="https://lh3.googleusercontent.com/d/1Kv8LigxrorA67KMYo5jsY5qdfz3HDU_L" 
              alt="Brooklyn Auto Tech" 
              className="h-10 md:h-14 w-auto object-contain" 
            />
        </a>

        {/* Desktop Menu - Sorted: Home, Services, Why Us, Contact */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest text-gray-600 uppercase">
          <a href="#home" className="hover:text-brand-accent transition-colors">Home</a>
          <a href="#services" className="hover:text-brand-accent transition-colors">Services</a>
          <a href="#why-us" className="hover:text-brand-accent transition-colors">Why Us</a>
          <a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
           <div className="flex items-center gap-2 text-xs font-bold text-gray-900">
              <Phone size={14} className="text-brand-accent" />
              <span>+263 774 944 694</span>
           </div>
           <a href="#contact" className="bg-brand-accent text-brand-primary text-xs font-bold px-6 py-3 rounded hover:bg-opacity-90 transition-colors uppercase tracking-wider">
             Contact Us
           </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 flex flex-col gap-4 shadow-xl absolute top-full left-0 w-full z-40">
          <a href="#home" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-bold uppercase tracking-widest text-gray-600">Home</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-bold uppercase tracking-widest text-gray-600">Services</a>
          <a href="#why-us" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-bold uppercase tracking-widest text-gray-600">Why Us</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block w-full text-center py-3 bg-brand-accent text-brand-primary font-bold text-xs uppercase tracking-widest">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;