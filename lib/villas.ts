import fs from 'fs';
import path from 'path';

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

const villaMetadataList = [
  // New Launches
  { name: 'ALAMO BRISTOL', location: 'PADUR OMR', type: '3,4,5', size: '1465-3018', approvals: 'RERA', launch: 'PRELAUNCH', handover: '2028', category: 'new-launch' },
  { name: 'PACIFICA AURUM', location: 'PADUR OMR', type: '3.5,4,5', size: '1900-3700', approvals: 'RERA', launch: '', handover: 'PRELAUNCH', category: 'new-launch' },
  { name: 'GTB RISINGPALMS', location: 'VALARPURAM,POONAMALLE', type: '3', size: '1496', approvals: 'RERA', launch: 'PRELAUNCH', handover: 'PRELAUNCH', category: 'new-launch' },
  { name: 'GT RISING PALMS', location: 'VALARPURAM,POONAMALLE', type: '3', size: '1496', approvals: 'RERA', launch: 'PRELAUNCH', handover: 'PRELAUNCH', category: 'new-launch' }, // Folder name match

  // Ongoing
  { name: 'RADIANCE EDGE WOOD', location: 'THAZHAMBUR', type: '3,4', size: '2179-3300', approvals: 'RERA', launch: '', handover: '2028', category: 'ongoing' },
  { name: 'DRA INARA', location: 'NAVALUR', type: '3,4', size: '1952-3628', approvals: 'RERA', launch: '', handover: '2027', category: 'ongoing' },
  { name: 'GTB REPUBLIC OF NATURE', location: 'KOVALAM ECR', type: '3,4', size: '3078-3453', approvals: 'DTCP / RERA', launch: '', handover: '2026', category: 'ongoing' },
  { name: 'ARUN EXCELLO TOWN HOUSE', location: 'ORAGADAM', type: '3', size: '1460-1680', approvals: 'DTCP / RERA', launch: '', handover: 'RTM', category: 'ongoing' },
  { name: 'AMP CRYSTAL MOONLIGHT', location: 'MEDAVAKKAM', type: '3,4', size: '2233-33300', approvals: 'CMDA RERA', launch: '', handover: '2026', category: 'ongoing' },
  { name: 'ADITYARAM PALACE CITY', location: 'AKKARAI PANAIYUR', type: '3,4', size: '2400-4800', approvals: 'CMDA RERA', launch: '', handover: '12 MONTHS FROM REG', category: 'ongoing' },
  { name: 'NU TECH GARDEN OF GAIA', location: 'OMR ECR LINK ROAD', type: '3,4', size: '3078-3453', approvals: 'CMDA RERA', launch: '', handover: '2026', category: 'ongoing' },
  { name: 'AMARA ANANTA', location: 'PALAVAKKAM ECR', type: '4', size: '5609', approvals: 'CMDA RERA', launch: '', handover: 'RTM', category: 'ongoing' },
  { name: 'SAMEERA HAVEN CREST', location: 'VENGAMBAKKAM VANDALUR KELAMBAKKAM ROAD', type: '2,3', size: '800-1600', approvals: 'CMDA RERA', launch: '', handover: '2026', category: 'ongoing' },
  
  // Defaults for unmapped folders
  { name: 'CG FLAGSHIP', location: 'Contact for details', type: 'Various', size: 'Various Sizes', approvals: 'Pending', launch: '', handover: 'TBD', category: 'ongoing' },
  { name: 'CG MERCURY', location: 'Contact for details', type: 'Various', size: 'Various Sizes', approvals: 'Pending', launch: '', handover: 'TBD', category: 'ongoing' },
  { name: 'CG SELENIA', location: 'Contact for details', type: 'Various', size: 'Various Sizes', approvals: 'Pending', launch: '', handover: 'TBD', category: 'ongoing' },
  { name: 'GT RON VILLA', location: 'Contact for details', type: 'Various', size: 'Various Sizes', approvals: 'Pending', launch: '', handover: 'TBD', category: 'ongoing' },
];

export function getVillas(): Villa[] {
  const villasDir = path.join(process.cwd(), 'public', 'villas_data');
  if (!fs.existsSync(villasDir)) {
    return [];
  }

  const folders = fs.readdirSync(villasDir).filter(item => {
    return fs.statSync(path.join(villasDir, item)).isDirectory();
  });

  return folders.map(folderName => {
    const folderPath = path.join(villasDir, folderName);
    
    // Read ABOUT.txt if it exists
    let aboutText = '';
    const aboutPath = path.join(folderPath, 'ABOUT.txt');
    if (fs.existsSync(aboutPath)) {
      aboutText = fs.readFileSync(aboutPath, 'utf8');
      aboutText = aboutText.replace(/[🌟🔗📍]/g, '');
    }

    // Read images
    const files = fs.readdirSync(folderPath);
    const images = files
      .filter(f => f.match(/\.(jpg|jpeg|png|gif|webp)$/i))
      .map(f => `/villas_data/${encodeURIComponent(folderName)}/${encodeURIComponent(f)}`);
      
    const pdfFile = files.find(f => f.toLowerCase().endsWith('.pdf'));
    const pdf = pdfFile ? `/villas_data/${encodeURIComponent(folderName)}/${encodeURIComponent(pdfFile)}` : null;

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
      /^CG\s*-\s*/i,
      /^GT\s+/i,
      /^NU TECH\s+/i
    ];
    for (const regex of prefixes) {
      displayName = displayName.replace(regex, '');
    }
    displayName = displayName.trim();

    // Match metadata
    let location = 'Contact for details';
    let type = 'Various';
    let sizeRange = 'Various Sizes';
    let approvals = 'Pending';
    let handOverDate = 'TBD';
    let launchDate = '';
    let category: 'ongoing' | 'new-launch' | 'ready-to-move' = 'ongoing';
    
    const meta = villaMetadataList.find(m => {
      const mNameClean = m.name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      const folderClean = folderName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      return folderClean.includes(mNameClean) || mNameClean.includes(folderClean);
    });

    if (meta) {
      location = meta.location;
      type = meta.type;
      sizeRange = meta.size;
      approvals = meta.approvals;
      handOverDate = meta.handover;
      launchDate = meta.launch || '';
      category = meta.category as 'ongoing' | 'new-launch' | 'ready-to-move';
    }

    return {
      slug: folderName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      name: displayName,
      aboutText,
      images,
      pdf,
      location,
      type,
      sizeRange,
      approvals,
      handOverDate,
      launchDate,
      category
    };
  });
}

export function getVillaBySlug(slug: string): Villa | undefined {
  const villas = getVillas();
  return villas.find(villa => villa.slug === slug);
}
