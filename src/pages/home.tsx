import { CollectibleCard } from '@/components/collectible-card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { useAuth } from '@/lib/auth';

const DEMO_COLLECTIBLES = [
  {
    id: '1',
    name: 'Digital Art Exhibition 2024',
    description: 'Exclusive collectible from the premier digital art exhibition.',
    imageUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4',
    createdAt: new Date(),
    claimCount: 156,
  },
  {
    id: '2',
    name: 'Tech Conference Badge',
    description: 'Commemorative digital badge from TechCon 2024.',
    imageUrl: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01',
    createdAt: new Date(),
    claimCount: 89,
  },
];

export function HomePage() {
  const { user } = useAuth();
  const isCustomer = user?.role === 'customer';

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Digital Collectibles</h1>
          <p className="mt-2 text-gray-400">Discover and collect unique digital memorabilia</p>
        </div>
        {isCustomer && (
          <Button size="lg">
            <PlusCircle className="mr-2 h-5 w-5" />
            Create New
          </Button>
        )}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DEMO_COLLECTIBLES.map((collectible) => (
          <CollectibleCard key={collectible.id} collectible={collectible} />
        ))}
      </div>
    </div>
  );
}