import React from 'react';
import { Truck, ShieldCheck, CreditCard, HeartHandshake } from 'lucide-react';
import { Benefit } from '../types';

const benefits: Benefit[] = [
  {
    id: 1,
    title: "Envio Rápido",
    description: "Entregas em toda Luanda em 24h e províncias em até 5 dias.",
    icon: <Truck size={32} strokeWidth={1.5} />
  },
  {
    id: 2,
    title: "Produtos de Qualidade",
    description: "Materiais selecionados e acabamento premium garantido.",
    icon: <ShieldCheck size={32} strokeWidth={1.5} />
  },
  {
    id: 3,
    title: "Pagamento Seguro",
    description: "Aceitamos transferências e pagamentos multicaixa seguros.",
    icon: <CreditCard size={32} strokeWidth={1.5} />
  },
  {
    id: 4,
    title: "Suporte Dedicado",
    description: "Equipa pronta para ajudar na sua escolha perfeita.",
    icon: <HeartHandshake size={32} strokeWidth={1.5} />
  }
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="flex flex-col items-center text-center p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm">
              <div className="mb-4 text-stone-700 bg-stone-50 p-4 rounded-full">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 font-serif">{benefit.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};