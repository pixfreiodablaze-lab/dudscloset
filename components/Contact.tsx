import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-primary">Fale Conosco</h2>
          <p className="mt-4 text-gray-600 font-light">Estamos aqui para ajudar você a encontrar o look perfeito.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Contact Info */}
          <div className="md:w-5/12 bg-primary text-white p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif mb-8">Informações de Contato</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-full">
                    <Phone size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-white/70 font-light mt-1">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                   <div className="p-3 bg-white/10 rounded-full">
                    <Mail size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-white/70 font-light mt-1">contato@dudscloset.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="p-3 bg-white/10 rounded-full">
                    <MapPin size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Showroom</p>
                    <p className="text-white/70 font-light mt-1">Av. Paulista, 1000 - São Paulo, SP</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <div className="w-20 h-20 bg-secondary rounded-full opacity-20 absolute -bottom-10 -left-10"></div>
               <div className="w-40 h-40 bg-white/5 rounded-full absolute top-10 right-10"></div>
               <p className="text-sm text-white/50 relative z-10">© 2025 Duds Closet.</p>
            </div>
          </div>

          {/* Form */}
          <div className="md:w-7/12 p-12 bg-white">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                    placeholder="Seu email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Escreva sua mensagem aqui..."
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full bg-primary text-white font-semibold py-4 rounded-lg hover:bg-secondary transition-colors duration-300 uppercase tracking-wider text-sm shadow-md"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};