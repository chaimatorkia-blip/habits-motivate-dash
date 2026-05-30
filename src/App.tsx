import { useState, useEffect, useMemo } from 'react';
import { Toaster, toast } from 'sonner';
import { 
  Menu, 
  Bell, 
  Plus, 
  Home, 
  LayoutList, 
  Store, 
  User, 
  Timer 
} from 'lucide-react';

// Components
import MotivationBanner from './components/MotivationBanner';
import DualCalendarWidget from './components/DualCalendarWidget';
import QuickStatsDashboard from './components/QuickStatsDashboard';
import DailyHabitList from './components/DailyHabitList';
import NavigationDrawer from './components/NavigationDrawer';
import HabitsManagement from './components/HabitsManagement';
import FarmShop from './components/FarmShop';
import FocusTimer from './components/FocusTimer';
import SettingsScreen from './components/Settings';

// Data & Types
import { initialHabits } from './data/mockData';
import { Habit, Stats, Screen } from './types';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [habits, setHabits] = useState<Habit[]>(() => {
    const saved = localStorage.getItem('my-habits');
    return saved ? JSON.parse(saved) : initialHabits;
  });

  useEffect(() => {
    localStorage.setItem('my-habits', JSON.stringify(habits));
  }, [habits]);

  const stats = useMemo<Stats>(() => {
    const activeHabits = habits.filter(h => h.isActive && !h.isArchived).length;
    const completedToday = habits.filter(h => h.completed).length;
    const baseAchievements = 124; 
    
    return {
      activeHabits,
      longestStreak: 12,
      totalAchievements: baseAchievements + completedToday
    };
  }, [habits]);

  const toggleHabit = (id: string) => {
    setHabits(prev => prev.map(habit => {
      if (habit.id === id) {
        const newState = !habit.completed;
        if (newState) {
          toast.success(`أحسنت! حصلت على ${habit.points} نقطة`, {
            description: habit.title,
            position: 'top-center'
          });
        }
        return { ...habit, completed: newState };
      }
      return habit;
    }));
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="pt-2">
              <h2 className="text-2xl font-bold">مرحباً بك، يا بطل 👋</h2>
              <p className="text-muted-foreground text-sm mt-1">ابدأ يومك بنشاط وحافظ على عاداتك.</p>
            </div>
            <MotivationBanner />
            <DualCalendarWidget />
            <QuickStatsDashboard stats={stats} />
            <DailyHabitList habits={habits.filter(h => !h.isArchived)} onToggle={toggleHabit} />
          </div>
        );
      case 'habits':
        return <HabitsManagement habits={habits} />;
      case 'farm':
        return <FarmShop />;
      case 'timer':
        return <FocusTimer />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return null;
    }
  };

  const getScreenTitle = () => {
    switch (currentScreen) {
      case 'habits': return 'إدارة العادات';
      case 'farm': return 'المزرعة والمتجر';
      case 'timer': return 'مؤقت التركيز';
      case 'settings': return 'الإعدادات';
      default: return 'مزرعة عاداتي';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-cairo overflow-x-hidden" dir="rtl">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[60] bg-background/80 backdrop-blur-md border-b border-border px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsDrawerOpen(true)}
            className="p-2 hover:bg-muted rounded-xl transition-colors active:scale-95"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            {currentScreen === 'dashboard' && (
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-sm shadow-primary/20">
                M
              </div>
            )}
            <h1 className="font-bold text-lg">{getScreenTitle()}</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {currentScreen === 'dashboard' && (
            <button className="p-2 text-muted-foreground hover:bg-muted rounded-xl transition-colors">
              <Bell className="w-5 h-5" />
            </button>
          )}
          <button 
            onClick={() => setCurrentScreen('settings')}
            className={`w-9 h-9 rounded-xl border border-border overflow-hidden flex items-center justify-center transition-all ${currentScreen === 'settings' ? 'ring-2 ring-primary border-transparent' : 'bg-secondary'}`}
          >
            <User className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-5 pt-20 pb-24 min-h-screen">
        {renderScreen()}
      </main>

      {/* Navigation Drawer */}
      <NavigationDrawer 
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        currentScreen={currentScreen}
        onNavigate={setCurrentScreen}
      />

      {/* Bottom Navigation (Mobile UI feel) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border px-8 h-16 flex items-center justify-between md:hidden z-50">
        <button 
          onClick={() => setCurrentScreen('dashboard')}
          className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === 'dashboard' ? 'text-primary' : 'text-muted-foreground'}`}
        >
          <Home className={`w-5 h-5 ${currentScreen === 'dashboard' ? '' : 'opacity-60'}`} />
          <span className="text-[10px] font-bold">الرئيسية</span>
        </button>

        <button 
          onClick={() => setCurrentScreen('habits')}
          className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === 'habits' ? 'text-primary' : 'text-muted-foreground'}`}
        >
          <LayoutList className={`w-5 h-5 ${currentScreen === 'habits' ? '' : 'opacity-60'}`} />
          <span className="text-[10px] font-medium">العادات</span>
        </button>

        <div className="relative -top-6">
          <button 
            onClick={() => setCurrentScreen('habits')}
            className="w-14 h-14 bg-primary rounded-full shadow-lg shadow-primary/40 flex items-center justify-center text-primary-foreground active:scale-90 transition-transform border-4 border-background"
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>

        <button 
          onClick={() => setCurrentScreen('timer')}
          className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === 'timer' ? 'text-primary' : 'text-muted-foreground'}`}
        >
          <Timer className={`w-5 h-5 ${currentScreen === 'timer' ? '' : 'opacity-60'}`} />
          <span className="text-[10px] font-medium">التركيز</span>
        </button>

        <button 
          onClick={() => setCurrentScreen('settings')}
          className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === 'settings' ? 'text-primary' : 'text-muted-foreground'}`}
        >
          <User className={`w-5 h-5 ${currentScreen === 'settings' ? '' : 'opacity-60'}`} />
          <span className="text-[10px] font-medium">الملف</span>
        </button>
      </nav>

      <Toaster dir="rtl" position="top-center" />
    </div>
  );
}

export default App;