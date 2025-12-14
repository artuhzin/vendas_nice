import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado! A sua mensagem foi recebida. Entraremos em contacto brevemente.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 block">Fale Connosco</span>
            <h2 className="text-4xl font-serif mb-8">Estamos aqui para ajudar</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Tem alguma dúvida sobre tamanhos, entregas ou parcerias? Envie-nos uma mensagem ou visite o nosso showroom.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-stone-100 p-3 rounded-full text-primary">
                    <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide mb-1">Telefone / WhatsApp</h4>
                  <p className="text-gray-600 hover:text-primary transition-colors">+244 921 963 892</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-stone-100 p-3 rounded-full text-primary">
                    <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide mb-1">Email</h4>
                  <p className="text-gray-600 hover:text-primary transition-colors">contato@vendas_nice.co.ao</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-stone-100 p-3 rounded-full text-primary">
                    <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide mb-1">Localização</h4>
                  <p className="text-gray-600">Luanda, Angola</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-50 p-8 md:p-12 rounded-sm shadow-sm">
            <h3 className="text-2xl font-serif mb-6">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 p-4 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 p-4 focus:outline-none focus:border-primary transition-colors"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-white border border-gray-200 p-4 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Como podemos ajudar?"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary text-white py-4 text-sm uppercase tracking-widest font-bold hover:bg-secondary transition-all flex items-center justify-center gap-2 group"
              >
                Enviar Mensagem
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};