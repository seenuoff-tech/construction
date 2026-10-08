import { NextRequest, NextResponse } from 'next/server';
import { getVillas } from '@/lib/villas';
import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data', 'villas.json');
const publicDataPath = path.join(process.cwd(), 'public', 'villas_data');

function readData() {
  if (fs.existsSync(dataPath)) {
    return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  }
  return [];
}

function writeData(data: any) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

export async function GET() {
  const data = getVillas();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const data = readData();
    
    const name = (formData.get('name') as string) || '';
    const newEntry = {
      name: name,
      category: (formData.get('category') as string) || 'ongoing',
      location: (formData.get('location') as string) || '',
      type: (formData.get('type') as string) || '',
      size: (formData.get('sizeRange') as string) || '',
      approvals: (formData.get('approvals') as string) || '',
      handover: (formData.get('handOverDate') as string) || '',
      launch: (formData.get('launchDate') as string) || ''
    };
    
    const aboutText = formData.get('aboutText') as string;
    const images = formData.getAll('images') as File[];
    
    if (aboutText || (images && images.length > 0)) {
      const folderName = name.replace(/[^a-zA-Z0-9]/g, '_');
      const folderPath = path.join(publicDataPath, folderName);
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }
      
      if (aboutText) {
        fs.writeFileSync(path.join(folderPath, 'ABOUT.txt'), aboutText);
      }
      
      for (let i = 0; i < images.length; i++) {
        const file = images[i];
        if (file && file.size > 0) {
          const buffer = Buffer.from(await file.arrayBuffer());
          fs.writeFileSync(path.join(folderPath, file.name), buffer);
        }
      }
    }
    
    data.unshift(newEntry);
    writeData(data);
    
    return NextResponse.json({ success: true, message: 'Added successfully' });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const formData = await req.formData();
    const data = readData();
    
    const originalSlug = formData.get('originalSlug') as string;
    if (!originalSlug) throw new Error('Missing original slug for update');
    
    const villas = getVillas();
    const targetVilla = villas.find((a: any) => a.slug === originalSlug);
    if (!targetVilla) throw new Error('Item not found');
    
    const index = data.findIndex((d: any) => d.name === targetVilla.name);
    if (index === -1) throw new Error('Item not found in data');

    const name = (formData.get('name') as string) || data[index].name;
    
    data[index] = {
      ...data[index],
      name: name,
      category: formData.get('category') as string || data[index].category,
      location: formData.get('location') as string || data[index].location,
      type: formData.get('type') as string || data[index].type,
      size: formData.get('sizeRange') as string || data[index].size,
      approvals: formData.get('approvals') as string || data[index].approvals,
      handover: formData.get('handOverDate') as string || data[index].handover,
      launch: formData.get('launchDate') as string || data[index].launch
    };
    
    const aboutText = formData.get('aboutText') as string;
    const images = formData.getAll('images') as File[];
    
    if (aboutText !== null || (images && images.length > 0)) {
      const folderName = name.replace(/[^a-zA-Z0-9]/g, '_');
      const folderPath = path.join(publicDataPath, folderName);
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }
      
      if (aboutText !== null) {
        fs.writeFileSync(path.join(folderPath, 'ABOUT.txt'), aboutText);
      }
      
      for (let i = 0; i < images.length; i++) {
        const file = images[i];
        if (file && file.size > 0) {
          const buffer = Buffer.from(await file.arrayBuffer());
          fs.writeFileSync(path.join(folderPath, file.name), buffer);
        }
      }
    }
    
    writeData(data);
    return NextResponse.json({ success: true, message: 'Updated successfully' });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('slug');
    if (!slug) throw new Error('Missing slug');
    
    const data = readData();
    const villas = getVillas();
    const targetVilla = villas.find((a: any) => a.slug === slug);
    if (!targetVilla) throw new Error('Item not found');
    
    const index = data.findIndex((d: any) => d.name === targetVilla.name);
    if (index !== -1) {
      data.splice(index, 1);
      writeData(data);
      
      const folderName = targetVilla.name.replace(/[^a-zA-Z0-9]/g, '_');
      const folderPath = path.join(publicDataPath, folderName);
      if (fs.existsSync(folderPath)) {
        fs.rmSync(folderPath, { recursive: true, force: true });
      }
    }
    
    return NextResponse.json({ success: true, message: 'Deleted successfully' });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
