import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
             <div className="absolute top-4 left-4 w-full h-full border-2 border-stone-200 z-0 transform -translate-x-4 -translate-y-4"></div>
             <img 
              src="https://picsum.photos/600/800?random=20" 
              alt="Sobre a vendas_nice" 
              className="relative z-10 w-full h-auto object-cover shadow-lg"
            />
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 block">Nossa História</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Moda com propósito e <span className="italic text-secondary">elegância.</span></h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              A <strong>vendas_nice</strong> nasceu da paixão por trazer as últimas tendências globais para o mercado angolano, sem comprometer a qualidade ou o preço. Acreditamos que o estilo é uma forma de expressão pessoal que deve estar ao alcance de todos.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nossa missão é curar peças que transitam perfeitamente do escritório para o lazer, garantindo que você se sinta confiante em qualquer ocasião. Trabalhamos incansavelmente para oferecer um serviço de excelência, desde a escolha do produto até a entrega em sua casa.
            </p>

            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-gray-700 mb-8">
              "Vestir-se bem não é apenas sobre roupas, é sobre atitude e confiança."
            </blockquote>

            <div className="flex gap-4">
                <img src="https://picsum.photos/100/100?random=99" className="w-12 h-12 rounded-full object-cover grayscale" alt="CEO" />
                <div>
                    <p className="font-bold font-serif text-sm">Maria Silva</p>
                    <p className="text-xs text-gray-500 uppercase">Fundadora</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};