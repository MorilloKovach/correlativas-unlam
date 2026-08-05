import type { Materia } from '../types';

export const medicina: Materia[] = [
  // AÑO 1
  { id: '03242', label: 'Psicología y Relación Médico Paciente', anio: 1, cuatrimestre: 0, correlativas: [] },
  { id: '00901', label: 'Inglés Nivel I', anio: 1, cuatrimestre: 0, correlativas: [] },
  { id: '03243', label: 'Promoción Intercultural de la Salud y Ambiente', anio: 1, cuatrimestre: 0, correlativas: [] },
  { id: '03261', label: 'Integradora Básica I', anio: 1, cuatrimestre: 0, correlativas: [] },
  { id: '03262', label: 'Integradora Básica II', anio: 1, cuatrimestre: 0, correlativas: [] },
  { id: '03240', label: 'Formación del Ser Humano', anio: 1, cuatrimestre: 0, correlativas: [] },
  { id: '03241', label: 'Articulación Básico Clínica I', anio: 1, cuatrimestre: 0, correlativas: [] },

  // AÑO 2
  { id: '00902', label: 'Inglés Nivel II', anio: 2, cuatrimestre: 0, correlativas: ['00901'] },
  { id: '03247', label: 'Epidemiología e Investigación en Salud', anio: 2, cuatrimestre: 0, correlativas: ['03243'] },
  { id: '03263', label: 'Integradora Salud Pública I', anio: 2, cuatrimestre: 0, correlativas: [] },
  { id: '03264', label: 'Integradora Salud Pública II', anio: 2, cuatrimestre: 0, correlativas: [] },
  { id: '00903', label: 'Inglés Nivel III', anio: 2, cuatrimestre: 0, correlativas: ['00902'] },
  { id: '03244', label: 'Nacimiento, Crecimiento y Desarrollo', anio: 2, cuatrimestre: 0, correlativas: ['03241', '03240'] },
  { id: '03245', label: 'Articulación Básico Clínica II', anio: 2, cuatrimestre: 0, correlativas: ['03241'] },
  { id: '03246', label: 'Agentes, Mecanismos de Defensa y Nutrición', anio: 2, cuatrimestre: 0, correlativas: ['03241'] },

  // AÑO 3
  { id: '00904', label: 'Inglés Nivel IV', anio: 3, cuatrimestre: 0, correlativas: ['00903'] },
  { id: '03249', label: 'Farmacología I. Bases Fisiopatológicas del Tratamiento', anio: 3, cuatrimestre: 0, correlativas: ['03246', '03241'] },
  { id: '00911', label: 'Computación Nivel I', anio: 3, cuatrimestre: 0, correlativas: [] },
  { id: '03251', label: 'Gestión de Redes y Servicios de Salud', anio: 3, cuatrimestre: 0, correlativas: ['03247'] },
  { id: '03248', label: 'Articulación Básico Clínica III', anio: 3, cuatrimestre: 0, correlativas: ['03245'] },
  { id: '03250', label: 'Salud Integral de la Mujer', anio: 3, cuatrimestre: 0, correlativas: ['03245', '03244'] },

  // AÑO 4
  { id: '00912', label: 'Computación Nivel II', anio: 4, cuatrimestre: 0, correlativas: ['00911'] },
  { id: '03254', label: 'Farmacología II. Clínica y Terapéutica', anio: 4, cuatrimestre: 0, correlativas: ['03248', '03249'] },
  { id: '03255', label: 'Medicina General', anio: 4, cuatrimestre: 0, correlativas: ['03248'] },
  { id: '03265', label: 'Integradora Clínica I', anio: 4, cuatrimestre: 0, correlativas: ['03261', '03262', '03263', '03264'] },
  { id: '03266', label: 'Integradora Clínica II', anio: 4, cuatrimestre: 0, correlativas: ['03261', '03262', '03263', '03264'] },
  { id: '03256', label: 'Salud Mental', anio: 4, cuatrimestre: 0, correlativas: ['03249', '03242'] },
  { id: '03252', label: 'Salud del Niño, Niña y Adolescente', anio: 4, cuatrimestre: 0, correlativas: ['03248', '03244'] },
  { id: '03253', label: 'Medicina Interna y Campos Clínicos I', anio: 4, cuatrimestre: 0, correlativas: ['03248'] },

  // AÑO 5
  { id: '03257', label: 'Salud del Adulto Mayor', anio: 5, cuatrimestre: 0, correlativas: ['03253'] },
  { id: '03260', label: 'Bioética, Derechos Humanos y Legislación en Salud', anio: 5, cuatrimestre: 0, correlativas: ['03251'] },
  { id: '03267', label: 'Integradora Avanzada I', anio: 5, cuatrimestre: 0, correlativas: ['03261', '03262', '03263', '03264'] },
  { id: '03268', label: 'Integradora Avanzada II', anio: 5, cuatrimestre: 0, correlativas: ['03261', '03262', '03263', '03264'] },
  { id: '03258', label: 'Medicina Interna y Campos Clínicos II', anio: 5, cuatrimestre: 0, correlativas: ['03254', '03253'] },
  { id: '03259', label: 'Clínica Quirúrgica', anio: 5, cuatrimestre: 0, correlativas: ['03248', '03250'] },

  // AÑO 6
  { id: '03269', label: 'Práctica Final Obligatoria', anio: 6, cuatrimestre: 0, correlativas: ['03267', '03268', '03265', '03266', '03257', '03252', '03256', '03260', '03259', '03255', '03258'] }
];
