import type { Departamento } from '../types';
import { informatica } from './informatica';
import { electronica } from './electronica';
import { industrial } from './industrial';
import { mecanica } from './mecanica';
import { civil } from './civil';
import { energias } from './energias';
import { arquitectura } from './arqui';
import { abogacia } from './abogacia';
import { odontologia } from './odontologia';
import { medicina } from './medicina';
import { nutricion } from './nutricion';
import { enfermeria } from './enfermeria';
import { kinesiologia } from './kinesiologia';
import { laborales } from './laborales';
import { comunicacion } from './comunicacion';
import { trabajo_social } from './trabajo_social';
import { educacion_fisica } from './educacion_fisica';
import { profesorado_educacion_fisica } from './profesorado_educacion_fisica';
import { ciencia_politica } from './ciencia_politica';
import { administracion } from './administracion';
import { contador } from './contador';
import { comercio } from './comercio';
import { economia } from './economia';

export const departamentos: Departamento[] = [
  {
    id: "diit",
    name: "Departamento de Ingeniería e Investigaciones Tecnológicas",
    carreras: [
      {
        id: "informatica",
        name: "Ingeniería en Informática",
        intermediateTitle: "Técnico Universitario en Desarrollo de Software",
        planEstudios: informatica
      },
      {
        id: "electronica",
        name: "Ingeniería Electrónica",
        intermediateTitle: "Técnico Universitario en Electrónica",
        planEstudios: electronica
      },
      {
        id: "industrial",
        name: "Ingeniería Industrial",
        intermediateTitle: "Técnico Universitario en Gestión Industrial",
        planEstudios: industrial
      },
      {
        id: "mecanica",
        name: "Ingeniería Mecánica",
        planEstudios: mecanica
      },
      {
        id: "civil",
        name: "Ingeniería Civil",
        intermediateTitle: "Técnico Universitario en Construcción",
        planEstudios: civil
      },
      {
        id: "energias",
        name: "Ingeniería en Energías Renovables",
        planEstudios: energias
      }
    ]
  },
  {
    id: "arq",
    name: "Departamento de Arquitectura",
    carreras: [
      {
        id: "arquitectura",
        name: "Arquitectura",
        planEstudios: arquitectura
      }
    ]
  },
  {
    id: "dcp",
    name: "Departamento de Derecho y Ciencias Políticas",
    carreras: [
      {
        id: "abogacia",
        name: "Abogacía",
        planEstudios: abogacia
      },
      {
        id: "ciencia_politica",
        name: "Licenciatura en Ciencia Política",
        planEstudios: ciencia_politica
      }
    ]
  },
  {
    id: "odontologia_dept",
    name: "Departamento de Odontología",
    carreras: [
      {
        id: "odontologia",
        name: "Odontología",
        planEstudios: odontologia
      }
    ]
  },
  {
    id: "cs_salud",
    name: "Departamento de Ciencias de la Salud",
    carreras: [
      {
        id: "medicina",
        name: "Medicina",
        planEstudios: medicina
      },
      {
        id: "nutricion",
        name: "Licenciatura en Nutrición",
        planEstudios: nutricion
      },
      {
        id: "enfermeria",
        name: "Licenciatura en Enfermería",
        intermediateTitle: "Enfermero/a Profesional",
        planEstudios: enfermeria
      },
      {
        id: "kinesiologia",
        name: "Licenciatura en Kinesiología y Fisiatría",
        planEstudios: kinesiologia
      }
    ]
  },
  {
    id: "cs_economicas",
    name: "Departamento de Ciencias Económicas",
    carreras: [
      {
        id: "administracion",
        name: "Licenciatura en Administración",
        intermediateTitle: "Técnico Universitario en Administración",
        planEstudios: administracion
      },
      {
        id: "contador",
        name: "Contador Público",
        intermediateTitle: "Técnico Universitario en Contabilidad",
        planEstudios: contador
      },
      {
        id: "comercio",
        name: "Licenciatura en Comercio Internacional",
        intermediateTitle: "Técnico Universitario en Comercio Internacional",
        planEstudios: comercio
      },
      {
        id: "economia",
        name: "Licenciatura en Economía",
        intermediateTitle: "Analista Económico",
        planEstudios: economia
      }
    ]
  },
  {
    id: "cs_sociales",
    name: "Departamento de Humanidades y Ciencias Sociales",
    carreras: [
      {
        id: "laborales",
        name: "Licenciatura en Relaciones Laborales",
        intermediateTitle: "Técnico Universitario en Relaciones Laborales",
        planEstudios: laborales
      },
      {
        id: "comunicacion",
        name: "Licenciatura en Comunicación Social",
        intermediateTitle: "Técnico Universitario en Periodismo",
        planEstudios: comunicacion
      },
      {
        id: "trabajo_social",
        name: "Licenciatura en Trabajo Social",
        intermediateTitle: "Tecnicatura Universitaria en Servicios Sociales",
        planEstudios: trabajo_social
      },
      {
        id: "educacion_fisica",
        name: "Licenciatura en Educación Física",
        planEstudios: educacion_fisica
      },
      {
        id: "profesorado_educacion_fisica",
        name: "Profesorado en Educación Física",
        planEstudios: profesorado_educacion_fisica
      }
    ]
  }
];

export const getAllCarreras = () => {
  return departamentos.flatMap(dept => dept.carreras);
};

export const getCarreraById = (id: string) => {
  return getAllCarreras().find(c => c.id === id);
};
