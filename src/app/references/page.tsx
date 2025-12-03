import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/components/ui';
import { OperationReference } from '@/widgets/operations/operation-reference';
import { ProductReference } from '@/widgets/product/product-reference';
import { InsideStationReference } from '@/widgets/station/inside-station-reference';
import { OutsideStationReference } from '@/widgets/station/outside-station-reference';
import { WagonReference } from '@/widgets/wagon/wagon-reference';
import Link from 'next/link';

//Страница справочников
export default function ReferencesPage() {
  return (
    <div className='container mx-auto py-4 px-2 mb-10 '>
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

      <div className='flex w-full flex-col gap-6'>
        <Tabs defaultValue='wagons'>
          <TabsList className='gap-4'>
            <TabsTrigger value='wagons'>Вагоны</TabsTrigger>
            <TabsTrigger value='operations'>Операции</TabsTrigger>
            <TabsTrigger value='products'>Содержимое вагона</TabsTrigger>
            <TabsTrigger value='insideStation'>Станции (внутренние)</TabsTrigger>
            <TabsTrigger value='outsideStation'>Станции (внешние)</TabsTrigger>
          </TabsList>
          <TabsContent value='wagons'>
            <WagonReference />
          </TabsContent>
          <TabsContent value='operations'>
            <OperationReference />
          </TabsContent>
          <TabsContent value='products'>
            <ProductReference />
          </TabsContent>

          <TabsContent value='insideStation'>
            <InsideStationReference />
          </TabsContent>

          <TabsContent value='outsideStation'>
            <OutsideStationReference />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
