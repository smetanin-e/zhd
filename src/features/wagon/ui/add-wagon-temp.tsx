'use client';

import type React from 'react';
import { useState } from 'react';

import { X, Train } from 'lucide-react';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui';

export interface WagonRegistryData {
  wagonNumber: string;
  wagonType: string;
  owner: string;
  tareWeight: number;
  loadCapacity: number;
  volume: number;
}

const wagonTypes = [
  { value: 'hopper', label: 'Хоппер' },
  { value: 'gondola', label: 'Полувагон' },
  { value: 'tank', label: 'Цистерна' },
  { value: 'boxcar', label: 'Крытый вагон' },
  { value: 'flatcar', label: 'Платформа' },
  { value: 'refrigerator', label: 'Рефрижератор' },
];

const owners = [
  { value: 'rzd', label: 'ОАО РЖД' },
  { value: 'pgk', label: 'ПГК' },
  { value: 'fgk', label: 'ФГК' },
  { value: 'gtlk', label: 'ГТЛК' },
  { value: 'private', label: 'Частный парк' },
  { value: 'other', label: 'Прочее' },
];

export function WagonRegistryForm() {
  const [formData, setFormData] = useState<WagonRegistryData>({
    wagonNumber: '',
    wagonType: '',
    owner: '',
    tareWeight: 0,
    loadCapacity: 0,
    volume: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    console.log(e);
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm'>
      <Card className='w-full max-w-lg'>
        <CardHeader>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10'>
                <Train className='h-5 w-5 text-primary' />
              </div>
              <div>
                <CardTitle>Добавление вагона</CardTitle>
                <CardDescription>Регистрация вагона в базе данных</CardDescription>
              </div>
            </div>
            <Button variant='ghost' size='icon'>
              <X className='h-4 w-4' />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className='space-y-4'>
            {/* Номер вагона */}
            <div className='space-y-2'>
              <Label htmlFor='wagonNumber'>Номер вагона *</Label>
              <Input
                id='wagonNumber'
                placeholder='Введите 8-значный номер'
                maxLength={8}
                value={formData.wagonNumber}
                onChange={(e) =>
                  setFormData({ ...formData, wagonNumber: e.target.value.replace(/\D/g, '') })
                }
                required
              />
            </div>

            {/* Тип вагона и Владелец в одну строку */}
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='wagonType'>Тип вагона *</Label>
                <Select
                  value={formData.wagonType}
                  onValueChange={(value) => setFormData({ ...formData, wagonType: value })}
                  required
                >
                  <SelectTrigger id='wagonType'>
                    <SelectValue placeholder='Выберите тип' />
                  </SelectTrigger>
                  <SelectContent>
                    {wagonTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='owner'>Владелец *</Label>
                <Select
                  value={formData.owner}
                  onValueChange={(value) => setFormData({ ...formData, owner: value })}
                  required
                >
                  <SelectTrigger id='owner'>
                    <SelectValue placeholder='Выберите владельца' />
                  </SelectTrigger>
                  <SelectContent>
                    {owners.map((owner) => (
                      <SelectItem key={owner.value} value={owner.value}>
                        {owner.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Технические характеристики */}
            <div className='space-y-3 pt-2'>
              <p className='text-sm font-medium text-muted-foreground'>
                Технические характеристики
              </p>
              <div className='grid grid-cols-3 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='tareWeight'>Тара с бруса (т) *</Label>
                  <Input
                    id='tareWeight'
                    type='number'
                    step='0.1'
                    min='0'
                    placeholder='0.0'
                    value={formData.tareWeight || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        tareWeight: Number.parseFloat(e.target.value) || 0,
                      })
                    }
                    required
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='loadCapacity'>Грузоподъемность (т) *</Label>
                  <Input
                    id='loadCapacity'
                    type='number'
                    step='0.1'
                    min='0'
                    placeholder='0.0'
                    value={formData.loadCapacity || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        loadCapacity: Number.parseFloat(e.target.value) || 0,
                      })
                    }
                    required
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='volume'>Объем (м³) *</Label>
                  <Input
                    id='volume'
                    type='number'
                    step='0.1'
                    min='0'
                    placeholder='0.0'
                    value={formData.volume || ''}
                    onChange={(e) =>
                      setFormData({ ...formData, volume: Number.parseFloat(e.target.value) || 0 })
                    }
                    required
                  />
                </div>
              </div>
            </div>

            <div className='flex gap-3 pt-4'>
              <Button type='submit' className='flex-1'>
                Добавить в базу
              </Button>
              <Button type='button' variant='outline'>
                Отмена
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
