import { motion } from 'motion/react';

export default function Heritage() {
  const sections = [
    {
      title: "EL ARTE DE BOSCO SODI",
      author: "Bosco Sodi",
      description: "Cada etiqueta de nuestra bodega no es un componente comercial, es una obra viva y exclusiva materializada por el renombrado artista internacional y socio de la bodega, Bosco Sodi. Un tributo a la textura, la tierra y la honestidad de la materia prima que abraza la botella como una pieza de colección.",
      image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&q=80&w=1200",
      layout: "left"
    },
    {
      title: "LA VISIÓN DE RAFA MÁRQUEZ",
      author: "Rafa Márquez",
      description: "Respaldado por el liderazgo, la pasión y la mentalidad ganadora de una leyenda del fútbol mundial. Un proyecto donde el orgullo mexicano se fusiona de manera orgánica con el terroir más exclusivo de España.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
      layout: "right"
    },
    {
      title: "LA ARQUITECTURA DE TADAO ANDO",
      author: "Tadao Ando",
      description: "Casa Primitiva, nuestro futuro hotel y spa boutique integrado en el paisaje del viñedo, toma forma bajo las líneas maestras y el uso sublime del concreto limpio del legendario arquitecto japonés de culto Tadao Ando, ganador del Premio Pritzker.",
      image: "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&q=80&w=1200",
      layout: "left"
    },
    {
      title: "LA ENOLOGÍA DE PRECISIÓN",
      author: "Aurelio García Herraiz",
      description: "Cada gota está guiada por la sensibilidad y maestría de Aurelio García Herraiz, enfocada en el rescate y protección de viñas viejas de más de 80 años en el páramo de La Alcarria.",
      image: "https://images.unsplash.com/photo-1510850402704-e853bb189ee5?auto=format&fit=crop&q=80&w=1200",
      layout: "right"
    }
  ];

  return (
    <section id="legacy" className="py-32 px-4 md:px-12 bg-sand overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-48">
        {sections.map((section, idx) => (
          <div 
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
              section.layout === 'right' ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full md:w-1/2 overflow-hidden aspect-[4/5] bg-clay/5 group">
              <motion.img 
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={section.image} 
                alt={section.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="w-full md:w-1/2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: section.layout === 'left' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <p className="text-bronze tracking-widest text-xs uppercase mb-4">
                  {section.author}
                </p>
                <h3 className="text-3xl md:text-5xl font-serif text-clay mb-6 leading-tight">
                  {section.title}
                </h3>
                <p className="text-clay/70 font-sans leading-relaxed text-lg max-w-xl">
                  {section.description}
                </p>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
