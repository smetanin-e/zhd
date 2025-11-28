import { WagonDocument } from '@/app/wagon/[id]/page';
import { Button, Card, CardContent, CardHeader, CardTitle, Label } from '@/shared/components/ui';
import { Calendar, Clock, Pencil } from 'lucide-react';
import React from 'react';

interface Props {
  className?: string;
  document: WagonDocument;
}

export const WagonOutput: React.FC<Props> = ({ document }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-lg'>Выходные данные</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid gap-4 md:grid-cols-3'>
          <div className='space-y-2'>
            <Label className='text-muted-foreground'>Номер вагона</Label>
            <div className='font-mono text-xl font-bold'>{document.wagonNumber}</div>
          </div>
          <div className='space-y-2'>
            <Label className='text-muted-foreground'>Входная накладная</Label>
            <div className='font-medium'>{document.entranceInvoiceNumber}</div>
          </div>
          <div className='space-y-2'>
            <Label className='text-muted-foreground'>Выходная накладная</Label>
            <div className='font-medium text-muted-foreground'>
              {document.exitInvoiceNumber || 'Не оформлена'}
            </div>
          </div>
          <div className='space-y-2'>
            <Label className='text-muted-foreground'>Время прибытия</Label>
            <div className='flex items-center gap-2'>
              <Calendar className='h-4 w-4 text-muted-foreground' />
              <span>{document.arrivalDate}</span>
            </div>
          </div>
          <div className='space-y-2'>
            <Label className='text-muted-foreground'>Время отправки</Label>
            <div className='flex items-center gap-2'>
              <Calendar className='h-4 w-4 text-muted-foreground' />
              <span className='text-muted-foreground'>
                {document.departureDate || 'В процессе'}
              </span>
            </div>
          </div>
          <div className='space-y-2'>
            <Label className='text-muted-foreground'>Общее время на объекте</Label>
            <div className='flex items-center gap-2 text-lg font-bold text-primary'>
              <Clock className='h-5 w-5' />
              <span>{document.totalTimeOnSite}</span>
            </div>
          </div>
          <div className='space-y-2'>
            <Label className='text-muted-foreground'>Тара с бруса (т)</Label>
            <div className='flex items-center gap-4'>
              <span className='font-medium text-2xl'>123</span>
              <Button variant='ghost' size='icon' className='pt-1'>
                <Pencil className='h-4 w-4' />
              </Button>
            </div>
          </div>
          <div className='space-y-2'>
            <Label className='text-muted-foreground'>Тара по документам (т)</Label>
            <div className='flex items-center gap-4'>
              <span className='font-medium text-2xl'>132</span>
              <Button variant='ghost' size='icon' className='pt-1'>
                <Pencil className='h-4 w-4' />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
