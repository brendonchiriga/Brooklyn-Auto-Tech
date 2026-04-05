import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Mr Moyo",
    role: "Homeowner",
    text: "The smart home alarm system installed by Brooklyn Auto Electronics has given my family peace of mind. The mobile integration is seamless and very easy to use.",
    service: "Home Security",
    rating: 5
  },
  {
    name: "Ms Makaza",
    role: "Business Owner",
    text: "We had CCTV cameras installed at our premises. The clarity of the footage and the professional way the wiring was concealed is impressive. Highly recommended!",
    service: "CCTV Installation",
    rating: 5
  },
  {
    name: "Mr Jazora",
    role: "Vehicle Owner",
    text: "I got a dash cam and a tracker fitted. The installation is so neat you can barely see the wires. The tracking app is very accurate and reliable.",
    service: "Vehicle Security",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-3">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-6">
            WHAT OUR <span className="text-brand-accent">CLIENTS SAY</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Don't just take our word for it. Here is what some of our satisfied customers have to say about our professional installation services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 relative group">
              <div className="absolute top-6 right-8 text-brand-accent/20 group-hover:text-brand-accent/40 transition-colors">
                <Quote size={48} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-accent text-brand-accent" />
                ))}
              </div>

              <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {item.name.charAt(3)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-xs text-brand-accent font-bold uppercase tracking-wider">{item.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
