import type { Materia } from '../types';

export const contador: Materia[] = [
  // AÑO 1
  { id: '02405', label: 'Administración General', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '00911', label: 'Computación Nivel I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02401', label: 'Contabilidad Básica', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02402', label: 'Derecho Público', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02403', label: 'Introducción al Conocimiento Científico', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02400', label: 'Matemática I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02404', label: 'Historia Económica Social y Contemporánea', anio: 1, cuatrimestre: 1, correlativas: [] },

  // AÑO 2
  { id: '00901', label: 'Inglés Nivel I', anio: 2, cuatrimestre: 1, correlativas: [] },
  { id: '02406', label: 'Matemática II', anio: 2, cuatrimestre: 1, correlativas: ['02400'] },
  { id: '02409', label: 'Derecho Civil', anio: 2, cuatrimestre: 1, correlativas: ['02402'] },
  { id: '02411', label: 'Economía General', anio: 2, cuatrimestre: 1, correlativas: ['02400', '02404'] },
  { id: '00902', label: 'Inglés Nivel II', anio: 2, cuatrimestre: 1, correlativas: ['00901'] },
  { id: '02408', label: 'Técnicas de Valuación', anio: 2, cuatrimestre: 1, correlativas: ['02401'] },
  { id: '02413', label: 'Derecho Comercial I', anio: 2, cuatrimestre: 1, correlativas: ['02409'] },
  { id: '02416', label: 'Macroeconomía', anio: 2, cuatrimestre: 1, correlativas: ['02406', '02411'] },

  // AÑO 3
  { id: '02407', label: 'Estadística', anio: 3, cuatrimestre: 1, correlativas: ['02400'] },
  { id: '02410', label: 'Elementos de Costos', anio: 3, cuatrimestre: 1, correlativas: ['02408'] },
  { id: '02412', label: 'Psicosociología de las Organizaciones', anio: 3, cuatrimestre: 1, correlativas: ['02405', '02403'] },
  { id: '02417', label: 'Derecho Laboral y Previsional', anio: 3, cuatrimestre: 1, correlativas: ['02409'] },
  { id: '00912', label: 'Computación Nivel II', anio: 3, cuatrimestre: 1, correlativas: ['00911'] },
  { id: '02418', label: 'Estados Contables', anio: 3, cuatrimestre: 1, correlativas: ['02410', '02413'] },
  { id: '02419', label: 'Matemática Financiera', anio: 3, cuatrimestre: 1, correlativas: ['02400'] },
  { id: '02428', label: 'Estructura Económica Argentina', anio: 3, cuatrimestre: 1, correlativas: ['02416'] },

  // AÑO 4
  { id: '02415', label: 'Sistemas de Información', anio: 4, cuatrimestre: 1, correlativas: ['02405'] },
  { id: '02430', label: 'Derecho Comercial II', anio: 4, cuatrimestre: 1, correlativas: ['02413'] },
  { id: '02431', label: 'Finanzas Públicas', anio: 4, cuatrimestre: 1, correlativas: ['02402', '02407', '02416'] },
  { id: '02432', label: 'Costos y Actividades Especiales', anio: 4, cuatrimestre: 1, correlativas: ['02406', '02418'] },
  { id: '00903', label: 'Inglés Nivel III', anio: 4, cuatrimestre: 1, correlativas: ['00902'] },
  { id: '02425', label: 'Administración Financiera', anio: 4, cuatrimestre: 1, correlativas: ['02415', '02419'] },
  { id: '02433', label: 'Teoría y Técnica Impositiva I', anio: 4, cuatrimestre: 1, correlativas: ['02418', '02431'] },
  { id: '02434', label: 'Contabilidad y Administración Pública', anio: 4, cuatrimestre: 1, correlativas: ['02415', '02418', '02428', '02431'] },

  // AÑO 5
  { id: '02435', label: 'Teoría y Técnica Impositiva II', anio: 5, cuatrimestre: 1, correlativas: ['02418', '02431'] },
  { id: '02436', label: 'Auditoría', anio: 5, cuatrimestre: 1, correlativas: ['02425', '02430', '02432'] },
  { id: '00904', label: 'Inglés Nivel IV', anio: 5, cuatrimestre: 1, correlativas: ['00903'] },
  { id: '02530', label: 'Seminario de Práctica Profesional Administrativo Contable', anio: 5, cuatrimestre: 1, correlativas: ['02412', '02417', '02434', '02435', '02436', '02433'] },
  { id: '02534', label: 'Seminario de Práctica Profesional Jurídico Contable', anio: 5, cuatrimestre: 1, correlativas: ['02412', '02417', '02434', '02435', '02436', '02433'] }
];
