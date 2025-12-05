import { WagonOwner, WagonType } from '@generated/client';
import { Decimal } from '@generated/internal/prismaNamespace';

export type WagonDTO = {
  id: number;
  number: string;
  barPackage: Decimal;
  capacity: Decimal;
  volume: Decimal;
  owner: WagonOwner | null;
  type: WagonType | null;
};

export type WagonOperations = {
  name: string;
  normative: number;
};
