import { prisma } from '@/shared/lib/prisma';
import { WagonType } from '@generated/client';

export const wagonTypeRepository = {
  async getWagonTypes(): Promise<WagonType[]> {
    return prisma.wagonType.findMany();
  },
};
