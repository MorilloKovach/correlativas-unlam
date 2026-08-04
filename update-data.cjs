const fs = require('fs');

const tsData = fs.readFileSync('src/data/planEstudios.ts', 'utf8');
const csvData = fs.readFileSync('/home/santi/.gemini/antigravity/brain/ba7fa1c4-7239-4543-aed7-f638d74c3c5c/.system_generated/steps/96/content.md', 'utf8');

const regex = /export const planEstudios: Materia\[\] = (\[[\s\S]*?\]);/;
const match = tsData.match(regex);
if (!match) throw new Error("Could not find array");
const plan = JSON.parse(match[1]);

const diffMap = {};
csvData.split('\n').forEach(line => {
  const parts = line.split(',');
  if (parts.length >= 10) {
    let name = parts[0].trim();
    let diff = parts[9].trim();
    if (name && diff && diff !== 'Promedio') {
      diffMap[name.toLowerCase()] = diff;
    }
  }
});

// Some manual overrides for exact matching
diffMap['introducción a los sistemas de información'] = 'Fácil';
diffMap['álgebra y geometría analítica i'] = 'Medio';
diffMap['programación estructurada básica'] = 'Medio';
diffMap['introducción a la gestión de requisitos'] = 'Medio-Fácil';
diffMap['introducción a los proyectos informáticos'] = 'Medio-Fácil';
diffMap['principios de diseño de sistemas'] = 'Medio-Fácil'; // in CSV is 'Principios de Diseño de Sistemas'
diffMap['principios de diseños de sistemas'] = 'Medio-Fácil'; // typo in JSON
diffMap['arquitectura de sitemas software'] = 'Medio-Difícil'; // default if missing
diffMap['arquitectura de sistemas software'] = 'Medio-Difícil'; // default if missing
diffMap['virtualización del hardware'] = 'Medio';
diffMap['auditoría y legislación'] = 'Fácil';
diffMap['gestión aplic. al des. de software i'] = 'Fácil';
diffMap['gestión aplicada al desarrollo de software i'] = 'Fácil';
diffMap['innovación y emprenderismo'] = 'Medio';
diffMap['inglés i'] = 'Fácil';
diffMap['inglés ii'] = 'Medio-Fácil';
diffMap['inglés iii'] = 'Medio-Fácil';
diffMap['inglés iv'] = 'Fácil';
diffMap['computación i'] = 'Fácil';
diffMap['computación ii'] = 'Fácil';
diffMap['electiva i'] = 'Medio';
diffMap['electiva ii'] = 'Medio';
diffMap['electiva iii'] = 'Medio';

plan.forEach(m => {
  let name = m.label.toLowerCase();
  let diff = diffMap[name] || 'Medio'; // default
  if (diff.includes('Suprema')) diff = 'Difícil Suprema';
  m.dificultad = diff;
});

const newInterface = `export interface Materia {
  id: string;
  label: string;
  anio: number;
  cuatrimestre: number;
  correlativas: string[];
  dificultad?: string;
}

export const planEstudios: Materia[] = ${JSON.stringify(plan, null, 2)};
`;

fs.writeFileSync('src/data/planEstudios.ts', newInterface);
console.log('Done!');
