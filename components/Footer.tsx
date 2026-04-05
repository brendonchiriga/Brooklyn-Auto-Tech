import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-600 py-12 border-t border-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <div className="mb-4 inline-block">
             <img 
               src="https://lh3.googleusercontent.com/d/1uC_FLxqYwVkCnk1o_yMKcagXYM_BudN6" 
               alt="Brooklyn Auto Tech" 
               className="h-12 w-auto object-contain"
             />
          </div>
          <p className="text-sm font-medium">Copyright © {new Date().getFullYear()} Brooklyn Auto Electronics. All rights reserved.</p>
          <p className="text-xs text-gray-400 mt-2">Designed by Brend Creative - 0771 293 944 / 0777 177 780</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="p-2 bg-gray-50 rounded-full hover:bg-brand-secondary hover:text-white transition-colors"><Facebook size={20} /></a>
          <a href="#" className="p-2 bg-gray-50 rounded-full hover:bg-brand-secondary hover:text-white transition-colors"><Instagram size={20} /></a>
          <a href="#" className="p-2 bg-gray-50 rounded-full hover:bg-brand-secondary hover:text-white transition-colors"><Twitter size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;