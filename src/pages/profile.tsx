import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/lib/auth';

export function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
            <div>
              <h2 className="text-xl font-semibold">{user.displayName}</h2>
              <p className="text-sm text-gray-400">{user.email}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8">
        <h3 className="mb-4 text-xl font-semibold">My Collection</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Collection items will be rendered here */}
        </div>
      </div>
    </div>
  );
}