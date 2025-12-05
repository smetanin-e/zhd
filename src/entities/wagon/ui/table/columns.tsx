import { Button } from '@/shared/components/ui';
import { ColumnDef } from '@tanstack/react-table';
import { X } from 'lucide-react';
import { WagonDTO } from '../../model/types';

export const wagonColumns: ColumnDef<WagonDTO>[] = [
  {
    accessorKey: 'number',
    header: 'Номер',
  },
  {
    id: 'type',
    header: 'Тип',
    accessorFn: (row) => row.type?.name ?? '-',
  },
  {
    id: 'owner',
    accessorKey: 'owner',
    header: 'Владелец',
    accessorFn: (row) => row.owner?.name ?? '-',
  },
  {
    accessorKey: 'barPackage',
    header: 'Тара с бруса (т)',
    meta: { align: 'center' },
  },
  {
    accessorKey: 'capacity',
    header: 'Грузоподъемность (т)',
    meta: { align: 'center' },
  },
  {
    accessorKey: 'volume',
    header: 'Объем (м³)',
    meta: { align: 'center' },
  },
  {
    id: 'actions',
    header: 'Действия',
    meta: { align: 'right' },
    cell: () => (
      <div className='flex justify-end'>
        <Button variant='ghost' size='icon'>
          <X className='w-4 h-4' />
        </Button>
      </div>
    ),
  },
];
