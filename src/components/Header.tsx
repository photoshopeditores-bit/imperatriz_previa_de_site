import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, Calendar, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface HeaderProps {
  onScheduleClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onScheduleClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo da Empresa */}
        <a
          href="#inicio"
          id="header-logo-link"
          aria-label="Imperatriz Eventos - Página Inicial"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 flex items-center justify-center p-[1px] shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0a0a0a] rounded-[7px] flex items-center justify-center">
              <span className="font-serif font-bold text-amber-300 text-lg tracking-wider">IE</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white uppercase group-hover:text-amber-200 transition-colors">
              Imperatriz
            </span>
            <span className="text-[10px] tracking-[0.28em] text-amber-400 font-medium uppercase -mt-1">
              Eventos • Luxo
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav
          id="desktop-navigation"
          aria-label="Navegação Principal"
          className="hidden md:flex items-center gap-6 lg:gap-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-link-${link.href.replace('#', '')}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-zinc-300 hover:text-amber-300 transition-colors duration-200 relative py-1 focus:outline-none focus:text-amber-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-amber-300 after:to-amber-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Quick Actions & CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={COMPANY_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visite nosso perfil oficial no Instagram"
            id="header-instagram-btn"
            className="p-2 rounded-full text-zinc-300 hover:text-amber-300 hover:bg-zinc-800/60 border border-zinc-700/50 hover:border-amber-400/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp com Imperatriz Eventos"
            id="header-phone-btn"
            className="flex items-center gap-2 text-xs font-semibold text-zinc-200 hover:text-amber-300 px-3 py-2 rounded-lg bg-zinc-900/60 hover:bg-zinc-800/80 border border-amber-500/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{COMPANY_INFO.phoneDisplay}</span>
          </a>

          <button
            onClick={onScheduleClick}
            id="header-cta-button"
            aria-label="Agende sua visita ao Imperatriz Eventos"
            className="bg-gold-gradient text-zinc-950 font-semibold text-xs tracking-wider uppercase px-4 py-2.5 rounded-full shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-300"
          >
            <Calendar className="w-3.5 h-3.5 text-zinc-950" />
            <span>Agende Sua Visita</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="mobile-menu-toggle"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          className="md:hidden p-2 rounded-lg text-zinc-200 hover:text-amber-300 hover:bg-zinc-800/60 border border-amber-500/30 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Menu de Navegação Mobile"
          className="md:hidden fixed inset-x-0 top-[60px] bg-[#0d0d0d]/95 backdrop-blur-xl border-b border-amber-500/30 px-6 py-6 shadow-2xl transition-all animate-fadeIn"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                id={`mobile-nav-${link.href.replace('#', '')}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between text-base font-medium text-zinc-200 hover:text-amber-300 py-2 border-b border-zinc-800/60 focus:outline-none focus:text-amber-300"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-amber-400/60" />
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm font-semibold text-amber-300 border border-amber-500/40 rounded-xl py-3 bg-amber-500/10"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp: {COMPANY_INFO.phoneDisplay}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onScheduleClick();
                }}
                className="w-full bg-gold-gradient text-zinc-950 font-bold text-sm tracking-wide uppercase py-3.5 rounded-xl shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Minha Visita</span>
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};
