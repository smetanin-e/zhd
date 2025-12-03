'use client';
import { Station } from '@/entities/station/model/types';
import { stationColumns } from '@/shared/components/data-table/columns';
import { DataTable } from '@/shared/components/data-table/data-table';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui';
import { FolderInput, TrainTrack } from 'lucide-react';
import React, { useState } from 'react';

interface Props {
  className?: string;
}

const data: Station[] = [
  { name: 'Центральная' },
  { name: 'Юбилейная' },
  { name: 'Ясиноватая' },
  { name: 'Енакиево' },
  { name: 'Бардино' },
  { name: 'Центральная' },
  { name: 'Юбилейная' },
  { name: 'Ясиноватая' },
  { name: 'Енакиево' },
  { name: 'Бардино' },
  { name: 'Центральная' },
  { name: 'Юбилейная' },
  { name: 'Ясиноватая' },
  { name: 'Енакиево' },
  { name: 'Бардино' },
  { name: 'Центральная' },
  { name: 'Юбилейная' },
  { name: 'Ясиноватая' },
  { name: 'Енакиево' },
  { name: 'Бардино' },
];
export const InsideStationReference: React.FC<Props> = () => {
  const [globalFilter, setGlobalFilter] = useState('');
  return (
    <Card className='gap-1 p-0 overflow-hidden border-green-500/20'>
      <CardHeader className='pb-5 pt-4 relative shadow-sm bg-card-header'>
        <div className='flex items-center justify-between'>
          <CardTitle className='flex items-center gap-2'>
            <FolderInput className='h-8 w-8' />
            Внутренние станции
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
          columns={stationColumns(false)}
          data={data}
          globalFilter={globalFilter} // передаем состояние поиска
          onGlobalFilterChange={setGlobalFilter} // и функцию для обновления
          gridTemplate={['1fr', '100px']}
        />
      </CardContent>
    </Card>
  );
};
