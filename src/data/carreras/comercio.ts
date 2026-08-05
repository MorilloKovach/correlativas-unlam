import type { Materia } from '../types';

export const comercio: Materia[] = [
  // AÑO 1
  { id: '02400', label: 'Matemática I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02402', label: 'Derecho Público', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '00901', label: 'Inglés Nivel I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02401', label: 'Contabilidad Básica', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02403', label: 'Introducción al Conocimiento Científico', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02405', label: 'Administración General', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02404', label: 'Historia Económica Social y Contemporánea', anio: 1, cuatrimestre: 1, correlativas: [] },

  // AÑO 2
  { id: '00902', label: 'Inglés Nivel II', anio: 2, cuatrimestre: 1, correlativas: ['00901'] },
  { id: '02411', label: 'Economía General', anio: 2, cuatrimestre: 1, correlativas: ['02400', '02404'] },
  { id: '02440', label: 'Derecho Civil y Comercial', anio: 2, cuatrimestre: 1, correlativas: ['02402'] },
  { id: '02441', label: 'Introducción al Comercio Internacional', anio: 2, cuatrimestre: 1, correlativas: [] },
  { id: '00911', label: 'Computación Nivel I', anio: 2, cuatrimestre: 1, correlativas: [] },
  { id: '02407', label: 'Estadística', anio: 2, cuatrimestre: 1, correlativas: ['02400'] },
  { id: '02416', label: 'Macroeconomía', anio: 2, cuatrimestre: 1, correlativas: ['02400', '02411'] },
  { id: '02443', label: 'Legislación Aduanera', anio: 2, cuatrimestre: 1, correlativas: ['02441', '02440'] },

  // AÑO 3
  { id: '02439', label: 'Geografía Económica', anio: 3, cuatrimestre: 1, correlativas: [] },
  { id: '02444', label: 'Operatoria del Comercio Internacional', anio: 3, cuatrimestre: 1, correlativas: ['02443'] },
  { id: '02445', label: 'Valoración y Clasificación Arancelaria', anio: 3, cuatrimestre: 1, correlativas: ['02443'] },
  { id: '02446', label: 'Costos y Elementos de Finanzas', anio: 3, cuatrimestre: 1, correlativas: ['02401'] },
  { id: '00912', label: 'Computación Nivel II', anio: 3, cuatrimestre: 1, correlativas: ['00911'] },
  { id: '02448', label: 'Práctica Aduanera', anio: 3, cuatrimestre: 1, correlativas: ['02445', '02444'] },
  { id: '02449', label: 'Logística Internacional', anio: 3, cuatrimestre: 1, correlativas: ['02444', '02439'] },
  { id: '02450', label: 'Régimen Financiero del Comercio Internacional', anio: 3, cuatrimestre: 1, correlativas: ['02446', '02441'] },

  // AÑO 4
  { id: '00903', label: 'Inglés Nivel III', anio: 4, cuatrimestre: 1, correlativas: ['00902'] },
  { id: '02451', label: 'Comercialización', anio: 4, cuatrimestre: 1, correlativas: ['02405', '02407', '02441'] },
  { id: '02452', label: 'Investigación de Mercados', anio: 4, cuatrimestre: 1, correlativas: ['02403', '02407', '02439'] },
  { id: '02453', label: 'Integración Económica', anio: 4, cuatrimestre: 1, correlativas: ['02441', '02416'] },
  { id: '02454', label: 'Planeamiento y Evaluación de Proyectos', anio: 4, cuatrimestre: 1, correlativas: ['02407', '02444', '02446'] },
  { id: '02455', label: 'Taller de Gestión Operativa del Comercio Internacional', anio: 4, cuatrimestre: 1, correlativas: ['02454', '02446', '02445', '02444'] },
  { id: '02456', label: 'Economía Internacional', anio: 4, cuatrimestre: 1, correlativas: ['02453'] },
  { id: '02461', label: 'Inglés Técnico I', anio: 4, cuatrimestre: 1, correlativas: ['00903'] },
  { id: '00904', label: 'Inglés Nivel IV', anio: 4, cuatrimestre: 1, correlativas: ['00903'] },

  // AÑO 5
  { id: '02457', label: 'Relaciones Económicas Internacionales', anio: 5, cuatrimestre: 1, correlativas: ['02456'] },
  { id: '02458', label: 'Práctica Profesional', anio: 5, cuatrimestre: 1, correlativas: ['02455', '02452'] },
  { id: '02459', label: 'Derecho Internacional', anio: 5, cuatrimestre: 1, correlativas: ['02453', '02443'] },
  { id: '02462', label: 'Inglés Técnico II', anio: 5, cuatrimestre: 1, correlativas: ['02461'] }
];
