import type { Materia } from '../types';

export const economia: Materia[] = [
  // AÑO 1
  { id: '02400', label: 'Matemática I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02402', label: 'Derecho Público', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '00901', label: 'Inglés Nivel I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '00911', label: 'Computación Nivel I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02401', label: 'Contabilidad Básica', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02403', label: 'Introducción al Conocimiento Científico', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02405', label: 'Administración General', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02404', label: 'Historia Económica Social y Contemporánea', anio: 1, cuatrimestre: 1, correlativas: [] },

  // AÑO 2
  { id: '00902', label: 'Inglés Nivel II', anio: 2, cuatrimestre: 1, correlativas: ['00901'] },
  { id: '00912', label: 'Computación Nivel II', anio: 2, cuatrimestre: 1, correlativas: ['00911'] },
  { id: '02406', label: 'Matemática II', anio: 2, cuatrimestre: 1, correlativas: ['02400'] },
  { id: '02411', label: 'Economía General', anio: 2, cuatrimestre: 1, correlativas: ['02400', '02404'] },
  { id: '02579', label: 'Sociología', anio: 2, cuatrimestre: 1, correlativas: ['02403', '02404'] },
  { id: '02407', label: 'Estadística', anio: 2, cuatrimestre: 1, correlativas: ['02400'] },
  { id: '02416', label: 'Macroeconomía', anio: 2, cuatrimestre: 1, correlativas: ['02411'] },
  { id: '02580', label: 'Historia Económica Argentina', anio: 2, cuatrimestre: 1, correlativas: ['02404'] },

  // AÑO 3
  { id: '00903', label: 'Inglés Nivel III', anio: 3, cuatrimestre: 1, correlativas: ['00902'] },
  { id: '02419', label: 'Matemática Financiera', anio: 3, cuatrimestre: 1, correlativas: ['02400', '02401'] },
  { id: '03193', label: 'Estadística Avanzada', anio: 3, cuatrimestre: 1, correlativas: ['02406', '02407'] },
  { id: '03194', label: 'Cuentas Nacionales', anio: 3, cuatrimestre: 1, correlativas: ['02407', '02416'] },
  { id: '00904', label: 'Inglés Nivel IV', anio: 3, cuatrimestre: 1, correlativas: ['00903'] },
  { id: '02585', label: 'Metodología de la Investigación Económica', anio: 3, cuatrimestre: 1, correlativas: ['02403', '02580'] },
  { id: '02597', label: 'Economía de los Recursos Naturales y Ambientales', anio: 3, cuatrimestre: 1, correlativas: ['03194'] },
  { id: '03195', label: 'Matemática III', anio: 3, cuatrimestre: 1, correlativas: ['02406'] },
  { id: '03196', label: 'Microeconomía Aplicada', anio: 3, cuatrimestre: 1, correlativas: ['02411', '03193'] },

  // AÑO 4
  { id: '02431', label: 'Finanzas Públicas', anio: 4, cuatrimestre: 1, correlativas: ['02402', '03194'] },
  { id: '02593', label: 'Historia del Pensamiento Económico', anio: 4, cuatrimestre: 1, correlativas: ['02416', '02579'] },
  { id: '03197', label: 'Macroeconomía Avanzada', anio: 4, cuatrimestre: 1, correlativas: ['03194'] },
  { id: '03198', label: 'Análisis Sectorial', anio: 4, cuatrimestre: 1, correlativas: ['02405', '02597', '03196'] },
  { id: '02427', label: 'Planeamiento y Evaluación de Proyectos', anio: 4, cuatrimestre: 1, correlativas: ['02419', '03198'] },
  { id: '03199', label: 'Econometría', anio: 4, cuatrimestre: 1, correlativas: ['03195', '03193'] },
  { id: '03233', label: 'Dinero, Crédito y Bancos', anio: 4, cuatrimestre: 1, correlativas: ['02419', '03197'] },

  // AÑO 5
  { id: '02595', label: 'Crecimiento y Desarrollo Económico', anio: 5, cuatrimestre: 1, correlativas: ['03198', '03197'] },
  { id: '03234', label: 'Electiva 1', anio: 5, cuatrimestre: 1, correlativas: [] },
  { id: '03235', label: 'Economía Internacional', anio: 5, cuatrimestre: 1, correlativas: ['03233', '03196'] },
  { id: '03236', label: 'Economía del Comportamiento', anio: 5, cuatrimestre: 1, correlativas: ['02427', '03196'] },
  { id: '02598', label: 'Política Económica', anio: 5, cuatrimestre: 1, correlativas: ['03235', '02431'] },
  { id: '02599', label: 'Seminario de Actuación Profesional', anio: 5, cuatrimestre: 1, correlativas: ['02427', '02585', '03199'] },
  { id: '03237', label: 'Mercado de Capitales', anio: 5, cuatrimestre: 1, correlativas: ['03236', '03233'] },
  { id: '03238', label: 'Electiva 2', anio: 5, cuatrimestre: 1, correlativas: [] }
];
