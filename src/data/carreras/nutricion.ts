import type { Materia } from '../types';

export const nutricion: Materia[] = [
  // AÑO 1
  { id: '01533', label: 'Educación para la Salud', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '01534', label: 'Introducción al Pensamiento Científico I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '01535', label: 'Biofísica', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '01536', label: 'Psicosociales', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '01537', label: 'Embriología y Desarrollo', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '01538', label: 'Nutrición del Niño y Adolescente Sano', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '01530', label: 'Anatomía Descriptiva y Topográfica I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '01531', label: 'Bioquímica', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '01532', label: 'Nutrición Normal', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '00901', label: 'Inglés Nivel I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '00911', label: 'Computación Nivel I', anio: 1, cuatrimestre: 1, correlativas: [] },

  // AÑO 2
  { id: '01541', label: 'Psicología Social e Institucional', anio: 2, cuatrimestre: 1, correlativas: ['01533', '01536', '01537'] },
  { id: '01542', label: 'Epidemiología', anio: 2, cuatrimestre: 1, correlativas: ['01534'] },
  { id: '01539', label: 'Fisiología', anio: 2, cuatrimestre: 1, correlativas: ['01531', '01532'] },
  { id: '01543', label: 'Bromatología y Tecnología de los Alimentos', anio: 2, cuatrimestre: 1, correlativas: ['01532', '01533', '01534', '01536', '01537', '01538'] },
  { id: '01544', label: 'Atención Primaria para la Salud', anio: 2, cuatrimestre: 1, correlativas: ['01541'] },
  { id: '01545', label: 'Administración, Organización y Gestión de Servicios', anio: 2, cuatrimestre: 1, correlativas: ['01530', '01531', '01535', '01537'] },
  { id: '01540', label: 'Técnicas y Manejo de Alimentos', anio: 2, cuatrimestre: 1, correlativas: ['01531', '01532', '01535'] },
  { id: '00902', label: 'Inglés Nivel II', anio: 2, cuatrimestre: 1, correlativas: ['00901'] },
  { id: '00912', label: 'Computación Nivel II', anio: 2, cuatrimestre: 1, correlativas: ['00911'] },

  // AÑO 3
  { id: '01549', label: 'Microbiología', anio: 3, cuatrimestre: 1, correlativas: ['01530', '01531', '01532', '01533', '01534', '01535', '01536', '01537', '01538', '01539', '01540', '01543'] },
  { id: '01550', label: 'Farmacología General', anio: 3, cuatrimestre: 1, correlativas: ['01530', '01531', '01532', '01533', '01534', '01535', '01536', '01537', '01538', '01539'] },
  { id: '01551', label: 'Fisiopatología y Dietoterapia del Niño y del Adolescente', anio: 3, cuatrimestre: 1, correlativas: ['01530', '01531', '01532', '01533', '01534', '01535', '01536', '01537', '01538', '01539', '01540'] },
  { id: '01552', label: 'Antropología, Cultura y Nutrición', anio: 3, cuatrimestre: 1, correlativas: ['01530', '01531', '01532', '01533', '01534', '01535'] },
  { id: '01553', label: 'Toxicología de los Alimentos', anio: 3, cuatrimestre: 1, correlativas: ['01536', '01537', '01538', '01541', '01544'] },
  { id: '01546', label: 'Técnica Dietoterápica', anio: 3, cuatrimestre: 1, correlativas: ['01530', '01531', '01532', '01533', '01534', '01535', '01536', '01537', '01538', '01540', '01543'] },
  { id: '01547', label: 'Fisiopatología y Dietoterapia del Adulto', anio: 3, cuatrimestre: 1, correlativas: ['01530', '01531', '01532', '01533', '01534', '01535', '01536', '01537', '01538', '01539', '01540', '01543'] },
  { id: '01548', label: 'Atención Comunitaria I', anio: 3, cuatrimestre: 1, correlativas: ['01530', '01531', '01532', '01533', '01534', '01535', '01536', '01537', '01538', '01539', '01540', '01543'] },

  // AÑO 4
  { id: '01555', label: 'Atención Comunitaria II', anio: 4, cuatrimestre: 1, correlativas: ['01546', '01548', '01547'] },
  { id: '01556', label: 'Metodología de la Investigación I', anio: 4, cuatrimestre: 1, correlativas: ['01546', '01548', '01547'] },
  { id: '01557', label: 'Soporte Nutricional', anio: 4, cuatrimestre: 1, correlativas: ['01545', '01548', '01546', '01547'] },
  { id: '01558', label: 'Historia Argentina y Latinoamericana de las Ciencias de la Salud', anio: 4, cuatrimestre: 1, correlativas: ['01545', '01548', '01546', '01547'] },
  { id: '01559', label: 'Deontología', anio: 4, cuatrimestre: 1, correlativas: ['01545', '01548', '01546', '01547'] },
  { id: '01560', label: 'Política y Evaluación en Nutrición', anio: 4, cuatrimestre: 1, correlativas: ['01545', '01548', '01546', '01547'] },
  { id: '01561', label: 'Economía, Comercialización y Distribución de Alimentos', anio: 4, cuatrimestre: 1, correlativas: ['01545', '01548', '01546', '01547'] },
  { id: '01562', label: 'Técnicas Pedagógicas en Nutrición', anio: 4, cuatrimestre: 1, correlativas: ['01545', '01548', '01546', '01547'] },
  { id: '01563', label: 'Nutrición y Deporte', anio: 4, cuatrimestre: 1, correlativas: ['01545', '01548', '01546', '01547'] },
  { id: '01564', label: 'Marketing, Investigación y Desarrollo de Alimentos', anio: 4, cuatrimestre: 1, correlativas: ['01545', '01548', '01546', '01547'] },
  { id: '01565', label: 'Bioética y Ética Profesional', anio: 4, cuatrimestre: 1, correlativas: ['01559'] },
  { id: '01554', label: 'Administración en Servicios de Alimentación', anio: 4, cuatrimestre: 1, correlativas: ['01545', '01548', '01546', '01547'] },
  { id: '00903', label: 'Inglés Nivel III', anio: 4, cuatrimestre: 1, correlativas: ['00902'] },

  // AÑO 5
  { id: '01566', label: 'Práctica Profesional en Servicios de Alimentación', anio: 5, cuatrimestre: 1, correlativas: ['01530', '01531', '01532', '01533', '01534', '01535', '01536', '01537', '01538', '01539', '01540', '01541', '01542', '01543', '01544', '01545', '01546', '01547', '01548', '01549', '01550'] },
  { id: '01567', label: 'Práctica Profesional en Nutrición Clínica', anio: 5, cuatrimestre: 1, correlativas: ['01530', '01531', '01532', '01533', '01534', '01535', '01536', '01537', '01538', '01539', '01540', '01541', '01542', '01543', '01544', '01545', '01546', '01547', '01548', '01549', '01550', '01551', '01552', '01553', '01554', '01555', '01556', '01557', '01558', '01559', '01560', '01561', '01562', '01563', '01564', '01565'] },
  { id: '00904', label: 'Inglés Nivel IV', anio: 5, cuatrimestre: 1, correlativas: ['00903'] }
];
