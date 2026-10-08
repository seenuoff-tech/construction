import fs from 'fs';
import path from 'path';
import aptData from '../data/apartments.json';

export interface Apartment {
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

export function getApartments(): Apartment[] {
  const aptDir = path.join(process.cwd(), 'public', 'apartments_data');
  const hasDir = fs.existsSync(aptDir);
  
  // Read existing folders to map images if available
  let folders: string[] = [];
  if (hasDir) {
    folders = fs.readdirSync(aptDir).filter(item => {
      return fs.statSync(path.join(aptDir, item)).isDirectory();
    });
  }

  // Ensure unique slugs
  const slugCount: Record<string, number> = {};

  return aptData.map(meta => {
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
    
    // Check if there's a matching folder by checking if folder name contains the clean name
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
        .map(f => `/apartments_data/${encodeURIComponent(matchingFolder)}/${encodeURIComponent(f)}`);
        
      const pdfFile = files.find(f => f.toLowerCase().endsWith('.pdf'));
      if (pdfFile) {
        pdf = `/apartments_data/${encodeURIComponent(matchingFolder)}/${encodeURIComponent(pdfFile)}`;
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

export function getApartmentBySlug(slug: string): Apartment | undefined {
  const apartments = getApartments();
  return apartments.find(apt => apt.slug === slug);
}
