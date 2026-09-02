import { NextResponse } from 'next/server';
import { getPlots } from '@/lib/plots';

export async function GET() {
  const data = getPlots();
  return NextResponse.json(data);
}
