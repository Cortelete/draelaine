import fs from 'fs';

function replaceInFile(path: string) {
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/ring-gold-/g, 'ring-brand-');
  content = content.replace(/bg-gold-/g, 'bg-brand-');
  content = content.replace(/border-gold-/g, 'border-brand-');
  content = content.replace(/text-gold-/g, 'text-brand-');
  fs.writeFileSync(path, content, 'utf8');
}

replaceInFile('src/components/Modals.tsx');
replaceInFile('src/components/LinkButton.tsx');
