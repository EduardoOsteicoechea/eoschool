const fs = require('fs');
const files = [
  '_2026_09_18_idiomas_ciclo3_semana1_dia2_geografia-00-divisiones-territoriales.html',
  '_2026_09_18_idiomas_ciclo3_semana1_dia2_geografia-01-pais.html',
  '_2026_09_18_idiomas_ciclo3_semana1_dia2_geografia-02-estado.html',
  '_2026_09_18_idiomas_ciclo3_semana1_dia2_geografia-03-ciudad.html',
  '_2026_09_18_idiomas_ciclo3_semana1_dia2_geografia-04-municipio.html',
  '_2026_09_18_idiomas_ciclo3_semana1_dia2_geografia-05-parroquia.html',
  '_2026_09_18_idiomas_ciclo3_semana1_dia2_geografia-06-sector.html',
  '_2026_09_18_idiomas_ciclo3_semana1_dia2_geografia-venezuela-merida.html'
];
let sections = '';
const dir = 'c:/Users/eduar/Documents/work/int/elias/ciclo3/semana1/idiomas/dia2/';
files.forEach(f => {
  const content = fs.readFileSync(dir + f, 'utf8');
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    sections += '  <!-- ================== ' + f + ' ================== -->\n';
    sections += '  ' + bodyMatch[1].trim() + '\n\n';
  }
});
const combined = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Geografía — Día 2 Completo — Ciclo 3</title>
  <link rel="stylesheet" href="../../../../web_assets/styles.css">
  <script src="../../../../web_assets/print.js" defer></script>
  <script src="../../../../web_assets/map-grid.js" defer></script>
</head>
<body>
${sections}</body>
</html>`;
fs.writeFileSync(dir + '_2026_09_18_idiomas_ciclo3_semana1_dia2_geografia-completo.html', combined);
console.log('Done!');
