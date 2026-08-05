import type { Materia } from '../types';

export const enfermeria: Materia[] = [
  // AÑO 1
  { id: '03056', label: 'Enfermería General', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '03068', label: 'Ciencias Biológicas I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '03078', label: 'Epidemiología', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '03079', label: 'Comunicación como Herramienta Profesional', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '03064', label: 'Enfermería Comunitaria I', anio: 1, cuatrimestre: 1, correlativas: ['03056'] },
  { id: '03069', label: 'Ciencias Biológicas II', anio: 1, cuatrimestre: 1, correlativas: ['03068'] },
  { id: '03074', label: 'Sociología I', anio: 1, cuatrimestre: 1, correlativas: [] },

  // AÑO 2
  { id: '00911', label: 'Computación Nivel I', anio: 2, cuatrimestre: 1, correlativas: [] },
  { id: '03057', label: 'Enfermería en la Atención del Adulto I', anio: 2, cuatrimestre: 1, correlativas: ['03056', '03069'] },
  { id: '03070', label: 'Microbiología', anio: 2, cuatrimestre: 1, correlativas: [] },
  { id: '03071', label: 'Nutrición Aplicada a la Enfermería', anio: 2, cuatrimestre: 1, correlativas: ['03068'] },
  { id: '03072', label: 'Farmacología', anio: 2, cuatrimestre: 1, correlativas: [] },
  { id: '00912', label: 'Computación Nivel II', anio: 2, cuatrimestre: 1, correlativas: ['00911'] },
  { id: '03058', label: 'Enfermería en la Atención del Adulto II', anio: 2, cuatrimestre: 1, correlativas: ['03057'] },
  { id: '03059', label: 'Enfermería en Salud Mental', anio: 2, cuatrimestre: 1, correlativas: [] },
  { id: '03073', label: 'Antropología', anio: 2, cuatrimestre: 1, correlativas: [] },
  { id: '03075', label: 'Psicología', anio: 2, cuatrimestre: 1, correlativas: [] },

  // AÑO 3
  { id: '00901', label: 'Inglés Nivel I', anio: 3, cuatrimestre: 1, correlativas: [] },
  { id: '03060', label: 'Enfermería en Atención y Cuidados Obstétricos', anio: 3, cuatrimestre: 1, correlativas: ['03056', '03069'] },
  { id: '03062', label: 'Enfermería en la Atención del Niño y el Adolescente I', anio: 3, cuatrimestre: 1, correlativas: ['03056', '03069', '03070', '03072'] },
  { id: '03076', label: 'Filosofía', anio: 3, cuatrimestre: 1, correlativas: [] },
  { id: '03077', label: 'Marcos Éticos y Legales del Ejercicio de Enfermería', anio: 3, cuatrimestre: 1, correlativas: ['03056'] },
  { id: '03080', label: 'Electiva I', anio: 3, cuatrimestre: 1, correlativas: [] },
  { id: '03158', label: 'Electiva II', anio: 3, cuatrimestre: 1, correlativas: [] },
  { id: '00902', label: 'Inglés Nivel II', anio: 3, cuatrimestre: 1, correlativas: ['00901'] },
  { id: '03061', label: 'Enfermería en la Atención del Recién Nacido', anio: 3, cuatrimestre: 1, correlativas: ['03060'] },
  { id: '03063', label: 'Enfermería en la Atención del Niño y el Adolescente II', anio: 3, cuatrimestre: 1, correlativas: ['03062'] },
  { id: '03065', label: 'Investigación en Enfermería I', anio: 3, cuatrimestre: 1, correlativas: ['03062'] },
  { id: '03066', label: 'Introducción a la Administración de Servicios de Enfermería Comunitaria y Hospitalaria', anio: 3, cuatrimestre: 1, correlativas: ['03058', '03064'] },
  { id: '03067', label: 'Práctica Integrada I', anio: 3, cuatrimestre: 1, correlativas: ['03056', '03068', '03069', '03080', '03058', '03059', '03060', '03062', '03064', '03070', '03071', '03072', '03073', '03074', '03075', '03076', '03077', '03078', '03079', '03057'] },

  // AÑO 4
  { id: '00903', label: 'Inglés Nivel III', anio: 4, cuatrimestre: 1, correlativas: ['00902'] },
  { id: '03081', label: 'Enfermería Comunitaria II', anio: 4, cuatrimestre: 1, correlativas: ['03064'] },
  { id: '03083', label: 'Enfermería en la Atención al Paciente Crítico I', anio: 4, cuatrimestre: 1, correlativas: ['03067'] },
  { id: '03085', label: 'Investigación en la Enfermería II', anio: 4, cuatrimestre: 1, correlativas: ['03065'] },
  { id: '03097', label: 'Filosofía y Ciencia Enfermera', anio: 4, cuatrimestre: 1, correlativas: ['03056', '03076'] },
  { id: '00904', label: 'Inglés Nivel IV', anio: 4, cuatrimestre: 1, correlativas: ['00903'] },
  { id: '03082', label: 'Enfermería Comunitaria III', anio: 4, cuatrimestre: 1, correlativas: ['03081'] },
  { id: '03084', label: 'Enfermería en la Atención del Paciente Crítico II', anio: 4, cuatrimestre: 1, correlativas: ['03083'] },
  { id: '03086', label: 'Investigación en la Enfermería III', anio: 4, cuatrimestre: 1, correlativas: ['03085'] },
  { id: '03092', label: 'Seminario Optativo I', anio: 4, cuatrimestre: 1, correlativas: [] },
  { id: '03095', label: 'Sociología II', anio: 4, cuatrimestre: 1, correlativas: ['03074'] },

  // AÑO 5
  { id: '03087', label: 'Taller de Investigación en Enfermería I', anio: 5, cuatrimestre: 1, correlativas: ['03086'] },
  { id: '03090', label: 'Gestión de los Servicios de Enfermería Hospitalarios y Comunitario I', anio: 5, cuatrimestre: 1, correlativas: ['03066'] },
  { id: '03093', label: 'Seminario Optativo II', anio: 5, cuatrimestre: 1, correlativas: [] },
  { id: '03096', label: 'Deontología en Enfermería', anio: 5, cuatrimestre: 1, correlativas: ['03077'] },
  { id: '03088', label: 'Taller de Investigación en Enfermería II', anio: 5, cuatrimestre: 1, correlativas: ['03087'] },
  { id: '03089', label: 'Educación en Enfermería', anio: 5, cuatrimestre: 1, correlativas: ['03084'] },
  { id: '03091', label: 'Gestión de los Servicios de Enfermería Hospitalarios y Comunitario II', anio: 5, cuatrimestre: 1, correlativas: ['03090'] },
  { id: '03094', label: 'Práctica Integrada II', anio: 5, cuatrimestre: 1, correlativas: ['03081', '03083', '03085', '03086', '03061', '03063', '03065', '03066', '03067', '03158', '03082', '03084', '03087', '03090', '03095', '03096', '03097', '03092'] }
];
