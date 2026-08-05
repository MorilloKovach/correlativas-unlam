import type { Materia } from '../types';

export const odontologia: Materia[] = [
  // AÑO 1
  { id: '00901', label: 'Inglés Nivel I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '04201', label: 'Metodología de la Investigación en Ciencias de la Salud', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '04202', label: 'Odontología Familiar y Comunitaria', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '04203', label: 'Materiales Dentales I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '04204', label: 'Preclínica de Rehabilitación Integral y Fisioterapia', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '04205', label: 'Optativa', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '04200', label: 'Ciencias Básicas I', anio: 1, cuatrimestre: 1, correlativas: [] },

  // AÑO 2
  { id: '00902', label: 'Inglés Nivel II', anio: 2, cuatrimestre: 1, correlativas: ['00901'] },
  { id: '04207', label: 'Cariología y Periodontología', anio: 2, cuatrimestre: 1, correlativas: ['04200'] },
  { id: '04208', label: 'Semiología y Patología de Cabeza y Cuello', anio: 2, cuatrimestre: 1, correlativas: ['04200', '04202', '04203'] },
  { id: '04209', label: 'Diagnóstico por Imágenes', anio: 2, cuatrimestre: 1, correlativas: ['04200'] },
  { id: '04210', label: 'Preclínica Quirúrgica y Anestesia', anio: 2, cuatrimestre: 1, correlativas: ['04200'] },
  { id: '04211', label: 'Anatomía Patológica', anio: 2, cuatrimestre: 1, correlativas: ['04200'] },
  { id: '04206', label: 'Ciencias Básicas II', anio: 2, cuatrimestre: 1, correlativas: ['04200'] },

  // AÑO 3
  { id: '04213', label: 'Odontología Legal, Ética y Ejercicio Profesional', anio: 3, cuatrimestre: 1, correlativas: ['04206', '04211'] },
  { id: '04214', label: 'Farmacología General y Odontológica', anio: 3, cuatrimestre: 1, correlativas: ['04206'] },
  { id: '04215', label: 'Electiva', anio: 3, cuatrimestre: 1, correlativas: [] },
  { id: '00903', label: 'Inglés Nivel III', anio: 3, cuatrimestre: 1, correlativas: ['00902'] },
  { id: '04216', label: 'Estomatología Clínica I', anio: 3, cuatrimestre: 1, correlativas: ['04207', '04211', '04213'] },
  { id: '04217', label: 'Clínica Quirúrgica y Anestesia', anio: 3, cuatrimestre: 1, correlativas: ['04209', '04210'] },
  { id: '04218', label: 'Materiales Dentales II', anio: 3, cuatrimestre: 1, correlativas: ['04203', '04208'] },
  { id: '04212', label: 'Clínica de Rehabilitación Integral I', anio: 3, cuatrimestre: 1, correlativas: ['04203', '04208'] },

  // AÑO 4
  { id: '00904', label: 'Inglés Nivel IV', anio: 4, cuatrimestre: 1, correlativas: ['00903'] },
  { id: '04220', label: 'Endodoncia', anio: 4, cuatrimestre: 1, correlativas: ['04209', '04212'] },
  { id: '04221', label: 'Estomatología Clínica II', anio: 4, cuatrimestre: 1, correlativas: ['04216'] },
  { id: '00911', label: 'Computación Nivel I', anio: 4, cuatrimestre: 1, correlativas: [] },
  { id: '04222', label: 'Periodoncia', anio: 4, cuatrimestre: 1, correlativas: ['04214', '04217'] },
  { id: '04223', label: 'Cirugía y Traumatología Bucomaxilofacial', anio: 4, cuatrimestre: 1, correlativas: ['04217'] },
  { id: '04219', label: 'Clínica de Rehabilitación Integral II', anio: 4, cuatrimestre: 1, correlativas: ['04212', '04218'] },

  // AÑO 5
  { id: '04224', label: 'Clínica de Rehabilitación Integral III', anio: 5, cuatrimestre: 1, correlativas: ['04219'] },
  { id: '04225', label: 'Ortodoncia', anio: 5, cuatrimestre: 1, correlativas: ['04206', '04208', '04209'] },
  { id: '04226', label: 'Clínica del Niño, Niña y Adolescente', anio: 5, cuatrimestre: 1, correlativas: ['04212', '04220'] },
  { id: '00912', label: 'Computación Nivel II', anio: 5, cuatrimestre: 1, correlativas: ['00911'] },
  { id: '04227', label: 'Programas Integrales de Atención para Pacientes con Discapacidad', anio: 5, cuatrimestre: 1, correlativas: ['04219'] },
  { id: '04228', label: 'Práctica Profesional Supervisada', anio: 5, cuatrimestre: 1, correlativas: ['04201', '04205', '04220', '04222', '04223', '04224', '04225', '04226', '04215'] }
];
