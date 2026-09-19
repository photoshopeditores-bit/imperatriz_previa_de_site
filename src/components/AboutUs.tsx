import React from 'react';
import { Target, Compass, Award, Star, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { ABOUT_DATA } from '../data/mockData';

export const AboutUs: React.FC = () => {
  return (
    <section
      id="sobre"
      aria-label="Sobre a Imperatriz Eventos"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0d0d] overflow-hidden border-t border-zinc-900"
    >
      {/* Luz ambiente de fundo sutil */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Seção com H2 estrito */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Tradição & Exclusividade</span>
          </div>
          <h2
            id="about-section-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            {ABOUT_DATA.title}
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4" />
        </div>

        {/* Layout Grid: Apresentação e Selo de Credibilidade */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Coluna Visual: Imagem com Moldura Dourada & Selo Oficial 4.5 Stars */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-amber-500/40 via-zinc-800 to-amber-400/20 shadow-2xl shadow-black">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-zinc-950">
                <img
                  src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm3glXVGNc4bSQJWT4p4k-HtFkm9kKp3Wha16LO0KmaDeNaP2Rd92aFxjH-AFHG1KVfJciAeKItwlavlkIrr1jn6UXCI165kCWT-6Gh_qDBa7Dfq8u0-r9JTFi5OSOhvd6qVGQs=w1200"
                  alt="Decoração requintada com flores e mesas de banquete no Imperatriz Eventos"
                  className="w-full h-full object-cover object-center filter brightness-95 hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Legenda de foto discreta */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-amber-200 font-serif italic">
                    "Ambientes concebidos para transformar cada celebração em uma lembrança eterna."
                  </p>
                </div>
              </div>
            </div>

            {/* Destaque MANDATÓRIO: Selo 4.5 + de 190 Avaliações */}
            <div
              id="reputation-badge"
              className="absolute -bottom-6 -right-2 sm:-right-6 glass-luxury p-5 rounded-2xl border-2 border-amber-400/40 shadow-2xl shadow-black max-w-[280px] backdrop-blur-xl animate-float"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center text-zinc-950 font-bold shadow-lg shadow-amber-500/30">
                  <Star className="w-6 h-6 fill-zinc-950 text-zinc-950" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-black text-white">4.5</span>
                    <span className="text-amber-400 text-xs font-semibold">/ 5.0</span>
                  </div>
                  <div className="flex text-amber-400 text-xs">
                    {'★★★★★'.split('').map((star, idx) => (
                      <span key={idx} className="text-amber-400 text-sm">
                        {star}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border-t border-zinc-700/60 pt-2 flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-200">+ de 190 avaliações</span>
                <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider bg-amber-500/10 px-2 py-0.5 rounded">
                  Google Maps
                </span>
              </div>
            </div>
          </div>

          {/* Coluna Textual: Missão, Visão e Valores */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Missão */}
            <article
              id="about-mission"
              className="glass-luxury rounded-2xl p-6 sm:p-7 border border-zinc-800 hover:border-amber-500/30 transition-all duration-300 relative group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2 flex items-center gap-2">
                    Nossa Missão
                  </h3>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {ABOUT_DATA.mission}
                  </p>
                </div>
              </div>
            </article>

            {/* Visão */}
            <article
              id="about-vision"
              className="glass-luxury rounded-2xl p-6 sm:p-7 border border-zinc-800 hover:border-amber-500/30 transition-all duration-300 relative group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2 flex items-center gap-2">
                    Nossa Visão
                  </h3>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {ABOUT_DATA.vision}
                  </p>
                </div>
              </div>
            </article>

            {/* Valores */}
            <article
              id="about-values"
              className="glass-luxury rounded-2xl p-6 sm:p-7 border border-zinc-800 hover:border-amber-500/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <h3 className="font-serif text-xl font-bold text-white mb-3">
                    Nossos Valores
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {ABOUT_DATA.values.map((val) => (
                      <span
                        key={val}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-amber-500/30 text-xs sm:text-sm font-medium text-amber-200 hover:bg-amber-500/10 transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                        {val}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Estatísticas / Números de Impacto */}
        <div
          id="about-stats-grid"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-zinc-800/80"
        >
          {ABOUT_DATA.stats.map((stat, i) => (
            <div
              key={i}
              className="glass-luxury rounded-2xl p-6 text-center border border-zinc-800 hover:border-amber-500/30 transition-all"
            >
              <div className="font-serif text-3xl sm:text-4xl font-bold text-gold-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-zinc-400">
                {stat.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
