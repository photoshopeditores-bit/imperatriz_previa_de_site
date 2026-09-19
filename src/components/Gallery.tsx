import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn, Sparkles, MapPin, ExternalLink } from 'lucide-react';
import { GALLERY_DATA } from '../data/mockData';
import { GalleryImage } from '../types';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Momentos' },
    { id: 'casamentos', label: 'Casamentos' },
    { id: 'corporativo', label: 'Corporativo' },
    { id: 'sociais', label: 'Celebrações Sociais' },
    { id: 'ambientes', label: 'Ambientes & Estrutura' },
  ];

  const filteredImages = selectedCategory === 'todos'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev! + 1) % filteredImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section
      id="galeria"
      aria-label="Galeria de Eventos da Imperatriz Eventos"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0d0d] overflow-hidden border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Seção com H2 estrito */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Portfólio Visual</span>
          </div>

          <h2
            id="gallery-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Momentos Memoráveis na Imperatriz Eventos
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto my-4" />

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Inspire-se com alguns dos eventos que tivemos o prazer de sediar em nosso espaço.
          </p>
        </div>

        {/* Filtros de Categoria */}
        <div
          role="tablist"
          aria-label="Filtrar galeria por categoria"
          className="flex flex-wrap items-center justify-center gap-2.5 mb-12"
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat.id)}
                id={`filter-btn-${cat.id}`}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                  isActive
                    ? 'bg-gold-gradient text-zinc-950 font-bold shadow-md shadow-amber-500/25 scale-105'
                    : 'glass-luxury text-zinc-300 hover:text-amber-300 hover:border-amber-500/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grid de Imagens com proporções elegantes */}
        <div
          id="gallery-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image: GalleryImage, index: number) => (
            <figure
              key={image.id}
              id={`gallery-item-${image.id}`}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden glass-luxury border border-zinc-800 hover:border-amber-400/50 shadow-lg cursor-pointer transition-all duration-500 hover:-translate-y-1.5"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-950 relative">
                {/* MANDATÓRIO: loading="lazy" e decoding="async" */}
                <img
                  src={image.url}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200';
                  }}
                  className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-108 group-hover:brightness-105 transition-all duration-700"
                />

                {/* Overlay gradiente com Glassmorphism ao Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{image.category}</span>
                  </div>
                  <figcaption className="text-white font-serif text-base font-bold leading-snug">
                    {image.title}
                  </figcaption>
                  <span className="text-[11px] text-zinc-300 mt-1 flex items-center gap-1">
                    <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                    Clique para ampliar em alta resolução
                  </span>
                </div>

                {/* Badge minimalista na foto */}
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 backdrop-blur-md text-zinc-300 opacity-80 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-amber-300" />
                </div>
              </div>
            </figure>
          ))}
        </div>

        {/* Link direto para o Google Maps */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.app.goo.gl/2CrpGnFeqcxKfgZ36"
            target="_blank"
            rel="noopener noreferrer"
            id="gallery-google-maps-btn"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full glass-luxury border border-amber-500/30 text-amber-300 hover:text-amber-200 hover:border-amber-400 font-medium text-sm transition-all duration-300 hover:scale-105 shadow-lg shadow-black/40"
          >
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Ver perfil e mais fotos reais no Google Maps</span>
            <ExternalLink className="w-4 h-4 opacity-70" />
          </a>
        </div>
      </div>

      {/* Modal Lightbox de Alta Resolução */}
      {activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de Fotos em Alta Resolução"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Botão Fechar */}
          <button
            onClick={closeLightbox}
            aria-label="Fechar galeria de fotos"
            className="absolute top-6 right-6 z-20 p-3 rounded-full bg-zinc-900/90 text-white hover:text-amber-400 border border-zinc-700 hover:border-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Botão Anterior */}
          <button
            onClick={prevImage}
            aria-label="Foto anterior"
            className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-zinc-900/80 text-white hover:text-amber-400 border border-zinc-700 hover:border-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Botão Próximo */}
          <button
            onClick={nextImage}
            aria-label="Próxima foto"
            className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-zinc-900/80 text-white hover:text-amber-400 border border-zinc-700 hover:border-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Container da Foto Ampliada */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/40 shadow-2xl shadow-black bg-zinc-950">
              <img
                src={filteredImages[activeLightboxIndex].url}
                alt={filteredImages[activeLightboxIndex].alt}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-2xl"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200';
                }}
              />
            </div>

            {/* Legenda e Contador */}
            <div className="mt-4 text-center px-4">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                {filteredImages[activeLightboxIndex].title}
              </h3>
              <p className="text-xs text-amber-300 mt-1">
                Foto {activeLightboxIndex + 1} de {filteredImages.length} • Imperatriz Eventos
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
