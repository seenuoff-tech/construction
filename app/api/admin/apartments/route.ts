import { NextResponse } from 'next/server';
import { getApartments } from '@/lib/apartments';

export async function GET() {
  const data = getApartments();
  return NextResponse.json(data);
}
