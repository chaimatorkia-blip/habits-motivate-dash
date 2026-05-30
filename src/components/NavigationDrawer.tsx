import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Home, 
  LayoutList, 
  Store, 
  Timer, 
  Settings as SettingsIcon, 
  LogOut,
  ChevronLeft
} from 'lucide-react';
import { Screen } from '../types';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({ 
  isOpen, 
  onClose, 
  currentScreen, 
  onNavigate 
}) => {
  const menuItems = [
    { id: 'dashboard', label: 'الرئيسية', icon: Home },
    { id: 'habits', label: 'إدارة العادات', icon: LayoutList },
    { id: 'farm', label: 'المزرعة والمتجر', icon: Store },
    { id: 'timer', label: 'مؤقت التركيز', icon: Timer },
    { id: 'settings', label: 'الإعدادات', icon: SettingsIcon },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[280px] bg-background border-l border-border z-[101] shadow-2xl flex flex-col"
            dir="rtl"
          >
            {/* Header */}
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-lg shadow-primary/20">
                  M
                </div>
                <div>
                  <h2 className="font-bold text-lg">مزرعة عاداتي</h2>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">My Habits Farm</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
              {menuItems.map((item) => {
                const isActive = currentScreen === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id as Screen);
                      onClose();
                    }}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group ${
                      isActive 
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" 
                        : "hover:bg-muted text-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <item.icon className={`w-5 h-5 ${isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"}`} />
                      <span className="font-semibold">{item.label}</span>
                    </div>
                    {isActive && <ChevronLeft className="w-4 h-4" />}
                  </button>
                );
              })}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-border">
              <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-destructive hover:bg-destructive/5 transition-colors">
                <LogOut className="w-5 h-5" />
                <span className="font-semibold">تسجيل الخروج</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NavigationDrawer;