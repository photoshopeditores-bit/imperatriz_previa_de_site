/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { PolicyModals } from './components/PolicyModals';

export default function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('');
  const [activePolicyModal, setActivePolicyModal] = useState<'privacy' | 'terms' | null>(null);

  const handleScheduleClick = () => {
    const contactSection = document.querySelector('#contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForQuote(serviceTitle);
    const contactSection = document.querySelector('#contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Cabeçalho Fixo com Glassmorphism */}
      <Header onScheduleClick={handleScheduleClick} />

      {/* Conteúdo Principal com Estrutura Semântica */}
      <main id="main-content">
        {/* Seção Hero com H1 único e CTA */}
        <Hero onScheduleClick={handleScheduleClick} />

        {/* Sobre Nós / Missão, Visão e Valores com Selo 4.5 Stars */}
        <AboutUs />

        {/* Nossos Serviços Exclusivos com H3 para cada serviço */}
        <Services onSelectService={handleSelectService} />

        {/* Galeria de Fotos em Alta Resolução com Lazy Loading */}
        <Gallery />

        {/* Depoimentos de Clientes Verificados do Google Maps */}
        <Testimonials />

        {/* Contato, WhatsApp, Formulário e Mapa Interativo */}
        <Contact preselectedService={selectedServiceForQuote} />
      </main>

      {/* Rodapé Corporativo com 3 Colunas de Links */}
      <Footer onOpenPolicy={(type) => setActivePolicyModal(type)} />

      {/* Botão Flutuante de Atendimento WhatsApp 24h */}
      <WhatsAppFloatingButton />

      {/* Modais de Política de Privacidade e Termos de Uso */}
      <PolicyModals
        type={activePolicyModal}
        onClose={() => setActivePolicyModal(null)}
      />
    </div>
  );
}

