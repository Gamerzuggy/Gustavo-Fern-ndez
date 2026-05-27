import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function JourneyMap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const pulseRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path || !pulseRef.current) return;

    const length = path.getTotalLength();
    
    // Set initial state
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // Animate the path drawing
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '#map-section',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });

    // Animate the pulse/jet along the path
    const pulseObj = { distance: 0 };
    gsap.to(pulseObj, {
      distance: length,
      ease: 'none',
      scrollTrigger: {
        trigger: '#map-section',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
      onUpdate: () => {
        const point = path.getPointAtLength(pulseObj.distance);
        if (pulseRef.current) {
          pulseRef.current.setAttribute('cx', point.x.toString());
          pulseRef.current.setAttribute('cy', point.y.toString());
        }
      }
    });

  }, []);

  return (
    <section id="map-section" className="relative py-48 bg-clay overflow-hidden">
      <div className="max-w-7xl mx-auto px-12 relative z-10">
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-6xl text-sand font-serif mb-6">El Puente Conceptual</h2>
          <p className="text-bronze tracking-widest text-xs uppercase">Un trayecto de la visión al origen</p>
        </div>

        <div className="relative h-[400px] w-full max-w-4xl mx-auto flex justify-between items-center">
          {/* México Point */}
          <div className="flex flex-col items-center">
            <div className="w-5 h-5 rounded-full bg-bronze shadow-[0_0_20px_rgba(198,167,123,0.8)]" />
            <div className="mt-8 text-center">
              <h4 className="text-sand font-serif text-xl">México</h4>
              <p className="text-bronze/60 text-[10px] tracking-widest uppercase font-medium">Corazón Creativo</p>
            </div>
          </div>

          {/* SVG Map Path */}
          <svg 
            ref={svgRef}
            className="absolute top-1/2 left-0 w-full h-[200px] pointer-events-none translate-y-[-50%]"
            viewBox="0 0 800 200"
            fill="none"
          >
            {/* Background path faint */}
            <path 
              d="M 20 100 Q 400 -50 780 100" 
              stroke="rgba(198,167,123,0.1)" 
              strokeWidth="1"
              fill="none"
            />
            {/* Animated drawing path */}
            <path 
              ref={pathRef}
              d="M 20 100 Q 400 -50 780 100" 
              stroke="#C6A77B" 
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="5,5"
            />
            {/* Journey Pulse (The "Jet") */}
            <circle 
              ref={pulseRef}
              r="6" 
              fill="#C6A77B" 
              className="drop-shadow-[0_0_10px_#C6A77B]"
            />
          </svg>

          {/* Pioz Point */}
          <div className="flex flex-col items-center">
            <div className="w-5 h-5 rounded-full bg-bronze shadow-[0_0_20px_rgba(198,167,123,0.8)]" />
            <div className="mt-8 text-center">
              <h4 className="text-sand font-serif text-xl">España</h4>
              <p className="text-bronze/60 text-[10px] tracking-widest uppercase font-medium">El Terroir</p>
            </div>
          </div>
        </div>

        <div className="mt-48 grid grid-cols-1 md:grid-cols-2 gap-24 text-sand/60 font-sans text-sm leading-relaxed px-12">
          <p>
            Un puente invisible une dos mundos. El carácter indomable del páramo de La Alcarria se encuentra con la pasión creativa de México para dar vida a vinos que son, ante todo, una declaración de principios.
          </p>
          <p>
            Desde la altitud de 875 metros, cada racimo captura el diálogo entre el sol implacable y el frío profundo, traduciendo ese contraste en una elegancia atemporal protegida por manos expertas.
          </p>
        </div>
      </div>
    </section>
  );
}
