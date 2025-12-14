import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#f5f5f4]">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
        
        <div className="order-2 md:order-1 flex flex-col items-start space-y-6 animate-fade-in-up z-10">
          <span className="uppercase tracking-[0.2em] text-sm text-secondary font-semibold">Nova Coleção 2024</span>
          <h1 className="text-5xl md:text-7xl font-serif leading-tight">
            Estilo que define <br />
            <span className="italic text-secondary">quem você é.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-md leading-relaxed">
            Descubra a elegância intemporal com a nossa curadoria exclusiva. Moda acessível com qualidade premium, entregue em toda Angola.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#products" className="bg-primary text-white px-8 py-4 rounded-none hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2 group text-sm uppercase tracking-wider">
              Comprar Agora
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="border border-primary text-primary px-8 py-4 rounded-none hover:bg-primary hover:text-white transition-all duration-300 text-center text-sm uppercase tracking-wider">
              Saiba Mais
            </a>
          </div>
          
          <div className="pt-8 flex gap-8">
            <div>
              <p className="text-2xl font-bold font-serif">2k+</p>
              <p className="text-xs uppercase text-gray-500 tracking-wide">Clientes Felizes</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-serif">100%</p>
              <p className="text-xs uppercase text-gray-500 tracking-wide">Qualidade</p>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 relative h-[50vh] md:h-[80vh] w-full">
          <div className="absolute top-0 right-0 w-4/5 h-full bg-stone-200 z-0 rounded-tl-[100px]"></div>
          <img 
            src="https://picsum.photos/800/1200?random=10" 
            alt="Modelo vestindo vendas_nice" 
            loading="eager"
            className="absolute bottom-0 left-4 w-[90%] h-[90%] object-cover object-top shadow-2xl z-10 rounded-tl-[100px]"
          />
        </div>
      </div>
    </section>
  );
};