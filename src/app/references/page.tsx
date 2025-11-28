import { WagonsList } from '@/entities/wagon/ui/wagons-list';
import { columns, Wagon } from '@/shared/components/data-table/columns';

import { DataTable } from '@/shared/components/data-table/data-table';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui';
import { WagonReference } from '@/widgets/wagon/wagon-reference';
import { ToyBrick } from 'lucide-react';
import Link from 'next/link';

const data: Wagon[] = [
  { number: '23749545', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749546', type: 'Цистерна', owner: 'Транснефть' },
  { number: '23749547', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749548', type: 'Платформа', owner: 'РЖД' },
  { number: '23749549', type: 'Цистерна', owner: 'Газпром' },
  { number: '23749550', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749551', type: 'Крытый', owner: 'РЖД' },
  { number: '23749552', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749553', type: 'Цистерна', owner: 'Транснефть' },
  { number: '23749554', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749555', type: 'Платформа', owner: 'РЖД' },
  { number: '23749556', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749557', type: 'Крытый', owner: 'РЖД' },
  { number: '23749558', type: 'Цистерна', owner: 'Газпром' },
  { number: '23749559', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749560', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749561', type: 'Платформа', owner: 'РЖД' },
  { number: '23749562', type: 'Цистерна', owner: 'Транснефть' },
  { number: '23749563', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749564', type: 'Крытый', owner: 'РЖД' },
  { number: '23749565', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749566', type: 'Цистерна', owner: 'Газпром' },
  { number: '23749567', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749568', type: 'Платформа', owner: 'РЖД' },
  { number: '23749569', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749570', type: 'Цистерна', owner: 'Транснефть' },
  { number: '23749571', type: 'Крытый', owner: 'РЖД' },
  { number: '23749572', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749573', type: 'Полувагон', owner: 'РЖД' },
  { number: '23749574', type: 'Цистерна', owner: 'Газпром' },
];

//Страница справочников
export default function ReferencesPage() {
  return (
    <div className='container mx-auto py-4 px-2'>
      {/* Header */}
      <div className='border-b border-border bg-card mb-4'>
        <div className='container mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <Link href='/'>Главная страница</Link>
              <div>
                <h1 className='text-2xl font-bold'>Справочники</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <WagonReference />

        <Card className='gap-1 p-0 overflow-hidden border-green-500/20'>
          <CardHeader className='pb-5 pt-4 relative shadow-sm bg-card-header'>
            <div className='flex items-center justify-between'>
              <CardTitle className='flex items-center gap-2'>
                <ToyBrick className='h-8 w-8 rotate-180 text-teal-600' />
                Справочник вагонов
              </CardTitle>
            </div>
            <div className='flex items-center justify-between mt-2'></div>
          </CardHeader>
          <CardContent className='relative h-[625px] p-0'>
            <DataTable
              columns={columns}
              data={data}
              searchKey='number'
              gridTemplate={['120px', '120px', '1fr', '100px']}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
