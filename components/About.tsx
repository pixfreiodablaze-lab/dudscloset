import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-secondary rounded-2xl z-0 hidden sm:block"></div>
            <img 
              src="https://images.unsplash.com/photo-1550614000-4b9519e02a48?q=80&w=1000&auto=format&fit=crop" 
              alt="Sobre a Duds Closet" 
              className="relative z-10 w-full h-[600px] object-cover rounded-2xl shadow-2xl"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Sobre Nós</span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-serif text-primary leading-tight mb-8">
              A elegância é a única beleza que não desaparece.
            </h2>
            <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
              <p>
                A <strong>Duds Closet</strong> nasceu do desejo de trazer moda com propósito. Acreditamos que se vestir bem é uma forma de autocuidado e expressão. Nossa curadoria é feita pensando na mulher contemporânea, que busca versatilidade sem abrir mão do estilo.
              </p>
              <p>
                Nossa missão é oferecer peças atemporais, com tecidos de alta qualidade e modelagens que valorizam a diversidade dos corpos femininos.
              </p>
              <p>
                Mais do que uma loja, somos um espaço de inspiração. Cada coleção conta uma história, e queremos que você faça parte dela.
              </p>
            </div>
            
            <div className="mt-10 flex gap-12">
                <div>
                    <span className="block text-4xl font-serif text-secondary font-bold">5+</span>
                    <span className="text-sm text-primary uppercase tracking-wider mt-1 block">Anos de História</span>
                </div>
                <div>
                    <span className="block text-4xl font-serif text-secondary font-bold">10k+</span>
                    <span className="text-sm text-primary uppercase tracking-wider mt-1 block">Clientes Felizes</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};