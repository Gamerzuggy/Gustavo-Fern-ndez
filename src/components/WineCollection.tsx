import React from 'react';
import { motion } from 'motion/react';

const products = [
  {
    name: "Alto de Pioz Blanco",
    price: "$539",
    type: "Blanco / Malvar",
    image: "https://images.unsplash.com/photo-1566754014903-f23e7efef142?auto=format&fit=crop&q=80&w=600",
    description: "Color amarillo pajizo brillante con destellos verdosos. Fresco, con aromas florales y de frutas blancas, notas de frutos secos y especias. Malvar viñas viejas (+80 años)."
  },
  {
    name: "Alto de Pioz Rosado",
    price: "$491",
    type: "Rosado / Tempranillo",
    image: "https://images.unsplash.com/photo-1559839914-17aae19cea9e?auto=format&fit=crop&q=80&w=600",
    description: "Color rojo grosella con matices asalmonados. Intenso, con recuerdos de frutos rojos ácidos, sandía, granada y yogur de fresa. Tempranillo 70% · Malvar 30%."
  },
  {
    name: "Dominio de Pioz Tinto",
    price: "$719",
    type: "Tinto Crianza",
    image: "https://images.unsplash.com/photo-1510850402704-e853bb189ee5?auto=format&fit=crop&q=80&w=600",
    description: "Rojo picota intenso y luminoso. Aromas a frutos rojos maduros, notas terrosas, nata y especias. Tempranillo 80% · Cab. Sauvignon 20% · 12 meses barrica."
  },
  {
    name: "Sodi de Pioz Tinto",
    price: "$783",
    type: "Tinto de Autor",
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=600",
    description: "Gran complejidad: intensidad y carácter, con cuerpo, untuoso, taninos suaves y largo final fresco. Tempranillo 80% · Cab. Sauvignon 20% · 14 meses en hormigón."
  },
  {
    name: "Las Varas Blanco",
    price: "$800",
    type: "Blanco de Tempranillo",
    image: "https://images.unsplash.com/photo-1583244482593-9c84bd21e3bc?auto=format&fit=crop&q=80&w=600",
    description: "Original e intenso, con taninos de seda, largura y complejidad. Elaborado por 'infusionado'. 18 meses en fudres de 2,200L. 100% Tempranillo."
  }
];

export default function WineCollection() {
  return (
    <section id="collection" className="py-48 px-4 bg-sand">
      <div className="max-w-[1800px] mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-6xl text-clay font-serif mb-6">La Colección Privada</h2>
          <p className="text-bronze tracking-widest text-xs uppercase">Asignaciones exclusivas para México</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-bronze/10">
          {products.map((product, idx) => (
            <WineCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WineCard({ product }: { product: any; key?: any }) {
  return (
    <div className="relative group bg-sand p-12 flex flex-col items-center transition-all duration-700 hover:bg-clay/5">
      <div className="relative h-[400px] w-full mb-8 flex justify-center items-center">
        <motion.img 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          src={product.image} 
          alt={product.name}
          className="h-full object-contain filter drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Hover Info Overlay */}
        <div className="absolute inset-x-0 -bottom-12 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-500 bg-sand/90 backdrop-blur-md p-6 border-t border-bronze/20 z-20">
          <p className="text-xs text-clay/60 italic leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>

      <div className="text-center space-y-2 relative z-10 w-full">
        <p className="text-[10px] tracking-[0.3em] uppercase text-bronze font-medium">
          {product.type}
        </p>
        <h3 className="text-xl font-serif text-clay group-hover:text-bronze transition-colors">
          {product.name}
        </h3>
        <p className="text-lg font-sans font-light tracking-widest text-clay/40">
          {product.price}
        </p>
      </div>

      <button className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-6 py-2 border border-bronze text-[10px] tracking-widest uppercase text-bronze hover:bg-bronze hover:text-sand">
        Reservar Botella
      </button>
    </div>
  );
}
