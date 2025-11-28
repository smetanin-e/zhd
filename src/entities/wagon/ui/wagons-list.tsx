//TODO НЕ ИСПОЛЬЗУЕТСЯ

import { Button } from '@/shared/components/ui';
import { CircleX, PencilLine } from 'lucide-react';
import React from 'react';

interface Props {
  className?: string;
}

export const WagonsList: React.FC<Props> = () => {
  return (
    <div className='h-[625px] overflow-auto overflow-y-scroll'>
      <div className='grid sticky top-0 z-10 text-sm font-semibold px-4 py-2 grid-cols-[120px_120px_250px_1fr] bg-card-header shadow-sm mb-2'>
        <div>Номер</div>
        <div>Тип</div>
        <div>Владелец</div>
        <div className='text-right'>Действия</div>
      </div>

      <div className='grid px-4 py-2 items-center text-sm  grid-cols-[120px_120px_250px_1fr] border-b'>
        <div className='font-medium'>23749545</div>
        <div>Полувагон</div>
        <div>РЖД</div>
        <div className='flex items-center justify-end gap-2'>
          <Button variant={'ghost'} size={'icon'}>
            <PencilLine className='w-4 h-4' />
          </Button>
          <Button variant={'ghost'}>
            <CircleX className='w-4 h-4' />
          </Button>
        </div>
      </div>

      <div className='grid px-4 py-2 items-center text-sm  grid-cols-[120px_120px_250px_1fr] border-b'>
        <div className='font-medium'>23749545</div>
        <div>Полувагон</div>
        <div>РЖД</div>
        <div className='flex items-center justify-end gap-2'>
          <Button variant={'ghost'} size={'icon'}>
            <PencilLine className='w-4 h-4' />
          </Button>
          <Button variant={'ghost'}>
            <CircleX className='w-4 h-4' />
          </Button>
        </div>
      </div>

      <div className='grid px-4 py-2 items-center text-sm  grid-cols-[120px_120px_250px_1fr] border-b'>
        <div className='font-medium'>23749545</div>
        <div>Полувагон</div>
        <div>РЖД</div>
        <div className='flex items-center justify-end gap-2'>
          <Button variant={'ghost'} size={'icon'}>
            <PencilLine className='w-4 h-4' />
          </Button>
          <Button variant={'ghost'}>
            <CircleX className='w-4 h-4' />
          </Button>
        </div>
      </div>

      <div className='grid px-4 py-2 items-center text-sm  grid-cols-[120px_120px_250px_1fr] border-b'>
        <div className='font-medium'>23749545</div>
        <div>Полувагон</div>
        <div>РЖД</div>
        <div className='flex items-center justify-end gap-2'>
          <Button variant={'ghost'} size={'icon'}>
            <PencilLine className='w-4 h-4' />
          </Button>
          <Button variant={'ghost'}>
            <CircleX className='w-4 h-4' />
          </Button>
        </div>
      </div>

      <div className='grid px-4 py-2 items-center text-sm  grid-cols-[120px_120px_250px_1fr] border-b'>
        <div className='font-medium'>23749545</div>
        <div>Полувагон</div>
        <div>РЖД</div>
        <div className='flex items-center justify-end gap-2'>
          <Button variant={'ghost'} size={'icon'}>
            <PencilLine className='w-4 h-4' />
          </Button>
          <Button variant={'ghost'}>
            <CircleX className='w-4 h-4' />
          </Button>
        </div>
      </div>

      <div className='grid px-4 py-2 items-center text-sm  grid-cols-[120px_120px_250px_1fr] border-b'>
        <div className='font-medium'>23749545</div>
        <div>Полувагон</div>
        <div>РЖД</div>
        <div className='flex items-center justify-end gap-2'>
          <Button variant={'ghost'} size={'icon'}>
            <PencilLine className='w-4 h-4' />
          </Button>
          <Button variant={'ghost'}>
            <CircleX className='w-4 h-4' />
          </Button>
        </div>
      </div>

      <div className='grid px-4 py-2 items-center text-sm  grid-cols-[120px_120px_250px_1fr] border-b'>
        <div className='font-medium'>23749545</div>
        <div>Полувагон</div>
        <div>РЖД</div>
        <div className='flex items-center justify-end gap-2'>
          <Button variant={'ghost'} size={'icon'}>
            <PencilLine className='w-4 h-4' />
          </Button>
          <Button variant={'ghost'}>
            <CircleX className='w-4 h-4' />
          </Button>
        </div>
      </div>

      <div className='grid px-4 py-2 items-center text-sm  grid-cols-[120px_120px_250px_1fr] border-b'>
        <div className='font-medium'>23749545</div>
        <div>Полувагон</div>
        <div>РЖД</div>
        <div className='flex items-center justify-end gap-2'>
          <Button variant={'ghost'} size={'icon'}>
            <PencilLine className='w-4 h-4' />
          </Button>
          <Button variant={'ghost'}>
            <CircleX className='w-4 h-4' />
          </Button>
        </div>
      </div>

      <div className='grid px-4 py-2 items-center text-sm  grid-cols-[120px_120px_250px_1fr] border-b'>
        <div className='font-medium'>23749545</div>
        <div>Полувагон</div>
        <div>РЖД</div>
        <div className='flex items-center justify-end gap-2'>
          <Button variant={'ghost'} size={'icon'}>
            <PencilLine className='w-4 h-4' />
          </Button>
          <Button variant={'ghost'}>
            <CircleX className='w-4 h-4' />
          </Button>
        </div>
      </div>

      <div className='grid px-4 py-2 items-center text-sm  grid-cols-[120px_120px_250px_1fr] border-b'>
        <div className='font-medium'>23749545</div>
        <div>Полувагон</div>
        <div>РЖД</div>
        <div className='flex items-center justify-end gap-2'>
          <Button variant={'ghost'} size={'icon'}>
            <PencilLine className='w-4 h-4' />
          </Button>
          <Button variant={'ghost'}>
            <CircleX className='w-4 h-4' />
          </Button>
        </div>
      </div>

      <div className='grid px-4 py-2 items-center text-sm  grid-cols-[120px_120px_250px_1fr] border-b'>
        <div className='font-medium'>23749545</div>
        <div>Полувагон</div>
        <div>РЖД</div>
        <div className='flex items-center justify-end gap-2'>
          <Button variant={'ghost'} size={'icon'}>
            <PencilLine className='w-4 h-4' />
          </Button>
          <Button variant={'ghost'}>
            <CircleX className='w-4 h-4' />
          </Button>
        </div>
      </div>

      <div className='grid px-4 py-2 items-center text-sm  grid-cols-[120px_120px_250px_1fr] border-b'>
        <div className='font-medium'>23749545</div>
        <div>Полувагон</div>
        <div>РЖД</div>
        <div className='flex items-center justify-end gap-2'>
          <Button variant={'ghost'} size={'icon'}>
            <PencilLine className='w-4 h-4' />
          </Button>
          <Button variant={'ghost'}>
            <CircleX className='w-4 h-4' />
          </Button>
        </div>
      </div>

      <div className='grid px-4 py-2 items-center text-sm  grid-cols-[120px_120px_250px_1fr] border-b'>
        <div className='font-medium'>23749545</div>
        <div>Полувагон</div>
        <div>РЖД</div>
        <div className='flex items-center justify-end gap-2'>
          <Button variant={'ghost'} size={'icon'}>
            <PencilLine className='w-4 h-4' />
          </Button>
          <Button variant={'ghost'}>
            <CircleX className='w-4 h-4' />
          </Button>
        </div>
      </div>

      <div className='grid px-4 py-2 items-center text-sm  grid-cols-[120px_120px_250px_1fr] border-b'>
        <div className='font-medium'>23749545</div>
        <div>Полувагон</div>
        <div>РЖД</div>
        <div className='flex items-center justify-end gap-2'>
          <Button variant={'ghost'} size={'icon'}>
            <PencilLine className='w-4 h-4' />
          </Button>
          <Button variant={'ghost'}>
            <CircleX className='w-4 h-4' />
          </Button>
        </div>
      </div>
    </div>
  );
};
