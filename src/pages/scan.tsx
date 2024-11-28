import { useState } from 'react';
import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ScanPage() {
  const [scanning, setScanning] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Scan QR Code</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-4">
            {scanning ? (
              <div className="aspect-square w-full max-w-sm rounded-lg bg-gray-800">
                {/* QR Scanner will be implemented here */}
                <div className="flex h-full items-center justify-center text-gray-400">
                  Scanning...
                </div>
              </div>
            ) : (
              <Button onClick={() => setScanning(true)} size="lg">
                <Camera className="mr-2 h-5 w-5" />
                Start Scanning
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}