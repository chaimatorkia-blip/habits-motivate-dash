import React from 'react';
import { Calendar as CalendarIcon, Moon } from 'lucide-react';

const DualCalendarWidget: React.FC = () => {
  const today = new Date();
  
  const gregorianDate = new Intl.DateTimeFormat('ar-EG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(today);

  const hijriDate = new Intl.DateTimeFormat('ar-SA-u-ca-islamic-umalqura', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(today);

  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      <div className="bg-card p-4 rounded-2xl shadow-sm border border-border flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors">
        <div className="p-2 bg-primary/10 rounded-full mb-2 group-hover:scale-110 transition-transform">
          <Moon className="w-5 h-5 text-primary" />
        </div>
        <span className="text-xs text-muted-foreground mb-1">التقويم الهجري</span>
        <span className="text-sm md:text-base font-bold text-foreground">{hijriDate} هـ</span>
      </div>
      
      <div className="bg-card p-4 rounded-2xl shadow-sm border border-border flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors">
        <div className="p-2 bg-secondary/80 rounded-full mb-2 group-hover:scale-110 transition-transform">
          <CalendarIcon className="w-5 h-5 text-secondary-foreground" />
        </div>
        <span className="text-xs text-muted-foreground mb-1">التقويم الميلادي</span>
        <span className="text-sm md:text-base font-bold text-foreground">{gregorianDate} م</span>
      </div>
    </div>
  );
};

export default DualCalendarWidget;