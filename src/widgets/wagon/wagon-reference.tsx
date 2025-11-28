import { WagonsList } from '@/entities/wagon/ui/wagons-list';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui';
import { ToyBrick } from 'lucide-react';
import React from 'react';

interface Props {
  className?: string;
}

export const WagonReference: React.FC<Props> = () => {
  return (
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
        <WagonsList />
      </CardContent>
    </Card>
  );
};
