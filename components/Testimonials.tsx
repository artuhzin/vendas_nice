import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    id: 1,
    name: "Ana Costa",
    role: "Cliente VIP",
    content: "Adorei a qualidade do tecido! A entrega foi super rápida aqui em Luanda. Recomendo muito.",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Manuel",
    role: "Luanda",
    content: "O fato que comprei assentou perfeitamente. O atendimento no WhatsApp foi 5 estrelas.",
    rating: 5
  },
  {
    id: 3,
    name: "Jurema Baptista",
    role: "Benguela",
    content: "Tinha receio de comprar online, mas a vendas_nice transmitiu muita segurança. Os acessórios são lindos!",
    rating: 4
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-stone-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">O que dizem os nossos clientes</h2>
          <p className="text-stone-400">Junte-se a centenas de clientes satisfeitos em Angola.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-stone-800 p-8 rounded-sm relative group hover:bg-stone-700 transition-colors duration-300">
              <div className="flex mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} strokeWidth={i < review.rating ? 0 : 1} className={i < review.rating ? "" : "text-stone-500"} />
                ))}
              </div>
              <p className="text-stone-300 mb-6 italic leading-relaxed">"{review.content}"</p>
              <div>
                <p className="font-bold font-serif text-lg">{review.name}</p>
                <p className="text-xs text-stone-500 uppercase tracking-widest">{review.role}</p>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-10 font-serif text-8xl leading-none select-none">"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};