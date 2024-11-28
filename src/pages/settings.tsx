import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, Shield, Smartphone, User } from 'lucide-react';

export function SettingsPage() {
  const settingsGroups = [
    {
      icon: User,
      title: 'Account Settings',
      description: 'Manage your account information and preferences',
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Configure how you want to receive updates',
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Control your privacy settings and security options',
    },
    {
      icon: Smartphone,
      title: 'Connected Devices',
      description: 'Manage devices connected to your account',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold">Settings</h1>
      <div className="grid gap-6">
        {settingsGroups.map(({ icon: Icon, title, description }) => (
          <Card key={title}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-gray-800 p-2">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle>{title}</CardTitle>
                  <p className="text-sm text-gray-400">{description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" size="sm">
                Configure
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}