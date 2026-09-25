export type ServiceCategory =
  | 'industriel'
  | 'bureaux'
  | 'immeubles'
  | 'parties-communes'
  | 'vitres'
  | 'chantier'
  | 'sols'
  | 'locaux-commerces';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategory;
  shortDesc: string;
  longDesc: string;
  image: string;
  highlightBadge: string;
  features: string[];
  equipment: string[];
  certifications: string[];
  typicalInterventions: string[];
  startingPrice?: string;
}

export type ProjectCategory = 'tous' | 'bureaux' | 'immeubles' | 'commerces' | 'chantier' | 'industriel';

export interface BeforeAfterProject {
  id: string;
  title: string;
  category: 'bureaux' | 'immeubles' | 'commerces' | 'chantier' | 'industriel';
  categoryLabel: string;
  beforeImage: string;
  afterImage: string;
  location: string;
  surface: string;
  duration: string;
  description: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  content: string;
  serviceUsed: string;
  date: string;
}

export interface StatItem {
  id: string;
  value: string;
  numericTarget?: number;
  label: string;
  subtext: string;
  highlight?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface PartnerLogo {
  id: string;
  name: string;
  sector: string;
  badge: string;
  logoUrl?: string;
  darkBg?: boolean;
}

export interface QuoteFormData {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  serviceId: string;
  surface: string;
  address: string;
  postalCode: string;
  city: string;
  frequency: string;
  message: string;
  acceptTerms: boolean;
  honeypot?: string; // anti-spam
}
