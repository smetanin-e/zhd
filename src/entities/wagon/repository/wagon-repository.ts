import { prisma } from '@/shared/lib/prisma';
import { WagonDTO } from '../model/types';

export const wagonRepository = {
  async getWagons(): Promise<WagonDTO[]> {
    return prisma.wagon.findMany({
      select: {
        id: true,
        number: true,
        barPackage: true,
        capacity: true,
        volume: true,
        owner: true,
        type: true,
      },
    });
  },
};
