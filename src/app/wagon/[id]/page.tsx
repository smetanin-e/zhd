'use client';

import { useState, use } from 'react';
import Link from 'next/link';

import { Plus, Clock, Calendar, FileText, AlertCircle, ArrowLeft, Save } from 'lucide-react';
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components/ui';

type OperationType =
  | 'arrival'
  | 'weighing_in'
  | 'unloading'
  | 'loading'
  | 'inspection'
  | 'repair'
  | 'weighing_out'
  | 'departure';

interface Operation {
  id: string;
  type: OperationType;
  startTime: string;
  endTime: string;
  duration: string;
  downtime?: string;
  responsible: string;
  notes?: string;
}

interface WagonDocument {
  id: string;
  wagonNumber: string;
  entranceInvoiceNumber: string;
  exitInvoiceNumber?: string;
  arrivalDate: string;
  departureDate?: string;
  totalTimeOnSite: string;
  totalDowntime: string;
  status: 'open' | 'closed';
  operations: Operation[];
}

const operationTypes: Record<OperationType, { label: string; color: string }> = {
  arrival: { label: 'Прибытие', color: 'bg-blue-500/10 text-blue-700 border-blue-500/20' },
  weighing_in: {
    label: 'Взвешивание (въезд)',
    color: 'bg-purple-500/10 text-purple-700 border-purple-500/20',
  },
  unloading: { label: 'Разгрузка', color: 'bg-orange-500/10 text-orange-700 border-orange-500/20' },
  loading: { label: 'Погрузка', color: 'bg-green-500/10 text-green-700 border-green-500/20' },
  inspection: { label: 'Осмотр', color: 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20' },
  repair: { label: 'Ремонт', color: 'bg-red-500/10 text-red-700 border-red-500/20' },
  weighing_out: {
    label: 'Взвешивание (выезд)',
    color: 'bg-purple-500/10 text-purple-700 border-purple-500/20',
  },
  departure: { label: 'Отправление', color: 'bg-gray-500/10 text-gray-700 border-gray-500/20' },
};

// Mock data - в реальном приложении будет загружаться по ID
const mockDocuments: Record<string, WagonDocument> = {
  '54782391': {
    id: 'DOC-2025-001',
    wagonNumber: '54782391',
    entranceInvoiceNumber: 'ВН-2025-1234',
    arrivalDate: '27.11.2025 08:30',
    totalTimeOnSite: '18ч 45м',
    totalDowntime: '2ч 30м',
    status: 'open',
    operations: [
      {
        id: '1',
        type: 'arrival',
        startTime: '27.11.2025 08:30',
        endTime: '27.11.2025 08:45',
        duration: '15м',
        responsible: 'Иванов И.И.',
        notes: 'Прибытие на путь №3',
      },
      {
        id: '2',
        type: 'weighing_in',
        startTime: '27.11.2025 09:30',
        endTime: '27.11.2025 09:50',
        duration: '20м',
        downtime: '45м',
        responsible: 'Петров П.П.',
        notes: 'Вес брутто: 94.5 тонн',
      },
      {
        id: '3',
        type: 'unloading',
        startTime: '27.11.2025 10:10',
        endTime: '27.11.2025 14:30',
        duration: '4ч 20м',
        downtime: '20м',
        responsible: 'Сидоров С.С.',
        notes: 'Разгрузка угля',
      },
      {
        id: '4',
        type: 'inspection',
        startTime: '27.11.2025 15:45',
        endTime: '27.11.2025 16:15',
        duration: '30м',
        downtime: '1ч 15м',
        responsible: 'Козлов К.К.',
        notes: 'Техосмотр перед отправкой',
      },
    ],
  },
  '62849173': {
    id: 'DOC-2025-002',
    wagonNumber: '62849173',
    entranceInvoiceNumber: 'ВН-2025-1233',
    arrivalDate: '27.11.2025 06:15',
    totalTimeOnSite: '6ч 30м',
    totalDowntime: '1ч 15м',
    status: 'open',
    operations: [
      {
        id: '1',
        type: 'arrival',
        startTime: '27.11.2025 06:15',
        endTime: '27.11.2025 06:25',
        duration: '10м',
        responsible: 'Иванов И.И.',
      },
      {
        id: '2',
        type: 'weighing_in',
        startTime: '27.11.2025 07:30',
        endTime: '27.11.2025 07:45',
        duration: '15м',
        downtime: '1ч 5м',
        responsible: 'Петров П.П.',
      },
    ],
  },
};

export default function WagonDocumentPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [document, setDocument] = useState<WagonDocument>(
    mockDocuments[resolvedParams.id] || mockDocuments['54782391'],
  );
  const [showAddOperation, setShowAddOperation] = useState(false);

  return (
    <div className='min-h-screen bg-background'>
      {/* Header */}
      <div className='border-b border-border bg-card'>
        <div className='container mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <Link href='/'>
                <Button variant='ghost' size='icon'>
                  <ArrowLeft className='h-5 w-5' />
                </Button>
              </Link>
              <div>
                <h1 className='text-2xl font-bold'>Документ вагона</h1>
                <p className='text-sm text-muted-foreground'>Номер документа: {document.id}</p>
              </div>
            </div>
            <Badge
              variant={document.status === 'open' ? 'default' : 'secondary'}
              className='text-sm px-3 py-1'
            >
              {document.status === 'open' ? 'Открыт' : 'Закрыт'}
            </Badge>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className='container mx-auto px-6 py-8 space-y-6'>
        {/* Document Header */}
        <Card>
          <CardHeader>
            <CardTitle className='text-lg'>Основные данные</CardTitle>
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
            </div>
          </CardContent>
        </Card>

        {/* Time Summary */}
        <div className='grid gap-4 md:grid-cols-2'>
          <Card className='border-orange-500/20 bg-orange-500/5'>
            <CardHeader className='pb-3'>
              <CardDescription className='flex items-center gap-2'>
                <AlertCircle className='h-4 w-4' />
                Время простоя
              </CardDescription>
              <CardTitle className='text-3xl font-bold text-orange-600'>
                {document.totalDowntime}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground'>Суммарное время между операциями</p>
            </CardContent>
          </Card>
          <Card className='border-blue-500/20 bg-blue-500/5'>
            <CardHeader className='pb-3'>
              <CardDescription className='flex items-center gap-2'>
                <FileText className='h-4 w-4' />
                Количество операций
              </CardDescription>
              <CardTitle className='text-3xl font-bold text-blue-600'>
                {document.operations.length}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground'>Выполнено технологических операций</p>
            </CardContent>
          </Card>
        </div>

        {/* Operations Table */}
        <Card>
          <CardHeader>
            <div className='flex items-center justify-between'>
              <CardTitle>Операции</CardTitle>
              <Button size='sm' onClick={() => setShowAddOperation(true)}>
                <Plus className='mr-2 h-4 w-4' />
                Добавить операцию
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className='rounded-lg border border-border'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='w-[50px]'>#</TableHead>
                    <TableHead>Операция</TableHead>
                    <TableHead>Начало</TableHead>
                    <TableHead>Окончание</TableHead>
                    <TableHead>Длительность</TableHead>
                    <TableHead>Простой</TableHead>
                    <TableHead>Ответственный</TableHead>
                    <TableHead>Примечание</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {document.operations.map((operation, index) => (
                    <TableRow key={operation.id}>
                      <TableCell className='font-medium text-muted-foreground'>
                        {index + 1}
                      </TableCell>
                      <TableCell>
                        <Badge variant='outline' className={operationTypes[operation.type].color}>
                          {operationTypes[operation.type].label}
                        </Badge>
                      </TableCell>
                      <TableCell className='font-mono text-sm'>{operation.startTime}</TableCell>
                      <TableCell className='font-mono text-sm'>{operation.endTime}</TableCell>
                      <TableCell className='font-mono font-medium'>{operation.duration}</TableCell>
                      <TableCell>
                        {operation.downtime ? (
                          <span className='font-mono text-orange-600 font-medium'>
                            {operation.downtime}
                          </span>
                        ) : (
                          <span className='text-muted-foreground'>—</span>
                        )}
                      </TableCell>
                      <TableCell className='text-sm'>{operation.responsible}</TableCell>
                      <TableCell className='text-sm text-muted-foreground max-w-[200px] truncate'>
                        {operation.notes || '—'}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className='flex justify-end gap-3'>
          <Link href='/'>
            <Button variant='outline'>Закрыть</Button>
          </Link>
          <Button variant='secondary'>
            <Save className='mr-2 h-4 w-4' />
            Сохранить
          </Button>
          {document.status === 'open' && <Button>Завершить документ</Button>}
        </div>
      </div>

      {/* Add Operation Dialog */}
      {showAddOperation && <AddOperationDialog onClose={() => setShowAddOperation(false)} />}
    </div>
  );
}

function AddOperationDialog({ onClose }: { onClose: () => void }) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className='max-w-2xl'>
        <DialogHeader>
          <DialogTitle>Добавить операцию</DialogTitle>
          <DialogDescription>Введите данные о выполненной операции</DialogDescription>
        </DialogHeader>
        <div className='space-y-4'>
          <div className='space-y-2'>
            <Label>Тип операции</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder='Выберите операцию' />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(operationTypes).map(([key, { label }]) => (
                  <SelectItem key={key} value={key}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className='grid gap-4 md:grid-cols-2'>
            <div className='space-y-2'>
              <Label>Время начала</Label>
              <Input type='datetime-local' />
            </div>
            <div className='space-y-2'>
              <Label>Время окончания</Label>
              <Input type='datetime-local' />
            </div>
          </div>
          <div className='space-y-2'>
            <Label>Ответственный</Label>
            <Input placeholder='ФИО ответственного' />
          </div>
          <div className='space-y-2'>
            <Label>Примечание</Label>
            <Input placeholder='Дополнительная информация' />
          </div>
          <div className='flex justify-end gap-3'>
            <Button variant='outline' onClick={onClose}>
              Отмена
            </Button>
            <Button onClick={onClose}>Добавить</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
