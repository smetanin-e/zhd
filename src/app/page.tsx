import { WagonOperations } from '@/widgets/wagon/wagon-operations';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href={'/references'}>Справочники</Link>
      <WagonOperations />
    </div>
  );
}
