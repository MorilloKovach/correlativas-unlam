const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// URL de la carpeta de Google Drive proporcionada
const DRIVE_URL = 'https://drive.google.com/drive/folders/1Du25znz9DURkQG82mZ5AJdRVT3c5LfR7';

async function fetchDriveContents() {
  console.log('Iniciando Puppeteer para extraer contenidos de Drive...');
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  // Interceptar requests para acelerar la carga (opcional)
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    if (['image', 'stylesheet', 'font'].includes(req.resourceType())) {
      req.abort();
    } else {
      req.continue();
    }
  });

  console.log('Navegando a la URL...');
  await page.goto(DRIVE_URL, { waitUntil: 'networkidle2' });

  // Esperar a que rendericen las filas
  await page.waitForSelector('div[role="row"]', { timeout: 10000 }).catch(() => console.log("No se encontraron filas, tal vez el selector cambió."));

  // Extraer las carpetas principales (las materias)
  const folders = await page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll('div[role="row"]'));
    return rows.map(row => {
      const nameEl = row.querySelector('[aria-label]');
      const name = nameEl ? nameEl.getAttribute('aria-label').replace('Carpeta', '').trim() : row.innerText.split('\n')[0];
      
      let url = '';
      const link = row.querySelector('a');
      if (link) {
        url = link.href;
      }
      return { name, url };
    }).filter(item => item.name && item.url);
  });

  console.log(`Encontradas ${folders.length} carpetas/archivos.`);

  // Mapeo rudimentario: asociamos el nombre de la carpeta a un ID ficticio o lo dejamos con el nombre
  // Dado que mapear los nombres exactos a los IDs (ej. 3621) requiere cruzar con planEstudios.ts, 
  // aquí guardaremos un mapa basado en una búsqueda simple o pediremos revisión manual.
  
  // Por ahora generamos una estructura genérica para que puedas adaptarla
  const output = {};
  folders.forEach((folder, idx) => {
    // Si necesitas entrar a cada subcarpeta, habría que navegar a folder.url y repetir.
    // Por simplicidad en este script, guardamos el link principal de la materia.
    // Puedes mapear las llaves a los IDs reales de src/data/planEstudios.ts
    output[`materia_id_${idx}`] = [
      { name: "Carpeta de Drive", url: folder.url }
    ];
  });

  const outputPath = path.join(__dirname, '../src/data/driveContents.json');
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf-8');
  console.log(`¡Archivo generado en ${outputPath}!`);
  
  await browser.close();
}

fetchDriveContents().catch(console.error);
