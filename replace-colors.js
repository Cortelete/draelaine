const fs = require('fs');

function replaceInFile(path) {
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/text-gradient-gold/g, 'text-gradient-brand');
  content = content.replace(/btn-gold-metallic/g, 'btn-primary');
  content = content.replace(/bg-gold-/g, 'bg-brand-');
  content = content.replace(/text-gold-/g, 'text-brand-');
  content = content.replace(/border-gold-/g, 'border-brand-');
  content = content.replace(/from-gold-/g, 'from-brand-');
  content = content.replace(/via-gold-/g, 'via-brand-');
  content = content.replace(/to-gold-/g, 'to-brand-');
  content = content.replace(/fill-gold-/g, 'fill-brand-');
  fs.writeFileSync(path, content, 'utf8');
}

replaceInFile('src/components/Modals.tsx');
replaceInFile('src/components/Footer.tsx');
