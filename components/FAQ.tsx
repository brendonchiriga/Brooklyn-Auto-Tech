import React from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  { q: "Do you supply parts?", a: "Yes, we can source compatible systems for you. We also happily install customer-supplied parts provided they are compatible with your vehicle." },
  { q: "Do you offer warranty?", a: "We offer a warranty on our workmanship. Warranties on parts depend on the specific manufacturer or supplier of the equipment." },
  { q: "How long does installation take?", a: "Installation times vary by service. A standard radio or alarm install typically takes 2-3 hours, while complex custom work may take longer." },
  { q: "Do you work on all vehicle types?", a: "We specialize in private passenger vehicles (SUVs, sedans, hatchbacks). Please contact us for inquiries regarding commercial trucks or specialized machinery." },
  { q: "Is mobile service available nationwide?", a: "We primarily serve Harare, but mobile service is available nationwide across Zimbabwe by special arrangement and travel fee." },
];

const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-extrabold text-brand-primary mb-12 text-center">FREQUENTLY ASKED QUESTIONS</h2>
        
        <div className="space-y-4">
            {faqs.map((item, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:border-brand-accent transition-colors cursor-pointer group">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-gray-900 pr-8">{item.q}</h3>
                        <Plus className="text-gray-400 group-hover:text-brand-accent shrink-0" size={20} />
                    </div>
                    <p className="text-gray-500 mt-3 text-sm hidden group-hover:block animate-in fade-in slide-in-from-top-2">
                        {item.a}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;