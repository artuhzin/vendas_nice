import React from 'react';
import { Product } from '../types';
import { ShoppingCart } from 'lucide-react';

const products: Product[] = [
  {
    id: 1,
    name: "Vestido Elegance",
    price: "25.000 AOA",
    image: "https://picsum.photos/500/700?random=1",
    category: "Vestuário"
  },
  {
    id: 2,
    name: "Blazer Minimalista",
    price: "32.500 AOA",
    image: "https://picsum.photos/500/700?random=2",
    category: "Casacos"
  },
  {
    id: 3,
    name: "Conjunto Urban",
    price: "18.000 AOA",
    image: "https://picsum.photos/500/700?random=3",
    category: "Casual"
  },
  {
    id: 4,
    name: "Bolsa Couro Eco",
    price: "15.000 AOA",
    image: "https://picsum.photos/500/700?random=4",
    category: "Acessórios"
  }
];

export const FeaturedProducts: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 block">Seleção Exclusiva</span>
          <h2 className="text-4xl font-serif font-medium mb-4">Destaques da Semana</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4 bg-gray-100 aspect-[3/4]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-primary px-6 py-3 uppercase text-xs tracking-widest font-bold hover:bg-primary hover:text-white transition-colors">
                    Ver Detalhes
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100">
                    <ShoppingCart size={18} />
                </div>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{product.category}</p>
                <h3 className="text-lg font-medium font-serif mb-1 group-hover:text-secondary transition-colors">{product.name}</h3>
                <p className="font-bold text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="border-b border-primary pb-1 text-primary uppercase tracking-widest text-sm hover:text-secondary hover:border-secondary transition-colors">
            Ver Coleção Completa
          </button>
        </div>
      </div>
    </section>
  );
};