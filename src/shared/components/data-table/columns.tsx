'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/shared/components/ui/';
import { X } from 'lucide-react';
import { WagonOperations } from '@/entities/wagon/model/types';
import { Station } from '@/entities/station/model/types';
import { Cargo } from '@/entities/cargo/model/types';

export const operationColumns: ColumnDef<WagonOperations>[] = [
  {
    accessorKey: 'name',
    header: 'Операция',
  },
  {
    accessorKey: 'normative',
    header: 'Норма',
  },
  {
    id: 'actions',
    header: 'Действия',
    cell: () => (
      <div className='flex gap-2'>
        <Button variant='ghost' size='icon'>
          <X className='w-4 h-4' />
        </Button>
      </div>
    ),
  },
];

export const stationColumns = (withCode: boolean): ColumnDef<Station>[] => [
  {
    accessorKey: 'name',
    header: 'Станция',
  },
  ...(withCode
    ? [
        {
          accessorKey: 'code',
          header: 'Код',
        } as ColumnDef<Station>,
      ]
    : []),
  {
    id: 'actions',
    header: 'Действия',
    cell: () => (
      <div className='flex gap-2'>
        <Button variant='ghost' size='icon'>
          <X className='w-4 h-4' />
        </Button>
      </div>
    ),
  },
];

export const cargoColumns: ColumnDef<Cargo>[] = [
  {
    accessorKey: 'name',
    header: 'Содержимое вагона',
  },
  {
    accessorKey: 'nationalCode',
    header: 'ГНГ',
  },
  {
    accessorKey: 'internationalCode',
    header: 'ЕГСНГ',
  },
  {
    id: 'actions',
    header: 'Действия',
    cell: () => (
      <div className='flex gap-2'>
        <Button variant='ghost' size='icon'>
          <X className='w-4 h-4' />
        </Button>
      </div>
    ),
  },
];
