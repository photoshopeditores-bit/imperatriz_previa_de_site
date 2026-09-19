import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-none">
      {/* Tooltip de convite */}
      {!tooltipDismissed && (
        <div className="pointer-events-auto glass-luxury bg-zinc-950/95 border border-amber-500/40 rounded-2xl p-3.5 shadow-2xl max-w-[240px] text-left animate-fadeIn relative">
          <button
            onClick={() => setTooltipDismissed(true)}
            aria-label="Fechar balão do WhatsApp"
            className="absolute top-2 right-2 text-zinc-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="text-[11px] font-semibold text-amber-300 mb-0.5">
            Atendimento 24h Imperatriz
          </p>
          <p className="text-xs text-zinc-300 leading-tight">
            Tire suas dúvidas ou agende sua visita pelo WhatsApp agora mesmo!
          </p>
        </div>
      )}

      {/* Botão Flutuante Principal */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar agora com Imperatriz Eventos pelo WhatsApp no número (99) 99123-5865"
        className="pointer-events-auto group relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center text-white shadow-xl shadow-emerald-950/60 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
      >
        {/* Anel de Pulso */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping -z-10 group-hover:opacity-100" />
        
        <MessageCircle className="w-7 h-7 fill-white text-white drop-shadow" />
      </a>
    </div>
  );
};
