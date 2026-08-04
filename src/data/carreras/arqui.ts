import type { Materia } from '../types';

export const arquitectura: Materia[] = [
  {
    id: '2952',
    label: 'Proyecto I',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '2953',
    label: 'Tecnología I',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '2954',
    label: 'Forma I',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '2955',
    label: 'Historia y Crítica I',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '2956',
    label: 'MatemÉtica Aplicada I',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '2957',
    label: 'Proyecto II',
    anio: 1,
    cuatrimestre: 2,
    correlativas: ['2952']
  },
  {
    id: '2958',
    label: 'Tecnología II',
    anio: 1,
    cuatrimestre: 2,
    correlativas: ['2953']
  },
  {
    id: '2959',
    label: 'Forma II',
    anio: 1,
    cuatrimestre: 2,
    correlativas: ['2954']
  },
  {
    id: '2960',
    label: 'Historia y Crítica II',
    anio: 1,
    cuatrimestre: 2,
    correlativas: ['2955']
  },
  {
    id: '2961',
    label: 'MatemÉtica Aplicada II',
    anio: 1,
    cuatrimestre: 2,
    correlativas: ['2956']
  },
  {
    id: '2962',
    label: 'Proyecto III',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['2957', '2959', '2953']
  },
  {
    id: '2963',
    label: 'Tecnología III',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['2958', '2956']
  },
  {
    id: '2964',
    label: 'Forma III',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['2959']
  },
  {
    id: '2966',
    label: 'Proyecto IV',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['2962', '2955', '2956']
  },
  {
    id: '2967',
    label: 'Tecnología IV',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['2963', '2961', '2952', '2954', '2955']
  },
  {
    id: '2965',
    label: 'Sistemas Informáticos Proyectuales I',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['2961', '2952', '2953', '2954', '2955']
  },
  {
    id: '2968',
    label: 'Historia y Crítica III',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['2960', '2952', '2953', '2954', '2956']
  },
  {
    id: '2970',
    label: 'Proyecto V',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['2966', '2964', '2958', '2960', '2961']
  },
  {
    id: '2971',
    label: 'Tecnología V',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['2967', '2957', '2960', '2961']
  },
  {
    id: '2969',
    label: 'Sistemas Informáticos Proyectuales II',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['2965', '2957', '2958', '2959', '2960']
  },
  {
    id: '2972',
    label: 'Historia y Crítica IV',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['2968', '2957', '2958', '2959', '2961']
  },
  {
    id: '2973',
    label: 'Proyecto VI',
    anio: 3,
    cuatrimestre: 2,
    correlativas: ['2970', '2963']
  },
  {
    id: '2974',
    label: 'Tecnología VI',
    anio: 3,
    cuatrimestre: 2,
    correlativas: ['2971', '2962', '2964']
  },
  {
    id: '2975',
    label: 'Forma IV',
    anio: 3,
    cuatrimestre: 2,
    correlativas: ['2964', '2962', '2963']
  },
  {
    id: '2977',
    label: 'Proyecto VII',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['2971', '2972', '2973']
  },
  {
    id: '2978',
    label: 'Tecnología VII',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['2970', '2972', '2974']
  },
  {
    id: '2979',
    label: 'Forma V',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['2970', '2971', '2972', '2975']
  },
  {
    id: '2980',
    label: 'Historia y Crítica V',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['2970', '2971', '2972']
  },
  {
    id: '2981',
    label: 'Proyecto VIII',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['2974', '2975', '2977']
  },
  {
    id: '2982',
    label: 'Tecnología VIII',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['2973', '2975', '2978']
  },
  {
    id: '2983',
    label: 'Forma VI',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['2973', '2974', '2979']
  },
  {
    id: '2984',
    label: 'Historia y Crítica VI',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['2973', '2974', '2975', '2980']
  },
  {
    id: '2985',
    label: 'Proyecto IX',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['2978', '2979', '2980', '2981']
  },
  {
    id: '2986',
    label: 'Urbanismo I',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['2977', '2978', '2979', '2980']
  },
  {
    id: '2987',
    label: 'Gestión I',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['2977', '2978', '2979', '2980']
  },
  {
    id: '2988',
    label: 'Práctica Profesional I',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['2977', '2978', '2979', '2980']
  },
  {
    id: '2989',
    label: 'Proyecto X',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['2981', '2982', '2983', '2984', '2985']
  },
  {
    id: '2990',
    label: 'Urbanismo II',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['2981', '2982', '2983', '2984', '2986']
  },
  {
    id: '2991',
    label: 'Gestión II',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['2981', '2982', '2983', '2984', '2987']
  },
  {
    id: '2992',
    label: 'Práctica Profesional II',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['2977', '2978', '2979', '2980']
  },
  {
    id: '2993',
    label: 'Espacio Curricular Optativo I',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['2977', '2978', '2979', '2980']
  },
  {
    id: '2994',
    label: 'Espacio Curricular Optativo II',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['2977', '2978', '2979', '2980']
  },
  {
    id: '3941',
    label: 'Desarrollo Urbano Sustentable',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['2977', '2978', '2979', '2980']
  },
  {
    id: '3942',
    label: 'Paisaje, Arquitectura y Tecnologías I',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['2977', '2978', '2979', '2980']
  },
  {
    id: '3943',
    label: 'Paisaje, Arquitectura y Tecnologías II',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['2977', '2978', '2979', '2980']
  },
  {
    id: '3944',
    label: 'Programas Urbanos Especiales',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['2977', '2978', '2979', '2980']
  },
  {
    id: '3945',
    label: 'Teoría y Crítica',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['2977', '2978', '2979', '2980']
  },
  {
    id: '2995',
    label: 'Proyecto Final de Carrera',
    anio: 6,
    cuatrimestre: 1,
    correlativas: ['2989', '2990', '2992', '2993']
  },
  {
    id: '3940',
    label: 'Introducción al BIM',
    anio: 6,
    cuatrimestre: 1,
    correlativas: []
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
