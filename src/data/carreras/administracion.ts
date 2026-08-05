import type { Materia } from '../types';

export const administracion: Materia[] = [
  // AÑO 1
  { id: '02400', label: 'Matemática I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02401', label: 'Contabilidad Básica', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02402', label: 'Derecho Público', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02403', label: 'Introducción al Conocimiento Científico', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02404', label: 'Historia Económica Social y Contemporánea', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02405', label: 'Administración General', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02406', label: 'Matemática II', anio: 1, cuatrimestre: 1, correlativas: ['02400'] },
  { id: '00901', label: 'Inglés Nivel I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '00911', label: 'Computación Nivel I', anio: 1, cuatrimestre: 1, correlativas: [] },

  // AÑO 2
  { id: '02407', label: 'Estadística', anio: 2, cuatrimestre: 1, correlativas: ['02400'] },
  { id: '02408', label: 'Técnicas de Valuación', anio: 2, cuatrimestre: 1, correlativas: ['02401'] },
  { id: '02409', label: 'Derecho Civil', anio: 2, cuatrimestre: 1, correlativas: ['02402'] },
  { id: '02410', label: 'Elementos de Costos', anio: 2, cuatrimestre: 1, correlativas: ['02408'] },
  { id: '02411', label: 'Economía General', anio: 2, cuatrimestre: 1, correlativas: ['02400', '02404'] },
  { id: '02412', label: 'Psicosociología de las Organizaciones', anio: 2, cuatrimestre: 1, correlativas: ['02403', '02405'] },
  { id: '02413', label: 'Derecho Comercial I', anio: 2, cuatrimestre: 1, correlativas: ['02409'] },
  { id: '00902', label: 'Inglés Nivel II', anio: 2, cuatrimestre: 1, correlativas: ['00901'] },
  { id: '00912', label: 'Computación Nivel II', anio: 2, cuatrimestre: 1, correlativas: ['00911'] },

  // AÑO 3
  { id: '02414', label: 'Procedimientos Administrativos', anio: 3, cuatrimestre: 1, correlativas: ['02405'] },
  { id: '02415', label: 'Sistemas de Información', anio: 3, cuatrimestre: 1, correlativas: ['02405'] },
  { id: '02416', label: 'Macroeconomía', anio: 3, cuatrimestre: 1, correlativas: ['02406', '02411'] },
  { id: '02417', label: 'Derecho Laboral y Previsional', anio: 3, cuatrimestre: 1, correlativas: ['02409'] },
  { id: '02418', label: 'Estados Contables', anio: 3, cuatrimestre: 1, correlativas: ['02410', '02413'] },
  { id: '02419', label: 'Matemática Financiera', anio: 3, cuatrimestre: 1, correlativas: ['02400'] },

  // AÑO 4
  { id: '02420', label: 'Administración de Personal', anio: 4, cuatrimestre: 1, correlativas: ['02412', '02417'] },
  { id: '02421', label: 'Administración de la Producción', anio: 4, cuatrimestre: 1, correlativas: ['02407', '02410', '02415'] },
  { id: '02422', label: 'Comercialización', anio: 4, cuatrimestre: 1, correlativas: ['02407', '02415'] },
  { id: '02423', label: 'Administración de Empresas Públicas', anio: 4, cuatrimestre: 1, correlativas: ['02402', '02407', '02418'] },
  { id: '02424', label: 'Teoría de la Decisión', anio: 4, cuatrimestre: 1, correlativas: ['02407', '02414', '02415'] },
  { id: '02425', label: 'Administración Financiera', anio: 4, cuatrimestre: 1, correlativas: ['02415', '02419'] },
  { id: '00903', label: 'Inglés Nivel III', anio: 4, cuatrimestre: 1, correlativas: ['00902'] },

  // AÑO 5
  { id: '02426', label: 'Dirección General', anio: 5, cuatrimestre: 1, correlativas: ['02420', '02421', '02422', '02424', '02425'] },
  { id: '02427', label: 'Planeamiento y Evaluación de Proyectos', anio: 5, cuatrimestre: 1, correlativas: ['02407', '02410', '02425'] },
  { id: '02428', label: 'Estructura Económica Argentina', anio: 5, cuatrimestre: 1, correlativas: ['02416'] },
  { id: '02429', label: 'Seminario de Análisis Estratégico', anio: 5, cuatrimestre: 1, correlativas: ['02414', '02420', '02421', '02422'] },
  { id: '00904', label: 'Inglés Nivel IV', anio: 5, cuatrimestre: 1, correlativas: ['00903'] }
];
