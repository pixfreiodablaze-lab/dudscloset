import React from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Vestido Midi Linho",
    price: "R$ 289,90",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Blusa Seda Nude",
    price: "R$ 159,90",
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Calça Alfaiataria Bege",
    price: "R$ 229,90",
    image: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Conjunto Blazer Off-White",
    price: "R$ 459,90",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Saia Plissada Terracota",
    price: "R$ 189,90",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Chemise Algodão Doce",
    price: "R$ 249,90",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
  }
];

export const NewArrivals: React.FC = () => {
  return (
    <section id="novidades" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary uppercase tracking-[0.2em] text-xs font-semibold">Shop The Look</span>
          <h2 className="mt-3 text-4xl font-serif text-primary">Novidades</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full opacity-60"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-100 relative">
                 <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                
                {/* Quick Add Button showing on hover */}
                <button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur text-primary py-3 rounded-lg font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg uppercase text-xs tracking-wider">
                  Adicionar à Sacola
                </button>
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-primary font-serif group-hover:text-secondary transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Tamanhos P, M, G</p>
                </div>
                <p className="text-lg font-semibold text-secondary">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <button className="border border-primary text-primary px-10 py-3 rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                Ver Todos os Produtos
            </button>
        </div>
      </div>
    </section>
  );
};