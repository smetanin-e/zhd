'use client';
import { Product } from '@/entities/product/model/types';
import { productColumns } from '@/shared/components/data-table/columns';
import { ReferenceDataCard } from '@/shared/components/reference-data-card';
import { ChartScatter } from 'lucide-react';
import React from 'react';

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
  return (
    <ReferenceDataCard
      title='Содержимое вагона'
      gridTemplate={['1fr', '150px', '150px', '100px']}
      columns={productColumns}
      data={data}
      icon={<ChartScatter className='h-8 w-8 ' />}
      contentHeight={'max-h-[600px]'}
    />
  );
};
