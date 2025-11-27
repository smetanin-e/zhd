'use client';

import { useState } from 'react';
import { Search, ChevronRight, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from '../ui';
import { useRouter } from 'next/navigation';

type WagonStatus = 'arrived' | 'in_process' | 'departed';

interface Wagon {
  id: string;
  wagonNumber: string;
  arrivalAt: string;
  entranceInvoiceNumber: string;
  status: WagonStatus;
  currentOperation?: string;
  timeOnSite: string;
}

const mockWagons: Wagon[] = [
  {
    id: '1',
    wagonNumber: '54782391',
    arrivalAt: '27.11.2025 08:30',
    entranceInvoiceNumber: 'ВН-2025-1234',
    status: 'in_process',
    currentOperation: 'Разгрузка',
    timeOnSite: '4ч 15м',
  },
  {
    id: '2',
    wagonNumber: '62849173',
    arrivalAt: '27.11.2025 06:15',
    entranceInvoiceNumber: 'ВН-2025-1233',
    status: 'in_process',
    currentOperation: 'Взвешивание',
    timeOnSite: '6ч 30м',
  },
  {
    id: '3',
    wagonNumber: '91234567',
    arrivalAt: '26.11.2025 22:45',
    entranceInvoiceNumber: 'ВН-2025-1232',
    status: 'arrived',
    timeOnSite: '14ч 00м',
  },
  {
    id: '4',
    wagonNumber: '78456123',
    arrivalAt: '27.11.2025 07:20',
    entranceInvoiceNumber: 'ВН-2025-1235',
    status: 'in_process',
    currentOperation: 'Ремонт',
    timeOnSite: '5ч 25м',
  },
];

const statusConfig: Record<
  WagonStatus,
  { label: string; variant: 'default' | 'secondary' | 'outline'; icon: any }
> = {
  arrived: {
    label: 'Прибыл',
    variant: 'secondary',
    icon: AlertCircle,
  },
  in_process: {
    label: 'В обработке',
    variant: 'default',
    icon: Clock,
  },
  departed: {
    label: 'Отправлен',
    variant: 'outline',
    icon: CheckCircle2,
  },
};

export function WagonList() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const filteredWagons = mockWagons.filter(
    (wagon) =>
      wagon.wagonNumber.includes(searchQuery) ||
      wagon.entranceInvoiceNumber.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleWagonClick = (wagonNumber: string) => {
    router.push(`/wagon/${wagonNumber}`);
  };

  return (
    <Card>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <CardTitle>Реестр вагонов</CardTitle>
          <div className='relative w-64'>
            <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
            <Input
              placeholder='Поиск по номеру...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='pl-9'
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className='rounded-lg border border-border'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Номер вагона</TableHead>
                <TableHead>Время прибытия</TableHead>
                <TableHead>Входная накладная</TableHead>
                <TableHead>Текущая операция</TableHead>
                <TableHead>Время на объекте</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead className='w-[50px]'></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredWagons.map((wagon) => {
                const StatusIcon = statusConfig[wagon.status].icon;
                return (
                  <TableRow
                    key={wagon.id}
                    className='cursor-pointer hover:bg-muted/50'
                    onClick={() => handleWagonClick(wagon.wagonNumber)}
                  >
                    <TableCell className='font-mono font-semibold'>{wagon.wagonNumber}</TableCell>
                    <TableCell className='text-muted-foreground'>{wagon.arrivalAt}</TableCell>
                    <TableCell className='font-medium'>{wagon.entranceInvoiceNumber}</TableCell>
                    <TableCell>
                      {wagon.currentOperation ? (
                        <span className='text-sm'>{wagon.currentOperation}</span>
                      ) : (
                        <span className='text-sm text-muted-foreground'>—</span>
                      )}
                    </TableCell>
                    <TableCell className='font-mono text-sm'>{wagon.timeOnSite}</TableCell>
                    <TableCell>
                      <Badge variant={statusConfig[wagon.status].variant} className='gap-1'>
                        <StatusIcon className='h-3 w-3' />
                        {statusConfig[wagon.status].label}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant='ghost'
                        size='icon'
                        className='h-8 w-8'
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWagonClick(wagon.wagonNumber);
                        }}
                      >
                        <ChevronRight className='h-4 w-4' />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
