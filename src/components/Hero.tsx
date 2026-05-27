import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const text = titleRef.current.innerText;
    titleRef.current.innerHTML = text
      .split(' ')
      .map((word) => `<span class="inline-block opacity-0 translate-y-4 whitespace-pre">${word} </span>`)
      .join('');

    const words = titleRef.current.querySelectorAll('span');
    
    gsap.to(words, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.5,
    });
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-clay">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          poster="https://images.unsplash.com/photo-1506377247377-2a5b3b0ca3ef?auto=format&fit=crop&q=80&w=1920"
          className="w-full h-full object-cover opacity-70"
          preload="auto"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-luxury-wine-being-poured-into-a-glass-4286-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Golden Hour Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-clay/60 via-transparent to-clay/95" />
        <div className="absolute inset-0 bg-[#C6A77B]/15 mix-blend-overlay" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-8xl text-sand font-serif mb-8 leading-[1.05] tracking-tighter drop-shadow-2xl"
        >
          Nacido en el silencio del páramo, esculpido por el arte.
        </h2>
        
        <p className="text-bronze font-sans tracking-[0.3em] uppercase text-xs md:text-sm mb-12">
          Alto de Pioz — Viñedos de culto a 875 metros de altitud.
        </p>

        <button 
          className="px-10 py-4 border border-bronze text-bronze rounded-full font-sans tracking-widest text-xs uppercase hover:bg-bronze hover:text-clay transition-all duration-500 group overflow-hidden relative"
        >
          <span className="relative z-10">Descubrir el Legado</span>
        </button>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1px] h-12 bg-bronze/50 animate-bounce" />
      </div>
    </section>
  );
}
