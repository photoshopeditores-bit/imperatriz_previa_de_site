import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModals: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="glass-luxury rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-amber-500/30 max-h-[85vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar janela"
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-amber-300 hover:bg-zinc-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            {type === 'privacy' ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Imperatriz Eventos
            </span>
            <h3 id="policy-modal-title" className="font-serif text-2xl font-bold text-white">
              {type === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}
            </h3>
          </div>
        </div>

        <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                A <strong>Imperatriz Eventos</strong> preza pela total privacidade, confidencialidade e segurança dos dados fornecidos por nossos clientes e visitantes.
              </p>
              <h4 className="font-bold text-white text-base mt-4">1. Coleta de Informações</h4>
              <p>
                Os dados coletados em nossos formulários de agendamento (como nome, telefone, e-mail e data de evento) destinam-se única e exclusivamente ao atendimento personalizado, emissão de orçamentos e agendamento de visitas ao nosso espaço.
              </p>
              <h4 className="font-bold text-white text-base mt-4">2. Uso e Proteção de Dados</h4>
              <p>
                Nunca comercializamos nem compartilhamos informações de clientes com terceiros. Seus dados são mantidos em ambiente seguro conforme as diretrizes da Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>
              <h4 className="font-bold text-white text-base mt-4">3. Seus Direitos</h4>
              <p>
                A qualquer momento você pode solicitar a atualização ou exclusão de seus dados de nossa base de contatos através do nosso canal oficial de WhatsApp.
              </p>
            </>
          ) : (
            <>
              <p>
                Bem-vindo ao portal institucional da <strong>Imperatriz Eventos</strong>. Ao utilizar este website, você concorda com as condições descritas a seguir.
              </p>
              <h4 className="font-bold text-white text-base mt-4">1. Propósito do Site</h4>
              <p>
                Este portal tem caráter informativo e institucional, apresentando as instalações, serviços, galeria de imagens e canais de contato para locação e realização de eventos.
              </p>
              <h4 className="font-bold text-white text-base mt-4">2. Reservas e Contratos</h4>
              <p>
                O envio do formulário de contato constitui uma solicitação de proposta preliminar e não formaliza reserva de data. A reserva oficial é confirmada mediante assinatura de contrato de prestação de serviços e termos de locação do espaço.
              </p>
              <h4 className="font-bold text-white text-base mt-4">3. Direitos Autorais</h4>
              <p>
                Todas as fotos, marcas e conteúdos publicados pertencem à Imperatriz Eventos e aos seus respectivos parceiros, sendo vedada a reprodução sem prévia autorização.
              </p>
            </>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-gold-gradient text-zinc-950 font-bold text-xs uppercase tracking-wider hover:scale-105 transition-transform"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
