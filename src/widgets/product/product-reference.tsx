'use client';
import { Product } from '@/entities/product/model/types';
import { productColumns } from '@/shared/components/data-table/columns';
import { DataTable } from '@/shared/components/data-table/data-table';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui';
import { ChartScatter } from 'lucide-react';
import React, { useState } from 'react';

interface Props {
  className?: string;
}

const data: Product[] = [
  { name: 'Порожний', nationalCode: '123456', internationalCode: '654321' },
  { name: 'Концентрат марки', nationalCode: '123456', internationalCode: '654321' },
  { name: 'Кокс доменный', nationalCode: '123456', internationalCode: '654321' },
  { name: 'Концентрат марки', nationalCode: '123456', internationalCode: '654321' },
  { name: 'Кокс доменный', nationalCode: '123456', internationalCode: '654321' },
  { name: 'Концентрат марки', nationalCode: '123456', internationalCode: '654321' },
  { name: 'Кокс доменный', nationalCode: '123456', internationalCode: '654321' },
  { name: 'Концентрат марки', nationalCode: '123456', internationalCode: '654321' },
  { name: 'Кокс доменный', nationalCode: '123456', internationalCode: '654321' },
  { name: 'Концентрат марки', nationalCode: '123456', internationalCode: '654321' },
  { name: 'Кокс доменный', nationalCode: '123456', internationalCode: '654321' },
  { name: 'Концентрат марки', nationalCode: '123456', internationalCode: '654321' },
  { name: 'Кокс доменный', nationalCode: '123456', internationalCode: '654321' },
  { name: 'Концентрат марки', nationalCode: '123456', internationalCode: '654321' },
  { name: 'Кокс доменный', nationalCode: '123456', internationalCode: '654321' },
  { name: 'Концентрат марки', nationalCode: '123456', internationalCode: '654321' },
  { name: 'Кокс доменный', nationalCode: '123456', internationalCode: '654321' },
  { name: 'Концентрат марки', nationalCode: '123456', internationalCode: '654321' },
  { name: 'Кокс доменный', nationalCode: '123456', internationalCode: '654321' },
];
export const ProductReference: React.FC<Props> = () => {
  const [globalFilter, setGlobalFilter] = useState('');
  return (
    <Card className='gap-1 p-0 overflow-hidden border-green-500/20'>
      <CardHeader className='pb-5 pt-4 relative shadow-sm bg-card-header'>
        <div className='flex items-center justify-between'>
          <CardTitle className='flex items-center gap-2'>
            <ChartScatter className='h-8 w-8' />
            Содержимое вагона
          </CardTitle>

          {/* Поиск в шапке */}
          <input
            placeholder='Поиск станции...'
            className='w-full max-w-xs rounded-md border px-3 py-2 text-sm'
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent className='relative h-[625px] p-0'>
        <DataTable
          columns={productColumns}
          data={data}
          globalFilter={globalFilter} // передаем состояние поиска
          onGlobalFilterChange={setGlobalFilter} // и функцию для обновления
          gridTemplate={['1fr', '150px', '150px', '100px']}
        />
      </CardContent>
    </Card>
  );
};
