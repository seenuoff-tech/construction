import fs from 'fs';
import path from 'path';

export interface Plot {
  slug: string;
  name: string;
  aboutText: string;
  images: string[];
  pdf: string | null;
}

export function getPlots(): Plot[] {
  const plotsDir = path.join(process.cwd(), 'public', 'plots_data');
  if (!fs.existsSync(plotsDir)) return [];

  const folders = fs.readdirSync(plotsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  return folders.map(folderName => {
    const folderPath = path.join(plotsDir, folderName);
    
    // Read ABOUT.txt
    let aboutText = '';
    const aboutPath = path.join(folderPath, 'ABOUT.txt');
    if (fs.existsSync(aboutPath)) {
      aboutText = fs.readFileSync(aboutPath, 'utf8');
      aboutText = aboutText.replace(/[🌟🔗📍]/g, '');
    }

    // Read images
    const files = fs.readdirSync(folderPath);
    const images = files
      .filter(f => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.jpeg') || f.toLowerCase().endsWith('.png'))
      .map(img => `/plots_data/${encodeURIComponent(folderName)}/${encodeURIComponent(img)}`);

    // Read PDF
    const pdfFile = files.find(f => f.toLowerCase().endsWith('.pdf'));
    const pdf = pdfFile ? `/plots_data/${encodeURIComponent(folderName)}/${encodeURIComponent(pdfFile)}` : null;

    // Clean up the display name by removing specific builder prefixes
    let displayName = folderName;
    const prefixes = [
      /^ADITYARAM\s*-?\s*/i,
      /^AVNI\s+/i,
      /^DRA\s*-\s*/i,
      /^JAINS\s+/i,
      /^MP\s+/i,
      /^PURVA\s+/i,
      /^SAMBAHA\s*-\s*/i,
      /^SAMEERA\s*-\s*/i,
      /^VR\s*-?\s*/i,
    ];
    for (const regex of prefixes) {
      displayName = displayName.replace(regex, '');
    }
    displayName = displayName.trim();

    return {
      slug: folderName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      name: displayName,
      aboutText,
      images,
      pdf,
    };
  });
}

export function getPlotBySlug(slug: string): Plot | undefined {
  const plots = getPlots();
  return plots.find(p => p.slug === slug);
}
