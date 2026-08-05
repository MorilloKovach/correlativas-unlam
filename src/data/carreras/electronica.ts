import type { Materia } from '../types';

export const electronica: Materia[] = [
  {
    id: '3681',
    label: 'Análisis Matemático I',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '3682',
    label: 'Álgebra y Geometría Analítica I',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '3683',
    label: 'Fundamentos de Química',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '3684',
    label: 'Física I',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '3685',
    label: 'Integración Tecnológica I',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '3686',
    label: 'Tecnología, Ingeniería y Sociedad',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '3687',
    label: 'Análisis Matemático II',
    anio: 1,
    cuatrimestre: 2,
    correlativas: ['3681']
  },
  {
    id: '3688',
    label: 'Álgebra y Geometría Analítica II',
    anio: 1,
    cuatrimestre: 2,
    correlativas: ['3682']
  },
  {
    id: '3689',
    label: 'Elementos de Programación',
    anio: 1,
    cuatrimestre: 2,
    correlativas: []
  },
  {
    id: '3690',
    label: 'Física II',
    anio: 1,
    cuatrimestre: 2,
    correlativas: ['3684']
  },
  {
    id: '3691',
    label: 'Sistemas de Representación',
    anio: 1,
    cuatrimestre: 2,
    correlativas: []
  },
  {
    id: '3692',
    label: 'Técnicas Digitales I',
    anio: 1,
    cuatrimestre: 2,
    correlativas: []
  },
  {
    id: '3693',
    label: 'Análisis Matemático III',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['3687']
  },
  {
    id: '3694',
    label: 'Física III',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['3690']
  },
  {
    id: '3695',
    label: 'Técnicas Digitales II',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['3692', '3689']
  },
  {
    id: '3696',
    label: 'Electrónica I',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['3688', '3687']
  },
  {
    id: '3697',
    label: 'Teoría de los Circuitos I',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['3688', '3687']
  },
  {
    id: '3698',
    label: 'Integración Tecnológica II',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['3685']
  },
  {
    id: '3699',
    label: 'Análisis Matemático IV',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['3693']
  },
  {
    id: '3700',
    label: 'Probabilidad Estadística',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['3693', '3688']
  },
  {
    id: '3701',
    label: 'Análisis de Señales I',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['3693']
  },
  {
    id: '3702',
    label: 'Electrónica II',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['3696']
  },
  {
    id: '3703',
    label: 'Teoría de Circuitos II',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['3697']
  },
  {
    id: '3704',
    label: 'Medidas Electrónicas',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['3697', '3696']
  },
  {
    id: '3705',
    label: 'Técnicas Digitales III',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['3695']
  },
  {
    id: '3706',
    label: 'Electromagnetismo',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['3699', '3694']
  },
  {
    id: '3707',
    label: 'Análisis de Señales II',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['3701']
  },
  {
    id: '3708',
    label: 'Electrónica Aplicada I',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['3702']
  },
  {
    id: '3709',
    label: 'Teoría de los Circuitos III',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['3703']
  },
  {
    id: '3710',
    label: 'Integración Tecnológica III',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['3698', '3704']
  },
  {
    id: '3711',
    label: 'Cálculo Numérico',
    anio: 3,
    cuatrimestre: 2,
    correlativas: ['3699']
  },
  {
    id: '3712',
    label: 'Técnicas Digitales IV',
    anio: 3,
    cuatrimestre: 2,
    correlativas: ['3705']
  },
  {
    id: '3713',
    label: 'Medios de Enlace',
    anio: 3,
    cuatrimestre: 2,
    correlativas: ['3706']
  },
  {
    id: '3714',
    label: 'Electrónica Aplicada II',
    anio: 3,
    cuatrimestre: 2,
    correlativas: ['3708']
  },
  {
    id: '3715',
    label: 'Teoría de Circuitos IV',
    anio: 3,
    cuatrimestre: 2,
    correlativas: ['3709']
  },
  {
    id: '3716',
    label: 'Tecnología',
    anio: 3,
    cuatrimestre: 2,
    correlativas: ['3706', '3710']
  },
  {
    id: '3717',
    label: 'Física IV',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['3699', '3694']
  },
  {
    id: '3718',
    label: 'Lenguajes Descriptivos de Hardware',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['3712']
  },
  {
    id: '3719',
    label: 'Comunicaciones I',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['3713']
  },
  {
    id: '3720',
    label: 'Control I',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['3707', '3711']
  },
  {
    id: '3721',
    label: 'Electrónica Aplicada III',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['3714']
  },
  {
    id: '3722',
    label: 'Economía',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['3686']
  },
  {
    id: '3723',
    label: 'Práctica Profesional Supervisada',
    anio: 4,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '3724',
    label: 'Responsabilidad Social Universitaria',
    anio: 4,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '3725',
    label: 'Sistemas Operativos en Tiempo Real',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['3718']
  },
  {
    id: '3726',
    label: 'Comunicaciones II',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['3719']
  },
  {
    id: '3727',
    label: 'Control II',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['3720']
  },
  {
    id: '3728',
    label: 'Electrónica Industrial',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['3721', '3720']
  },
  {
    id: '3729',
    label: 'Gestión de Proyectos',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['3710', '3722']
  },
  {
    id: '3730',
    label: 'Ejercicios de la Profesión',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['3722']
  },
  {
    id: '3731',
    label: 'Procesamiento Digital de Señales',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['3725']
  },
  {
    id: '3732',
    label: 'Comunicaciones III',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['3726']
  },
  {
    id: '3733',
    label: 'Automatización Industrial',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['3727']
  },
  {
    id: '3734',
    label: 'Electrónica de Potencia',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['3728']
  },
  {
    id: '3735',
    label: 'Integración Tecnológica IV',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['3729']
  },
  {
    id: '3736',
    label: 'Electiva I',
    anio: 5,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '3737',
    label: 'Comunicaciones Avanzadas',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['3732']
  },
  {
    id: '3738',
    label: 'Control Avanzado',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['3733']
  },
  {
    id: '3739',
    label: 'Proyecto Integrador',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['3734', '3733', '3732', '3731']
  },
  {
    id: '3740',
    label: 'Electiva II',
    anio: 5,
    cuatrimestre: 2,
    correlativas: []
  },
  {
    id: '3741',
    label: 'Electiva III',
    anio: 5,
    cuatrimestre: 2,
    correlativas: []
  },
  {
    id: '3742',
    label: 'Seguridad e Higiene y Organización Industrial',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['3730']
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
