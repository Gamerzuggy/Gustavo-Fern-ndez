import { motion } from 'motion/react';

export default function Concierge() {
  const whatsappUrl = "https://wa.me/522206780095?text=Hola,%20deseo%20solicitar%20una%20asignación%20privada%20de%20Bodega%20Alto%20de%20Pioz.%20Vengo%20del%20portal%20GF%20Pro.";

  return (
    <section id="concierge" className="py-48 bg-sand border-t border-bronze/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-clay mb-12 leading-tight">
            Concierge VIP
          </h2>
          
          <p className="text-xl md:text-2xl font-serif text-clay/70 mb-16 italic leading-relaxed">
            "Los grandes vinos no se encuentran en aparadores comunes, se asignan a través de la confianza. Asegure su reserva directamente con nuestro Concierge Privado para entrega prioritaria a domicilio en México."
          </p>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-clay text-sand rounded-full font-sans tracking-[0.2em] text-xs uppercase hover:bg-bronze hover:scale-105 transition-all duration-500 shadow-2xl"
          >
            Contactar al Concierge
          </a>
          
          <div className="mt-32 pt-16 border-t border-bronze/10 flex flex-col items-center">
            <p className="text-[10px] tracking-[0.4em] uppercase text-clay/40 font-medium mb-4">
              Pioz, Guadalajara, España — México City
            </p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-bronze font-light">
              Bodega Alto de Pioz © 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
