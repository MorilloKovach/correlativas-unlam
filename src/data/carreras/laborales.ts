import type { Materia } from '../types';

export const laborales: Materia[] = [
  // AÑO 1
  { id: '00748', label: 'Elementos de Psicología', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '00749', label: 'Elementos de Economía', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '00751', label: 'Elementos de Sociología', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '00752', label: 'Procesos Socio-Históricos Mundiales', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '00901', label: 'Inglés Nivel I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '00911', label: 'Computación Nivel I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '01500', label: 'Introducción a las Relaciones Laborales', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '01501', label: 'Administración de los Recursos Humanos I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '01502', label: 'Administración General', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '01503', label: 'Sociología del Trabajo', anio: 1, cuatrimestre: 1, correlativas: ['00751'] },

  // AÑO 2
  { id: '00902', label: 'Inglés Nivel II', anio: 2, cuatrimestre: 1, correlativas: ['00901'] },
  { id: '00912', label: 'Computación Nivel II', anio: 2, cuatrimestre: 1, correlativas: ['00911'] },
  { id: '01504', label: 'Administración de los Recursos Humanos II', anio: 2, cuatrimestre: 1, correlativas: ['01501', '01502'] },
  { id: '01505', label: 'Psicología Laboral', anio: 2, cuatrimestre: 1, correlativas: ['00748', '01503'] },
  { id: '01506', label: 'Derecho Laboral I', anio: 2, cuatrimestre: 1, correlativas: [] },
  { id: '01507', label: 'Administración de los Recursos Humanos III', anio: 2, cuatrimestre: 1, correlativas: ['01504', '01505'] },
  { id: '01508', label: 'Teoría de las Remuneraciones', anio: 2, cuatrimestre: 1, correlativas: ['01504', '01506'] },
  { id: '01509', label: 'Derecho Laboral II', anio: 2, cuatrimestre: 1, correlativas: ['01506'] },
  { id: '01510', label: 'Economía Política', anio: 2, cuatrimestre: 1, correlativas: ['00749'] },
  { id: '01528', label: 'Taller de Aplicación I', anio: 2, cuatrimestre: 1, correlativas: ['01504', '01506'] },
  { id: '01529', label: 'Taller de Aplicación II', anio: 2, cuatrimestre: 1, correlativas: ['01528', '01507', '01508', '01509'] },

  // AÑO 3
  { id: '00756', label: 'Procesos Socio-Históricos Argentinos', anio: 3, cuatrimestre: 1, correlativas: ['00752'] },
  { id: '01511', label: 'Sistemas de Relaciones Laborales Comparadas', anio: 3, cuatrimestre: 1, correlativas: ['01507', '01510'] },
  { id: '01512', label: 'Negociación Colectiva', anio: 3, cuatrimestre: 1, correlativas: ['01507', '01509', '01510'] },
  { id: '01513', label: 'Metodología de la Investigación I', anio: 3, cuatrimestre: 1, correlativas: ['01507'] },
  { id: '01514', label: 'Derecho Laboral III', anio: 3, cuatrimestre: 1, correlativas: ['01509'] },
  { id: '01515', label: 'Condiciones y Medio Ambiente Laboral', anio: 3, cuatrimestre: 1, correlativas: ['01505', '01507'] },
  { id: '01516', label: 'Sistema de Seguridad Social', anio: 3, cuatrimestre: 1, correlativas: ['01511'] },

  // AÑO 4
  { id: '00903', label: 'Inglés Nivel III', anio: 4, cuatrimestre: 1, correlativas: ['00902'] },
  { id: '00904', label: 'Inglés Nivel IV', anio: 4, cuatrimestre: 1, correlativas: ['00903'] },
  { id: '01517', label: 'Mediación y Negociación', anio: 4, cuatrimestre: 1, correlativas: ['01512', '01514', '01516'] },
  { id: '01518', label: 'Metodología de la Investigación II', anio: 4, cuatrimestre: 1, correlativas: ['01513', '01517'] },
  { id: '01519', label: 'Políticas de Trabajo y Empleo', anio: 4, cuatrimestre: 1, correlativas: ['01511', '01512'] },
  { id: '01520', label: 'Historia del Movimiento Obrero', anio: 4, cuatrimestre: 1, correlativas: ['00756'] },
  { id: '01521', label: 'Taller de Elaboración del Trabajo Final', anio: 4, cuatrimestre: 1, correlativas: ['01518', '01519'] },
  { id: '01522', label: 'Seminario de Gestión de Recursos Humanos', anio: 4, cuatrimestre: 1, correlativas: ['01514', '01517', '01519'] },
  { id: '01523', label: 'Seminario de Tópicos de Avanzada', anio: 4, cuatrimestre: 1, correlativas: ['01517', '01520'] }
];
