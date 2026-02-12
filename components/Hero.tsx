import React, { useState, useEffect } from 'react';
import { Phone, Calendar } from 'lucide-react';

const images = [
  "https://lh3.googleusercontent.com/d/1xi0xrleZ94cQbiU2FvhLiVwLfmSLj5Qo", // Car alarm
  "https://lh3.googleusercontent.com/d/1_p0Gv8cbG6_n8xaZRzOI5noH98V9D3Rb", // Mechanic under
  "https://lh3.googleusercontent.com/d/1TvSi-CSDbfB5ABXdiaFrkU_KzbKKLCgM", // Car radio
  "https://lh3.googleusercontent.com/d/1hyEIDQaYXv8FKIIOZYQ2W33ivaVEPLPe", // Who we are
  "https://lh3.googleusercontent.com/d/1mxNPNoAQOLkahxw2RcRmuaNdSwBTSMAc", // Reverse sensors
  "https://lh3.googleusercontent.com/d/1_SdP5abSUu6Is6vLibXDYTCe4cPh4kCN", // Turbo timer
  "https://lh3.googleusercontent.com/d/1dM6oWBDbE80nuXVC7ZpE89245nYaQaBI", // Vehicle tracking
  "https://lh3.googleusercontent.com/d/1zmkJmmAluU4c9b16X9OmT54QA3jpnIwH", // Dash cam
  "https://lh3.googleusercontent.com/d/15PJak41PhyolnT0hHts2AXneoqyEFstK"  // Reverse cam
];

const phrases = [
  "Car Alarms",
  "Android Radios",
  "Reverse Cameras",
  "Parking Sensors",
  "Vehicle Tracking"
];

// Carousel Component
const ImageCarousel: React.FC<{ currentSlide: number; setCurrentSlide?: (index: number) => void }> = ({ currentSlide, setCurrentSlide }) => (
  <div className="relative w-full aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden bg-gray-200">
    {images.map((img, index) => (
      <div 
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
      >
        <img 
          src={img} 
          alt={`Brooklyn Auto Tech Work ${index + 1}`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
      </div>
    ))}
    
    {/* Carousel Indicators */}
    <div className="absolute bottom-6 left-6 flex flex-wrap gap-2 z-20 max-w-[80%]">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide && setCurrentSlide(index)}
          className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${index === currentSlide ? 'bg-brand-accent w-8' : 'bg-white/70 w-3 hover:bg-white'}`}
          aria-label={`Go to slide ${index + 1}`}
          style={{ cursor: setCurrentSlide ? 'pointer' : 'default' }}
        />
      ))}
    </div>
  </div>
);

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Typewriter state
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    let speed = 100;
    const i = loopNum % phrases.length;
    const fullText = phrases[i];

    if (isDeleting) {
      speed = 50;
    }

    if (!isDeleting && text === fullText) {
      speed = 2000; // Pause at end of word
    } else if (isDeleting && text === '') {
      speed = 500; // Pause before next word
    }

    const typeTimer = setTimeout(() => {
      if (!isDeleting && text === fullText) {
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum((l) => l + 1);
      } else {
        setText(
          isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(typeTimer);
  }, [text, isDeleting, loopNum]);

  return (
    <section id="home" className="relative w-full bg-gray-50 pt-6 pb-24 md:pt-32 md:pb-48 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
           
           {/* Left Content: Text & Buttons */}
           <div className="lg:col-span-6 flex flex-col items-start text-left relative z-20">
              
              {/* Hidden on mobile as requested */}
              <div className="hidden md:inline-block px-3 py-1 bg-white border border-gray-200 rounded-full text-[10px] font-extrabold tracking-[0.2em] text-gray-500 uppercase mb-6 shadow-sm">
                Harare, Zimbabwe
              </div>

              {/* Reduced font size for mobile to ensure 2 lines */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-primary leading-[1.1] mb-8 lg:mb-4 tracking-tight">
                PROFESSIONAL <br />
                AUTO <span className="text-brand-accent">ELECTRONICS</span>
              </h1>

              {/* Mobile Only: Image Carousel between Title and Subtitle */}
              <div className="block lg:hidden w-full mb-8">
                 <ImageCarousel currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
              </div>

              {/* Typewriter Effect - Reduced Font Size for Mobile */}
              <div className="h-12 mb-8 flex items-center text-xl sm:text-3xl md:text-4xl font-bold text-gray-600 whitespace-nowrap">
                <span className="mr-2 sm:mr-3 text-brand-primary">We Install</span>
                <span className="text-brand-accent">{text}</span>
                <span className="w-1 h-6 sm:h-8 md:h-10 bg-brand-accent ml-1 animate-pulse"></span>
              </div>

              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg font-medium leading-relaxed">
                 Specialists in aftermarket automotive electronics for private vehicles. 
                 Neat wiring, correct fusing, and manufacturer-compliant installations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a href="#contact" className="flex items-center justify-center gap-2 bg-brand-accent text-brand-primary px-8 py-4 rounded font-bold uppercase tracking-widest text-xs hover:bg-opacity-90 transition-all hover:shadow-lg shadow-md transform hover:-translate-y-0.5">
                    <Calendar size={16} /> Book Installation
                  </a>
                  <a href="tel:+263774944694" className="flex items-center justify-center gap-2 bg-white text-brand-primary border border-gray-200 px-8 py-4 rounded font-bold uppercase tracking-widest text-xs hover:bg-gray-50 transition-all hover:shadow-lg shadow-sm transform hover:-translate-y-0.5">
                    <Phone size={16} /> Call Now
                  </a>
              </div>
           </div>

           {/* Right Content: Image Carousel - Desktop Only */}
           <div className="hidden lg:block lg:col-span-6 relative">
              <ImageCarousel currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />

              {/* Decorative elements behind image */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
           </div>

        </div>

      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-2/5 h-full bg-white skew-x-12 origin-top transform translate-x-1/4 z-0 hidden lg:block border-l border-gray-50"></div>
    </section>
  );
};

export default Hero;