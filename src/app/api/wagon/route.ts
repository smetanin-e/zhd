import { wagonRepository } from '@/entities/wagon/repository/wagon-repository';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const wagons = await wagonRepository.getWagons();
    return NextResponse.json(wagons);
  } catch (error) {
    console.error('[API_WAGON_GET]', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
