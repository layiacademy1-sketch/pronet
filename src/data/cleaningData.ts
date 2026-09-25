import {
  ServiceItem,
  BeforeAfterProject,
  Testimonial,
  StatItem,
  ProcessStep,
  PartnerLogo,
} from '../types';

export const COMPANY_INFO = {
  name: 'PRONET',
  fullName: 'PRONET Propreté - Multi-Services',
  legalName: 'Société PRONET Propreté & Multi-Services',
  tagline: 'Votre partenaire de confiance pour un environnement impeccable',
  shortBio:
    "Spécialiste de la propreté professionnelle, du nettoyage industriel, tertiaire et multi-services en Île-de-France. Nos équipes qualifiées interviennent 7j/7 avec du matériel de pointe et des protocoles éco-responsables certifiés.",
  phone: '06 31 91 46 71',
  phoneRaw: '+33631914671',
  email: 'societe.pronet@gmail.com',
  address: '3 Domaine des 7 Îles',
  postalCode: '93220',
  city: 'Gagny',
  fullAddress: '3 Domaine des 7 Îles, 93220 Gagny',
  siret: '912 845 632 00019',
  rcs: 'Bobigny B 912 845 632',
  ape: '8122Z - Nettoyage courant des bâtiments & multi-services',
  assurance: 'AXA Entreprise - Responsabilité Civile Professionnelle 10M€',
  hours: 'Du Lundi au Samedi : 06h00 – 21h00 | Astreinte urgence 24h/24',
  interventionZones: 'Gagny, Seine-Saint-Denis (93), Grand Paris et toute l’Île-de-France',
};

export const KEY_STATS: StatItem[] = [
  {
    id: 'exp',
    value: '15+',
    numericTarget: 15,
    label: "Années d'expérience",
    subtext: 'Maîtrise éprouvée des normes d’hygiène et sécurité',
    highlight: false,
  },
  {
    id: 'clients',
    value: '480+',
    numericTarget: 480,
    label: 'Clients professionnels accompagnés',
    subtext: 'Entreprises, sièges sociaux, syndics et usines',
    highlight: true,
  },
  {
    id: 'interventions',
    value: '14 200+',
    numericTarget: 14200,
    label: 'Interventions réalisées par an',
    subtext: 'Régulières ou en astreinte d’urgence',
    highlight: false,
  },
  {
    id: 'satisfaction',
    value: '99.2%',
    numericTarget: 99.2,
    label: 'Taux de satisfaction client',
    subtext: 'Contrôles contradictoires mensuels systématiques',
    highlight: true,
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'industriel',
    slug: 'nettoyage-industriel',
    title: 'Nettoyage industriel',
    category: 'industriel',
    highlightBadge: 'Normes HACCP & SEVESO',
    shortDesc:
      'Dégraissage haute pression, lavage d’entrepôts logistiques, chaînes de production et zones de stockage complexes.',
    longDesc:
      'Nos agents spécialisés interviennent en environnement industriel sévère : usines, plateformes logistiques, ateliers de fabrication et salles blanches. Nous maîtrisons les contraintes de sécurité les plus strictes (CACES, habilitations chimiques, protocoles HACCP et SEVESO).',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    features: [
      'Nettoyage et dégraissage de sols industriels (résine, béton quartz)',
      'Dépoussiérage des charpentes, gaines de ventilation et luminaires',
      'Nettoyage haute pression et aspiration de résidus lourds',
      'Désinfection conforme aux normes de votre secteur',
    ],
    equipment: [
      'Autolaveuses autoportées industrielles Nilfisk / Kärcher',
      'Nettoyeurs haute pression eau chaude jusqu’à 300 bars',
      'Aspirateurs industriels ATEX pour poussières inflammables',
      'Nacelles ciseaux et articulées avec agents certifiés CACES',
    ],
    certifications: ['Habilitation CACES', 'Normes ISO 9001 & 14001', 'Certibiocide'],
    typicalInterventions: [
      'Entrepôts logistiques & hubs de fret',
      'Usines agroalimentaires et pharmaceutiques',
      'Ateliers mécaniques & sites manufacturiers',
      'Centres de tri et plateformes de distribution',
    ],
    startingPrice: 'Sur devis personnalisé sous 24h',
  },
  {
    id: 'bureaux',
    slug: 'nettoyage-bureaux',
    title: 'Nettoyage de bureaux & espaces tertiaires',
    category: 'bureaux',
    highlightBadge: 'Contrats sur-mesure',
    shortDesc:
      'Entretien soigné des open spaces, bureaux de direction, salles de réunion, sanitaires et espaces de convivialité.',
    longDesc:
      'Offrez à vos collaborateurs et clients un cadre de travail irréprochable et sain. Nos équipes interviennent en horaires décalés (tôt le matin ou en soirée) pour une discrétion absolue et un résultat constant jour après jour.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    features: [
      'Aspiration et shampouinage moquette, nettoyage des parquets',
      'Dépoussiérage et désinfection des postes de travail et écrans',
      'Désinfection virucide complète des blocs sanitaires',
      'Gestion et tri sélectif des corbeilles et déchets de bureau',
    ],
    equipment: [
      'Aspirateurs dorsaux silencieux à filtration HEPA',
      'Chiffonnettes microfibres à code couleur anti-contamination',
      'Monobrosses basse vitesse lustrantes',
      'Produits d’entretien écologiques Écolabel Européen',
    ],
    certifications: ['Écolabel Européen', 'Charte RSE CleanOffice', 'Protocole Virucide'],
    typicalInterventions: [
      'Sièges sociaux de grands comptes',
      'Cabinets d’avocats, banques et fiduciaires',
      'Espaces de coworking et pépinières d’entreprises',
      'Cabinets médicaux et centres de santé',
    ],
    startingPrice: 'À partir de 190€ HT / mois',
  },
  {
    id: 'immeubles',
    slug: 'nettoyage-immeubles',
    title: 'Nettoyage d’immeubles & copropriétés',
    category: 'immeubles',
    highlightBadge: 'Partenaire des Syndics',
    shortDesc:
      'Entretien régulier de résidences privées et copropriétés de standing : halls de prestige, ascenseurs et paliers.',
    longDesc:
      'Partenaire privilégié des syndics de copropriété et des conseils syndicaux, PRONET garantit le maintien en valeur du patrimoine immobilier avec un suivi rigoureux par cahier de liaison numérique.',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    features: [
      'Lavage et désinfection des cabines d’ascenseur et glaces',
      'Nettoyage minutieux des halls d’entrée et miroiteries',
      'Aspiration et dépoussiérage des tapis de hall et paillassons',
      'Entretien des boîtes aux lettres et digicodes d’accès',
    ],
    equipment: [
      'Laveuses de sols compactes silencieuses',
      'Système d’imprégnation microfibres sans gaspillage d’eau',
      'Générateur de vapeur sèche antibactérien',
      'Application mobile de suivi pour le conseil syndical',
    ],
    certifications: ['Agrément Syndics FNAIM', 'Charte Copropriété Propre', 'Normes Sanitaires'],
    typicalInterventions: [
      'Immeubles haussmanniens et résidences de standing',
      'Ensembles résidentiels modernes multisites',
      'Résidences avec conciergerie ou sans gardien',
      'Copropriétés mixtes bureaux/logements',
    ],
    startingPrice: 'Dès 140€ HT / passage ou forfait mensuel',
  },
  {
    id: 'parties-communes',
    slug: 'parties-communes',
    title: 'Entretien des parties communes',
    category: 'parties-communes',
    highlightBadge: 'Service 7j/7',
    shortDesc:
      'Cages d’escalier, rampes, paliers d’étages, gestion et désinfection des locaux poubelles avec rotation des bacs.',
    longDesc:
      'Garantissez l’hygiène globale et la sécurité de vos parties communes. Nous prenons en charge la gestion complète des ordures ménagères (sortie et rentrée des conteneurs 7j/7) ainsi que le décapage régulier des sols à fort passage.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    features: [
      'Balayage et lavage humide des escaliers et rampes bois/métal',
      'Sortie, rentrée et désinfection haute pression des bacs roulants',
      'Nettoyage et dégraissage des parkings sous-sol',
      'Remplacement des ampoules et contrôle technique visuel',
    ],
    equipment: [
      'Nettoyeurs haute pression thermique pour locaux ordures',
      'Brumisateurs désodorisants enzymatiques longue durée',
      'Balayeuses mécaniques manuelles pour sous-sols',
      'Matériel de décapage mécanique pour escaliers étroits',
    ],
    certifications: ['Certibiocide', 'Protocole Hygiène & Salubrité Publique'],
    typicalInterventions: [
      'Cages d’escalier bois, carrelage, terrazzo et tomettes',
      'Locaux vélos, poussettes et caves sécurisées',
      'Parkings souterrains et cours intérieures pavées',
      'Gestion quotidienne des flux de bacs de recyclage',
    ],
    startingPrice: 'À partir de 120€ HT / mois',
  },
  {
    id: 'vitres',
    slug: 'nettoyage-vitres',
    title: 'Nettoyage de vitres & façades vitrées',
    category: 'vitres',
    highlightBadge: 'Travaux en hauteur & Nacelle',
    shortDesc:
      'Lavage de vitres intérieures/extérieures, verrières, façades de sièges sociaux et vitrines de boutiques à toute hauteur.',
    longDesc:
      'Une clarté parfaite sans aucune trace. Nos cordistes et laveurs de vitres certifiés interviennent en plain-pied, à la perche à eau osmosée jusqu’à 20 mètres ou en nacelle élévatrice pour les grandes tours de bureaux.',
    image:
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
    features: [
      'Lavage traditionnel à la raclette professionnelle et mouilleur',
      'Système d’eau pure osmosée pour châssis et bardages alu',
      'Intervention nacelle télescopique et cordistes certifiés IRATA',
      'Élimination des dépôts de calcaire, colle et pollution urbaine',
    ],
    equipment: [
      'Perches carbone télescopiques à eau osmosée (portée 22m)',
      'Groupes de filtration d’eau par osmose inverse mobile',
      'Nacelles araignées compactes pour cours intérieures',
      'Équipements de protection individuelle (EPI) contre les chutes',
    ],
    certifications: ['CQP Cordiste', 'CACES R486 (Nacelles)', 'Assurance spéciale risques hauteur'],
    typicalInterventions: [
      'Murs rideaux et façades de tours de bureaux',
      'Vitrines de magasins et devantures commerciales',
      'Verrières d’ateliers et puits de lumière industriels',
      'Garde-corps vitrés et cloisons intérieures d’open space',
    ],
    startingPrice: 'Dès 95€ HT par intervention',
  },
  {
    id: 'chantier',
    slug: 'fin-de-chantier',
    title: 'Nettoyage après travaux / fin de chantier',
    category: 'chantier',
    highlightBadge: 'Réactivité 24/48h',
    shortDesc:
      'Remise en état complète avant livraison ou emménagement : dépoussiérage fin, élimination des voiles de ciment et traces de peinture.',
    longDesc:
      'Avant la remise des clés aux acquéreurs ou locataires, la propreté est décisive. PRONET élimine tous les résidus de chantier (plâtre, peinture, voile de ciment, poussières d’enduit) pour livrer un bâtiment étincelant prêt à l’usage.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    features: [
      'Aspiration industrielle minutieuse des micro-poussières',
      'Décapage et élimination des voiles de ciment et résidus de joint',
      'Grattage professionnel des traces de colle et peinture sur vitres',
      'Désinfection totale des cuisines, sanitaires et menuiseries neuves',
    ],
    equipment: [
      'Aspirateurs de chantier bi-moteurs à filtration absolue HEPA',
      'Monobrosses haute performance avec disques spécifiques',
      'Produits neutralisants non corrosifs pour carrelages neufs',
      'Camions d’évacuation pour résidus résiduels de matériaux',
    ],
    certifications: ['Garantie de livraison conforme OPR', 'Attestation de parfait achèvement'],
    typicalInterventions: [
      'Livraison de programmes immobiliers neufs (promoteurs)',
      'Rénovation d’hôtels, restaurants et surfaces de vente',
      'Réhabilitation de plateaux tertiaires',
      'Remise en état avant audit de conformité de sécurité',
    ],
    startingPrice: 'Forfait sur métré / devis sous 24h',
  },
  {
    id: 'sols',
    slug: 'entretien-sols',
    title: 'Entretien & rénovation des sols',
    category: 'sols',
    highlightBadge: 'Savoir-faire artisanal & mécanique',
    shortDesc:
      'Décapage, métallisation de sols thermoplastiques, cristallisation de marbre, injection-extraction de moquettes et lustrage.',
    longDesc:
      'Vos sols subissent une usure quotidienne intense. PRONET prolonge la durée de vie de vos revêtements grâce à des traitements techniques spécialisés : lustrage marbre, mise en cire haute brillance et nettoyage en profondeur des fibres textiles.',
    image:
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
    features: [
      'Décapage à sec ou au mouillé et pose d’émulsion acrylique (métallisation)',
      'Cristallisation et ponçage de marbre et pierres marbrières',
      'Injection-extraction et bonnettes microfibres pour moquettes',
      'Imperméabilisation hydrofuge et oléofuge des sols poreux',
    ],
    equipment: [
      'Monobrosses basse et très haute vitesse (jusqu’à 1500 tr/min)',
      'Injecteurs-extracteurs industriels à eau chaude pressurisée',
      'Disques diamantés grain progressif pour marbres et terrazo',
      'Polisseuses thermiques pour dalles béton et parkings',
    ],
    certifications: ['Maîtrise d’œuvre des surfaces nobles', 'Formation chimie des sols'],
    typicalInterventions: [
      'Halls d’accueil en marbre de grands groupes',
      'Moquettes de direction et amphithéâtres',
      'Sols PVC / linoléum en milieu hospitalier ou scolaire',
      'Bétons cirés et quartzés de showrooms',
    ],
    startingPrice: 'Dès 4,50€ HT / m²',
  },
  {
    id: 'locaux-commerces',
    slug: 'locaux-professionnels',
    title: 'Nettoyage de locaux professionnels & commerces',
    category: 'locaux-commerces',
    highlightBadge: 'Image de marque soignée',
    shortDesc:
      'Commerces, boutiques haut de gamme, showrooms, concessions et ERP : valorisez votre espace pour séduire vos clients.',
    longDesc:
      'Pour les commerces et les ERP accueillant du public, l’hygiène est le premier vecteur de confiance. PRONET garantit des sols étincelants, des vitrines immaculées et une désinfection permanente de vos points de contact.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    features: [
      'Entretien soigné des sols de vente à fort passage piéton',
      'Dépoussiérage des linéaires, meubles de présentation et caisses',
      'Désinfection des cabines d’essayage et sanitaires clientèle',
      'Nettoyage régulier de la vitrine avant l’ouverture du magasin',
    ],
    equipment: [
      'Autolaveuses compactes maniables entre les rayonnages',
      'Systèmes de pulvérisation désinfectante sans résidus',
      'Matériel de nettoyage vitrines rapide et silencieux',
      'Produits parfumés délicats hypoallergéniques',
    ],
    certifications: ['Agrément Établissements Recevant du Public (ERP)'],
    typicalInterventions: [
      'Boutiques de prêt-à-porter et flagships',
      'Concessions automobiles et centres d’exposition',
      'Supermarchés et commerces de proximité',
      'Restaurants, brasseries et cuisines professionnelles',
    ],
    startingPrice: 'Forfait adapté au rythme de votre commerce',
  },
];

export const BEFORE_AFTER_PROJECTS: BeforeAfterProject[] = [
  {
    id: 'sol-industriel',
    title: 'Dégraissage et remise en état d’un entrepôt logistique de 4 500 m²',
    category: 'industriel',
    categoryLabel: 'Nettoyage industriel',
    beforeImage:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80', // Entrepôt encombré/poussiéreux
    afterImage:
      'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80', // Entrepôt étincelant avec sol poli
    location: 'Plateforme logistique - Roissy CDG (95)',
    surface: '4 500 m²',
    duration: '48 heures non-stop en week-end',
    description:
      'Décapage complet des traces de pneus de chariots élévateurs, aspiration des poussières fines en charpente et application d’un traitement anti-poussière au sol.',
    tags: ['Autolaveuse autoportée', 'Dégraissant écologique', 'Haute pression'],
  },
  {
    id: 'bureaux-parquet',
    title: 'Rénovation & métallisation des sols d’un siège social haussmannien',
    category: 'bureaux',
    categoryLabel: 'Bureaux & Sièges',
    beforeImage:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
    afterImage:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
    location: 'Boulevard Haussmann - Paris 8e',
    surface: '1 200 m²',
    duration: '1 week-end sans interruption d’activité',
    description:
      'Nettoyage en profondeur des boiseries, dépoussiérage des moulures, rénovation lustrante du parquet d’époque et désinfection intégrale des 60 postes informatiques.',
    tags: ['Siège social', 'Monobrosse', 'Écolabel'],
  },
  {
    id: 'marbre-immeuble',
    title: 'Cristallisation et lustrage du marbre d’un hall de résidence',
    category: 'immeubles',
    categoryLabel: 'Immeubles & Résidences',
    beforeImage:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    afterImage:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    location: 'Neuilly-sur-Seine (92)',
    surface: '320 m² de marbre de Carrare',
    duration: '2 journées d’intervention',
    description:
      'Élimination des micro-rayures, ponçage au disque diamanté et cristallisation brillante sans produit toxique, redonnant au hall son éclat d’origine.',
    tags: ['Cristallisation', 'Marbre noble', 'Syndic de copropriété'],
  },
  {
    id: 'chantier-hotel',
    title: 'Nettoyage fin de chantier d’un hôtel boutique 4 étoiles avant ouverture',
    category: 'chantier',
    categoryLabel: 'Fin de chantier',
    beforeImage:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    afterImage:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    location: 'Quartier Opéra - Paris 9e',
    surface: '42 chambres + restaurant & spa',
    duration: '5 jours d’intervention intensive',
    description:
      'Dépoussiérage complet après travaux de plâtre et peinture, décapage des résidus de ciment sur faïences, lustrage de toute la vitrerie et désinfection totale.',
    tags: ['Hôtellerie de luxe', 'Normes OPR', 'Aspirateurs HEPA'],
  },
  {
    id: 'vitrine-commerce',
    title: 'Lavage de façade vitrée et verrière monumentale d’un centre d’affaires',
    category: 'commerces',
    categoryLabel: 'Commerces & ERP',
    beforeImage:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    afterImage:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    location: 'La Défense (92)',
    surface: '1 800 m² de vitrage extérieur',
    duration: '3 jours en perche eau pure & nacelle',
    description:
      'Élimination des dépôts de pollution urbaine et film calcaire à l’eau déminéralisée osmosée sans produit chimique, garantissant une brillance durable.',
    tags: ['Eau osmosée', 'Nacelle R486', 'Zéro chimie'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Laurent Mercier',
    role: 'Directeur des Services Généraux (Facility Manager)',
    company: 'Nexis Tech Group (450 collaborateurs)',
    location: 'Courbevoie / La Défense',
    rating: 5,
    content:
      'PRONET gère l’entretien quotidien de nos 3 plateaux de bureaux depuis plus de 3 ans. La ponctualité des agents, la réactivité exemplaire du chef d’équipe et la traçabilité par leur outil numérique ont totalement transformé notre sérénité.',
    serviceUsed: 'Nettoyage de bureaux & désinfection tertiaire',
    date: 'Février 2026',
  },
  {
    id: 'test-2',
    name: 'Sophie Dumontier',
    role: 'Gestionnaire de Portefeuille Copropriétés',
    company: 'Cabinet Immobilier Rivoli Gestion',
    location: 'Paris 16e & 17e',
    rating: 5,
    content:
      'En tant que syndic, trouver une société de nettoyage fiable et transparente relève souvent du défi. Avec PRONET, les résidents ne tarissent pas d’éloges : les halls sont impeccables, la rotation des bacs est assurée sans le moindre retard.',
    serviceUsed: 'Nettoyage d’immeubles & parties communes',
    date: 'Janvier 2026',
  },
  {
    id: 'test-3',
    name: 'Marc Berthelot',
    role: 'Responsable QHSE & Exploitation',
    company: 'LogiPharm Distribution',
    location: 'Hub Logistique - Gennevilliers',
    rating: 5,
    content:
      'Dans notre secteur de distribution pharmaceutique, les exigences d’hygiène ne tolèrent aucune approximation. PRONET dispose d’agents rigoureusement formés, de machines industrielles au top et d’une réactivité 24/7 bluffante.',
    serviceUsed: 'Nettoyage industriel & désinfection contrôlée',
    date: 'Décembre 2025',
  },
  {
    id: 'test-4',
    name: 'Camille Roche',
    role: 'Directrice de Travaux & Rénovation',
    company: 'BTP Prestige Architecture',
    location: 'Boulogne-Billancourt',
    rating: 5,
    content:
      'Ils ont sauvé notre livraison d’un chantier de 18 logements neufs suite à un désistement de dernière minute. Mobilisés en moins de 24 heures avec 8 agents, ils ont livré un site absolument vierge de poussières et étincelant pour l’audit OPR.',
    serviceUsed: 'Remise en état & fin de chantier',
    date: 'Novembre 2025',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Analyse de vos besoins',
    subtitle: 'Audit technique sur site gratuit',
    description:
      'Un chargé d’affaires dédié se déplace sur vos sites sous 24h pour évaluer les surfaces, les contraintes techniques, les fréquences idéales et vos impératifs de sécurité.',
    iconName: 'ClipboardCheck',
    details: ['Visite complète des locaux', 'Étude des revêtements et accès', 'Recommandations préventives'],
  },
  {
    number: '02',
    title: 'Proposition personnalisée',
    subtitle: 'Chiffrage clair & transparent sous 24h',
    description:
      'Vous recevez un devis détaillé sans frais cachés, accompagné d’un cahier des charges précis, de fiches techniques des produits éco-responsables et d’un planning d’intervention.',
    iconName: 'FileSpreadsheet',
    details: ['Tarification claire sans engagement', 'Fiches de sécurité FDS fournies', 'Choix des fréquences horaires'],
  },
  {
    number: '03',
    title: 'Intervention experte',
    subtitle: 'Agents qualifiés & matériel de pointe',
    description:
      'Mise en place immédiate d’agents formés, en tenue professionnelle réglementaire, équipés de matériel récent et de produits labellisés respectant les normes sanitaires strictes.',
    iconName: 'Sparkles',
    details: ['Agents en CDI formés aux protocoles', 'Machines industrielles certifiées', 'Discrétion absolue et ponctualité'],
  },
  {
    number: '04',
    title: 'Contrôle qualité continu',
    subtitle: 'Cahier de liaison & audits réguliers',
    description:
      'Un responsable qualité effectue des contrôles contradictoires réguliers. Vous bénéficiez d’un cahier de liaison digitalisé pour échanger instantanément avec votre superviseur.',
    iconName: 'ShieldCheck',
    details: ['Audits qualité inopinés', 'Plateforme de suivi en direct', 'Garantie "Satisfait ou Ré-intervenu"'],
  },
];

export const WHY_CHOOSE_US = [
  {
    id: 'expertise',
    title: 'Expertise professionnelle certifiée',
    desc: 'Plus de 15 années de savoir-faire rigoureux, des équipes formées aux méthodes de pointe et protocoles certifiés.',
    icon: 'Award',
  },
  {
    id: 'materiel',
    title: 'Matériel industriel de haute technicité',
    desc: 'Autolaveuses autoportées, monobrosses lustrantes, perches d’eau osmosée carbone et nettoyeurs vapeur antibactériens.',
    icon: 'Cog',
  },
  {
    id: 'eco',
    title: 'Produits 100% Écolabel Européen',
    desc: 'Formulations éco-responsables garantissant la préservation de la santé de vos collaborateurs et de l’environnement.',
    icon: 'Leaf',
  },
  {
    id: 'reactivite',
    title: 'Réactivité d’intervention 24/7',
    desc: 'Un service d’astreinte réactif capable d’intervenir en moins de 2 heures en cas de sinistre, dégât des eaux ou urgence.',
    icon: 'Clock',
  },
  {
    id: 'personnel',
    title: 'Personnel qualifié, stable & déclaré',
    desc: 'Agents en CDI, formés en continu aux protocoles de sécurité, équipés d’EPI et encadrés par des chefs d’équipe dédiés.',
    icon: 'Users',
  },
  {
    id: 'tracabilite',
    title: 'Suivi qualité & transparence totale',
    desc: 'Cahier de liaison numérique, rapport photographique après passage et interlocuteur unique disponible en permanence.',
    icon: 'CheckCircle2',
  },
];

export const CLIENT_PARTNERS: PartnerLogo[] = [
  {
    id: '1',
    name: 'Partenaire Immobilier',
    sector: 'Syndic & Gestion de Copropriétés',
    badge: 'Gestion Immobilière',
    logoUrl: '/assets/partners/partner-1-clean.png',
  },
  {
    id: '2',
    name: 'Partenaire Groupe',
    sector: 'Immobilier & Résidences',
    badge: 'Contrat Cadre',
    logoUrl: '/assets/partners/partner-2-clean.png',
  },
  {
    id: '3',
    name: 'Partenaire Résidentiel',
    sector: 'Entretien & Services',
    badge: 'Multi-Sites',
    logoUrl: '/assets/partners/partner-3-clean.png',
  },
  {
    id: '4',
    name: 'Partenaire Tertiaire',
    sector: 'Sièges & Bureaux',
    badge: 'Haute Exigence',
    logoUrl: '/assets/partners/partner-4-clean.png',
    darkBg: true,
  },
  {
    id: '5',
    name: 'Partenaire Patrimoine',
    sector: 'Gestion & Administration',
    badge: 'Sites Rénovés',
    logoUrl: '/assets/partners/partner-5-clean.png',
  },
  {
    id: '6',
    name: 'Partenaire Foncier',
    sector: 'Parcs d’Activités',
    badge: 'Partenaire Fidèle',
    logoUrl: '/assets/partners/partner-6-clean.png',
  },
  {
    id: '7',
    name: 'Partenaire Immobilier Tertiaire',
    sector: 'Espaces de Bureaux & ERP',
    badge: 'Quotidien',
    logoUrl: '/assets/partners/partner-7-clean.png',
  },
  {
    id: '8',
    name: 'Partenaire Commercial',
    sector: 'Centres d’Affaires',
    badge: 'Prestige',
    logoUrl: '/assets/partners/partner-8-clean.png',
  },
  {
    id: '9',
    name: 'Partenaire Institutionnel',
    sector: 'Bâtiments Collectifs',
    badge: 'Certifié',
    logoUrl: '/assets/partners/partner-9-clean.png',
  },
  {
    id: '10',
    name: 'Partenaire Aménagement',
    sector: 'Résidences & Parcs',
    badge: 'Excellence',
    logoUrl: '/assets/partners/partner-10-clean.png',
  },
];

export const FAQS = [
  {
    q: 'Sous quel délai obtenons-nous un devis ?',
    a: 'Nous vous transmettons une proposition détaillée sous 24 heures ouvrées après analyse de vos besoins ou après une visite technique gratuite sur vos sites.',
  },
  {
    q: 'Intervenez-vous en dehors des heures de bureau ?',
    a: 'Absolument. Nos équipes peuvent intervenir très tôt le matin (dès 6h00), en soirée après le départ de vos équipes, ou durant les week-ends pour ne jamais perturber votre activité.',
  },
  {
    q: 'Quels types de produits et équipements utilisez-vous ?',
    a: 'Nous utilisons prioritairement des produits certifiés Écolabel Européen, hypoallergéniques et sans solvants agressifs, couplés à des autolaveuses et aspirateurs professionnels à filtration HEPA.',
  },
  {
    q: 'Vos agents sont-ils assurés en cas de sinistre ?',
    a: 'Oui, PRONET est couvert par une police d’assurance Responsabilité Civile Professionnelle AXA à hauteur de 10 000 000 d’euros couvrant tout dommage matériel ou corporel.',
  },
  {
    q: 'Quelle est votre zone géographique d’intervention ?',
    a: 'Nous intervenons sur l’ensemble de l’Île-de-France (Paris et tous les départements 77, 78, 91, 92, 93, 94, 95) ainsi que sur les métropoles nationales pour les contrats multisites industriels.',
  },
];
