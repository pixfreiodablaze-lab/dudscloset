import React from 'react';
import { Instagram, Phone, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-3xl font-serif font-bold tracking-wider text-white">
              Duds Closet<span className="text-secondary text-4xl">.</span>
            </a>
            <p className="mt-6 text-white/60 font-light text-sm leading-relaxed">
              Moda feminina que une elegância, conforto e sofisticação. Transformando o básico em essencial.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.instagram.com/dudscloset._/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://wa.me/5571996825633" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-secondary">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-white/70 hover:text-white transition-colors text-sm">Início</a></li>
              <li><a href="#novidades" className="text-white/70 hover:text-white transition-colors text-sm">Novidades</a></li>
              <li><a href="#colecoes" className="text-white/70 hover:text-white transition-colors text-sm">Coleções</a></li>
              <li><a href="#sobre" className="text-white/70 hover:text-white transition-colors text-sm">Sobre Nós</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-secondary">Ajuda</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Tabela de Medidas</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Trocas e Devoluções</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Prazos de Entrega</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-secondary">Newsletter</h4>
            <p className="text-white/60 text-sm mb-4">Receba novidades e descontos exclusivos.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Seu melhor email"
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded focus:border-secondary focus:outline-none text-sm text-white placeholder-white/40"
              />
              <button className="w-full bg-secondary text-white py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition-colors">
                Inscrever-se
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>&copy; 2025 Duds Closet. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};