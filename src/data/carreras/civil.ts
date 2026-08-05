import type { Materia } from '../types';

export const civil: Materia[] = [
  {
    id: '4121',
    label: 'Álgebra y Geometría Analítica I',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '4122',
    label: 'Análisis Matemático I',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '4123',
    label: 'Física I',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '4124',
    label: 'Introducción a la Ingeniería Civil',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '4125',
    label: 'Sistemas Gráficos 2D y 3D',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '4126',
    label: 'Fundamentos de Química',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '4127',
    label: 'Álgebra y Geometría Analítica II',
    anio: 1,
    cuatrimestre: 2,
    correlativas: ['4121']
  },
  {
    id: '4128',
    label: 'Análisis Matemático II',
    anio: 1,
    cuatrimestre: 2,
    correlativas: ['4122']
  },
  {
    id: '4129',
    label: 'Estática de las Estructuras I',
    anio: 1,
    cuatrimestre: 2,
    correlativas: ['4121', '4122', '4123']
  },
  {
    id: '4130',
    label: 'Geotopografía',
    anio: 1,
    cuatrimestre: 2,
    correlativas: ['4123', '4125']
  },
  {
    id: '4131',
    label: 'Innovación en Materiales de Construcción',
    anio: 1,
    cuatrimestre: 2,
    correlativas: ['4124']
  },
  {
    id: '4132',
    label: 'Análisis Matemático III',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['4128']
  },
  {
    id: '4133',
    label: 'Evaluación de Proyecto y Tasaciones',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['4122', '4124']
  },
  {
    id: '4134',
    label: 'Estática de las Estructuras II',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['4128', '4129']
  },
  {
    id: '4135',
    label: 'Física II',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['4122', '4123']
  },
  {
    id: '4136',
    label: 'Probabilidad y Estadística',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['4127', '4128']
  },
  {
    id: '4137',
    label: 'Electricidad y Magnetismo',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['4135']
  },
  {
    id: '4138',
    label: 'Cálculo Numérico',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['4127', '4132']
  },
  {
    id: '4139',
    label: 'Mecánica de los Materiales I',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['4127', '4132', '4134']
  },
  {
    id: '4140',
    label: 'Tecnología de la Construcción',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['4124', '4129', '4130', '4131']
  },
  {
    id: '4141',
    label: 'Higiene, Seguridad y Medioambiente',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['4124', '4126']
  },
  {
    id: '4142',
    label: 'Responsabilidad Social Universitaria',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['4124']
  },
  {
    id: '4143',
    label: 'Hidráulica General',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['4128', '4129', '4135']
  },
  {
    id: '4144',
    label: 'Instalaciones Termomecánicas',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['4131', '4135', '4140']
  },
  {
    id: '4145',
    label: 'Mecánica de los Materiales II',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['4139']
  },
  {
    id: '4146',
    label: 'Tecnología Avanzada del Hormigón',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['4131', '4135', '4136', '4139']
  },
  {
    id: '4147',
    label: 'Análisis Estructural Básico',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['4138', '4139']
  },
  {
    id: '4148',
    label: 'Hidráulica Aplicada',
    anio: 3,
    cuatrimestre: 2,
    correlativas: ['4143']
  },
  {
    id: '4149',
    label: 'Ingeniería Legal',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['4141', '4142']
  },
  {
    id: '4150',
    label: 'Instalaciones Eléctricas y Acústicas',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['4137']
  },
  {
    id: '4151',
    label: 'Instalaciones Sanitarias y de Gas',
    anio: 3,
    cuatrimestre: 2,
    correlativas: ['4135', '4143']
  },
  {
    id: '4152',
    label: 'Análisis Estructural Avanzado',
    anio: 3,
    cuatrimestre: 2,
    correlativas: ['4147']
  },
  {
    id: '4153',
    label: 'Organización y Conducción de Obras',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['4121', '4140', '4149']
  },
  {
    id: '4154',
    label: 'Introducción a las Estructuras de Hormigón',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['4140', '4146', '4152']
  },
  {
    id: '4155',
    label: 'Geotecnia',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['4140', '4145']
  },
  {
    id: '4156',
    label: 'Hidrología Aplicada',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['4148']
  },
  {
    id: '4157',
    label: 'Construcciones Metálicas y de Madera',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['4152']
  },
  {
    id: '4158',
    label: 'Diseño Arquitectónico, Planeamiento y Urbanismo',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['4125', '4140', '4150', '4151', '4154']
  },
  {
    id: '4159',
    label: 'Estructuras de Hormigón',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['4154']
  },
  {
    id: '4160',
    label: 'Geotecnia Aplicada',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['4155']
  },
  {
    id: '4161',
    label: 'Obras Hidráulicas',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['4156']
  },
  {
    id: '4162',
    label: 'Ingeniería en Infraestructura Vial Básica',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['4131', '4146', '4155']
  },
  {
    id: '4163',
    label: 'Práctica Profesional Supervisada',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['4149']
  },
  {
    id: '4164',
    label: 'Análisis de Cargas Especiales en Estructuras',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['4152', '4159']
  },
  {
    id: '4165',
    label: 'Anteproyecto',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['4153', '4157', '4158', '4159', '4161', '4162']
  },
  {
    id: '4166',
    label: 'Cimentaciones',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['4159', '4160']
  },
  {
    id: '4167',
    label: 'Modelización de las Construcciones Metálicas y de Madera',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['4157']
  },
  {
    id: '4168',
    label: 'Ingeniería Sanitaria',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['4161']
  },
  {
    id: '4169',
    label: 'Obras Viales',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['4162']
  },
  {
    id: '4170',
    label: 'Optativa I',
    anio: 5,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '4171',
    label: 'Optativa II',
    anio: 5,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '4172',
    label: 'Optativa III',
    anio: 5,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '4173',
    label: 'Análisis de Costos',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['4133', '4152', '4157', '4158']
  },
  {
    id: '4174',
    label: 'Proyecto Final',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['4149', '4164', '4165', '4166', '4167', '4169']
  },
  {
    id: '4175',
    label: 'Planificación y Gestión de Sistemas del Transporte',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['4169']
  },
  {
    id: '4176',
    label: 'Estructuras Especiales',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['4159', '4160']
  },
  {
    id: '4177',
    label: 'Tecnologías de las Prefabricaciones Innovadoras',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['4159', '4160']
  },
  {
    id: '4178',
    label: 'Excavaciones y Túneles',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['4159', '4160']
  },
  {
    id: '4179',
    label: 'BIM y Gestión de la Construcción',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['4158', '4169', '4161']
  },
  {
    id: '4180',
    label: 'Modelización Hidráulica',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['4158', '4169', '4161']
  },
  {
    id: '4181',
    label: 'Tránsito y Vialidad Urbana',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['4158', '4169', '4161']
  },
  {
    id: '4182',
    label: 'Infraestructura Sostenible',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['4159', '4160', '4167', '4168']
  },
  {
    id: '4183',
    label: 'Plantas Potabilizadoras y Tratamiento de Afluentes Líquidos',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['4159', '4160', '4167', '4168']
  },
  {
    id: '4184',
    label: 'Puentes',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['4159', '4160', '4167', '4168']
  },
  {
    id: '901',
    label: 'Inglés I',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '902',
    label: 'Inglés II',
    anio: 1,
    cuatrimestre: 2,
    correlativas: ['901']
  },
  {
    id: '903',
    label: 'Inglés III',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['902']
  },
  {
    id: '904',
    label: 'Inglés IV',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['903']
  },
  {
    id: '911',
    label: 'Computación I',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '912',
    label: 'Computación II',
    anio: 1,
    cuatrimestre: 2,
    correlativas: ['911']
  },
];
