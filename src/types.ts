export interface Habit {
  id: string;
  title: string;
  points: number;
  completed: boolean;
  isActive: boolean;
  isArchived?: boolean;
}

export interface Quote {
  id: number;
  text: string;
  source: string;
}

export interface Stats {
  activeHabits: number;
  longestStreak: number;
  totalAchievements: number;
}

export type Screen = 'dashboard' | 'habits' | 'farm' | 'timer' | 'settings';

export interface ShopItem {
  id: string;
  title: string;
  price: number;
  icon: string;
  category: 'seed' | 'tool' | 'decoration';
}