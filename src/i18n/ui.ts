export const languages = {
  pt: 'Português',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'pt';

export const ui = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.classes': 'Aulas',
    'nav.styles': 'Estilos',
    'nav.instructors': 'Instrutores',
    'nav.gallery': 'Galeria',
    'nav.contact': 'Contato',
    'nav.store': 'Loja',
    'nav.competitions': 'Competições',
    'nav.exams': 'Exames',
    'nav.lineage': 'Linhagem',
    'nav.news': 'Notícias',
    'nav.culture': 'Cultura',
    'nav.philosophy': 'Filosofia',
    'nav.martial-artists': 'Artistas Marciais',
    'nav.press': 'Imprensa',

    // Common
    'common.readMore': 'Saiba Mais',
    'common.viewAll': 'Ver Todos',
    'common.backTo': 'Voltar para',
    'common.share': 'Compartilhar',
    'common.language': 'Idioma',
    'common.menu': 'Menu',
    'common.close': 'Fechar',
    'common.search': 'Buscar',

    // Homepage
    'home.hero.title': 'Pak Shao Lin',
    'home.hero.subtitle': 'Kung Fu Tradicional Chinês desde 1984',
    'home.hero.cta': 'Comece a Treinar',
    'home.about.title': 'Nossa História',
    'home.about.description': 'Fundada em 1º de julho de 1984 por Mestre Gilmar Dantas, a Associação Pak Shao Lin é referência no ensino de Kung Fu tradicional chinês em São Paulo.',
    'home.locations.title': 'Nossos Núcleos',
    'home.locations.subtitle': 'Treine conosco em uma de nossas unidades',
    'home.styles.title': 'Estilos Ensinados',
    'home.cta.title': 'Venha Treinar Conosco',
    'home.cta.description': 'Aulas para todas as idades e níveis. Primeira aula experimental gratuita.',
    'home.cta.button': 'Agende Sua Aula',
    'home.gallery.title': 'Em Ação',
    'home.gallery.viewAll': 'Ver Galeria Completa',
    'home.styles.featured.shaolin': 'O estilo do norte da China, explosivo e acrobático.',
    'home.styles.featured.mantis': 'Movimentos rápidos inspirados no louva-a-deus.',
    'home.styles.featured.taichi': 'Arte interna de fluidez, equilíbrio e energia.',
    'home.styles.featured.wingchun': 'Combate próximo, direto e eficiente.',

    // About
    'about.title': 'Sobre a Pak Shao Lin',
    'about.history': 'Nossa História',
    'about.mission': 'Nossa Missão',
    'about.founded': 'Fundada em',

    // Classes
    'classes.title': 'Aulas e Núcleos',
    'classes.schedule': 'Horários',
    'classes.location': 'Endereço',
    'classes.instructor': 'Instrutor',
    'classes.headquarters': 'Sede',
    'classes.hero.subtitle': 'Treinamento tradicional para todas as idades, do iniciante ao avançado',
    'classes.about.title': 'O Treinamento',
    'classes.about.description': 'A Pak Shao Lin possui núcleos de treinamento em São Paulo e no interior. Oferecemos aulas para todas as idades, desde crianças a partir de 5 anos até adultos. A primeira aula experimental é gratuita.',
    'classes.benefits.tradition': 'Tradição Milenar',
    'classes.benefits.traditionDesc': 'Mais de 20 estilos de Kung Fu tradicional chinês preservados com fidelidade à linhagem original.',
    'classes.benefits.allAges': 'Todas as Idades',
    'classes.benefits.allAgesDesc': 'Turmas para crianças a partir de 5 anos, adolescentes e adultos, com metodologia adaptada a cada faixa.',
    'classes.benefits.trial': 'Aula Experimental',
    'classes.benefits.trialDesc': 'Sua primeira aula é gratuita. Venha conhecer o Kung Fu na prática, sem compromisso.',
    'classes.benefits.body': 'Corpo e Mente',
    'classes.benefits.bodyDesc': 'Desenvolvimento físico, disciplina, concentração e equilíbrio emocional através das artes marciais.',
    'classes.locations.title': 'Nossos Núcleos',
    'classes.cta.title': 'Comece Sua Jornada',
    'classes.cta.subtitle': 'A primeira aula experimental é gratuita. Entre em contato e agende.',
    'classes.cta.button': 'Fale Conosco',

    // Contact
    'contact.title': 'Contato',
    'contact.form.name': 'Nome',
    'contact.form.email': 'E-mail',
    'contact.form.message': 'Mensagem',
    'contact.form.submit': 'Enviar',
    'contact.form.subject': 'Assunto',
    'contact.info': 'Informações de Contato',
    'contact.social': 'Redes Sociais',
    'contact.hero.subtitle': 'Estamos prontos para receber você em nossos núcleos de treinamento',
    'contact.locations.title': 'Nossos Núcleos',
    'contact.locations.schedule': 'Horários',
    'contact.locations.instructor': 'Instrutor',
    'contact.locations.partnership': 'Parceria',
    'contact.locations.parking': 'Estacionamento',
    'contact.locations.metro': 'Metrô',
    'contact.locations.bus': 'Ônibus',
    'contact.locations.openMap': 'Abrir no Google Maps',
    'contact.locations.transit': 'Transporte Público',
    'contact.form.title': 'Envie uma Mensagem',
    'contact.form.response': 'Responderemos em até 48h',
    'contact.cta.title': 'Comece Sua Jornada',
    'contact.cta.subtitle': 'Venha conhecer o Kung Fu tradicional na prática. Agende uma aula experimental.',
    'contact.cta.button': 'Agendar Aula Experimental',

    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.copyright': '© 1998–2026 Associação Pak Shao Lin.',

    // Instructors
    'instructors.title': 'Instrutores',
    'instructors.rank': 'Graduação',
    'instructors.location': 'Núcleo',
    'instructors.hero.subtitle': 'Conheça os mestres e instrutores que preservam a tradição do Kung Fu na Pak Shao Lin',
    'instructors.tier.grandmaster': 'Grão Mestre',
    'instructors.tier.founder': 'Fundador',
    'instructors.tier.masters': 'Mestres',
    'instructors.tier.sifus': 'Si-Fus',
    'instructors.tier.sipaks': 'Si-Paks',
    'instructors.viewProfile': 'Ver Perfil Completo',
    'instructors.gallery': 'Galeria de Fotos',
    'instructors.biography': 'Biografia',
    'instructors.backToList': 'Voltar para Instrutores',
    'instructors.cta.title': 'Treine com Nossos Mestres',
    'instructors.cta.subtitle': 'Venha conhecer o Kung Fu tradicional com nossos instrutores qualificados.',
    'instructors.cta.button': 'Entre em Contato',

    // Styles
    'styles.title': 'Estilos de Kung Fu',
    'styles.origin': 'Origem',
    'styles.characteristics': 'Características',

    // Gallery
    'gallery.title': 'Galeria',
    'gallery.photos': 'Fotos',
    'gallery.videos': 'Vídeos',
    'gallery.hero.subtitle': 'Registros fotográficos de treinos, competições e momentos especiais',
    'gallery.featured.title': 'Destaques',
    'gallery.instructors.title': 'Instrutores e Professores',
    'gallery.groupTraining.title': 'Treinos em Grupo',
    'gallery.advancedStudents.title': 'Alunos Avançados',
    'gallery.monks.title': 'Monges Shaolin',
    'gallery.weapons.title': 'Armas Tradicionais',
    'gallery.weapons.subtitle': 'As 28 armas tradicionais do Kung Fu preservadas na Pak Shao Lin',
    'gallery.competitions.title': 'Competições',
    'gallery.special.title': 'Momentos Especiais',
    'gallery.cta.title': 'Quer Ver de Perto?',
    'gallery.cta.subtitle': 'Venha conhecer nossa escola e treinar com a gente.',
    'gallery.cta.button': 'Fale Conosco',

    // SEO
    'seo.defaultTitle': 'Pak Shao Lin — Kung Fu Tradicional Chinês em São Paulo',
    'seo.defaultDescription': 'Associação Pak Shao Lin: escola de Kung Fu tradicional chinês em São Paulo, fundada em 1984 por Mestre Gilmar Dantas. Aulas para todas as idades.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.classes': 'Classes',
    'nav.styles': 'Styles',
    'nav.instructors': 'Instructors',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.store': 'Store',
    'nav.competitions': 'Competitions',
    'nav.exams': 'Exams',
    'nav.lineage': 'Lineage',
    'nav.news': 'News',
    'nav.culture': 'Culture',
    'nav.philosophy': 'Philosophy',
    'nav.martial-artists': 'Martial Artists',
    'nav.press': 'Press',

    // Common
    'common.readMore': 'Read More',
    'common.viewAll': 'View All',
    'common.backTo': 'Back to',
    'common.share': 'Share',
    'common.language': 'Language',
    'common.menu': 'Menu',
    'common.close': 'Close',
    'common.search': 'Search',

    // Homepage
    'home.hero.title': 'Pak Shao Lin',
    'home.hero.subtitle': 'Traditional Chinese Kung Fu Since 1984',
    'home.hero.cta': 'Start Training',
    'home.about.title': 'Our History',
    'home.about.description': 'Founded on July 1, 1984 by Master Gilmar Dantas, the Pak Shao Lin Association is a reference in traditional Chinese Kung Fu education in São Paulo.',
    'home.locations.title': 'Our Locations',
    'home.locations.subtitle': 'Train with us at one of our schools',
    'home.styles.title': 'Styles We Teach',
    'home.cta.title': 'Come Train With Us',
    'home.cta.description': 'Classes for all ages and levels. First trial class is free.',
    'home.cta.button': 'Schedule Your Class',
    'home.gallery.title': 'In Action',
    'home.gallery.viewAll': 'View Full Gallery',
    'home.styles.featured.shaolin': 'The explosive and acrobatic Northern Chinese style.',
    'home.styles.featured.mantis': 'Swift movements inspired by the praying mantis.',
    'home.styles.featured.taichi': 'Internal art of fluidity, balance, and energy.',
    'home.styles.featured.wingchun': 'Close-range, direct, and efficient combat.',

    // About
    'about.title': 'About Pak Shao Lin',
    'about.history': 'Our History',
    'about.mission': 'Our Mission',
    'about.founded': 'Founded in',

    // Classes
    'classes.title': 'Classes & Locations',
    'classes.schedule': 'Schedule',
    'classes.location': 'Address',
    'classes.instructor': 'Instructor',
    'classes.headquarters': 'Headquarters',
    'classes.hero.subtitle': 'Traditional training for all ages, from beginner to advanced',
    'classes.about.title': 'The Training',
    'classes.about.description': 'Pak Shao Lin has training centers in São Paulo and surrounding areas. We offer classes for all ages, from children aged 5 and up to adults. The first trial class is free.',
    'classes.benefits.tradition': 'Ancient Tradition',
    'classes.benefits.traditionDesc': 'Over 20 styles of traditional Chinese Kung Fu preserved with fidelity to the original lineage.',
    'classes.benefits.allAges': 'All Ages',
    'classes.benefits.allAgesDesc': 'Classes for children from age 5, teenagers, and adults, with methodology tailored to each group.',
    'classes.benefits.trial': 'Free Trial Class',
    'classes.benefits.trialDesc': 'Your first class is free. Experience Kung Fu in practice, no commitment required.',
    'classes.benefits.body': 'Body & Mind',
    'classes.benefits.bodyDesc': 'Physical development, discipline, focus, and emotional balance through martial arts.',
    'classes.locations.title': 'Our Schools',
    'classes.cta.title': 'Begin Your Journey',
    'classes.cta.subtitle': 'The first trial class is free. Get in touch and schedule yours.',
    'classes.cta.button': 'Contact Us',

    // Contact
    'contact.title': 'Contact',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    'contact.form.subject': 'Subject',
    'contact.info': 'Contact Information',
    'contact.social': 'Social Media',
    'contact.hero.subtitle': 'We are ready to welcome you at our training schools',
    'contact.locations.title': 'Our Schools',
    'contact.locations.schedule': 'Schedule',
    'contact.locations.instructor': 'Instructor',
    'contact.locations.partnership': 'Partnership',
    'contact.locations.parking': 'Parking',
    'contact.locations.metro': 'Subway',
    'contact.locations.bus': 'Bus',
    'contact.locations.openMap': 'Open in Google Maps',
    'contact.locations.transit': 'Public Transit',
    'contact.form.title': 'Send a Message',
    'contact.form.response': 'We will reply within 48 hours',
    'contact.cta.title': 'Begin Your Journey',
    'contact.cta.subtitle': 'Experience traditional Kung Fu in practice. Schedule a trial class.',
    'contact.cta.button': 'Schedule Trial Class',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.copyright': '© 1998–2026 Pak Shao Lin Association.',

    // Instructors
    'instructors.title': 'Instructors',
    'instructors.rank': 'Rank',
    'instructors.location': 'School',
    'instructors.hero.subtitle': 'Meet the masters and instructors who preserve the Kung Fu tradition at Pak Shao Lin',
    'instructors.tier.grandmaster': 'Grand Master',
    'instructors.tier.founder': 'Founder',
    'instructors.tier.masters': 'Masters',
    'instructors.tier.sifus': 'Si-Fus',
    'instructors.tier.sipaks': 'Si-Paks',
    'instructors.viewProfile': 'View Full Profile',
    'instructors.gallery': 'Photo Gallery',
    'instructors.biography': 'Biography',
    'instructors.backToList': 'Back to Instructors',
    'instructors.cta.title': 'Train with Our Masters',
    'instructors.cta.subtitle': 'Experience traditional Kung Fu with our qualified instructors.',
    'instructors.cta.button': 'Get in Touch',

    // Styles
    'styles.title': 'Kung Fu Styles',
    'styles.origin': 'Origin',
    'styles.characteristics': 'Characteristics',

    // Gallery
    'gallery.title': 'Gallery',
    'gallery.photos': 'Photos',
    'gallery.videos': 'Videos',
    'gallery.hero.subtitle': 'Photos from training sessions, competitions, and special moments',
    'gallery.featured.title': 'Highlights',
    'gallery.instructors.title': 'Instructors & Professors',
    'gallery.groupTraining.title': 'Group Training',
    'gallery.advancedStudents.title': 'Advanced Students',
    'gallery.monks.title': 'Shaolin Monks',
    'gallery.weapons.title': 'Traditional Weapons',
    'gallery.weapons.subtitle': 'The 28 traditional Kung Fu weapons preserved at Pak Shao Lin',
    'gallery.competitions.title': 'Competitions',
    'gallery.special.title': 'Special Moments',
    'gallery.cta.title': 'Want to See It Up Close?',
    'gallery.cta.subtitle': 'Come visit our school and train with us.',
    'gallery.cta.button': 'Contact Us',

    // SEO
    'seo.defaultTitle': 'Pak Shao Lin — Traditional Chinese Kung Fu in São Paulo',
    'seo.defaultDescription': 'Pak Shao Lin Association: traditional Chinese Kung Fu school in São Paulo, founded in 1984 by Master Gilmar Dantas. Classes for all ages.',
  },
} as const;

type UiKeys = keyof typeof ui.pt;

export function t(lang: Lang, key: UiKeys): string {
  return ui[lang][key] ?? ui[defaultLang][key] ?? key;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function getRouteFromUrl(url: URL): string {
  const [, , ...rest] = url.pathname.split('/');
  return rest.join('/') || '';
}

/** Map of PT route slugs to EN equivalents */
const routeMap: Record<string, string> = {
  '': '',
  'sobre': 'about',
  'aulas': 'classes',
  'estilos': 'styles',
  'instrutores': 'instructors',
  'galeria': 'gallery',
  'contato': 'contact',
  'loja': 'store',
  'competicoes': 'competitions',
  'exames': 'exams',
  'linhagem': 'lineage',
  'noticias': 'news',
  'cultura': 'culture',
  'filosofia': 'philosophy',
  'artistas-marciais': 'martial-artists',
  'imprensa': 'press',
};

const reverseRouteMap = Object.fromEntries(
  Object.entries(routeMap).map(([k, v]) => [v, k])
);

export function getLocalizedPath(lang: Lang, ptPath: string): string {
  if (lang === 'pt') return `/pt/${ptPath}`;

  const segments = ptPath.split('/');
  const translated = segments.map((seg) => routeMap[seg] ?? seg);
  return `/en/${translated.join('/')}`;
}

export function getAlternatePath(currentLang: Lang, currentPath: string): string {
  const targetLang = currentLang === 'pt' ? 'en' : 'pt';
  const route = getRouteFromUrl(new URL(currentPath, 'https://pakshaolin.org'));
  const segments = route.split('/').filter(Boolean);

  if (currentLang === 'pt') {
    const translated = segments.map((seg) => routeMap[seg] ?? seg);
    return `/${targetLang}/${translated.join('/')}`;
  } else {
    const translated = segments.map((seg) => reverseRouteMap[seg] ?? seg);
    return `/${targetLang}/${translated.join('/')}`;
  }
}
