import React from 'react';
import { Target, Zap, Trophy } from 'lucide-react';
import { Stats } from '../types';

interface QuickStatsDashboardProps {
  stats: Stats;
}

const QuickStatsDashboard: React.FC<QuickStatsDashboardProps> = ({ stats }) => {
  const items = [
    {
      label: 'العادات النشطة',
      value: stats.activeHabits,
      icon: Target,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      label: 'أطول سلسلة',
      value: `${stats.longestStreak} يوم`,
      icon: Zap,
      color: 'text-orange-600',
      bg: 'bg-orange-50',
    },
    {
      label: 'الإنجاز الكلي',
      value: stats.totalAchievements,
      icon: Trophy,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
  ];

  return (
    <div className="bg-card p-5 rounded-3xl shadow-sm border border-border grid grid-cols-3 gap-2">
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center text-center">
          <div className={`p-2.5 ${item.bg} rounded-2xl mb-2`}>
            <item.icon className={`w-5 h-5 ${item.color}`} />
          </div>
          <span className="text-[10px] md:text-xs text-muted-foreground font-medium mb-1 truncate w-full px-1">
            {item.label}
          </span>
          <span className="text-sm md:text-lg font-bold text-foreground">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default QuickStatsDashboard;