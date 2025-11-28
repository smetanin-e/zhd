'use client';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
  ColumnFiltersState,
} from '@tanstack/react-table';
import { useState } from 'react';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  globalFilter?: string;
  onGlobalFilterChange?: (value: string) => void;
  gridTemplate?: string[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
  globalFilter,
  onGlobalFilterChange,
  gridTemplate,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  // убираем локальное состояние globalFilter

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      globalFilter, // используем переданное значение
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange, // используем переданную функцию
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const gridStyle = (gridTemplate || Array(columns.length).fill('1fr')).join(' ');

  return (
    <div className='h-full'>
      <div className='h-[625px] overflow-auto overflow-y-scroll'>
        <div
          className='grid sticky top-0 z-10 text-sm font-semibold px-4 py-2 bg-card-header shadow-sm mb-2'
          style={{ gridTemplateColumns: gridStyle }}
        >
          {table.getHeaderGroups().map((headerGroup) =>
            headerGroup.headers.map((header) => (
              <div
                key={header.id}
                onClick={header.column.getToggleSortingHandler()}
                className='cursor-pointer select-none'
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
                {{
                  asc: ' ↑',
                  desc: ' ↓',
                }[header.column.getIsSorted() as string] ?? null}
              </div>
            )),
          )}
        </div>

        {/* Rows */}
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <div
              key={row.id}
              className='grid px-4 py-2 items-center text-sm border-b'
              style={{ gridTemplateColumns: gridStyle }}
            >
              {row.getVisibleCells().map((cell) => (
                <div key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</div>
              ))}
            </div>
          ))
        ) : (
          <div className='text-center py-6 px-4 text-sm'>Ничего не найдено</div>
        )}
      </div>
    </div>
  );
}
