export interface User {
  id: string;
  email: string;
  role: 'attendee' | 'customer' | 'admin';
  displayName: string;
  avatar?: string;
  createdAt: Date;
}

export interface Collectible {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  createdAt: Date;
  claimCount: number;
  campaignId: string;
  metadata?: Record<string, unknown>;
}

export interface Campaign {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  customerId: string;
  collectibles: Collectible[];
  totalClaims: number;
}