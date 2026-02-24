export interface StyleShowcase {
  id: string;
  category: 'external' | 'internal';
  zh: string;       // Chinese characters (for giant ideogram display)
  name_pt: string;
  name_en: string;
  origin_pt: string;
  origin_en: string;
  description_pt: string;
  description_en: string;
  characteristics_pt: string[];
  characteristics_en: string[];
}

export const stylesData: StyleShowcase[] = [
  // ─── External Styles (外拳) ────────────────────────────────────
  {
    id: 'northern-shaolin',
    category: 'external',
    zh: '北少林',
    name_pt: 'Shaolin do Norte',
    name_en: 'Northern Shaolin',
    origin_pt: 'Templo Shaolin, Província de Henan, China',
    origin_en: 'Shaolin Temple, Henan Province, China',
    description_pt:
      'O Shaolin do Norte é a base fundamental do treinamento na Pak Shao Lin. Originário do lendário Templo Shaolin, este estilo é caracterizado por movimentos amplos, chutes altos, posturas longas e acrobacias. Sua prática desenvolve força explosiva, flexibilidade e resistência, sendo considerado a raiz de todas as artes marciais chinesas.',
    description_en:
      'Northern Shaolin is the fundamental training base at Pak Shao Lin. Originating from the legendary Shaolin Temple, this style is characterized by wide movements, high kicks, long stances, and acrobatics. Its practice develops explosive strength, flexibility, and endurance, and is considered the root of all Chinese martial arts.',
    characteristics_pt: [
      'Movimentos amplos e dinâmicos',
      'Chutes altos e variados',
      'Posturas longas e estáveis',
      'Acrobacias e saltos',
      'Formas tradicionais com armas',
    ],
    characteristics_en: [
      'Wide and dynamic movements',
      'High and varied kicks',
      'Long and stable stances',
      'Acrobatics and jumps',
      'Traditional weapons forms',
    ],
  },
  {
    id: 'praying-mantis',
    category: 'external',
    zh: '螳螂',
    name_pt: 'Louva-a-Deus (Tang Lang)',
    name_en: 'Praying Mantis (Tang Lang)',
    origin_pt: 'Província de Shandong, China',
    origin_en: 'Shandong Province, China',
    description_pt:
      'O estilo Louva-a-Deus foi criado por Wong Long, inspirado nos movimentos do inseto louva-a-deus ao capturar uma cigarra. Combina velocidade, precisão e técnicas de agarramento com movimentos de pernas do Shaolin do Norte. É um dos estilos mais completos, integrando ataques rápidos, defesas ágeis e controle articular.',
    description_en:
      'The Praying Mantis style was created by Wong Long, inspired by watching a mantis capture a cicada. It combines speed, precision, and gripping techniques with Northern Shaolin footwork. It is one of the most complete styles, integrating rapid strikes, agile defenses, and joint control.',
    characteristics_pt: [
      'Técnicas de agarramento rápidas',
      'Movimentos de mãos em forma de gancho',
      'Ataques precisos a pontos vitais',
      'Combinação de velocidade e poder',
    ],
    characteristics_en: [
      'Quick gripping techniques',
      'Hook-shaped hand movements',
      'Precise strikes to vital points',
      'Combination of speed and power',
    ],
  },
  {
    id: 'eagle-claw',
    category: 'external',
    zh: '鷹爪',
    name_pt: 'Garra de Águia (Ying Zhao)',
    name_en: 'Eagle Claw (Ying Zhao)',
    origin_pt: 'Templo Shaolin / Província de Hebei, China',
    origin_en: 'Shaolin Temple / Hebei Province, China',
    description_pt:
      'O estilo Garra de Águia é um dos mais antigos sistemas de Kung Fu, remontando ao general Yue Fei da Dinastia Song. Especializa-se em técnicas de agarramento, chaves articulares e ataques a pontos de pressão, imitando a garra implacável da águia ao capturar sua presa. Exige grande força nos dedos e precisão cirúrgica.',
    description_en:
      'Eagle Claw is one of the oldest Kung Fu systems, tracing back to General Yue Fei of the Song Dynasty. It specializes in gripping techniques, joint locks, and pressure point strikes, imitating the relentless claw of an eagle seizing its prey. It demands great finger strength and surgical precision.',
    characteristics_pt: [
      'Técnicas de agarramento e torção',
      'Chaves articulares e imobilizações',
      'Ataques a pontos de pressão',
      'Força excepcional nos dedos',
      'Combinação de distância longa e curta',
    ],
    characteristics_en: [
      'Gripping and twisting techniques',
      'Joint locks and immobilizations',
      'Pressure point strikes',
      'Exceptional finger strength',
      'Combination of long and short range',
    ],
  },
  {
    id: 'choy-lay-fut',
    category: 'external',
    zh: '蔡李佛',
    name_pt: 'Choy Lay Fut',
    name_en: 'Choy Lay Fut',
    origin_pt: 'Província de Guangdong, China',
    origin_en: 'Guangdong Province, China',
    description_pt:
      'Fundado por Chan Heung em 1836, o Choy Lay Fut homenageia seus três mestres: Choy Fook, Li Yau-San e o monge Fut. É um estilo poderoso que combina técnicas do norte e do sul da China, conhecido por seus golpes circulares devastadores, movimentos amplos de braço e footwork dinâmico, sendo altamente eficaz em combate real.',
    description_en:
      'Founded by Chan Heung in 1836, Choy Lay Fut honors his three masters: Choy Fook, Li Yau-San, and the monk Fut. It is a powerful style combining northern and southern Chinese techniques, known for its devastating circular strikes, wide arm movements, and dynamic footwork, making it highly effective in real combat.',
    characteristics_pt: [
      'Golpes circulares poderosos',
      'Movimentos amplos de braço',
      'Footwork dinâmico e evasivo',
      'Integração de técnicas norte e sul',
      'Eficácia comprovada em combate',
    ],
    characteristics_en: [
      'Powerful circular strikes',
      'Wide arm movements',
      'Dynamic and evasive footwork',
      'Integration of northern and southern techniques',
      'Proven effectiveness in combat',
    ],
  },
  {
    id: 'wing-chun',
    category: 'external',
    zh: '詠春',
    name_pt: 'Wing Chun (Ving Tsun)',
    name_en: 'Wing Chun (Ving Tsun)',
    origin_pt: 'Sul da China, Província de Fujian',
    origin_en: 'Southern China, Fujian Province',
    description_pt:
      'O Wing Chun é um estilo de combate próximo criado, segundo a lenda, pela monja Ng Mui do Templo Shaolin. Prioriza a economia de movimento, a teoria da linha central e a sensibilidade tátil (Chi Sao). Popularizado mundialmente por Ip Man e seu discípulo Bruce Lee, é reconhecido pela eficiência em situações de defesa pessoal.',
    description_en:
      'Wing Chun is a close-range combat style created, according to legend, by the nun Ng Mui of the Shaolin Temple. It prioritizes economy of movement, center-line theory, and tactile sensitivity (Chi Sao). Popularized worldwide by Ip Man and his student Bruce Lee, it is recognized for its efficiency in self-defense situations.',
    characteristics_pt: [
      'Combate de curta distância',
      'Teoria da linha central',
      'Chi Sao (mãos pegajosas)',
      'Economia de movimento',
      'Ataques e defesas simultâneos',
    ],
    characteristics_en: [
      'Close-range combat',
      'Center-line theory',
      'Chi Sao (sticky hands)',
      'Economy of movement',
      'Simultaneous attack and defense',
    ],
  },

  // ─── Internal Styles (內拳) ────────────────────────────────────
  {
    id: 'tai-chi-chuan',
    category: 'internal',
    zh: '太極',
    name_pt: 'Tai Chi Chuan (Taijiquan)',
    name_en: 'Tai Chi Chuan (Taijiquan)',
    origin_pt: 'Vila Chen, Província de Henan, China',
    origin_en: 'Chen Village, Henan Province, China',
    description_pt:
      'O Tai Chi Chuan é a arte marcial interna mais praticada no mundo. Baseado nos princípios do Yin e Yang, utiliza movimentos lentos e fluidos que desenvolvem equilíbrio, consciência corporal e energia interna (Chi). Apesar de sua aparência suave, contém aplicações marciais profundas incluindo projeções, chaves e golpes explosivos (Fa Jin).',
    description_en:
      'Tai Chi Chuan is the most widely practiced internal martial art in the world. Based on the principles of Yin and Yang, it uses slow, flowing movements that develop balance, body awareness, and internal energy (Chi). Despite its gentle appearance, it contains profound martial applications including throws, locks, and explosive strikes (Fa Jin).',
    characteristics_pt: [
      'Movimentos lentos e contínuos',
      'Cultivo de energia interna (Chi)',
      'Equilíbrio entre Yin e Yang',
      'Aplicações marciais ocultas',
      'Benefícios comprovados para saúde',
    ],
    characteristics_en: [
      'Slow and continuous movements',
      'Internal energy cultivation (Chi)',
      'Balance between Yin and Yang',
      'Hidden martial applications',
      'Proven health benefits',
    ],
  },
  {
    id: 'pa-kua-chang',
    category: 'internal',
    zh: '八卦',
    name_pt: 'Pa Kua Chang (Baguazhang)',
    name_en: 'Pa Kua Chang (Baguazhang)',
    origin_pt: 'Beijing, China (Dong Haichuan)',
    origin_en: 'Beijing, China (Dong Haichuan)',
    description_pt:
      'O Pa Kua Chang é baseado na filosofia dos Oito Trigramas (Ba Gua) do I Ching. Seu praticante caminha continuamente em círculo, executando mudanças de palma fluidas e evasivas. Criado por Dong Haichuan no século XIX, é reconhecido pela capacidade de lidar com múltiplos oponentes através de movimento constante e mudanças de direção imprevisíveis.',
    description_en:
      'Pa Kua Chang is based on the philosophy of the Eight Trigrams (Ba Gua) of the I Ching. Its practitioner walks continuously in a circle, executing fluid and evasive palm changes. Created by Dong Haichuan in the 19th century, it is recognized for its ability to handle multiple opponents through constant movement and unpredictable directional changes.',
    characteristics_pt: [
      'Caminhada circular contínua',
      'Mudanças de palma fluidas',
      'Filosofia dos Oito Trigramas',
      'Evasão e redirecionamento',
      'Eficácia contra múltiplos oponentes',
    ],
    characteristics_en: [
      'Continuous circle walking',
      'Fluid palm changes',
      'Eight Trigrams philosophy',
      'Evasion and redirection',
      'Effectiveness against multiple opponents',
    ],
  },
  {
    id: 'hsing-yi-chuan',
    category: 'internal',
    zh: '形意',
    name_pt: 'Hsing Yi Chuan (Xingyiquan)',
    name_en: 'Hsing Yi Chuan (Xingyiquan)',
    origin_pt: 'Província de Shanxi, China',
    origin_en: 'Shanxi Province, China',
    description_pt:
      'O Hsing Yi Chuan é o mais agressivo dos três estilos internos. Baseado na teoria dos Cinco Elementos (metal, água, madeira, fogo e terra), utiliza movimentos lineares e explosivos com avanço constante. Cada elemento corresponde a um tipo de golpe e a um órgão interno, unindo poder marcial ao cultivo da saúde.',
    description_en:
      'Hsing Yi Chuan is the most aggressive of the three internal styles. Based on the Five Elements theory (metal, water, wood, fire, and earth), it uses linear and explosive movements with constant forward pressure. Each element corresponds to a type of strike and an internal organ, uniting martial power with health cultivation.',
    characteristics_pt: [
      'Movimentos lineares e explosivos',
      'Teoria dos Cinco Elementos',
      'Avanço constante e pressão frontal',
      'Poder interno concentrado (Fa Jin)',
      'Simplicidade e eficiência direta',
    ],
    characteristics_en: [
      'Linear and explosive movements',
      'Five Elements theory',
      'Constant forward pressure',
      'Concentrated internal power (Fa Jin)',
      'Simplicity and direct efficiency',
    ],
  },
];

export const externalStyles = stylesData.filter((s) => s.category === 'external');
export const internalStyles = stylesData.filter((s) => s.category === 'internal');
