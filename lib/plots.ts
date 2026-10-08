import fs from 'fs';
import path from 'path';
import plotData from '../data/plots.json';

export interface Plot {
  slug: string;
  name: string;
  aboutText: string;
  images: string[];
  pdf: string | null;
  location?: string;
  sizeRange?: string;
  approvals?: string;
}

export function getPlots(): Plot[] {
  const plotsDir = path.join(process.cwd(), 'public', 'plots_data');
  const hasDir = fs.existsSync(plotsDir);

  let folders: string[] = [];
  if (hasDir) {
    folders = fs.readdirSync(plotsDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
  }

  const slugCount: Record<string, number> = {};

  return plotData.map(meta => {
    let baseSlug = meta.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    if (!baseSlug) baseSlug = 'property';
    
    if (slugCount[baseSlug] === undefined) {
      slugCount[baseSlug] = 1;
    } else {
      slugCount[baseSlug]++;
      baseSlug = `${baseSlug}-${slugCount[baseSlug]}`;
    }
    const slug = baseSlug;

    let aboutText = '';
    let images: string[] = [];
    let pdf: string | null = null;
    
    const mNameClean = meta.name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const matchingFolder = folders.find(folderName => {
      const folderClean = folderName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      return folderClean.includes(mNameClean) || mNameClean.includes(folderClean);
    });

    if (matchingFolder) {
      const folderPath = path.join(plotsDir, matchingFolder);
      
      const aboutPath = path.join(folderPath, 'ABOUT.txt');
      if (fs.existsSync(aboutPath)) {
        aboutText = fs.readFileSync(aboutPath, 'utf8');
        aboutText = aboutText.replace(/[🌟🔗📍]/g, '');
      }

      const files = fs.readdirSync(folderPath);
      images = files
        .filter(f => f.match(/\.(jpg|jpeg|png|gif|webp)$/i))
        .map(img => `/plots_data/${encodeURIComponent(matchingFolder)}/${encodeURIComponent(img)}`);

      const pdfFile = files.find(f => f.toLowerCase().endsWith('.pdf'));
      if (pdfFile) {
        pdf = `/plots_data/${encodeURIComponent(matchingFolder)}/${encodeURIComponent(pdfFile)}`;
      }
    }

    return {
      slug,
      name: meta.name || 'Unknown',
      aboutText,
      images,
      pdf,
      location: meta.location || 'Contact for details',
      sizeRange: meta.size || 'Various Sizes',
      approvals: meta.approvals || 'Pending',
    };
  });
}

export function getPlotBySlug(slug: string): Plot | undefined {
  const plots = getPlots();
  return plots.find(p => p.slug === slug);
}
