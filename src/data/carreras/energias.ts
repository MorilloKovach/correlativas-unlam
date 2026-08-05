import type { Materia } from '../types';

export const energias: Materia[] = [
  // AÑO 1
  { id: '00911', label: 'Computación Nivel I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '04000', label: 'Análisis Matemático I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '04001', label: 'Química General', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '04002', label: 'Álgebra y Geometría Analítica I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '04003', label: 'Introducción a las Energías', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '04004', label: 'Fundamentos de la Transición Energética', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '00901', label: 'Inglés Nivel I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '04005', label: 'Sistemas de Representación', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '04006', label: 'Análisis Matemático II', anio: 1, cuatrimestre: 1, correlativas: ['04000'] },
  { id: '04007', label: 'Física I', anio: 1, cuatrimestre: 1, correlativas: [] },
  { id: '04008', label: 'Química Orgánica e Hidrocarburos', anio: 1, cuatrimestre: 1, correlativas: ['04001'] },
  { id: '04009', label: 'Introducción a la Eficiencia Energética', anio: 1, cuatrimestre: 1, correlativas: ['04004'] },
  { id: '04010', label: 'Introducción a las Energías Renovables', anio: 1, cuatrimestre: 1, correlativas: ['04004'] },

  // AÑO 2
  { id: '00902', label: 'Inglés Nivel II', anio: 2, cuatrimestre: 1, correlativas: ['00901'] },
  { id: '00912', label: 'Computación Nivel II', anio: 2, cuatrimestre: 1, correlativas: ['00911'] },
  { id: '04011', label: 'Física II', anio: 2, cuatrimestre: 1, correlativas: ['04007'] },
  { id: '04012', label: 'Álgebra y Geometría Analítica II', anio: 2, cuatrimestre: 1, correlativas: ['04002'] },
  { id: '04013', label: 'Análisis Matemático III', anio: 2, cuatrimestre: 1, correlativas: ['04006'] },
  { id: '04014', label: 'Laboratorio y Proyectos de Energía I', anio: 2, cuatrimestre: 1, correlativas: ['04009', '04010'] },
  { id: '04015', label: 'Introducción a la Informática', anio: 2, cuatrimestre: 1, correlativas: [] },
  { id: '00903', label: 'Inglés Nivel III', anio: 2, cuatrimestre: 1, correlativas: ['00902'] },
  { id: '04016', label: 'Física III', anio: 2, cuatrimestre: 1, correlativas: ['04011'] },
  { id: '04017', label: 'Termodinámica', anio: 2, cuatrimestre: 1, correlativas: ['04006', '04008'] },
  { id: '04018', label: 'Mecánica de Fluidos', anio: 2, cuatrimestre: 1, correlativas: ['04011'] },
  { id: '04019', label: 'Ciencia de los Materiales', anio: 2, cuatrimestre: 1, correlativas: ['04011'] },
  { id: '04020', label: 'Economía y Finanzas de la Energía', anio: 2, cuatrimestre: 1, correlativas: ['04003'] },

  // AÑO 3
  { id: '00904', label: 'Inglés Nivel IV', anio: 3, cuatrimestre: 1, correlativas: ['00903'] },
  { id: '04021', label: 'Procesos Energéticos I', anio: 3, cuatrimestre: 1, correlativas: ['04017', '04019'] },
  { id: '04022', label: 'Introducción a la Electrónica', anio: 3, cuatrimestre: 1, correlativas: ['04011', '04015'] },
  { id: '04023', label: 'Petróleo y Gas Natural', anio: 3, cuatrimestre: 1, correlativas: ['04017', '04019'] },
  { id: '04024', label: 'Energías Renovables I', anio: 3, cuatrimestre: 1, correlativas: ['04017', '04018', '04019'] },
  { id: '04025', label: 'Higiene y Seguridad', anio: 3, cuatrimestre: 1, correlativas: ['04008'] },
  { id: '04026', label: 'Marco Normativo de la Energía', anio: 3, cuatrimestre: 1, correlativas: ['04009', '04010'] },
  { id: '04027', label: 'Ecología y Desarrollo Sustentable', anio: 3, cuatrimestre: 1, correlativas: ['04020', '04025'] },
  { id: '04028', label: 'Energías Renovables II', anio: 3, cuatrimestre: 1, correlativas: ['04024'] },
  { id: '04029', label: 'Vectores Energéticos y Almacenamiento', anio: 3, cuatrimestre: 1, correlativas: ['04022', '04024'] },
  { id: '04030', label: 'Laboratorio y Proyectos de Energía II', anio: 3, cuatrimestre: 1, correlativas: ['04014', '04024'] },

  // AÑO 4
  { id: '04031', label: 'Probabilidad y Estadística', anio: 4, cuatrimestre: 1, correlativas: ['04006'] },
  { id: '04032', label: 'Instalaciones y Máquinas Eléctricas I', anio: 4, cuatrimestre: 1, correlativas: ['04013', '04016', '04021'] },
  { id: '04033', label: 'Normas y Auditorías Energéticas', anio: 4, cuatrimestre: 1, correlativas: ['04026'] },
  { id: '04034', label: 'Electrónica Aplicada', anio: 4, cuatrimestre: 1, correlativas: ['04016', '04022', '04030'] },
  { id: '04035', label: 'Laboratorio y Proyectos de Energía III', anio: 4, cuatrimestre: 1, correlativas: ['04029', '04030'] },
  { id: '04036', label: 'Procesos Energéticos II', anio: 4, cuatrimestre: 1, correlativas: ['04032', '04034'] },
  { id: '04037', label: 'Energía Hidráulica', anio: 4, cuatrimestre: 1, correlativas: ['04032'] },
  { id: '04038', label: 'Energía Nuclear', anio: 4, cuatrimestre: 1, correlativas: ['04032'] },
  { id: '04039', label: 'Modelización y Simulación Energética', anio: 4, cuatrimestre: 1, correlativas: ['04035', '04031'] },
  { id: '04040', label: 'Emprendimientos e Innovación', anio: 4, cuatrimestre: 1, correlativas: ['04027'] },
  { id: '04041', label: 'Electiva 1', anio: 4, cuatrimestre: 1, correlativas: [] },
  { id: '04042', label: 'Procesos Energéticos III', anio: 4, cuatrimestre: 1, correlativas: ['04023', '04036'] },

  // AÑO 5
  { id: '04043', label: 'Generación, Transporte y Distribución Eléctrica', anio: 5, cuatrimestre: 1, correlativas: ['04036', '04037', '04038'] },
  { id: '04044', label: 'Instalaciones y Máquinas Eléctricas II', anio: 5, cuatrimestre: 1, correlativas: ['04032'] },
  { id: '04045', label: 'Gestión de Proyectos de Energía', anio: 5, cuatrimestre: 1, correlativas: ['04039', '04040', '04042'] },
  { id: '04046', label: 'Electiva 2', anio: 5, cuatrimestre: 1, correlativas: [] },
  { id: '04047', label: 'Energías Renovables III', anio: 5, cuatrimestre: 1, correlativas: ['04028', '04036'] },
  { id: '04048', label: 'Electiva 3', anio: 5, cuatrimestre: 1, correlativas: [] },
  { id: '04049', label: 'Práctica Profesional Supervisada', anio: 5, cuatrimestre: 1, correlativas: ['04027', '04030', '04039'] },
  { id: '04051', label: 'Responsabilidad Social Universitaria', anio: 5, cuatrimestre: 1, correlativas: ['04020'] },
  { id: '04050', label: 'Proyecto Final Integrador', anio: 5, cuatrimestre: 1, correlativas: ['04045', '04043', '04040'] }
];
