import fs from 'fs';
import path from 'path';

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

const aptMetadataList = [
  // New Launches
  { name: 'CITY OF JOY', location: 'THIRUMAZHISAI', type: '2,3', size: '881 - 1036', approvals: 'RERA CMDA', launch: 'PRELAUNCH', handover: 'RTM /PRE - LAUNCH', category: 'new-launch' },
  { name: 'RADIANCE NOOMBAL', location: 'NOOMBAL', type: '2,2.5,3,4', size: '954 - 2127', approvals: 'UNDER PROCESS', launch: 'PRELAUNCH', handover: 'PRELAUNCH', category: 'new-launch' },
  { name: 'BRIGADE STELLARIS', location: 'VELACHERY', type: '3,4,5', size: '2033-6337', approvals: 'UNDER PROCESS', launch: 'PRELAUNCH', handover: 'PRELAUNCH', category: 'new-launch' },
  { name: 'GTB RISINGPALMS', location: 'VALARPURAM,POONAMALLE', type: '1,2', size: '551 -805', approvals: 'UNDER PROCESS', launch: 'PRELAUNCH', handover: 'TBD', category: 'new-launch' },
  { name: 'DRA RICHBURG', location: 'EAST THAMBARAM', type: '2,3,4', size: '938-1768', approvals: 'PRELAUNCH', launch: 'PRELAUNCH', handover: 'TBD', category: 'new-launch' },
  { name: 'STEPSTONE MOGAPPAIR', location: 'MOGAPPAIR', type: '3,4', size: '1600 -2200', approvals: 'PRELAUNCH', launch: 'PRELAUNCH', handover: '2028', category: 'new-launch' },
  { name: 'MP TNAGAR', location: 'T NAGAR', type: '3', size: 'Various', approvals: 'PRELAUNCH', launch: 'PRELAUNCH', handover: '2027', category: 'new-launch' },
  { name: 'MP VALASARAVAKKAM', location: 'VALASARAVAKKAM', type: '2,3', size: '1012-1715', approvals: 'PRELAUNCH', launch: 'PRELAUNCH', handover: '2028', category: 'new-launch' },
  { name: 'MP RADIAL', location: '200 RADIAL ROAD', type: '2,3', size: 'Various', approvals: 'PRELAUNCH', launch: 'PRELAUNCH', handover: '2028', category: 'new-launch' },
  { name: 'TRAVENTURE LAKSHMI', location: 'PERAMBUR', type: '3', size: '1447', approvals: 'CMDA RERA', launch: 'PRELAUNCH', handover: '2026', category: 'new-launch' },
  { name: 'TRAVENTURE MIRACLE GARDEN', location: 'PORUR', type: '3', size: '1159', approvals: 'CMDA RERA', launch: 'PRELAUNCH', handover: '2026', category: 'new-launch' },
  { name: 'TRAVENTURE THARA', location: 'SALIGRAMAM', type: '3', size: '1543-2057', approvals: 'CMDA RERA', launch: 'PRELAUNCH', handover: '2027', category: 'new-launch' },
  { name: 'TRAVENTURE DIVINE', location: 'VADAPALANI', type: '3', size: '1526 -2360', approvals: 'CMDA RERA', launch: 'PRELAUNCH', handover: '2028', category: 'new-launch' },
  { name: 'TRAVENTURE ALTIUS', location: 'ASHOK NAGAR', type: '2,3', size: '1070-1673', approvals: 'CMDA RERA', launch: 'PRELAUNCH', handover: '24 MONTHS', category: 'new-launch' },
  { name: 'TRAVENTURE PARK MANOR', location: 'VIRUGAMBAKAM', type: '3', size: '1781-1876', approvals: 'CMDA RERA', launch: 'PRELAUNCH', handover: '2027', category: 'new-launch' },
  { name: 'TRAVENTURE MISHVA', location: 'PORUR', type: '2.5', size: '1381 -1417', approvals: 'CMDA RERA', launch: 'PRELAUNCH', handover: '2027', category: 'new-launch' },
  { name: 'SIS MARINA', location: 'MADURAVOYAL', type: '3,4', size: '1500-2574', approvals: 'UNDER PROCESS', launch: 'PRE LAUNCH', handover: 'TBD', category: 'new-launch' },
  { name: 'JAINS AADHYA', location: 'KORATTUR', type: '2,3', size: '933-1489', approvals: 'CMDA RERA', launch: '', handover: '2029', category: 'new-launch' },
  { name: 'PRESTIGE PALM COURT', location: 'MADHAVARAM', type: '1,2,3', size: '650-1850', approvals: 'UNDER PROCESS', launch: '', handover: 'TBD', category: 'new-launch' },

  // Ongoing
  { name: 'PURVANKARA SOMERSET', location: 'GUINDY', type: '3,4,5 ,PENT HOUSE', size: '1894 - 3765', approvals: 'RERA', handover: 'RTM', category: 'ongoing' },
  { name: 'WINDERMERE', location: 'MEDAVAKKAM', type: '1, 2, 2.5, 3', size: '620-1490', approvals: 'RERA', handover: '2026 & 2027 ONWARDS', category: 'ongoing' },
  { name: 'PROVIDENT BAYSCAPE', location: 'KELAMBAKKAM', type: '2,3', size: '993 -1424', approvals: 'RERA', handover: '2027', category: 'ongoing' },
  { name: 'NAVINS VIJAYSHREE', location: 'ANNA NAGAR', type: '3', size: '1369', approvals: 'RERA', handover: '2028 FEB', category: 'ongoing' },
  { name: 'NAVINS BAY VIEW PRIVE', location: 'BESANT NAGAR', type: '3', size: '2115', approvals: 'RERA', handover: '2028 FEB', category: 'ongoing' },
  { name: 'NAVINS STARWOOD', location: 'MEDAVAKKAM', type: '1,2,3', size: '630 - 2140', approvals: 'RERA', handover: 'RTM', category: 'ongoing' },
  { name: 'VRX TERRACE', location: 'ECR', type: 'Studio, 1 & 2', size: '723 - 1195', approvals: 'DTCP / RERA', handover: '2027', category: 'ongoing' },
  { name: 'VRX MAGNA', location: 'THIRUMAZHISAI', type: '1.5', size: '575', approvals: 'DTCP / RERA', handover: '2027', category: 'ongoing' },
  { name: 'THE LAKES EDGE', location: 'MADHAVARAM', type: '2,2.5,3', size: '1140 - 1317', approvals: 'RERA CMDA', handover: '2027', category: 'ongoing' },
  { name: 'SPRINGTIDE', location: 'MARAIMALAI NAGAR', type: '2.5, 3', size: '1125 -1347', approvals: 'RERA DTCP', handover: '2027', category: 'ongoing' },
  { name: 'TVS SERENE SPRINGS', location: 'KELAMBAKKAM', type: '1,2', size: '976 - 1183', approvals: 'RERA DTCP', handover: '2029', category: 'ongoing' },
  { name: 'TVS UDYANA', location: 'MEDAVAKKAM', type: '2.5, 3', size: '1331 - 1665', approvals: 'RERA CMDA', handover: 'RTM / 2028', category: 'ongoing' },
  { name: 'TVS LUXOR', location: 'ANNA NAGAR', type: '3,4', size: '1842 - 2665', approvals: 'RERA', handover: '2028', category: 'ongoing' },
];

export function getApartments(): Apartment[] {
  const aptDir = path.join(process.cwd(), 'public', 'apartments_data');
  if (!fs.existsSync(aptDir)) {
    return [];
  }

  const folders = fs.readdirSync(aptDir).filter(item => {
    return fs.statSync(path.join(aptDir, item)).isDirectory();
  });

  return folders.map(folderName => {
    const folderPath = path.join(aptDir, folderName);
    
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
      .map(f => `/apartments_data/${encodeURIComponent(folderName)}/${encodeURIComponent(f)}`);
      
    const pdfFile = files.find(f => f.toLowerCase().endsWith('.pdf'));
    const pdf = pdfFile ? `/apartments_data/${encodeURIComponent(folderName)}/${encodeURIComponent(pdfFile)}` : null;

    // Clean up the display name by removing specific builder prefixes
    let displayName = folderName.replace(/_/g, ' ');
    const prefixes = [
      /^CG\s*-\s*/i,
      /^DRA\s*-\s*/i,
      /^JAINS\s+/i,
      /^MP\s+/i,
      /^NAVIN_S\s*-?\s*/i,
      /^NCC URBAN\s+/i,
      /^NU TECH\s+/i,
      /^PACIFICA\s+/i,
      /^RADIANCE\s*-\s*/i,
      /^SIDHARTH\s+/i,
      /^SILVERSKY\s+/i,
      /^SIS\s+/i,
      /^STEPSTONE\s+/i,
      /^TRAVENTURE\s+/i,
      /^TVS\s*-?\s*/i,
      /^URBANRISE\s*-?\s*/i,
      /^VRX\s*-?\s*/i,
    ];
    for (const regex of prefixes) {
      displayName = displayName.replace(regex, '');
    }
    displayName = displayName.trim();

    let location = 'Contact for details';
    let type = '2, 3';
    let sizeRange = 'Various Sizes';
    let approvals = 'Pending';
    let handOverDate = 'Contact Us';
    let launchDate = '';
    let category: 'ongoing' | 'new-launch' | 'ready-to-move' = 'ongoing';
    
    const meta = aptMetadataList.find(m => {
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

export function getApartmentBySlug(slug: string): Apartment | undefined {
  const apts = getApartments();
  return apts.find(a => a.slug === slug);
}
