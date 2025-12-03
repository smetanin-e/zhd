'use client';
import { WagonOperations } from '@/entities/wagon/model/types';
import { operationColumns } from '@/shared/components/data-table/columns';
import { DataTable } from '@/shared/components/data-table/data-table';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui';
import { RefreshCw, ToyBrick } from 'lucide-react';
import React, { useState } from 'react';

interface Props {
  className?: string;
}

const data: WagonOperations[] = [
  { name: 'Ожидание локомотива', normative: 1.7 },
  { name: 'Ожидание выгрузки', normative: 1.5 },
  { name: 'Перевеска вагона', normative: 0.03 },
  { name: 'Подача и расстановка вагона', normative: 0.04 },
  { name: 'Ожидание локомотива', normative: 1.7 },
  { name: 'Ожидание выгрузки', normative: 1.5 },
  { name: 'Перевеска вагона', normative: 0.03 },
  { name: 'Подача и расстановка вагона', normative: 0.04 },
  { name: 'Ожидание локомотива', normative: 1.7 },
  { name: 'Ожидание выгрузки', normative: 1.5 },
  { name: 'Перевеска вагона', normative: 0.03 },
  { name: 'Подача и расстановка вагона', normative: 0.04 },
  { name: 'Ожидание локомотива', normative: 1.7 },
  { name: 'Ожидание выгрузки', normative: 1.5 },
  { name: 'Перевеска вагона', normative: 0.03 },
  { name: 'Подача и расстановка вагона', normative: 0.04 },
  { name: 'Ожидание локомотива', normative: 1.7 },
  { name: 'Ожидание выгрузки', normative: 1.5 },
  { name: 'Перевеска вагона', normative: 0.03 },
  { name: 'Подача и расстановка вагона', normative: 0.04 },
  { name: 'Ожидание локомотива', normative: 1.7 },
  { name: 'Ожидание выгрузки', normative: 1.5 },
  { name: 'Перевеска вагона', normative: 0.03 },
  { name: 'Подача и расстановка вагона', normative: 0.04 },
  { name: 'Ожидание локомотива', normative: 1.7 },
  { name: 'Ожидание выгрузки', normative: 1.5 },
  { name: 'Перевеска вагона', normative: 0.03 },
  { name: 'Подача и расстановка вагона', normative: 0.04 },
  { name: 'Ожидание локомотива', normative: 1.7 },
  { name: 'Ожидание выгрузки', normative: 1.5 },
  { name: 'Перевеска вагона', normative: 0.03 },
  { name: 'Подача и расстановка вагона', normative: 0.04 },
];

export const OperationReference: React.FC<Props> = () => {
  const [globalFilter, setGlobalFilter] = useState('');
  return (
    <Card className='gap-1 p-0 overflow-hidden border-green-500/20'>
      <CardHeader className='pb-5 pt-4 relative shadow-sm bg-card-header'>
        <div className='flex items-center justify-between'>
          <CardTitle className='flex items-center gap-2'>
            <RefreshCw className='h-8 w-8' />
            Список операций
          </CardTitle>

          {/* Поиск в шапке */}
          <input
            placeholder='Поиск операции...'
            className='w-full max-w-xs rounded-md border px-3 py-2 text-sm'
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent className='relative h-[625px] p-0'>
        <DataTable
          columns={operationColumns}
          data={data}
          globalFilter={globalFilter} // передаем состояние поиска
          onGlobalFilterChange={setGlobalFilter} // и функцию для обновления
          gridTemplate={['1fr', '80px', '100px']}
        />
      </CardContent>
    </Card>
  );
};
