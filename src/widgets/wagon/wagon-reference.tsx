'use client';
import { useGetWagons } from '@/entities/wagon/api/use-get-wagons';
import { wagonColumns } from '@/entities/wagon/ui/table/columns';

import { ReferenceDataCard } from '@/shared/components/reference-data-card';
import { ToyBrick } from 'lucide-react';
import React from 'react';

interface Props {
  className?: string;
}

const addItem = (value: boolean) => {
  alert('Тут будет открываться форма создания');
};
export const WagonReference: React.FC<Props> = () => {
  const { wagons } = useGetWagons();

  console.log(wagons);

  return (
    <ReferenceDataCard
      title='Список вагонов'
      gridTemplate={['120px', '120px', '1fr', '100px', '140px', '70px', '130px']}
      columns={wagonColumns}
      data={wagons}
      icon={<ToyBrick className='h-8 w-8 rotate-180' />}
      contentHeight={'max-h-[600px]'}
      addItem={addItem}
    />
  );
};
