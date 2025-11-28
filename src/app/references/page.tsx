import { WagonReference } from '@/widgets/wagon/wagon-reference';
import Link from 'next/link';

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
      </div>
    </div>
  );
}
