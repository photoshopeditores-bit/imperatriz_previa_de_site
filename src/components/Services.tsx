import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Briefcase, 
  Sparkles, 
  Sliders, 
  UtensilsCrossed, 
  Volume2, 
  ArrowRight, 
  Check,
  CalendarCheck
} from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-7 h-7 text-amber-400" />;
      case 'Briefcase':
        return <Briefcase className="w-7 h-7 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-amber-400" />;
      case 'Sliders':
        return <Sliders className="w-7 h-7 text-amber-400" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-7 h-7 text-amber-400" />;
      case 'Volume2':
        return <Volume2 className="w-7 h-7 text-amber-400" />;
      default:
        return <Sparkles className="w-7 h-7 text-amber-400" />;
    }
  };

  return (
    <section
      id="servicos"
      aria-label="Serviços Exclusivos da Imperatriz Eventos"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background Decorative Mesh */}
      <div className="absolute inset-0 bg-subtle-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Estrutura Completa & Assessoria</span>
          </div>

          {/* H2 Mandatório */}
          <h2
            id="services-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Serviços Exclusivos para Seu Evento
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto my-4" />

          {/* Descrição Mandatória */}
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços personalizados para garantir que seu evento seja impecável em cada detalhe.
          </p>
        </div>

        {/* Grid de 6 Serviços Exclusivos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <article
              key={service.id}
              id={`service-card-${service.id}`}
              className="glass-luxury glass-luxury-hover rounded-2xl p-7 sm:p-8 flex flex-col justify-between relative group border border-zinc-800/90"
            >
              <div>
                {/* Ícone e Indicador Dourado */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-amber-500/30 flex items-center justify-center shadow-lg shadow-black group-hover:scale-110 group-hover:border-amber-400 transition-all duration-300">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    Premium
                  </span>
                </div>

                {/* Título H3 Mandatório */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
                  {service.title}
                </h3>

                {/* Descrição Curta Mandatória */}
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {service.shortDesc}
                </p>

                {/* Lista de Recursos/Diferenciais */}
                <ul className="space-y-2.5 mb-8 border-t border-zinc-800/80 pt-4">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-amber-400" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botões de Ação do Card */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => onSelectService(service.title)}
                  id={`btn-quote-${service.id}`}
                  aria-label={`Solicitar orçamento para ${service.title}`}
                  className="flex-1 bg-gold-gradient text-zinc-950 font-bold text-xs tracking-wider uppercase py-3 px-4 rounded-xl shadow-md hover:shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-300"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Solicitar Orçamento</span>
                </button>

                <button
                  onClick={() => setActiveModalService(service)}
                  id={`btn-details-${service.id}`}
                  aria-label={`Ver detalhes completos de ${service.title}`}
                  className="p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-amber-300 border border-zinc-700/60 hover:border-amber-400/40 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
                  title="Ver mais detalhes"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal de Detalhes do Serviço */}
      {activeModalService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-service-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setActiveModalService(null)}
        >
          <div
            className="glass-luxury rounded-3xl max-w-lg w-full p-6 sm:p-8 border-2 border-amber-500/40 shadow-2xl relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-amber-500/30 flex items-center justify-center">
                {getIcon(activeModalService.iconName)}
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                  Imperatriz Eventos
                </span>
                <h3 id="modal-service-title" className="font-serif text-2xl font-bold text-white">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
              {activeModalService.fullDesc}
            </p>

            <div className="bg-zinc-900/80 rounded-xl p-4 border border-zinc-800 mb-6">
              <h4 className="text-xs uppercase font-bold text-amber-300 tracking-wider mb-3">
                Incluso no Pacote:
              </h4>
              <ul className="space-y-2">
                {activeModalService.features.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-200">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  const title = activeModalService.title;
                  setActiveModalService(null);
                  onSelectService(title);
                }}
                className="flex-1 bg-gold-gradient text-zinc-950 font-bold text-xs tracking-wider uppercase py-3.5 rounded-xl shadow-lg hover:scale-102 transition-transform flex items-center justify-center gap-2"
              >
                <span>Agendar para {activeModalService.title}</span>
              </button>

              <button
                onClick={() => setActiveModalService(null)}
                className="px-5 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium text-xs transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
