import fs from 'fs';
import path from 'path';
import villaData from '../data/villas.json';

export interface Villa {
  slug: string;
  name: string;
  aboutText: string;
  images: string[];
  pdf: string | null;
  location?: string;
  type?: string;
  sizeRange?: string;
  approvals?: string;
  handOverDate?: string;
  launchDate?: string;
  category?: 'ongoing' | 'new-launch' | 'ready-to-move';
}

export function getVillas(): Villa[] {
  const aptDir = path.join(process.cwd(), 'public', 'villas_data');
  const hasDir = fs.existsSync(aptDir);
  
  let folders: string[] = [];
  if (hasDir) {
    folders = fs.readdirSync(aptDir).filter(item => {
      return fs.statSync(path.join(aptDir, item)).isDirectory();
    });
  }

  const slugCount: Record<string, number> = {};

  return villaData.map(meta => {
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
      const folderPath = path.join(aptDir, matchingFolder);
      const aboutPath = path.join(folderPath, 'ABOUT.txt');
      if (fs.existsSync(aboutPath)) {
        aboutText = fs.readFileSync(aboutPath, 'utf8');
        aboutText = aboutText.replace(/[🌟🔗📍]/g, '');
      }

      const files = fs.readdirSync(folderPath);
      images = files
        .filter(f => f.match(/\.(jpg|jpeg|png|gif|webp)$/i))
        .map(f => `/villas_data/${encodeURIComponent(matchingFolder)}/${encodeURIComponent(f)}`);
        
      const pdfFile = files.find(f => f.toLowerCase().endsWith('.pdf'));
      if (pdfFile) {
        pdf = `/villas_data/${encodeURIComponent(matchingFolder)}/${encodeURIComponent(pdfFile)}`;
      }
    }

    return {
      slug,
      name: meta.name || 'Unknown',
      aboutText,
      images,
      pdf,
      location: meta.location || 'Chennai',
      type: meta.type || 'Various',
      sizeRange: meta.size || 'Various Sizes',
      approvals: meta.approvals || 'Pending',
      handOverDate: meta.handover || 'TBD',
      launchDate: meta.launch || '',
      category: meta.category as 'ongoing' | 'new-launch' | 'ready-to-move'
    };
  });
}

export function getVillaBySlug(slug: string): Villa | undefined {
  const villas = getVillas();
  return villas.find(apt => apt.slug === slug);
}
