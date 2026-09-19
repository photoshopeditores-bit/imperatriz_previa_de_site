import React from 'react';
import { Calendar, ArrowDown, Star, Sparkles, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface HeroProps {
  onScheduleClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScheduleClick }) => {
  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#sobre');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      aria-label="Apresentação Imperatriz Eventos"
      className="relative min-h-[95vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black"
    >
      {/* Imagem de Fundo com Alta Qualidade & Overlay com Alto Contraste */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnliO85x-K5T2MmfP8IvtebjhtBmJ3UA5H1rVjT7ECom1o8lbWe3DmBR6RmBwo6ebVp89PU061u8iolzIU02WDKJrWvpVQOXYKp53Llt3IFrrCSwvXkhcASiKZLMXBprJbfOOdODA=w1600"
          alt="Salão nobre e iluminado da Imperatriz Eventos para festas e recepções de alto padrão"
          className="w-full h-full object-cover object-center scale-105 animate-subtle-zoom filter brightness-[0.45] contrast-[1.05]"
          referrerPolicy="no-referrer"
          fetchPriority="high"
        />
        {/* Camadas de degradê para legibilidade máxima de texto e estética de luxo */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/50" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0a0a0a]/60 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Conteúdo Central */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Selo Dourado de Credibilidade */}
        <div
          id="hero-badge"
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-luxury border border-amber-500/30 text-xs sm:text-sm font-medium text-amber-300 mb-8 shadow-lg shadow-black/60 backdrop-blur-md"
        >
          <span className="flex items-center text-amber-400">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400 inline" />
            <span className="font-bold ml-1 text-white">4.5</span>
          </span>
          <span className="w-1 h-1 rounded-full bg-amber-400/50" />
          <span className="text-zinc-200">+ de 190 Avaliações no Google</span>
          <span className="w-1 h-1 rounded-full bg-amber-400/50" />
          <span className="text-amber-400 font-semibold uppercase tracking-wider text-[11px] hidden sm:inline">
            Imperatriz-MA
          </span>
        </div>

        {/* H1 - Único na página inteira conforme mandatório */}
        <h1
          id="hero-main-title"
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.12] drop-shadow-md"
        >
          Imperatriz Eventos: <br className="hidden sm:inline" />
          <span className="text-gold-gradient font-serif font-extrabold italic">
            Seu Palco para Momentos Inesquecíveis
          </span>
        </h1>

        {/* Subtítulo */}
        <p
          id="hero-subtitle"
          className="max-w-3xl text-base sm:text-lg md:text-xl text-zinc-300 font-light leading-relaxed mb-10 drop-shadow"
        >
          Descubra o luxo e a sofisticação ideais para casamentos, eventos corporativos e celebrações memoráveis em Imperatriz-MA.
        </p>

        {/* Ações / Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto mb-14">
          <button
            onClick={onScheduleClick}
            id="hero-cta-primary"
            aria-label="Agende Sua Visita ao Imperatriz Eventos"
            className="w-full sm:w-auto min-w-[220px] bg-gold-gradient text-zinc-950 font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full shadow-xl shadow-amber-500/25 hover:shadow-amber-500/45 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer focus:outline-none focus:ring-4 focus:ring-amber-400/50"
          >
            <Calendar className="w-5 h-5 text-zinc-950" />
            <span>Agende Sua Visita</span>
          </button>

          <a
            href="#sobre"
            id="hero-cta-secondary"
            onClick={handleExploreClick}
            aria-label="Conhecer mais sobre o espaço e serviços"
            className="w-full sm:w-auto min-w-[180px] glass-luxury hover:bg-zinc-900/80 text-zinc-200 hover:text-white border border-amber-500/30 font-medium text-sm px-6 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Conhecer o Espaço</span>
          </a>
        </div>

        {/* Destaques Rápidos na base da Hero */}
        <div
          id="hero-quick-features"
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 w-full max-w-4xl text-left"
        >
          <div className="glass-luxury rounded-xl p-3.5 sm:p-4 border border-zinc-800/80 hover:border-amber-500/30 transition-colors">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Localização Nobre</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 font-medium">
              Novo Horizonte, Imperatriz - MA
            </p>
          </div>

          <div className="glass-luxury rounded-xl p-3.5 sm:p-4 border border-zinc-800/80 hover:border-amber-500/30 transition-colors">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Clock className="w-3.5 h-3.5" />
              <span>Disponibilidade</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 font-medium">
              Aberto 24h para Locação e Apoio
            </p>
          </div>

          <div className="glass-luxury rounded-xl p-3.5 sm:p-4 border border-zinc-800/80 hover:border-amber-500/30 transition-colors col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Estrutura Premium</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 font-medium">
              Climatização total & Acústica de alto nível
            </p>
          </div>
        </div>

        {/* Seta indicativa de scroll */}
        <a
          href="#sobre"
          onClick={handleExploreClick}
          aria-label="Rolar para a seção Sobre Nós"
          className="mt-12 text-zinc-400 hover:text-amber-300 transition-colors duration-200 animate-bounce p-2 focus:outline-none focus:text-amber-300"
        >
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
