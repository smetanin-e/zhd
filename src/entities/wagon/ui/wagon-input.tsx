import { WagonDocument } from '@/app/wagon/[id]/page';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui';
import { Calendar, Clock, Pencil } from 'lucide-react';
import React from 'react';

interface Props {
  className?: string;
  document: WagonDocument;
}

export const WagonInput: React.FC<Props> = ({ document }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-lg'>Входные данные</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid gap-4 md:grid-cols-4'>
          <div className='space-y-2'>
            <Label className='text-muted-foreground'>Время прибытия</Label>

            <Input type='datetime-local' className='w-[180px]' />
          </div>
          <div className='space-y-2'>
            <Label className='text-muted-foreground'>Входная накладная</Label>
            <div className='font-medium'>{document.entranceInvoiceNumber}</div>
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

          <div className='space-y-2'>
            <Label className='text-muted-foreground'>Станция входа</Label>
            <Select>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Укажите станцию' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Станции</SelectLabel>
                  <SelectItem value='Krinichnaya'>Криничная</SelectItem>
                  <SelectItem value='Ybi'>Юбилейная</SelectItem>
                  <SelectItem value='yas'>Ясиноватая</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className='space-y-2'>
            <Label className='text-muted-foreground'>Владелец груза</Label>
            <Select>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Укажите владельца' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Владелец груза</SelectLabel>
                  <SelectItem value='a'>АО ОФ АНТОНОВ</SelectItem>
                  <SelectItem value='b'>АО ОФ ИВАНОВ</SelectItem>
                  <SelectItem value='c'>АО ОФ СИДОРОВ</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className='space-y-2'>
            <Label className='text-muted-foreground'>Станция отправления</Label>
            <Select>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Укажите станцию' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Станции</SelectLabel>
                  <SelectItem value='a'>Бардино</SelectItem>
                  <SelectItem value='b'>Советская</SelectItem>
                  <SelectItem value='c'>Дальняя</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className='space-y-2'>
            <Label className='text-muted-foreground'>Содержание вагона</Label>
            <Select>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Содержание вагона' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Продукция</SelectLabel>
                  <SelectItem value='a'>Уголь</SelectItem>
                  <SelectItem value='b'>Дрова</SelectItem>
                  <SelectItem value='c'>Масло</SelectItem>
                  <SelectItem value='df'>Порожний</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className='space-y-2'>
            <Label className='text-muted-foreground'>Тип вагона</Label>
            <Select>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Тип вагона' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Тип вагона</SelectLabel>
                  <SelectItem value='a'>Полувагон</SelectItem>
                  <SelectItem value='b'>Цистерна потребителя</SelectItem>
                  <SelectItem value='c'>Цистерна собственная</SelectItem>
                  <SelectItem value='df'>Платформа</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className='space-y-2'>
            <Label className='text-muted-foreground'>Собственник вагона</Label>
            <Select>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Собственник вагона' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Собственник вагона</SelectLabel>
                  <SelectItem value='a'>РЖД</SelectItem>
                  <SelectItem value='b'>РФин</SelectItem>
                  <SelectItem value='c'>ДНР-Вагон</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className='space-y-2'>
            <Label className='text-muted-foreground'>Грузоподъемность (т)</Label>
            <div className='flex items-center gap-4'>
              <span className='font-medium text-2xl'>300</span>
              <Button variant='ghost' size='icon' className='pt-1'>
                <Pencil className='h-4 w-4' />
              </Button>
            </div>
          </div>

          <div className='space-y-2'>
            <Label className='text-muted-foreground'>Объем (м.куб.)</Label>
            <div className='flex items-center gap-4'>
              <span className='font-medium text-2xl'>23</span>
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
