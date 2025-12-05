import { wagonOwnerRepository } from '@/entities/wagon-owner/repository/owner-reposytory';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const wagonOwners = await wagonOwnerRepository.getOwners();
    return NextResponse.json(wagonOwners);
  } catch (error) {
    console.error('[API_WAGON-OWNER_GET]', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
