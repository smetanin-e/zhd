'use client';
import { Wagon } from '@/entities/wagon/model/types';
import { wagonColumns } from '@/shared/components/data-table/columns';
import { ReferenceDataCard } from '@/shared/components/reference-data-card';
import { ToyBrick } from 'lucide-react';
import React from 'react';

interface Props {
  className?: string;
}

export const wagonData: Wagon[] = [
  {
    number: '23749545',
    type: 'Полувагон',
    owner: 'РЖД',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  {
    number: '23749546',
    type: 'Цистерна',
    owner: 'Транснефть',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  {
    number: '23749547',
    type: 'Полувагон',
    owner: 'РЖД',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  {
    number: '23749548',
    type: 'Платформа',
    owner: 'РЖД',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  {
    number: '23749549',
    type: 'Цистерна',
    owner: 'Газпром',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  {
    number: '23749550',
    type: 'Полувагон',
    owner: 'РЖД',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  { number: '23749551', type: 'Крытый', owner: 'РЖД', barPackage: 23, capacity: 60, volume: 100 },
  {
    number: '23749552',
    type: 'Полувагон',
    owner: 'РЖД',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  {
    number: '23749553',
    type: 'Цистерна',
    owner: 'Транснефть',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  {
    number: '23749554',
    type: 'Полувагон',
    owner: 'РЖД',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  {
    number: '23749555',
    type: 'Платформа',
    owner: 'РЖД',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  {
    number: '23749556',
    type: 'Полувагон',
    owner: 'РЖД',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  { number: '23749557', type: 'Крытый', owner: 'РЖД', barPackage: 23, capacity: 60, volume: 100 },
  {
    number: '23749558',
    type: 'Цистерна',
    owner: 'Газпром',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  {
    number: '23749559',
    type: 'Полувагон',
    owner: 'РЖД',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  {
    number: '23749560',
    type: 'Полувагон',
    owner: 'РЖД',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  {
    number: '23749561',
    type: 'Платформа',
    owner: 'РЖД',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  {
    number: '23749562',
    type: 'Цистерна',
    owner: 'Транснефть',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  {
    number: '23749563',
    type: 'Полувагон',
    owner: 'РЖД',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  { number: '23749564', type: 'Крытый', owner: 'РЖД', barPackage: 23, capacity: 60, volume: 100 },
  {
    number: '23749565',
    type: 'Полувагон',
    owner: 'РЖД',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  {
    number: '23749566',
    type: 'Цистерна',
    owner: 'Газпром',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  {
    number: '23749567',
    type: 'Полувагон',
    owner: 'РЖД',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  {
    number: '23749568',
    type: 'Платформа',
    owner: 'РЖД',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  {
    number: '23749569',
    type: 'Полувагон',
    owner: 'РЖД',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  {
    number: '23749570',
    type: 'Цистерна',
    owner: 'Транснефть',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  { number: '23749571', type: 'Крытый', owner: 'РЖД', barPackage: 23, capacity: 60, volume: 100 },
  {
    number: '23749572',
    type: 'Полувагон',
    owner: 'РЖД',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  {
    number: '23749573',
    type: 'Полувагон',
    owner: 'РЖД',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
  {
    number: '23749574',
    type: 'Цистерна',
    owner: 'Газпром',
    barPackage: 23,
    capacity: 60,
    volume: 100,
  },
];
export const WagonReference: React.FC<Props> = () => {
  return (
    <ReferenceDataCard
      title='Список вагонов'
      gridTemplate={['120px', '120px', '1fr', '100px', '140px', '70px', '130px']}
      columns={wagonColumns}
      data={wagonData}
      icon={<ToyBrick className='h-8 w-8 rotate-180' />}
      contentHeight={'max-h-[600px]'}
    />
  );
};
