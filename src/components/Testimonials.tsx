import React from 'react';
import { Star, MessageSquareQuote, CheckCircle, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section
      id="depoimentos"
      aria-label="Depoimentos de Clientes da Imperatriz Eventos"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Seção com H2 estrito */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Avaliações Verificadas</span>
          </div>

          <h2
            id="testimonials-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            O Que Nossos Clientes Dizem
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto my-4" />

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Com mais de 190 avaliações e uma média de 4.5 estrelas, a satisfação dos nossos clientes é a nossa maior recompensa.
          </p>
        </div>

        {/* Resumo de Avaliação do Google Maps */}
        <div
          id="google-review-summary"
          className="glass-luxury rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto mb-16 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-zinc-950 font-black text-2xl shadow-lg shadow-amber-500/30">
              4.5
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400 text-lg mb-1">
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <p className="text-sm font-semibold text-white">
                Classificação Excelente no Google Maps
              </p>
              <p className="text-xs text-zinc-400">
                Baseado em 194 avaliações reais de clientes
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop"
                alt="Foto de perfil de avaliador recente"
                className="w-10 h-10 rounded-full border-2 border-amber-400 object-cover"
                loading="lazy"
                decoding="async"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop"
                alt="Foto de perfil de cliente satisfeito"
                className="w-10 h-10 rounded-full border-2 border-amber-400 object-cover"
                loading="lazy"
                decoding="async"
              />
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=120&auto=format&fit=crop"
                alt="Foto de perfil de cliente verificado"
                className="w-10 h-10 rounded-full border-2 border-amber-400 object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="text-left">
              <span className="text-xs font-bold text-amber-300 block">100% Verificado</span>
              <span className="text-[11px] text-zinc-400">Público B2B e B2C</span>
            </div>
          </div>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <article
              key={item.id}
              id={`testimonial-card-${item.id}`}
              className="glass-luxury glass-luxury-hover rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-zinc-800/90 relative"
            >
              <div>
                {/* Cabeçalho do Card com Estrelas e Badge de Evento */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400 gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                    {item.eventType}
                  </span>
                </div>

                {/* Citação */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-amber-500/20 absolute -top-3 -left-2 -z-0 pointer-events-none" />
                  <p className="text-zinc-200 text-sm sm:text-base leading-relaxed italic relative z-10 font-light">
                    "{item.comment}"
                  </p>
                </div>
              </div>

              {/* Informações do Autor */}
              <div className="border-t border-zinc-800/80 pt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-base font-bold text-white flex items-center gap-1.5">
                    <span>{item.author}</span>
                    {item.verified && (
                      <span title="Cliente verificado" aria-label="Cliente verificado">
                        <CheckCircle className="w-4 h-4 text-amber-400 inline" />
                      </span>
                    )}
                  </h3>
                  {item.role && (
                    <p className="text-xs text-amber-300/80 font-medium">{item.role}</p>
                  )}
                </div>

                <span className="text-[11px] text-zinc-500 font-medium">
                  {item.date}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
