import React from 'react';

const collections = [
  {
    title: "Casual Chic",
    description: "Conforto sem perder a elegância para o dia a dia.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
    link: "#casual"
  },
  {
    title: "Premium",
    description: "Tecidos nobres e cortes sofisticados para momentos únicos.",
    image: "https://images.unsplash.com/photo-1548624149-f321d7ad078d?q=80&w=1000&auto=format&fit=crop",
    link: "#premium"
  },
  {
    title: "Verão 2025",
    description: "Leveza e frescor na paleta mais desejada da estação.",
    image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1000&auto=format&fit=crop",
    link: "#verao"
  }
];

export const Collections: React.FC = () => {
  return (
    <section id="colecoes" className="py-24 bg-nude">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-primary">Nossas Coleções</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto font-light">
            Curadoria especial pensada para diferentes momentos da sua vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div 
              key={index} 
              className="group relative h-[500px] overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10" />
              <img
                src={collection.image}
                alt={collection.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <h3 className="text-3xl font-serif text-white mb-2 transform translate-y-0 transition-transform duration-300">
                  {collection.title}
                </h3>
                <p className="text-gray-200 text-sm mb-6 opacity-90 font-light">
                    {collection.description}
                </p>
                <span className="inline-block bg-white text-primary px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-full opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 w-max">
                  Ver Coleção
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};