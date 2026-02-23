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

    // Contact
    'contact.title': 'Contato',
    'contact.form.name': 'Nome',
    'contact.form.email': 'E-mail',
    'contact.form.message': 'Mensagem',
    'contact.form.submit': 'Enviar',
    'contact.form.subject': 'Assunto',
    'contact.info': 'Informações de Contato',
    'contact.social': 'Redes Sociais',

    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.copyright': '© 1998–2026 Associação Pak Shao Lin.',

    // Instructors
    'instructors.title': 'Instrutores',
    'instructors.rank': 'Graduação',
    'instructors.location': 'Núcleo',

    // Styles
    'styles.title': 'Estilos de Kung Fu',
    'styles.origin': 'Origem',
    'styles.characteristics': 'Características',

    // Gallery
    'gallery.title': 'Galeria',
    'gallery.photos': 'Fotos',
    'gallery.videos': 'Vídeos',

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

    // Contact
    'contact.title': 'Contact',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    'contact.form.subject': 'Subject',
    'contact.info': 'Contact Information',
    'contact.social': 'Social Media',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.copyright': '© 1998–2026 Pak Shao Lin Association.',

    // Instructors
    'instructors.title': 'Instructors',
    'instructors.rank': 'Rank',
    'instructors.location': 'School',

    // Styles
    'styles.title': 'Kung Fu Styles',
    'styles.origin': 'Origin',
    'styles.characteristics': 'Characteristics',

    // Gallery
    'gallery.title': 'Gallery',
    'gallery.photos': 'Photos',
    'gallery.videos': 'Videos',

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
