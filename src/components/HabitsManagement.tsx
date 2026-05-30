import React from 'react';
import { 
  Plus, 
  Search, 
  Archive, 
  MoreVertical, 
  Edit2, 
  Trash2, 
  Activity,
  Calendar
} from 'lucide-react';
import { Habit } from '../types';
import { motion } from 'framer-motion';

interface HabitsManagementProps {
  habits: Habit[];
}

const HabitsManagement: React.FC<HabitsManagementProps> = ({ habits }) => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">إدارة العادات</h2>
        <button className="bg-primary text-primary-foreground p-2 rounded-xl shadow-lg shadow-primary/20 flex items-center gap-2 px-4 py-2 text-sm font-bold active:scale-95 transition-transform">
          <Plus className="w-4 h-4" />
          <span>عادة جديدة</span>
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="ابحث عن عادة..." 
            className="w-full bg-card border border-border rounded-xl py-2.5 pr-10 pl-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
          />
        </div>
        <button className="p-2.5 bg-card border border-border rounded-xl text-muted-foreground hover:text-foreground transition-colors">
          <Archive className="w-5 h-5" />
        </button>
      </div>

      {/* Habits List */}
      <div className="space-y-3">
        {habits.map((habit, idx) => (
          <motion.div
            key={habit.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-card border border-border p-4 rounded-2xl flex items-center justify-between group hover:border-primary/50 transition-colors shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${habit.isActive ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                {habit.isActive ? <Activity className="w-6 h-6" /> : <Archive className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="font-bold text-foreground">{habit.title}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <Calendar className="w-3 h-3" /> يومياً
                  </span>
                  <span className="text-[10px] bg-primary/5 text-primary px-2 py-0.5 rounded-full font-bold">
                    +{habit.points} نقطة
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground">
                <Edit2 className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-destructive/10 rounded-lg text-muted-foreground hover:text-destructive">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            
            <button className="p-2 text-muted-foreground hover:bg-muted rounded-lg md:hidden">
              <MoreVertical className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HabitsManagement;