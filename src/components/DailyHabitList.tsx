import React from 'react';
import { CheckCircle2, Circle, Coins } from 'lucide-react';
import { Habit } from '../types';
import { motion } from 'framer-motion';

interface DailyHabitListProps {
  habits: Habit[];
  onToggle: (id: string) => void;
}

const DailyHabitList: React.FC<DailyHabitListProps> = ({ habits, onToggle }) => {
  return (
    <div className="space-y-4 pb-8">
      <div className="flex items-center justify-between mb-2 px-1">
        <h2 className="text-lg font-bold text-foreground">عادات اليوم</h2>
        <span className="text-xs text-muted-foreground">{habits.length} عادات</span>
      </div>
      
      {habits.map((habit, index) => (
        <motion.div
          key={habit.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
          onClick={() => onToggle(habit.id)}
          className={`group relative flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer ${
            habit.completed 
              ? "bg-primary/5 border-primary/20 opacity-80" 
              : "bg-card border-border hover:border-primary/50 shadow-sm"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className={`transition-colors ${habit.completed ? "text-primary" : "text-muted-foreground group-hover:text-primary/70"}`}>
              {habit.completed ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
            </div>
            <div>
              <h3 className={`font-semibold transition-all ${habit.completed ? "line-through text-muted-foreground" : "text-foreground"}`}>
                {habit.title}
              </h3>
              <div className="flex items-center gap-1 mt-1">
                <Coins className="w-3 h-3 text-amber-500" />
                <span className="text-[10px] text-muted-foreground">+{habit.points} نقطة</span>
              </div>
            </div>
          </div>
          
          {habit.completed && (
            <div className="absolute left-4 bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold">
              تم الإنجاز
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default DailyHabitList;