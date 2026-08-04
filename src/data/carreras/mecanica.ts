import type { Materia } from '../types';

export const mecanica: Materia[] = [
  {
    id: '1023',
    label: 'Análisis Matemático I',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '1024',
    label: 'Elementos de Programación',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '1027',
    label: 'Álgebra y Geometría Analítica I',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '1026',
    label: 'Tecnología, Ingeniería y Sociedad',
    anio: 1,
    cuatrimestre: 2,
    correlativas: []
  },
  {
    id: '1025',
    label: 'Sistemas de Representación',
    anio: 1,
    cuatrimestre: 2,
    correlativas: []
  },
  {
    id: '1028',
    label: 'Matemática Discreta',
    anio: 1,
    cuatrimestre: 2,
    correlativas: []
  },
  {
    id: '1029',
    label: 'Química General',
    anio: 1,
    cuatrimestre: 2,
    correlativas: []
  },
  {
    id: '1030',
    label: 'Fundamentos de TICs',
    anio: 1,
    cuatrimestre: 2,
    correlativas: []
  },
  {
    id: '1033',
    label: 'Análisis Matemático II',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['1023']
  },
  {
    id: '1031',
    label: 'Física I',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['1023']
  },
  {
    id: '1032',
    label: 'Álgebra y Geometría Analítica II',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['1027']
  },
  {
    id: '3016',
    label: 'Probabilidad Estadística',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['1023']
  },
  {
    id: '3017',
    label: 'Química Industrial',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['1029']
  },
  {
    id: '3018',
    label: 'Estabilidad I',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['1031']
  },
  {
    id: '3019',
    label: 'Cálculo Numérico',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['1033']
  },
  {
    id: '1035',
    label: 'Física II',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['1031']
  },
  {
    id: '3020',
    label: 'Termodinámica',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['1035', '3017']
  },
  {
    id: '3021',
    label: 'Física III',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['1035']
  },
  {
    id: '3022',
    label: 'Matemática Avanzada',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['1032', '3019']
  },
  {
    id: '3023',
    label: 'Costos Industriales',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['1023']
  },
  {
    id: '3024',
    label: 'Mecánica General',
    anio: 3,
    cuatrimestre: 2,
    correlativas: ['1031', '3022']
  },
  {
    id: '3025',
    label: 'Máquinas Térmicas',
    anio: 3,
    cuatrimestre: 2,
    correlativas: ['3020']
  },
  {
    id: '3026',
    label: 'Estabilidad II',
    anio: 3,
    cuatrimestre: 2,
    correlativas: ['3018']
  },
  {
    id: '3027',
    label: 'Organización Industrial',
    anio: 3,
    cuatrimestre: 2,
    correlativas: ['3023']
  },
  {
    id: '3028',
    label: 'Mecánica de los Fluidos',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['3020', '3022', '3024']
  },
  {
    id: '3029',
    label: 'Estabilidad III',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['3022', '3026']
  },
  {
    id: '3030',
    label: 'Metalurgia Física I',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['3017', '3021']
  },
  {
    id: '3031',
    label: 'Electrotecnia y Electrónica',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['3021']
  },
  {
    id: '3032',
    label: 'Elementos de Máquinas',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['3024', '3026']
  },
  {
    id: '3033',
    label: 'Automación I',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['3031']
  },
  {
    id: '3034',
    label: 'Trabajado Mecánico I',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['3026', '3030']
  },
  {
    id: '3035',
    label: 'Metalurgia Física II',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['3030']
  },
  {
    id: '3036',
    label: 'Trabajado Mecánico II',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['3034', '3035']
  },
  {
    id: '3037',
    label: 'Elementos de Economía',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['3023']
  },
  {
    id: '3038',
    label: 'Automación II',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['3033', '3034']
  },
  {
    id: '3039',
    label: 'Máquinas Eléctricas',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['3031']
  },
  {
    id: '3044',
    label: 'Práctica Profesional Supervisada (*)',
    anio: 5,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '3045',
    label: 'Proyecto Final (*)',
    anio: 5,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '3040',
    label: 'Metrología y Gestión de la Calidad',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['3016', '3032', '3034']
  },
  {
    id: '3041',
    label: 'Higiene y Seguridad en el Trabajo',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['3025', '3039']
  },
  {
    id: '3042',
    label: 'Instalaciones Industriales',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['3025', '3028']
  },
  {
    id: '3043',
    label: 'Legislación General',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['1026']
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
