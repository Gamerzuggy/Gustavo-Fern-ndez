import React from 'react';
import { motion } from 'motion/react';
import { Gift, Calendar, Award, Utensils } from 'lucide-react';

export default function WeddingKit() {
  const whatsappUrl = "https://wa.me/522206780095?text=Hola,%20deseo%20solicitar%20una%20cotización%20para%20un%20evento%20especial%20con%20Bodega%20Alto%20de%20Pioz.";

  const features = [
    { icon: <Calendar size={18} />, text: "Entrega prioritaria" },
    { icon: <Award size={18} />, text: "Certificados de autenticidad" },
    { icon: <Utensils size={18} />, text: "Asesoría de maridaje personalizada" },
    { icon: <Gift size={18} />, text: "Presentación premium" },
  ];

  return (
    <section id="weddings" className="py-48 bg-[#1a0f0f] overflow-hidden relative border-y border-bronze/10">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-bronze/5 skew-x-12 translate-x-1/2 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tr from-clay/40 via-transparent to-bronze/10 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-bronze tracking-[0.4em] uppercase text-xs mb-6 font-medium">Eventos de Culto</p>
              <h2 className="text-4xl md:text-7xl font-serif text-sand mb-8 leading-[1.1]">
                Vino que celebra momentos inolvidables
              </h2>
              <p className="text-sand/70 text-lg font-sans mb-12 max-w-lg leading-relaxed italic">
                "Paquetes exclusivos para bodas y eventos. Elevamos la experiencia de sus invitados con la distinción de viñas viejas y el arte de Bosco Sodi."
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 text-sand/80">
                    <span className="text-bronze">{feature.icon}</span>
                    <span className="text-xs uppercase tracking-widest">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Pack 6 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-sand/5 border border-bronze/20 p-10 rounded-sm hover:border-bronze transition-colors group"
            >
              <div className="text-5xl font-serif text-bronze mb-6">6</div>
              <h3 className="text-2xl font-serif text-sand mb-4">Pack Íntimo</h3>
              <p className="text-sand/50 text-sm mb-8">6 botellas surtidas + presentación premium para cenas exclusivas.</p>
              <div className="w-full h-px bg-bronze/20 group-hover:bg-bronze transition-colors" />
            </motion.div>

            {/* Pack 24 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="bg-sand/5 border border-bronze/20 p-10 rounded-sm hover:border-bronze transition-colors group"
            >
              <div className="text-5xl font-serif text-bronze mb-6">24</div>
              <h3 className="text-2xl font-serif text-sand mb-4">Pack Celebración</h3>
              <p className="text-sand/50 text-sm mb-8">24 botellas + sommelier virtual para grandes momentos.</p>
              <div className="w-full h-px bg-bronze/20 group-hover:bg-bronze transition-colors" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="sm:col-span-2 pt-8"
            >
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-6 border border-bronze text-bronze uppercase tracking-[0.3em] text-xs hover:bg-bronze hover:text-clay transition-all duration-500"
              >
                Cotizar mi Evento
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
