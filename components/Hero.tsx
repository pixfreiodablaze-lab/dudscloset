import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-sand">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop"
          alt="Mulher elegante vestindo tons neutros"
          className="w-full h-full object-cover object-top opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/40 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full">
        <div className="sm:max-w-lg bg-white/30 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/40 shadow-xl animate-fade-in-up">
          <span className="block text-primary font-medium tracking-[0.2em] mb-4 uppercase text-sm">
            Nova Coleção 2025
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary leading-tight mb-6">
            Elegância & <br/>
            <span className="text-secondary italic font-light">Autenticidade</span>
          </h1>
          <p className="text-primary/90 text-lg mb-8 font-light leading-relaxed">
            Descubra peças exclusivas que traduzem a essência da mulher moderna. Tons neutros, cortes precisos e sofisticação em cada detalhe.
          </p>
          
          <a 
            href="#colecoes"
            className="group inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-secondary transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Conhecer a Coleção
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};