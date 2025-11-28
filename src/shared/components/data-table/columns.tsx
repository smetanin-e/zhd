'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/shared/components/ui/';
import { CircleX, PencilLine } from 'lucide-react';

export type Wagon = {
  number: string;
  type: string;
  owner: string;
};

export const columns: ColumnDef<Wagon>[] = [
  {
    accessorKey: 'number',
    header: 'Номер',
  },
  {
    accessorKey: 'type',
    header: 'Тип',
  },
  {
    accessorKey: 'owner',
    header: 'Владелец',
  },
  {
    id: 'actions',
    header: 'Действия',
    cell: () => (
      <div className='flex gap-2'>
        <Button variant='ghost' size='icon'>
          <PencilLine className='w-4 h-4' />
        </Button>
        <Button variant='ghost' size='icon'>
          <CircleX className='w-4 h-4' />
        </Button>
      </div>
    ),
  },
];
