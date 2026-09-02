import { NextResponse } from 'next/server';
import { getVillas } from '@/lib/villas';

export async function GET() {
  const data = getVillas();
  return NextResponse.json(data);
}
