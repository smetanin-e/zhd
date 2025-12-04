import { WagonOperations } from '@/entities/wagon/model/types';
import { operationColumns } from '@/shared/components/data-table/columns';
import { ReferenceDataCard } from '@/shared/components/reference-data-card';
import { ToyBrick } from 'lucide-react';
import React from 'react';

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
  return (
    <ReferenceDataCard
      title='Операции'
      gridTemplate={['1fr', '80px', '100px']}
      columns={operationColumns}
      data={data}
      icon={<ToyBrick className='h-8 w-8 rotate-180' />}
      contentHeight={'max-h-[600px]'}
    />
  );
};
