import fs from 'fs';
import path from 'path';

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

const plotMetadataList = [
  { name: 'ARIHANT RESERVE 16', location: 'ECR PATTIPULAM', size: '1200 -4200', approvals: 'DTCP RERA' },
  { name: 'JAINS ADARSH AVENUE', location: 'KUTHAMBAKKAM', size: '633-5298', approvals: 'DTCP RERA' },
  { name: 'JAINS AURA RESIDENCES', location: 'THIRUMALISAI', size: '600-2400', approvals: 'CMDA RERA' },
  { name: 'ADITYARAM AURA', location: 'KELAMBAKKAM', size: '600-3000', approvals: 'DTCP RERA' },
  { name: 'ADITYARAM HAPPINEST', location: 'THIRUPORUR', size: '900-3600', approvals: 'DTCP RERA' },
  { name: 'ADITYARAM GOLDENGATE', location: 'THAIYUR', size: '700-2400', approvals: 'DTCP RERA' },
  { name: 'ADITYARAM CROWN', location: 'PADAPPAI', size: '600-2400', approvals: 'DTCP RERA' },
  { name: 'ADITYARAM NAGAR 5', location: 'ECR AKKARAI', size: '2200-5000', approvals: 'CMDA RERA' },
  { name: 'IYRA COVE', location: 'VETTUVANKENI ECR', size: '4000-7000', approvals: 'CMDA RERA' },
  { name: 'VR FORTUNA', location: 'POONAMALLE ORR', size: '700-2400', approvals: 'CMDA RERA' },
  { name: 'VR PEARL CITY', location: 'THIRUNINDRAVUR', size: '600-2400', approvals: 'DTCP RERA' },
  { name: 'VR DAZZLE CITY', location: 'KUTHAMBAKKAM', size: '600-2000', approvals: 'DTCP RERA' },
  { name: 'VR TREASURE', location: 'KUTHAMBAKKAM', size: '600-2400', approvals: 'DTCP RERA' },
  { name: 'SAMBAHA SERENITY', location: 'THAIYUR', size: '1000-1800', approvals: 'DTCP RERA' },
  { name: 'SAMBAHA SAPPHIRE', location: 'SUNGAVARCHATRAM', size: '600-2400', approvals: 'DTCP RERA' },
  { name: 'STEPSTONE BLUE BEACH', location: 'ECR THIRUVIDANTHAI', size: '875 - 5924', approvals: 'DTCP RERA' },
  { name: 'STEPSTONE SECRET', location: 'ECR KOVALAM', size: '650-3400', approvals: 'DTCP RERA' },
  { name: 'STEPSTONE ONE AERO', location: 'SUNGAVARCHATRAM', size: '600-2662', approvals: 'DTCP RERA' },
  { name: 'STEPSTONE AERO SQUARE', location: 'SUNGAVARCHATRAM', size: '564-1200', approvals: 'DTCP RERA' },
  { name: 'STEPSTONE VISTA', location: 'MADHAVARAM', size: '1134-2316', approvals: 'CMDA RERA' },
  { name: 'SILVERSKY THE SPRINGS', location: 'MADHAVARAM', size: '775-1447', approvals: 'CMDA RERA' },
  { name: 'SAMEERA UNIVERSE', location: 'CHENGALPET', size: '600-2400', approvals: 'DTCP RERA' },
  { name: 'SAMEERA NEW VISION', location: 'VANDALUR KELAMBAKKAM ROAD', size: '430-1820', approvals: 'CMDA RERA' },
  { name: 'SAMEERA MERIDIAN', location: 'CHENGALPET', size: '600-2400', approvals: 'DTCP RERA' },
  { name: 'SAMEERA OVIYAM', location: 'SUNGAVARCHATRAM', size: '600-2400', approvals: 'DTCP RERA' },
  { name: 'SAMEERA KANCHI BIGTOWN', location: 'KANCHIPURAM', size: '1300-2400', approvals: 'DTCP RERA' },
  { name: 'SAMEERA MAHALAKSHMI NAGAR', location: 'KARANODAI RED HILLS', size: '600-3000', approvals: 'DTCP RERA' },
  { name: 'SAMEERA VAIYAVUR', location: 'VAIYAVUR KANCHIPURAM', size: '600-3000', approvals: 'DTCP RERA' },
  { name: 'MP EDEN', location: 'KALYANAKUPPAM', size: '800-2047', approvals: 'DTCP RERA' },
  { name: 'AVNI KEYSTONE ANAROCK', location: 'THIRUMALISAI', size: '539-2564', approvals: 'CMDA RERA' },
  { name: 'RAJASREE FOUNDATION ANAROCK', location: 'THAIYUR', size: '697-4095', approvals: 'DTCP RERA' },
  { name: 'DRA AVALON', location: 'SUNGAVARCHATRAM', size: '590-2400', approvals: 'DTCP RERA' },
  { name: 'DRA SECURA', location: 'POONAMALLE ORR', size: '1150-2000', approvals: 'CMDA RERA' },
  { name: 'PURVA SOUKHYAM', location: 'GUDUVANCHERY KAYARAMBEDU', size: '600-5000', approvals: 'DTCP RERA' },
  { name: 'SIS GOLDENGATE', location: 'ORAGADAM', size: '480-6000', approvals: 'DTCP RERA' },
  { name: 'SIS CAPETOWN', location: 'Nr. KOLATHUR', size: '2400-2800', approvals: 'CMDA RERA' },
  { name: 'GODREJ SUNRISE', location: 'ORAGADAM', size: '600-2400', approvals: 'DTCP RERA' },
  { name: 'ARUN EXCELLO GREEN ACRES', location: 'ORAGADAM', size: '958 -3000', approvals: 'DTCP RERA' },
  { name: 'ARUN EXCELLO TARANGINI', location: 'THIRUVALLUR', size: '800-2400', approvals: 'DTCP RERA' }
];

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

    // Match metadata
    let location = 'Contact for details';
    let sizeRange = 'Various Sizes';
    let approvals = 'Pending';
    
    const meta = plotMetadataList.find(m => {
      const mNameClean = m.name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      const folderClean = folderName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      return folderClean.includes(mNameClean) || mNameClean.includes(folderClean);
    });

    if (meta) {
      location = meta.location;
      sizeRange = meta.size;
      approvals = meta.approvals;
    }

    return {
      slug: folderName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      name: displayName,
      aboutText,
      images,
      pdf,
      location,
      sizeRange,
      approvals,
    };
  });
}

export function getPlotBySlug(slug: string): Plot | undefined {
  const plots = getPlots();
  return plots.find(p => p.slug === slug);
}
