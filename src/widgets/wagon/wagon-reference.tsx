'use client';
import { columns, Wagon } from '@/shared/components/data-table/columns';
import { DataTable } from '@/shared/components/data-table/data-table';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui';
import { ToyBrick } from 'lucide-react';
import React, { useState } from 'react';

interface Props {
  className?: string;
}

const data: Wagon[] = [
  { number: '23749545', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749546', type: 'Цистерна', owner: 'Транснефть' },
  { number: '23749547', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749548', type: 'Платформа', owner: 'РЖД' },
  { number: '23749549', type: 'Цистерна', owner: 'Газпром' },
  { number: '23749550', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749551', type: 'Крытый', owner: 'РЖД' },
  { number: '23749552', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749553', type: 'Цистерна', owner: 'Транснефть' },
  { number: '23749554', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749555', type: 'Платформа', owner: 'РЖД' },
  { number: '23749556', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749557', type: 'Крытый', owner: 'РЖД' },
  { number: '23749558', type: 'Цистерна', owner: 'Газпром' },
  { number: '23749559', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749560', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749561', type: 'Платформа', owner: 'РЖД' },
  { number: '23749562', type: 'Цистерна', owner: 'Транснефть' },
  { number: '23749563', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749564', type: 'Крытый', owner: 'РЖД' },
  { number: '23749565', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749566', type: 'Цистерна', owner: 'Газпром' },
  { number: '23749567', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749568', type: 'Платформа', owner: 'РЖД' },
  { number: '23749569', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749570', type: 'Цистерна', owner: 'Транснефть' },
  { number: '23749571', type: 'Крытый', owner: 'РЖД' },
  { number: '23749572', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749573', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749574', type: 'Цистерна', owner: 'Газпром' },
];
export const WagonReference: React.FC<Props> = () => {
  const [globalFilter, setGlobalFilter] = useState('');
  return (
    <Card className='gap-1 p-0 overflow-hidden border-green-500/20'>
      <CardHeader className='pb-5 pt-4 relative shadow-sm bg-card-header'>
        <div className='flex items-center justify-between'>
          <CardTitle className='flex items-center gap-2'>
            <span className='text-4xl'>🚃</span>
            {/* <ToyBrick className='h-8 w-8 rotate-180 text-teal-600' /> */}
            Справочник вагонов
          </CardTitle>

          {/* Поиск в шапке */}
          <input
            placeholder='Поиск по номеру...'
            className='w-full max-w-xs rounded-md border px-3 py-2 text-sm'
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent className='relative h-[625px] p-0'>
        <DataTable
          columns={columns}
          data={data}
          globalFilter={globalFilter} // передаем состояние поиска
          onGlobalFilterChange={setGlobalFilter} // и функцию для обновления
          gridTemplate={['120px', '120px', '1fr', '100px']}
        />
      </CardContent>
    </Card>
  );
};
