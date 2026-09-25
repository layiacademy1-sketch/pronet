import { SERVICES_LIST } from '../data/cleaningData';

export const DIRECT_PHONE = '06 31 91 46 71';
export const DIRECT_PHONE_RAW = '+33631914671';
export const WHATSAPP_NUMBER = '33631914671';

export interface SendQuoteWhatsAppParams {
  fullName: string;
  company?: string;
  phone: string;
  email: string;
  serviceId?: string;
  surface?: string;
  city?: string;
  postalCode?: string;
  frequency?: string;
  message?: string;
  reference?: string;
  type?: 'rendez-vous' | 'devis';
}

/**
 * Builds a formatted WhatsApp link containing all details from the appointment or quote form
 */
export function buildQuoteWhatsAppUrl(params: SendQuoteWhatsAppParams): string {
  const service = SERVICES_LIST.find((s) => s.id === params.serviceId);
  const serviceTitle = service ? service.title : params.serviceId || 'Nettoyage professionnel';
  const header =
    params.type === 'rendez-vous'
      ? '📅 *DEMANDE DE RENDEZ-VOUS PRONET*'
      : '📋 *DEMANDE DE DEVIS PRONET*';

  const lines = [
    'Bonjour PRONET,',
    '',
    header,
    params.reference ? `*Réf dossier :* ${params.reference}` : '',
    '',
    `👤 *Nom & Prénom :* ${params.fullName}`,
    params.company ? `🏢 *Société / Syndic :* ${params.company}` : '',
    `📞 *Téléphone :* ${params.phone}`,
    `✉️ *E-mail :* ${params.email}`,
    `🧹 *Prestation :* ${serviceTitle}`,
    params.surface ? `📐 *Surface estimée :* ${params.surface} m²` : '',
    params.city ? `📍 *Ville / Localisation :* ${params.city} ${params.postalCode || ''}`.trim() : '',
    params.frequency ? `🔄 *Fréquence souhaitée :* ${params.frequency}` : '',
    params.message ? `📝 *Précisions :* ${params.message}` : '',
    '',
    'Merci de me recontacter.',
  ].filter(Boolean);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export interface SendContactWhatsAppParams {
  name: string;
  company?: string;
  phone: string;
  email: string;
  subject?: string;
  message: string;
}

/**
 * Builds a formatted WhatsApp link for general contact messages
 */
export function buildContactWhatsAppUrl(params: SendContactWhatsAppParams): string {
  const lines = [
    'Bonjour PRONET,',
    '',
    '💬 *NOUVEAU MESSAGE DE CONTACT PRONET*',
    '',
    `👤 *Nom :* ${params.name}`,
    params.company ? `🏢 *Société / Syndic :* ${params.company}` : '',
    `📞 *Téléphone :* ${params.phone}`,
    `✉️ *E-mail :* ${params.email}`,
    params.subject ? `📌 *Sujet :* ${params.subject}` : '',
    `📝 *Message :* ${params.message}`,
    '',
    'Merci de me recontacter.',
  ].filter(Boolean);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
}

/**
 * Safely triggers opening WhatsApp in a new tab
 */
export function openWhatsApp(url: string): void {
  try {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // If popup blocker intervened, redirect current or fallback
      window.location.href = url;
    }
  } catch {
    window.location.href = url;
  }
}
