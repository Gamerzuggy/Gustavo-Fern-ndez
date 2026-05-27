import React from 'react';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center pointer-events-none">
      <div className="pointer-events-auto">
        <h1 className="text-2xl tracking-[0.2em] font-serif font-light text-clay">
          ALTO DE PIOZ
        </h1>
      </div>
      
      <div className="hidden md:flex gap-12 pointer-events-auto">
        <NavLink href="#legacy">EL LEGADO</NavLink>
        <NavLink href="#collection">LA COLECCIÓN</NavLink>
        <NavLink href="#concierge">ACCESO VIP</NavLink>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="relative text-xs tracking-widest font-sans font-medium hover:text-bronze transition-colors group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-bronze transition-all duration-300 group-hover:w-full" />
    </a>
  );
}
