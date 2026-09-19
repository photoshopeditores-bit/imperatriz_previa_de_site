import React from 'react';
import { Phone, Instagram, MapPin, ArrowUp, Heart } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#070707] text-zinc-300 border-t border-zinc-900 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-zinc-800/80">
          {/* Coluna Principal: Logo Minimalista & Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 flex items-center justify-center p-[1px]">
                <div className="w-full h-full bg-[#0a0a0a] rounded-[7px] flex items-center justify-center">
                  <span className="font-serif font-bold text-amber-300 text-lg">IE</span>
                </div>
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-wider text-white uppercase block">
                  Imperatriz Eventos
                </span>
                <span className="text-[10px] tracking-[0.25em] text-amber-400 font-medium uppercase block -mt-1">
                  Espaço & Festas Exclusivas
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-6">
              O espaço premium em Imperatriz-MA para casamentos cinematográficos, conferências corporativas e momentos memoráveis com sofisticação absoluta.
            </p>

            {/* Informações de Contato Rápidas */}
            <div className="space-y-2.5 text-xs text-zinc-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
                  WhatsApp: {COMPANY_INFO.phoneDisplay} (24 Horas)
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={COMPANY_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
                  @imperatriz.eventos
                </a>
              </p>
            </div>
          </div>

          {/* Menus de Navegação: Coluna 1 Mandatória */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-amber-500/20 pb-2">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => handleNavClick(e, '#inicio')}
                  className="hover:text-amber-300 transition-colors focus:outline-none focus:text-amber-300"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  onClick={(e) => handleNavClick(e, '#sobre')}
                  className="hover:text-amber-300 transition-colors focus:outline-none focus:text-amber-300"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  onClick={(e) => handleNavClick(e, '#servicos')}
                  className="hover:text-amber-300 transition-colors focus:outline-none focus:text-amber-300"
                >
                  Serviços
                </a>
              </li>
            </ul>
          </div>

          {/* Menus de Navegação: Coluna 2 Mandatória */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-amber-500/20 pb-2">
              Experiência
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="#galeria"
                  onClick={(e) => handleNavClick(e, '#galeria')}
                  className="hover:text-amber-300 transition-colors focus:outline-none focus:text-amber-300"
                >
                  Galeria
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  onClick={(e) => handleNavClick(e, '#depoimentos')}
                  className="hover:text-amber-300 transition-colors focus:outline-none focus:text-amber-300"
                >
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Menus de Navegação: Coluna 3 Mandatória */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-amber-500/20 pb-2">
              Atendimento & Termos
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="#contato"
                  onClick={(e) => handleNavClick(e, '#contato')}
                  className="hover:text-amber-300 transition-colors focus:outline-none focus:text-amber-300"
                >
                  Contato
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPolicy('privacy')}
                  className="text-left hover:text-amber-300 transition-colors cursor-pointer focus:outline-none focus:text-amber-300"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPolicy('terms')}
                  className="text-left hover:text-amber-300 transition-colors cursor-pointer focus:outline-none focus:text-amber-300"
                >
                  Termos de Uso
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé Inferior: Copyright Mandatório */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p id="footer-copyright">
            © 2026 Imperatriz Eventos. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-zinc-500">
              Feito para momentos únicos <Heart className="w-3 h-3 text-amber-500 fill-amber-500" />
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Voltar ao topo da página"
              className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-amber-300 border border-zinc-800 hover:border-amber-400/40 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
              title="Voltar ao Topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
