import type { Departamento } from '../types';
import { informatica } from './informatica';
import { electronica } from './electronica';
import { industrial } from './industrial';
import { mecanica } from './mecanica';
import { civil } from './civil';
import { arquitectura } from './arqui';
import { abogacia } from './abogacia';
import { odontologia } from './odontologia';
import { medicina } from './medicina';
import { administracion } from './administracion';

export const departamentos: Departamento[] = [
  {
    id: "diit",
    name: "Departamento de Ingeniería e Investigaciones Tecnológicas",
    carreras: [
      {
        id: "informatica",
        name: "Ingeniería en Informática",
        planEstudios: informatica
      },
      {
        id: "electronica",
        name: "Ingeniería Electrónica",
        planEstudios: electronica
      },
      {
        id: "industrial",
        name: "Ingeniería Industrial",
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
        planEstudios: civil
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
        planEstudios: administracion
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
