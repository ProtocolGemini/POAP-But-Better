import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { formatDate } from '@/lib/utils';
import { QrCode } from 'lucide-react';

interface CollectibleCardProps {
  collectible: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    createdAt: Date;
    claimCount: number;
  };
}

export function CollectibleCard({ collectible }: CollectibleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-xl">{collectible.name}</CardTitle>
          <p className="text-sm text-gray-500">{formatDate(collectible.createdAt)}</p>
        </CardHeader>
        <CardContent>
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={collectible.imageUrl}
              alt={collectible.name}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{collectible.description}</p>
        </CardContent>
        <CardFooter className="justify-between">
          <p className="text-sm text-gray-500">Claimed: {collectible.claimCount} times</p>
          <Button size="sm">
            <QrCode className="mr-2 h-4 w-4" />
            Claim
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}