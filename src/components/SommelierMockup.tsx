import { MessageSquare } from 'lucide-react';

export default function SommelierMockup() {
  return (
    <div className="fixed bottom-8 right-8 z-[60] group">
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-4 w-64 glass rounded-2xl p-4 transform translate-y-4 opacity-0 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-bronze/20 flex items-center justify-center flex-shrink-0">
            <span className="text-bronze text-[10px] font-serif italic">S</span>
          </div>
          <p className="text-[10px] text-sand/90 font-sans leading-relaxed">
            "Estaré listo para sugerir el maridaje perfecto para tu próxima velada."
          </p>
        </div>
        <div className="absolute -bottom-2 right-6 w-4 h-4 glass rotate-45 border-t-0 border-l-0" />
      </div>

      {/* Button */}
      <button className="w-14 h-14 bg-bronze text-clay rounded-full flex items-center justify-center shadow-2xl hover:bg-sand hover:text-bronze transition-all duration-500 border border-bronze/20">
        <MessageSquare size={20} strokeWidth={1.5} />
      </button>
    </div>
  );
}
