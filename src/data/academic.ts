export type Certification = { title: string; level: string; subjects?: string[]; note?: string }
export type Program = { id: string; title: string; shortTitle: string; description: string; icon: 'business' | 'public'; subjects: number; badge: string; resolution?: string; objective: string; years: string[][]; certifications: Certification[] }

export const programs: Program[] = [
  {
    id: 'empresarial',
    title: 'Tecnicatura Superior en Informática Empresarial',
    shortTitle: 'Informática Empresarial',
    description: 'Conectá la tecnología con la gestión. Formate para impulsar organizaciones y empresas.',
    icon: 'business',
    subjects: 16,
    badge: 'GESTIÓN + TECNOLOGÍA',
    resolution: 'Aprobada por Res. MCECyT Nº 293/19. Implementada por Res. 4626/21-CGEPM. Validez nacional en trámite.',
    objective: 'Capacitar para el desempeño en administraciones públicas y privadas de los ámbitos nacional, jurisdiccional y local, con una gestión impositiva y administrativa informática eficiente y ética, en vinculación con entes como AFIP, Rentas, Bancos y Municipalidad.',
    years: [
      ['Oralidad y Lectoescritura Institucional (1)', 'Administración de Empresa (1)', 'Sistema de Información (1)', 'Herramientas Informáticas (1)', 'Derecho Económico Empresarial'],
      ['Derecho Laboral', 'Informática Aplicada (2)', 'Gestión Impositiva Informática (2)', 'Matemática', 'Inglés Técnico'],
      ['Programación y Base de Datos (2)', 'Sistema de Información para la Administración (2)', 'Ética Empresarial', 'Micro y Macro Economía', 'Investigación de Mercado y Marketing', 'Práctica Profesionalizante (2)'],
    ],
    certifications: [
      { title: '(1) Operador de Informática para la Gestión Administrativa', level: 'Nivel II' },
      { title: '(2) Auxiliar Administrativo para la Gestión Empresarial', level: 'Nivel III' },
    ],
  },
  {
    id: 'publica',
    title: 'Tecnicatura Superior en Informática Aplicada a la Administración Pública',
    shortTitle: 'Informática Aplicada a la Administración Pública',
    description: 'Tecnología al servicio de la comunidad. Preparate para transformar la gestión pública.',
    icon: 'public',
    subjects: 19,
    badge: 'NUEVO PLAN',
    objective: 'Formar profesionales capacitados para la gestión eficaz, eficiente y ética en la Administración Pública centralizada y descentralizada de todas las jurisdicciones, organizando recursos, ejecutando procesos y aplicando gobierno electrónico.',
    years: [
      ['Comprensión y Producción de Textos (1)(2)', 'Inglés I', 'Contabilidad y Finanzas Públicas', 'Introducción a la Informática (1)(2)', 'Derecho Administrativo', 'Herramientas Ofimáticas I (1)(2)'],
      ['Comunicación Institucional I (1)', 'Inglés II', 'Economía Local, Regional y Global', 'Taller de Informática I (1)(2)', 'Programación y Base de Datos (3)', 'Herramientas Ofimáticas II (3)'],
      ['Derecho Laboral', 'Ética Pública', 'Inglés Técnico II', 'Formulación, Gestión y Evaluación de Proyectos', 'Taller de Informática II (3)', 'Taller de Redes (3)', 'Gestión y Gobierno Electrónico (3)'],
    ],
    certifications: [
      { title: '(1) Operador de Informática para la Administración y Gestión', level: 'Nivel II · 576 hs', subjects: ['Introducción a la Informática (96h)', 'Herramientas Ofimáticas I (128h)', 'Comprensión y Producción de Textos (128h)', 'Taller de Informática I (96h)', 'Comunicación Institucional (128h)'] },
      { title: '(2) Auxiliar de Aplicaciones Ofimáticas Multiplataforma', level: 'Nivel II · 448 hs', subjects: ['Introducción a la Informática (96h)', 'Herramientas Ofimáticas I (128h)', 'Comprensión y Producción de Textos (128h)', 'Taller de Informática I (96h)'] },
      { title: '(3) Operador de Aplicaciones Ofimáticas Multiplataforma', level: 'Nivel III · 608 hs', subjects: ['Herramientas Ofimáticas II (128h)', 'Programación y Base de Datos (96h)', 'Taller de Informática II (96h)', 'Gestión y Gobierno Electrónico (160h)', 'Taller de Redes (96h)'], note: 'Requiere Nivel II completo. Las materias informadas suman 576 hs; la carga total de 608 hs está pendiente de confirmación institucional.' },
    ],
  },
]

export const requirements = ['Fotocopia de D.N.I.', 'Partida de nacimiento', 'Título secundario o constancia de título en trámite', 'Dos fotografías de 4 × 4', 'Comprobante en caso de inscripción online']

export const faqs = [
  { question: '¿Cómo funciona la modalidad semipresencial?', answer: 'Ambas tecnicaturas combinan encuentros presenciales con actividades de estudio autónomo. La cursada presencial es de 2 días por semana, aproximadamente 4 horas reloj. Consultá con la institución los días y horarios de cada comisión.' },
  { question: '¿Cuánto duran las tecnicaturas?', answer: 'Los planes se organizan en 3 años. Informática Empresarial tiene 16 materias anuales distribuidas en el trayecto; Informática Aplicada a la Administración Pública tiene 19. Podés consultar todas las materias en Oferta Académica.' },
  { question: '¿Puedo obtener certificaciones antes de terminar la carrera?', answer: 'Sí. Los planes contemplan certificaciones laborales parciales de Nivel II y Nivel III, vinculadas a la aprobación de los espacios curriculares indicados. En Administración Pública, la certificación de Operador de Aplicaciones Ofimáticas Multiplataforma requiere el Nivel II completo.' },
  { question: '¿Puedo inscribirme con el título secundario en trámite?', answer: 'Sí. Entre los requisitos se acepta el título secundario o una constancia de título en trámite. Prepará la documentación y consultá por correo las fechas y el procedimiento de inscripción.' },
  { question: '¿La carrera de Informática Empresarial tiene validez nacional?', answer: 'La carrera está aprobada por Res. MCECyT Nº 293/19 e implementada por Res. 4626/21-CGEPM. Su validez nacional se encuentra en trámite según la información institucional proporcionada.' },
]
