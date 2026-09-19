import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Instagram, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  CalendarDays,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { ContactFormData } from '../types';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    eventType: 'Casamento',
    eventDate: '',
    guestCount: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        eventType: preselectedService.includes('Casamento') ? 'Casamento' : 
                   preselectedService.includes('Corporativo') ? 'Evento Corporativo' :
                   preselectedService.includes('Social') ? 'Celebração Social' : 'Outro',
        message: `Olá! Tenho interesse no serviço de ${preselectedService} no Imperatriz Eventos. Gostaria de verificar disponibilidade e receber um orçamento detalhado.`,
      }));
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `*Nova Solicitação - Imperatriz Eventos*\n` +
      `*Nome:* ${formData.name}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*Tipo de Evento:* ${formData.eventType}\n` +
      `*Data Prevista:* ${formData.eventDate || 'A definir'}\n` +
      `*Mensagem:* ${formData.message || 'Gostaria de agendar uma visita e solicitar um orçamento.'}`
    );
    window.open(`https://wa.me/5599991235865?text=${text}`, '_blank');
  };

  return (
    <section
      id="contato"
      aria-label="Contato e Localização"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Luz ambiente de fundo */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Seção com H2 estrito */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
            <CalendarDays className="w-3.5 h-3.5" />
            <span>Atendimento Exclusivo</span>
          </div>

          <h2
            id="contact-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Fale Conosco e Agende Sua Visita
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto my-4" />

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Estamos à sua inteira disposição para apresentar nosso espaço, esclarecer dúvidas e desenhar o projeto ideal para seu evento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Coluna 1: Informações de Contato Rápidas */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-luxury rounded-2xl p-7 border border-zinc-800">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                Informações de Atendimento
              </h3>

              <ul className="space-y-6">
                {/* WhatsApp */}
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-zinc-400 tracking-wider block">
                      WhatsApp & Telefone
                    </span>
                    <a
                      href="tel:+5599991235865"
                      className="text-base font-bold text-white hover:text-amber-300 transition-colors block"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium mt-1 underline underline-offset-4"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Iniciar conversa no WhatsApp</span>
                    </a>
                  </div>
                </li>

                {/* Instagram */}
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-zinc-400 tracking-wider block">
                      Instagram Oficial
                    </span>
                    <a
                      href={COMPANY_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-white hover:text-amber-300 transition-colors block"
                    >
                      @imperatriz.eventos
                    </a>
                    <span className="text-xs text-zinc-400 block mt-1">
                      Acompanhe fotos e novidades diárias
                    </span>
                  </div>
                </li>

                {/* Endereço */}
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-zinc-400 tracking-wider block">
                      Endereço
                    </span>
                    <p className="text-sm font-semibold text-white leading-snug">
                      {COMPANY_INFO.address}
                    </p>
                    <a
                      href={COMPANY_INFO.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-medium mt-1 underline underline-offset-4"
                    >
                      <span>Abrir no Google Maps</span>
                    </a>
                  </div>
                </li>

                {/* Horário de Funcionamento */}
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-zinc-400 tracking-wider block">
                      Horário de Funcionamento
                    </span>
                    <p className="text-sm font-bold text-amber-300">
                      {COMPANY_INFO.hours}
                    </p>
                    <span className="text-xs text-zinc-400 block mt-0.5">
                      Recepção e atendimento 24h para noivos e contratantes
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Selo B2B e B2C */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-zinc-900 to-amber-500/5 border border-amber-500/20 flex items-center gap-4">
              <Sparkles className="w-8 h-8 text-amber-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Visitas com Agendamento Prévia
                </p>
                <p className="text-xs text-zinc-300 mt-0.5">
                  Receba atendimento privativo com degustação e apresentação das plantas do salão.
                </p>
              </div>
            </div>
          </div>

          {/* Coluna 2: Formulário de Contato e Reserva */}
          <div className="lg:col-span-7">
            <div className="glass-luxury rounded-2xl p-7 sm:p-9 border border-zinc-800 shadow-2xl">
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Solicite uma Proposta ou Agendamento
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mb-8">
                Preencha os dados abaixo. Nossa equipe entrará em contato em menos de 2 horas.
              </p>

              {submitted ? (
                <div
                  id="form-success-feedback"
                  className="rounded-2xl p-8 bg-zinc-900/90 border-2 border-amber-500/40 text-center animate-fadeIn"
                >
                  <div className="w-16 h-16 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-white mb-2">
                    Mensagem Recebida com Sucesso!
                  </h4>
                  <p className="text-zinc-300 text-sm mb-6 max-w-md mx-auto">
                    Obrigado, <strong className="text-amber-300">{formData.name}</strong>. Nossa equipe de eventos entrará em contato para alinhar todos os detalhes da sua celebração.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="bg-gold-gradient text-zinc-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Agilizar no WhatsApp agora</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold transition-colors"
                    >
                      Enviar Outra Mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nome */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Maria Clara Silveira"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-700/80 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      />
                    </div>

                    {/* Telefone */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(99) 99999-9999"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-700/80 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* E-mail */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seuemail@exemplo.com"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-700/80 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      />
                    </div>

                    {/* Tipo de Evento */}
                    <div>
                      <label htmlFor="contact-event-type" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                        Tipo de Evento *
                      </label>
                      <select
                        id="contact-event-type"
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700/80 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors cursor-pointer"
                      >
                        <option value="Casamento">Casamento de Sonho</option>
                        <option value="Evento Corporativo">Evento Corporativo / Palestra</option>
                        <option value="Celebração Social">Aniversário / Festa de 15 Anos</option>
                        <option value="Formatura">Formatura / Colação</option>
                        <option value="Bodas">Bodas & Recepção Intimista</option>
                        <option value="Outro">Outro Formato Exclusivo</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Data Preferencial */}
                    <div>
                      <label htmlFor="contact-date" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                        Data Preferencial (Previsão)
                      </label>
                      <input
                        type="date"
                        id="contact-date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-700/80 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      />
                    </div>

                    {/* Estimativa de Convidados */}
                    <div>
                      <label htmlFor="contact-guests" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                        Número Estimado de Convidados
                      </label>
                      <input
                        type="text"
                        id="contact-guests"
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        placeholder="Ex: 150 a 300 pessoas"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-700/80 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                      Mensagem / Detalhes do seu Desejo
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte-nos como imagina sua celebração ou tire suas dúvidas com nossos consultores..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-700/80 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Botão Enviar Mensagem */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      id="contact-submit-btn"
                      aria-label="Enviar Mensagem para Imperatriz Eventos"
                      className="w-full sm:w-auto flex-1 bg-gold-gradient text-zinc-950 font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? 'Enviando Mensagem...' : 'Enviar Mensagem'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      id="contact-whatsapp-direct-btn"
                      aria-label="Conversar diretamente pelo WhatsApp"
                      className="w-full sm:w-auto p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-amber-300 border border-amber-500/30 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Ou Chame no WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Mapa de Localização Incorporado do Google Maps */}
        <div className="mt-16 sm:mt-20">
          <div className="glass-luxury rounded-3xl p-2 border border-zinc-800 overflow-hidden shadow-2xl">
            <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800/80">
              <div>
                <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                  Mapa Interativo
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Localização da Imperatriz Eventos
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  {COMPANY_INFO.address}
                </p>
              </div>

              <a
                href={COMPANY_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 hover:bg-zinc-800 text-amber-300 border border-amber-500/30 px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Como Chegar (GPS)</span>
              </a>
            </div>

            <div className="aspect-[16/7] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden bg-zinc-950">
              <iframe
                title="Localização do Salão Imperatriz Eventos no Google Maps"
                src={COMPANY_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter invert-[0.9] hue-rotate-180 contrast-125 brightness-95"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
