export interface Materia {
  id: string;
  label: string;
  anio: number;
  cuatrimestre: number;
  correlativas: string[];
  dificultad?: string;
}

export interface Carrera {
  id: string;
  name: string;
  intermediateTitle?: string;
  planEstudios: Materia[];
}

export interface Departamento {
  id: string;
  name: string;
  carreras: Carrera[];
}
