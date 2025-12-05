'use client';
import { Cargo } from '@/entities/cargo/model/types';
import { cargoColumns } from '@/shared/components/data-table/columns';
import { ReferenceDataCard } from '@/shared/components/reference-data-card';
import { ChartScatter } from 'lucide-react';
import React from 'react';

interface Props {
  className?: string;
}

const data: Cargo[] = [
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
export const CargoReference: React.FC<Props> = () => {
  return (
    <ReferenceDataCard
      title='Содержимое вагона'
      gridTemplate={['1fr', '150px', '150px', '100px']}
      columns={cargoColumns}
      data={data}
      icon={<ChartScatter className='h-8 w-8 ' />}
      contentHeight={'max-h-[600px]'}
    />
  );
};
