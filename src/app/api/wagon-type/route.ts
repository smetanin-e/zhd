import { wagonTypeRepository } from '@/entities/wagon-type/repository/wagon-type-reposytory';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const wagonTypes = await wagonTypeRepository.getWagonTypes();
    return NextResponse.json(wagonTypes);
  } catch (error) {
    console.error('[API_WAGON-TYPE_GET]', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
