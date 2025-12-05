import { prisma } from '@/shared/lib/prisma';
import { WagonOwner } from '@generated/client';

export const wagonOwnerRepository = {
  async getOwners(): Promise<WagonOwner[]> {
    return prisma.wagonOwner.findMany();
  },
};
