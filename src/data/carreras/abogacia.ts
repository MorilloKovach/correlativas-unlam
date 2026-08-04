import type { Materia } from '../types';

export const abogacia: Materia[] = [
  {
    id: '02302',
    label: 'DERECHO POLTICO',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '02340',
    label: 'INTRODUCCIN AL ESTUDIO DEL DERECHO',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '02341',
    label: 'HISTORIA Y EVOLUCIN DE LAS INSTITUCIONES DEL DERECHO',
    anio: 1,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '00901',
    label: 'INGLS NIVEL I',
    anio: 1,
    cuatrimestre: 2,
    correlativas: []
  },
  {
    id: '02304',
    label: 'DERECHO CONSTITUCIONAL I',
    anio: 1,
    cuatrimestre: 2,
    correlativas: ['02340', '02302']
  },
  {
    id: '02306',
    label: 'FILOSOFA DEL DERECHO',
    anio: 1,
    cuatrimestre: 2,
    correlativas: []
  },
  {
    id: '02309',
    label: 'ECONOMA POLTICA',
    anio: 1,
    cuatrimestre: 2,
    correlativas: []
  },
  {
    id: '02342',
    label: 'DERECHO CIVIL Y COMERCIAL I (PARTE GENERAL)',
    anio: 1,
    cuatrimestre: 2,
    correlativas: ['02341', '02340']
  },
  {
    id: '00911',
    label: 'COMPUTACIN NIVEL I',
    anio: 2,
    cuatrimestre: 1,
    correlativas: []
  },
  {
    id: '02305',
    label: 'SOCIOLOGA',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['02306']
  },
  {
    id: '02314',
    label: 'DERECHO CONSTITUCIONAL II',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['02304']
  },
  {
    id: '02318',
    label: 'DERECHO ADMINISTRATIVO I',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['02304']
  },
  {
    id: '02343',
    label: 'DERECHO CIVIL Y COMERCIAL II (OBLIGACIONES CIVILES Y COMERCIALES)',
    anio: 2,
    cuatrimestre: 1,
    correlativas: ['02342']
  },
  {
    id: '00902',
    label: 'INGLS NIVEL II',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['00901']
  },
  {
    id: '02307',
    label: 'DERECHO PENAL I',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['02304']
  },
  {
    id: '02333',
    label: 'DERECHO PBLICO: PROVINCIAL Y MUNICIPAL',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['02304']
  },
  {
    id: '02344',
    label: 'DERECHO CIVIL Y COMERCIAL III (CONTRATOS CIVILES Y COMERCIALES)',
    anio: 2,
    cuatrimestre: 2,
    correlativas: ['02343']
  },
  {
    id: '00912',
    label: 'COMPUTACIN&#160; NIVEL II',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['00911']
  },
  {
    id: '02311',
    label: 'DERECHO PENAL II',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['02307']
  },
  {
    id: '02345',
    label: 'DERECHO CIVIL Y COMERCIAL IV (DERECHOS REALES Y GARANTAS)',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['02344']
  },
  {
    id: '02346',
    label: 'DERECHO EMPRESARIO I (SOCIEDADES COMERCIALES Y SEGUROS)',
    anio: 3,
    cuatrimestre: 1,
    correlativas: ['02344']
  },
  {
    id: '02316',
    label: 'DERECHO PROCESAL I',
    anio: 3,
    cuatrimestre: 2,
    correlativas: ['02314', '02311']
  },
  {
    id: '02327',
    label: 'DERECHO ADMINISTRATIVO II',
    anio: 3,
    cuatrimestre: 2,
    correlativas: ['02318']
  },
  {
    id: '02347',
    label: 'DERECHO CIVIL Y COMERCIAL V (DERECHO DE FAMILIA Y SUCESIONES)',
    anio: 3,
    cuatrimestre: 2,
    correlativas: ['02345']
  },
  {
    id: '00903',
    label: 'INGLS NIVEL III',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['00902']
  },
  {
    id: '02323',
    label: 'DERECHO PROCESAL II',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['02316', '02347']
  },
  {
    id: '02324',
    label: 'DERECHO INTERNACIONAL PUBLICO',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['02314']
  },
  {
    id: '02348',
    label: 'DERECHO DEL TRABAJO Y LA SEGURIDAD SOCIAL',
    anio: 4,
    cuatrimestre: 1,
    correlativas: ['02344']
  },
  {
    id: '00904',
    label: 'INGLS NIVEL IV',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['00903']
  },
  {
    id: '02312',
    label: 'FINANZAS Y DERECHO TRIBUTARIO',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['02309', '02323', '02343']
  },
  {
    id: '02319',
    label: 'POLTICA ECONMICA',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['02309']
  },
  {
    id: '02338',
    label: 'TALLER DE RETORICA Y ORATORIA FORENSE',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['02305']
  },
  {
    id: '02349',
    label: 'DERECHO EMPRESARIO II (TTULOS VALORES Y CONCURSOS Y QUIEBRAS)',
    anio: 4,
    cuatrimestre: 2,
    correlativas: ['02323', '02346', '02348']
  },
  {
    id: '02325',
    label: 'METODOLOGA DE LA INVESTIGACIN JURDICA',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['02306', '02347', '02349']
  },
  {
    id: '02328',
    label: 'DERECHO AMBIENTAL Y DE LOS RECURSOS NATURALES',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['02314']
  },
  {
    id: '02334',
    label: 'SEMINARIO DE RESOLUCIN ADECUADA DE CONTROVERSIAS',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['02323']
  },
  {
    id: '02335',
    label: 'PRCTICA PROFESIONAL I',
    anio: 5,
    cuatrimestre: 1,
    correlativas: ['02348', '02327', '02323']
  },
  {
    id: '02329',
    label: 'DERECHO INTERNACIONAL PRIVADO',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['02323', '02349']
  },
  {
    id: '02336',
    label: 'PRCTICA PROFESIONAL II',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['02335']
  },
  {
    id: '02337',
    label: 'SEMINARIO DE DERECHO DE LOS CONSUMIDORES',
    anio: 5,
    cuatrimestre: 2,
    correlativas: ['02323', '02327', '02346']
  },
];
