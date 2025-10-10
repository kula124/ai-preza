#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, '../content/slides');
const position = parseInt(process.argv[2]);

if (!position || isNaN(position)) {
  console.error('Usage: npm run slide:insert <position>');
  console.error('Example: npm run slide:insert 6');
  process.exit(1);
}

// Get all slide files
const files = fs.readdirSync(slidesDir)
  .filter(f => f.endsWith('.md'))
  .sort();

// Shift files
for (let i = files.length - 1; i >= 0; i--) {
  const match = files[i].match(/^(\d+)-(.+)\.md$/);
  if (match) {
    const num = parseInt(match[1]);
    const name = match[2];

    if (num >= position) {
      const oldPath = path.join(slidesDir, files[i]);
      const newNum = String(num + 1).padStart(2, '0');
      const newPath = path.join(slidesDir, `${newNum}-${name}.md`);
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed: ${files[i]} → ${newNum}-${name}.md`);
    }
  }
}

// Create template for new slide
const newNum = String(position).padStart(2, '0');
const templatePath = path.join(slidesDir, `${newNum}-new-slide.md`);
const template = `# New Slide Title

## Your content here

- Bullet point 1
- Bullet point 2
`;

fs.writeFileSync(templatePath, template);
console.log(`\nCreated new slide: ${newNum}-new-slide.md`);
console.log('Edit the file and rename it as needed.');
