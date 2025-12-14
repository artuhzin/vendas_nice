import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white text-2xl font-serif font-bold mb-4 tracking-tighter">vendas_nice</h3>
            <p className="text-sm leading-relaxed mb-6">
              Sua destinação online para moda acessível e elegante em Angola. Qualidade e estilo em cada peça.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-stone-300 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white hover:text-stone-300 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white hover:text-stone-300 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm uppercase tracking-widest font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Produtos</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contactos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm uppercase tracking-widest font-bold mb-6">Ajuda</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Envios e Entregas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guia de Tamanhos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white text-sm uppercase tracking-widest font-bold mb-6">Newsletter</h4>
             <p className="text-sm mb-4">Receba novidades e ofertas exclusivas.</p>
             <form className="flex flex-col gap-2">
               <input 
                  type="email" 
                  placeholder="Seu email" 
                  className="bg-stone-900 border border-stone-800 p-3 text-sm focus:outline-none focus:border-stone-600 text-white"
               />
               <button className="bg-white text-primary uppercase text-xs font-bold py-3 hover:bg-stone-200 transition-colors">
                 Subscrever
               </button>
             </form>
          </div>
        </div>

        <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} vendas_nice. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Termos & Condições</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};