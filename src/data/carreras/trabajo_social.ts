import type { Materia } from '../types';

export const trabajo_social: Materia[] = [
  // AÑO 1
  { id: '02700', label: 'Economía', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02702', label: 'Filosofía', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02703', label: 'Sociología', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02845', label: 'Introducción al Trabajo Social', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02704', label: 'Taller de Integración', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02705', label: 'Psicología', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02706', label: 'Teoría Social', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02707', label: 'Procesos Sociohistóricos Mundiales', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '00901', label: 'Inglés Nivel I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '00911', label: 'Computación Nivel I', anio: 1, cuatrimestre: 1, correlativas: [] },

  // AÑO 2
  { id: '02786', label: 'Trabajo Social I', anio: 2, cuatrimestre: 1, correlativas: ['02704', '02845'] },
  { id: '02787', label: 'Psicología Social e Institucional', anio: 2, cuatrimestre: 1, correlativas: ['02704', '02705', '02845'] },
  { id: '02788', label: 'Procesos Sociohistóricos Argentinos', anio: 2, cuatrimestre: 1, correlativas: ['02704', '02707', '02845'] },
  { id: '02790', label: 'Taller de Producción y Registro de la Información', anio: 2, cuatrimestre: 1, correlativas: ['02786'] },
  { id: '02791', label: 'Trabajo Social II', anio: 2, cuatrimestre: 1, correlativas: ['02786', '02704', '02845'] },
  { id: '02792', label: 'Derecho y Legislación Aplicada', anio: 2, cuatrimestre: 1, correlativas: ['02704', '02845'] },
  { id: '00902', label: 'Inglés Nivel II', anio: 2, cuatrimestre: 1, correlativas: ['00901'] },
  { id: '00912', label: 'Computación Nivel II', anio: 2, cuatrimestre: 1, correlativas: ['00911'] },

  // AÑO 3
  { id: '02785', label: 'Metodología de la Investigación I', anio: 3, cuatrimestre: 1, correlativas: ['02791'] },
  { id: '02793', label: 'Práctica I (Individual y Familiar)', anio: 3, cuatrimestre: 1, correlativas: ['02790', '02791'] },
  { id: '02794', label: 'Trabajo Social III', anio: 3, cuatrimestre: 1, correlativas: ['02790', '02791', '02792', '02700', '02702', '02703', '02704', '02705', '02706', '02707', '02845'] },
  { id: '02795', label: 'Antropología Social y Cultural', anio: 3, cuatrimestre: 1, correlativas: ['02700', '02702', '02703', '02704', '02705', '02706', '02707', '02845'] },
  { id: '02796', label: 'Estado y Políticas Públicas', anio: 3, cuatrimestre: 1, correlativas: ['02788', '02700', '02702', '02703', '02704', '02705', '02706', '02707', '02845'] },
  { id: '02846', label: 'Taller de Gestión en Servicios Sociales', anio: 3, cuatrimestre: 1, correlativas: ['02790', '02791', '02700', '02702', '02703', '02704', '02705', '02706', '02707'] },
  { id: '02789', label: 'Metodología de la Investigación II', anio: 3, cuatrimestre: 1, correlativas: ['02785'] },
  { id: '02797', label: 'Práctica II (Grupo y Comunidad)', anio: 3, cuatrimestre: 1, correlativas: ['02793', '02794'] },
  { id: '02798', label: 'Trabajo Social IV', anio: 3, cuatrimestre: 1, correlativas: ['02789', '02794', '02795'] },
  { id: '02799', label: 'Gestión de Organizaciones', anio: 3, cuatrimestre: 1, correlativas: ['02787', '02700', '02702', '02703', '02704', '02705', '02706', '02707', '02845'] },
  { id: '02836', label: 'Políticas Sociales y Gestión Local', anio: 3, cuatrimestre: 1, correlativas: ['02796'] },

  // AÑO 4
  { id: '02837', label: 'Práctica III', anio: 4, cuatrimestre: 1, correlativas: ['02797', '02798'] },
  { id: '02838', label: 'Trabajo Social V', anio: 4, cuatrimestre: 1, correlativas: ['02798', '02799', '02836'] },
  { id: '02839', label: 'Seminario Electivo I', anio: 4, cuatrimestre: 1, correlativas: ['02798'] },
  { id: '02840', label: 'Seminario Electivo II', anio: 4, cuatrimestre: 1, correlativas: ['02798'] },
  { id: '02841', label: 'Taller de Elaboración de Trabajo Final', anio: 4, cuatrimestre: 1, correlativas: ['02789', '02837', '02838'] },
  { id: '02842', label: 'Práctica IV (Planificación y Proyectos)', anio: 4, cuatrimestre: 1, correlativas: ['02837'] },
  { id: '02843', label: 'Sistematización de la Práctica', anio: 4, cuatrimestre: 1, correlativas: ['02837'] },
  { id: '02847', label: 'Seminario de Tópicos de Avanzada', anio: 4, cuatrimestre: 1, correlativas: ['02798'] },
  { id: '00903', label: 'Inglés Nivel III', anio: 4, cuatrimestre: 1, correlativas: ['00902'] },
  { id: '00904', label: 'Inglés Nivel IV', anio: 4, cuatrimestre: 1, correlativas: ['00903'] }
];
