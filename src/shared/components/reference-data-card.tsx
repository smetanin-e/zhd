'use client';
import { useState } from 'react';
import { Button, Card, CardContent, CardHeader, CardTitle, Input } from './ui';

import { DataTable } from './data-table/data-table';
import { ColumnDef } from '@tanstack/react-table';
import { Plus } from 'lucide-react';

interface Props<TData, TValue> {
  className?: string;
  title: string;
  icon: React.ReactNode;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  gridTemplate: string[];
  contentHeight?: string;
  addItem?: (value: boolean) => void;
}

export function ReferenceDataCard<TData, TValue>({
  icon,
  title,
  data,
  columns,
  gridTemplate,
  contentHeight,
  addItem,
}: Props<TData, TValue>) {
  const [globalFilter, setGlobalFilter] = useState('');
  return (
    <Card className='gap-1 p-0 overflow-hidden border-green-500/20'>
      <CardHeader className='pb-5 pt-4 relative shadow-sm bg-card-header'>
        <div className='flex items-center justify-between'>
          <CardTitle className='flex items-center gap-2'>
            {icon}
            {title}
          </CardTitle>
          <div className='grow flex items-center justify-end gap-6'>
            <Input
              placeholder={'Поиск...'}
              className='w-full max-w-xs rounded-md border px-3 py-2 text-sm'
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
            />
            {addItem && (
              <Button type='button' onClick={() => addItem(true)}>
                <Plus className='h-4 w-4' />
                Добавить
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className='relative p-0'>
        <DataTable
          columns={columns}
          data={data}
          globalFilter={globalFilter}
          onGlobalFilterChange={setGlobalFilter}
          gridTemplate={gridTemplate}
          contentHeight={contentHeight}
        />
      </CardContent>
    </Card>
  );
}
