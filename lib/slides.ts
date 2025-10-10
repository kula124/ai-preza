import fs from 'fs';
import path from 'path';

const slidesDirectory = path.join(process.cwd(), 'content/slides');

export interface Slide {
  id: string;
  number: number;
  content: string;
}

export function getAllSlides(): Slide[] {
  const fileNames = fs.readdirSync(slidesDirectory);

  const slides = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(slidesDirectory, fileName);
      const content = fs.readFileSync(fullPath, 'utf8');

      // Extract slide number from filename (e.g., "01-title.md" -> 1)
      const numberMatch = fileName.match(/^(\d+)-/);
      const number = numberMatch ? parseInt(numberMatch[1], 10) : 0;

      return {
        id,
        number,
        content,
      };
    })
    .sort((a, b) => a.number - b.number);

  return slides;
}

export function getSlideByNumber(slideNumber: number): Slide | null {
  const slides = getAllSlides();
  return slides.find(slide => slide.number === slideNumber) || null;
}

export function getTotalSlides(): number {
  return getAllSlides().length;
}
