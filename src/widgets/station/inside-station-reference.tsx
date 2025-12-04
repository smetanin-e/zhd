'use client';
import { Station } from '@/entities/station/model/types';
import { stationColumns } from '@/shared/components/data-table/columns';
import { ReferenceDataCard } from '@/shared/components/reference-data-card';
import { FolderInput } from 'lucide-react';
import React from 'react';

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
  return (
    <ReferenceDataCard
      title='Внутренние станции'
      gridTemplate={['1fr', '100px']}
      columns={stationColumns(false)}
      data={data}
      icon={<FolderInput className='h-8 w-8 ' />}
      contentHeight={'max-h-[600px]'}
    />
  );
};
