import type { Materia } from '../types';

export const kinesiologia: Materia[] = [
  // AÑO 1
  { id: '01627', label: 'Anatomía Descriptiva y Topográfica I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '01628', label: 'Bioquímica', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '01629', label: 'Citología e Histología', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '00901', label: 'Inglés Nivel I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '00911', label: 'Computación Nivel I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '01630', label: 'Educación para la Salud', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '01631', label: 'Introducción al Pensamiento Científico', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '01632', label: 'Biofísica', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '01633', label: 'Psicosociales', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '01634', label: 'Embriología y Desarrollo', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '01635', label: 'Historia de la Kinesiología', anio: 1, cuatrimestre: 1, correlativas: [] },

  // AÑO 2
  { id: '01636', label: 'Fisiología', anio: 2, cuatrimestre: 1, correlativas: ['01627', '01628', '01629', '01634'] },
  { id: '00902', label: 'Inglés Nivel II', anio: 2, cuatrimestre: 1, correlativas: ['00901'] },
  { id: '00912', label: 'Computación Nivel II', anio: 2, cuatrimestre: 1, correlativas: ['00911'] },
  { id: '01637', label: 'Anatomía Descriptiva y Topográfica II', anio: 2, cuatrimestre: 1, correlativas: ['01627'] },
  { id: '01638', label: 'Biomecánica y Análisis del Movimiento', anio: 2, cuatrimestre: 1, correlativas: ['01627', '01632', '01637'] },
  { id: '01639', label: 'Psicología Social e Institucional', anio: 2, cuatrimestre: 1, correlativas: [] },
  { id: '01640', label: 'Epidemiología', anio: 2, cuatrimestre: 1, correlativas: [] },
  { id: '01641', label: 'Técnicas y Evaluaciones Kinésicas I', anio: 2, cuatrimestre: 1, correlativas: ['01627', '01632', '01637'] },
  { id: '01642', label: 'Atención Primaria para la Salud I', anio: 2, cuatrimestre: 1, correlativas: [] },
  { id: '01643', label: 'Kinefilaxia', anio: 2, cuatrimestre: 1, correlativas: ['01630'] },
  { id: '01644', label: 'Administración, Organización y Gestión de Servicios de Salud', anio: 2, cuatrimestre: 1, correlativas: [] },

  // AÑO 3
  { id: '01645', label: 'Diagnóstico por Imágenes', anio: 3, cuatrimestre: 1, correlativas: ['01627', '01628', '01629', '01630', '01631', '01632', '01633', '01634', '01635', '01636'] },
  { id: '01651', label: 'Atención Comunitaria I', anio: 3, cuatrimestre: 1, correlativas: ['01627', '01628', '01629', '01630', '01631', '01632', '01633', '01634', '01635', '01642'] },
  { id: '01646', label: 'Técnicas y Evaluaciones Kinésicas II', anio: 3, cuatrimestre: 1, correlativas: ['01627', '01628', '01629', '01630', '01631', '01632', '01633', '01634', '01635', '01637', '01641'] },
  { id: '01647', label: 'Kinefisiatría Pediátrica y Neonatal', anio: 3, cuatrimestre: 1, correlativas: ['01627', '01628', '01629', '01630', '01631', '01632', '01633', '01634', '01635', '01636', '01637', '01638', '01641', '01645'] },
  { id: '01648', label: 'Kinefisiatría Cardiorrespiratoria', anio: 3, cuatrimestre: 1, correlativas: ['01627', '01628', '01629', '01630', '01631', '01632', '01633', '01634', '01635', '01636', '01637', '01638', '01641', '01645'] },
  { id: '01649', label: 'Kinefisiatría Traumato Ortopédica', anio: 3, cuatrimestre: 1, correlativas: ['01627', '01628', '01629', '01630', '01631', '01632', '01633', '01634', '01635', '01636', '01637', '01638', '01641', '01645'] },
  { id: '01650', label: 'Prótesis y Ortesis', anio: 3, cuatrimestre: 1, correlativas: ['01627', '01628', '01629', '01630', '01631', '01632', '01633', '01634', '01635', '01641'] },
  { id: '01652', label: 'Psicomotricidad y Estimulación Temprana', anio: 3, cuatrimestre: 1, correlativas: ['01627', '01628', '01629', '01630', '01631', '01632', '01633', '01634', '01635', '01641', '01643'] },
  { id: '01653', label: 'Farmacología General', anio: 3, cuatrimestre: 1, correlativas: ['01627', '01628', '01629', '01630', '01631', '01632', '01633', '01634', '01635'] },
  { id: '01654', label: 'Fisioterapia I', anio: 3, cuatrimestre: 1, correlativas: ['01636', '01637', '01638', '01639', '01640', '01641', '01642', '01643', '01644', '01645', '01646'] },

  // AÑO 4
  { id: '00903', label: 'Inglés Nivel III', anio: 4, cuatrimestre: 1, correlativas: ['00902'] },
  { id: '01655', label: 'Técnicas y Evaluaciones Kinésicas III', anio: 4, cuatrimestre: 1, correlativas: ['01636', '01637', '01638', '01639', '01640', '01641', '01642', '01643', '01644', '01645', '01651'] },
  { id: '01656', label: 'Atención Comunitaria II', anio: 4, cuatrimestre: 1, correlativas: ['01636', '01637', '01638', '01639', '01640', '01641', '01642', '01643', '01644', '01645'] },
  { id: '01657', label: 'Metodología de la Investigación', anio: 4, cuatrimestre: 1, correlativas: ['01636', '01637', '01638', '01639', '01640', '01641', '01642', '01643', '01644', '01645'] },
  { id: '01658', label: 'Historia Argentina y Latinoamericana de las Ciencias de la Salud', anio: 4, cuatrimestre: 1, correlativas: ['01636', '01637', '01638', '01639', '01640', '01641'] },
  { id: '01659', label: 'Deontología', anio: 4, cuatrimestre: 1, correlativas: ['01642', '01643', '01644', '01645', '01647', '01648', '01649'] },
  { id: '01660', label: 'Intensivismo', anio: 4, cuatrimestre: 1, correlativas: ['01636', '01637', '01638', '01639', '01640', '01641', '01642', '01643', '01644', '01645', '01647', '01648', '01649'] },
  { id: '01661', label: 'Fisioterapia II', anio: 4, cuatrimestre: 1, correlativas: ['01636', '01637', '01638', '01639', '01640', '01641', '01642', '01643', '01644', '01645', '01653', '01654'] },
  { id: '01662', label: 'Kinefisiatría Gerontológica', anio: 4, cuatrimestre: 1, correlativas: ['01636', '01637', '01638', '01639', '01640', '01641', '01642', '01643', '01644', '01645', '01649', '01653', '01654'] },
  { id: '01663', label: 'Kinefisiatría Estética', anio: 4, cuatrimestre: 1, correlativas: ['01636', '01637', '01638', '01639', '01640', '01641', '01642', '01643', '01644', '01645', '01653', '01654'] },
  { id: '01664', label: 'Kinefisiatría Neurológica', anio: 4, cuatrimestre: 1, correlativas: ['01636', '01637', '01638', '01639', '01640', '01641', '01642', '01643', '01644', '01645', '01646', '01650'] },
  { id: '01665', label: 'Bioética y Ética Profesional', anio: 4, cuatrimestre: 1, correlativas: ['01636', '01637', '01638', '01639', '01640', '01641', '01642', '01643', '01644', '01645'] },

  // AÑO 5
  { id: '00904', label: 'Inglés Nivel IV', anio: 5, cuatrimestre: 1, correlativas: ['00903'] },
  { id: '01666', label: 'Kinefisiatría Deportiva', anio: 5, cuatrimestre: 1, correlativas: ['01646', '01647', '01648', '01649', '01650', '01651', '01652', '01653', '01654', '01661'] },
  { id: '01667', label: 'Rehabilitación Computacional', anio: 5, cuatrimestre: 1, correlativas: ['00904', '00911', '01646', '01647', '01648', '01649', '01650', '01651', '01652', '01653', '01654'] },
  { id: '01668', label: 'Auditoría y Kinesiología Legal', anio: 5, cuatrimestre: 1, correlativas: ['01646', '01647', '01648', '01649', '01650', '01651', '01652', '01653', '01654'] },
  { id: '01669', label: 'Kinesiología Ocupacional y Laboral', anio: 5, cuatrimestre: 1, correlativas: ['01646', '01647', '01648', '01649', '01650', '01651', '01652', '01653', '01654'] },
  { id: '01670', label: 'Ergonomía', anio: 5, cuatrimestre: 1, correlativas: ['01646', '01647', '01648', '01649', '01650', '01651', '01652', '01653', '01654'] },
  { id: '01671', label: 'Kinefisiatría en Cuidados Paliativos', anio: 5, cuatrimestre: 1, correlativas: ['01646', '01647', '01648', '01649', '01650', '01651', '01652', '01653', '01654', '01656', '01659', '01660'] },
  { id: '01672', label: 'Seminario de Integración y Práctica Profesional', anio: 5, cuatrimestre: 1, correlativas: ['01627', '01628', '01629', '01630', '01631', '01632', '01633', '01634', '01635', '01636', '01637', '01638', '01639', '01640', '01641', '01642', '01643', '01644', '01645', '01646', '01647', '01648', '01649', '01650', '01651', '01652', '01653', '01654', '01655', '01656', '01657', '01658', '01659', '01660', '01661', '01662', '01663', '01664', '01665', '01666', '01667', '01668', '01669', '01670'] }
];
