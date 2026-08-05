import type { Materia } from '../types';

export const ciencia_politica: Materia[] = [
  // AÑO 1
  { id: '02351', label: 'Elementos de Filosofía', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02352', label: 'Procesos Sociohistóricos Mundiales', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02353', label: 'Elementos de Sociología', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02354', label: 'Introducción a la Ciencia Política', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02355', label: 'Taller de Integración', anio: 1, cuatrimestre: 1, correlativas: ['02353', '02354'] },
  { id: '02357', label: 'Elementos de Economía', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02358', label: 'Elementos de Administración', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02362', label: 'Teoría Política I', anio: 1, cuatrimestre: 1, correlativas: ['02354'] },
  { id: '00901', label: 'Inglés Nivel I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '00911', label: 'Computación Nivel I', anio: 1, cuatrimestre: 1, correlativas: [] },

  // AÑO 2
  { id: '02356', label: 'Procesos Sociohistóricos Argentinos', anio: 2, cuatrimestre: 1, correlativas: ['02352'] },
  { id: '02359', label: 'Metodología de la Investigación I', anio: 2, cuatrimestre: 1, correlativas: ['02355'] },
  { id: '02360', label: 'Teoría Sociológica I', anio: 2, cuatrimestre: 1, correlativas: ['02353', '02354'] },
  { id: '02361', label: 'Economía I', anio: 2, cuatrimestre: 1, correlativas: ['02357'] },
  { id: '02379', label: 'Historia Política Americana', anio: 2, cuatrimestre: 1, correlativas: ['02362'] },
  { id: '02364', label: 'Economía II', anio: 2, cuatrimestre: 1, correlativas: ['02361'] },
  { id: '02365', label: 'Teoría Política II', anio: 2, cuatrimestre: 1, correlativas: ['02360', '02362'] },
  { id: '02366', label: 'Administración Pública', anio: 2, cuatrimestre: 1, correlativas: ['02358'] },
  { id: '00902', label: 'Inglés Nivel II', anio: 2, cuatrimestre: 1, correlativas: ['00901'] },
  { id: '00912', label: 'Computación Nivel II', anio: 2, cuatrimestre: 1, correlativas: ['00911'] },

  // AÑO 3
  { id: '02367', label: 'Metodología de la Investigación II', anio: 3, cuatrimestre: 1, correlativas: ['02359'] },
  { id: '02368', label: 'Derecho Constitucional', anio: 3, cuatrimestre: 1, correlativas: [] },
  { id: '02369', label: 'Demografía Social', anio: 3, cuatrimestre: 1, correlativas: ['02365'] },
  { id: '02370', label: 'Política y Comunicación', anio: 3, cuatrimestre: 1, correlativas: ['02365'] },
  { id: '02371', label: 'Economía Política Argentina', anio: 3, cuatrimestre: 1, correlativas: ['02369'] },
  { id: '02372', label: 'Sistemas Políticos Comparados', anio: 3, cuatrimestre: 1, correlativas: ['02369'] },
  { id: '02373', label: 'Teoría de la Política Contemporánea', anio: 3, cuatrimestre: 1, correlativas: ['02367', '02368', '02370'] },
  { id: '02374', label: 'Gestión de Políticas Públicas', anio: 3, cuatrimestre: 1, correlativas: ['02364', '02365', '02366'] },

  // AÑO 4
  { id: '02363', label: 'Psicosociología de las Organizaciones', anio: 4, cuatrimestre: 1, correlativas: ['02360'] },
  { id: '02375', label: 'Derecho Administrativo', anio: 4, cuatrimestre: 1, correlativas: ['02368'] },
  { id: '02376', label: 'Finanzas Públicas', anio: 4, cuatrimestre: 1, correlativas: [] },
  { id: '02377', label: 'Relaciones Internacionales', anio: 4, cuatrimestre: 1, correlativas: ['02373'] },
  { id: '02378', label: 'Seminario de Tópicos de Avanzada', anio: 4, cuatrimestre: 1, correlativas: ['02371', '02372', '02373'] },
  { id: '02380', label: 'Taller de Gestión de Políticas Sociales', anio: 4, cuatrimestre: 1, correlativas: ['02363', '02374', '02375', '02376'] },
  { id: '02381', label: 'Taller de Gestión de Políticas de Producción', anio: 4, cuatrimestre: 1, correlativas: ['02363', '02374', '02375', '02376'] },
  { id: '00903', label: 'Inglés Nivel III', anio: 4, cuatrimestre: 1, correlativas: ['00902'] },
  { id: '00904', label: 'Inglés Nivel IV', anio: 4, cuatrimestre: 1, correlativas: ['00903'] }
];
