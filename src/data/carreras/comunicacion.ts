import type { Materia } from '../types';

export const comunicacion: Materia[] = [
  // AÑO 1
  { id: '02700', label: 'Economía', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02702', label: 'Filosofía', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02703', label: 'Sociología', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02850', label: 'Taller de Gráfica, Radio y Televisión I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02704', label: 'Taller de Integración', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02705', label: 'Psicología', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02706', label: 'Teoría Social', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02707', label: 'Procesos Sociohistóricos Mundiales', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '02851', label: 'Taller de Gráfica, Radio y Televisión II', anio: 1, cuatrimestre: 1, correlativas: ['02850'] },
  { id: '00901', label: 'Inglés Nivel I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '00911', label: 'Computación Nivel I', anio: 1, cuatrimestre: 1, correlativas: [] },

  // AÑO 2
  { id: '02761', label: 'Semiótica I', anio: 2, cuatrimestre: 1, correlativas: ['02704', '02850', '02851'] },
  { id: '02762', label: 'Teoría de la Comunicación I', anio: 2, cuatrimestre: 1, correlativas: ['02704', '02850', '02851'] },
  { id: '02764', label: 'Procesos Sociohistóricos Argentinos', anio: 2, cuatrimestre: 1, correlativas: ['02704', '02707', '02850', '02851'] },
  { id: '02783', label: 'Archivo y Documentación Periodística', anio: 2, cuatrimestre: 1, correlativas: ['02704', '02850', '02851'] },
  { id: '02852', label: 'Taller de Gráfica, Radio y Televisión III', anio: 2, cuatrimestre: 1, correlativas: ['02704', '02850', '02851'] },
  { id: '02765', label: 'Teoría de la Comunicación II', anio: 2, cuatrimestre: 1, correlativas: ['02762', '02704', '02850', '02851'] },
  { id: '02766', label: 'Antropología Social y Cultural', anio: 2, cuatrimestre: 1, correlativas: ['02764', '02704', '02850', '02851'] },
  { id: '02784', label: 'Taller de Aplicación', anio: 2, cuatrimestre: 1, correlativas: ['02783', '02704', '02850', '02851'] },
  { id: '02853', label: 'Taller de Gráfica, Radio y Televisión IV', anio: 2, cuatrimestre: 1, correlativas: ['02852', '02704', '02850', '02851'] },
  { id: '00902', label: 'Inglés Nivel II', anio: 2, cuatrimestre: 1, correlativas: ['00901'] },
  { id: '00912', label: 'Computación Nivel II', anio: 2, cuatrimestre: 1, correlativas: ['00911'] },

  // AÑO 3
  { id: '02759', label: 'Metodología de la Investigación I', anio: 3, cuatrimestre: 1, correlativas: ['02761', '02762', '02700', '02702', '02703', '02704', '02705', '02706', '02707', '02850', '02851'] },
  { id: '02768', label: 'Semiótica II', anio: 3, cuatrimestre: 1, correlativas: ['02761', '02700', '02702', '02703', '02704', '02705', '02706', '02707', '02850', '02851'] },
  { id: '02769', label: 'Análisis y Producción Periodística', anio: 3, cuatrimestre: 1, correlativas: ['02761', '02765', '02700', '02702', '02703', '02704', '02705', '02706', '02707', '02850', '02851'] },
  { id: '02771', label: 'Historia de los Medios de Comunicación', anio: 3, cuatrimestre: 1, correlativas: ['02700', '02702', '02703', '02704', '02705', '02706', '02707', '02850', '02851'] },
  { id: '02854', label: 'Taller de Gráfica, Radio y Televisión V', anio: 3, cuatrimestre: 1, correlativas: ['02852', '02853', '02700', '02702', '02703', '02704', '02705', '02706', '02707', '02850', '02851'] },
  { id: '02772', label: 'Metodología de la Investigación II', anio: 3, cuatrimestre: 1, correlativas: ['02759'] },
  { id: '02773', label: 'Cultura Popular e Industria Cultural', anio: 3, cuatrimestre: 1, correlativas: ['02765', '02700', '02702', '02703', '02704', '02705', '02706', '02707', '02850', '02851'] },
  { id: '02774', label: 'Comunicación Comunitaria', anio: 3, cuatrimestre: 1, correlativas: ['02766', '02771'] },
  { id: '02855', label: 'Taller de Gráfica, Radio y Televisión VI', anio: 3, cuatrimestre: 1, correlativas: ['02854'] },
  { id: '00903', label: 'Inglés Nivel III', anio: 3, cuatrimestre: 1, correlativas: ['00902'] },

  // AÑO 4
  { id: '02775', label: 'Derecho de la Información Social', anio: 4, cuatrimestre: 1, correlativas: ['02700', '02702', '02703', '02704', '02705', '02706', '02707', '02850', '02851'] },
  { id: '02776', label: 'Principales Tendencias Estéticas y Artísticas', anio: 4, cuatrimestre: 1, correlativas: ['02773'] },
  { id: '02777', label: 'Comunicación e Imagen Institucional', anio: 4, cuatrimestre: 1, correlativas: ['02768', '02774'] },
  { id: '02778', label: 'Taller de Producción y Administración en Medios', anio: 4, cuatrimestre: 1, correlativas: ['02768', '02855'] },
  { id: '02779', label: 'Políticas y Planificación de la Comunicación', anio: 4, cuatrimestre: 1, correlativas: ['02772', '02774'] },
  { id: '02780', label: 'Taller Electivo', anio: 4, cuatrimestre: 1, correlativas: ['02855'] },
  { id: '02781', label: 'Taller de Elaboración de Trabajo Final', anio: 4, cuatrimestre: 1, correlativas: ['02769', '02776', '02777'] },
  { id: '02782', label: 'Seminario de Tópicos de Avanzada', anio: 4, cuatrimestre: 1, correlativas: ['02775', '02855'] },
  { id: '00904', label: 'Inglés Nivel IV', anio: 4, cuatrimestre: 1, correlativas: ['00903'] }
];
