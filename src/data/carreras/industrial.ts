import type { Materia } from '../types';

export const industrial: Materia[] = [
  {
    id: '4052',
    label: 'Análisis Matemático I',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '4053',
    label: 'Infraestructura Tecnológica',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '4054',
    label: 'Álgebra y Geometría Analítica I',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '4055',
    label: 'Física I',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '4056',
    label: 'Sistemas de Representación',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '4057',
    label: 'Introducción al Ejercicio Profesional',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '4058',
    label: 'Elementos de Economía',
    anio: 1,
    cuatrimestre: 2,
    correlativas: ['4052']
  },
  {
    id: '4059',
    label: 'Análisis Matemático II',
    anio: 1,
    cuatrimestre: 2,
    correlativas: ['4052']
  },
  {
    id: '4060',
    label: 'Física II',
    anio: 1,
    cuatrimestre: 2,
    correlativas: ['4055']
  },
  {
    id: '4061',
    label: 'Fundamentos de Química',
    anio: 1,
    cuatrimestre: 2,
    correlativas: []
  },
  {
    id: '4062',
    label: 'Álgebra y Geometría Analítica II',
    anio: 1,
    cuatrimestre: 2,
    correlativas: ['4054']
  },
  {
    id: '4063',
    label: 'Organización Industrial I',
    anio: 1,
    cuatrimestre: 2,
    correlativas: ['4057']
  },
  {
    id: '4064',
    label: 'Costos Industriales',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['4058', '4063']
  },
  {
    id: '4065',
    label: 'Análisis Matemático III',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['4059']
  },
  {
    id: '4066',
    label: 'Ética Profesional y Legislación',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['4057']
  },
  {
    id: '4067',
    label: 'Elementos de Programación',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['4053']
  },
  {
    id: '4068',
    label: 'Física III',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['4060']
  },
  {
    id: '4069',
    label: 'Materiales Industriales',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['4059', '4060', '4061']
  },
  {
    id: '4070',
    label: 'Tecnología de Materiales y Procesos I',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['4069']
  },
  {
    id: '4071',
    label: 'Higiene, Seguridad e Ingeniería Ambiental',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['4063', '4066']
  },
  {
    id: '4072',
    label: 'Probabilidad y Estadística',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['4062', '4065']
  },
  {
    id: '4073',
    label: 'Química Industrial',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['4061']
  },
  {
    id: '4074',
    label: 'Gestión de Operaciones I',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['4064']
  },
  {
    id: '4075',
    label: 'Electrotecnia y Máquinas Eléctricas',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['4056', '4068']
  },
  {
    id: '4076',
    label: 'Termodinámica',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['4060', '4065', '4073']
  },
  {
    id: '4077',
    label: 'Organización Industrial II',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['4063', '4074']
  },
  {
    id: '4078',
    label: 'Tecnología de Materiales y Procesos II',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['4070']
  },
  {
    id: '4079',
    label: 'Gestión de la Innovación y Emprendedorismo',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['4069&#160;', '4074']
  },
  {
    id: '4080',
    label: 'Estadística Aplicada',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['4072']
  },
  {
    id: '4081',
    label: 'Gestión de Operaciones II',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['4074']
  },
  {
    id: '4082',
    label: 'Espacio de Integración Tecnológica',
    anio: 3,
    cuatrimestre: 2,
    correlativas: ['4056', '4070', '4071', '4075', '4081']
  },
  {
    id: '4083',
    label: 'Máquinas Térmicas',
    anio: 3,
    cuatrimestre: 2,
    correlativas: ['4060', '4076']
  },
  {
    id: '4084',
    label: 'Gestión de la Calidad',
    anio: 3,
    cuatrimestre: 2,
    correlativas: ['4080', '4081']
  },
  {
    id: '4085',
    label: 'Mecánica de los Fluidos',
    anio: 3,
    cuatrimestre: 2,
    correlativas: ['4076']
  },
  {
    id: '4086',
    label: 'Investigación Operativa',
    anio: 3,
    cuatrimestre: 2,
    correlativas: ['4074', '4080']
  },
  {
    id: '4087',
    label: 'Procesos Industriales I',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['4073', '4076', '4082']
  },
  {
    id: '4088',
    label: 'Gestión Comercial',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['4058', '4077']
  },
  {
    id: '4089',
    label: 'Gestión Logística',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['4081', '4086']
  },
  {
    id: '4090',
    label: 'Finanzas de la Empresa',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['4058', '4064', '4077', '4081']
  },
  {
    id: '4091',
    label: 'Sistemas Informáticos de Gestión',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['4067', '4077']
  },
  {
    id: '4092',
    label: 'Gestión y Evaluación de Proyectos',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['4082', '4086', '4090']
  },
  {
    id: '4093',
    label: 'Elementos de Máquinas y Mecanismos',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['4056', '4078', '4083']
  },
  {
    id: '4094',
    label: 'Ecología Industrial y Desarrollo Sustentable',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['4066', '4087']
  },
  {
    id: '4095',
    label: 'Procesos Industriales II',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['4087']
  },
  {
    id: '4096',
    label: 'Industrias de Servicios',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['4084', '4091']
  },
  {
    id: '4097',
    label: 'Responsabilidad Social Universitaria',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['4082']
  },
  {
    id: '4098',
    label: 'Proyecto Final Integrador (*)',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['4081', '4082', '4088', '4092', '4095']
  },
  {
    id: '4099',
    label: 'Automatización Industrial',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['4067', '4075', '4093']
  },
  {
    id: '4106',
    label: 'Electiva I (Sistemas de Gestión y Mejora Continua)',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['4084', '4091']
  },
  {
    id: '4101',
    label: 'Instalaciones Industriales',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['4083', '4085', '4099']
  },
  {
    id: '4107',
    label: 'Electiva II (Manejo y Distribución de Materiales)',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['4089']
  },
  {
    id: '4108',
    label: 'Electiva III (Inteligencia Industrial)',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['4079', '4080', '4091']
  },
  {
    id: '4104',
    label: 'Gestión Industrial',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['4088', '4089', '4092', '4094', '4095']
  },
  {
    id: '4105',
    label: 'Práctica Profesional Supervisada',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['4082']
  },
  {
    id: '901',
    label: 'Inglés Transversal Nivel I',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '902',
    label: 'Inglés Transversal Nivel II',
    anio: 1,
    cuatrimestre: 2,
    correlativas: ['901']
  },
  {
    id: '903',
    label: 'Inglés Transversal Nivel III',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['902']
  },
  {
    id: '904',
    label: 'Inglés Transversal Nivel IV',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['903']
  },
  {
    id: '911',
    label: 'Computación Transversal Nivel I',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '912',
    label: 'Computación Transversal Nivel II',
    anio: 1,
    cuatrimestre: 2,
    correlativas: ['911']
  },
];
