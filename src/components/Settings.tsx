import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  FileText, 
  Camera, 
  Moon, 
  Sun, 
  Bell, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const Settings: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      <h2 className="text-2xl font-bold text-foreground">الإعدادات</h2>

      {/* Profile Section */}
      <section className="space-y-4">
        <h3 className="text-sm font-bold text-muted-foreground px-1 uppercase tracking-wider">الملف الشخصي</h3>
        <div className="bg-card border border-border p-6 rounded-3xl space-y-6 shadow-sm">
          <div className="flex flex-col items-center gap-3">
            <div className="relative group">
              <div className="w-24 h-24 rounded-full bg-secondary border-4 border-background overflow-hidden flex items-center justify-center">
                <User className="w-12 h-12 text-muted-foreground" />
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-primary text-primary-foreground rounded-full shadow-lg active:scale-90 transition-transform">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-lg">أحمد المزارع</h4>
              <p className="text-xs text-muted-foreground">عضو منذ مايو 2024</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-2xl border border-border/50">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-[10px] text-muted-foreground">البريد الإلكتروني</p>
                <p className="text-sm font-semibold">ahmed@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-2xl border border-border/50">
              <Phone className="w-5 h-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-[10px] text-muted-foreground">رقم الهاتف</p>
                <p className="text-sm font-semibold">966 50 123 4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-2xl border border-border/50">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-[10px] text-muted-foreground">تاريخ الميلاد</p>
                <p className="text-sm font-semibold">15 يونيو 1995</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-2xl border border-border/50">
              <FileText className="w-5 h-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-[10px] text-muted-foreground">النبذة التعريفية</p>
                <p className="text-sm font-semibold">أسعى لبناء عادات صحية ومستدامة بمساعدة التقنية.</p>
              </div>
            </div>
          </div>
          
          <button className="w-full py-3 bg-secondary/80 hover:bg-secondary rounded-2xl font-bold text-sm transition-colors">
            تعديل البيانات
          </button>
        </div>
      </section>

      {/* App Settings */}
      <section className="space-y-4">
        <h3 className="text-sm font-bold text-muted-foreground px-1 uppercase tracking-wider">إعدادات التطبيق</h3>
        <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
          {/* Theme Toggle */}
          <div className="flex items-center justify-between p-5 border-b border-border hover:bg-muted/30 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-amber-100 rounded-xl text-amber-600">
                {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </div>
              <div>
                <h4 className="font-bold text-sm">وضع المظهر</h4>
                <p className="text-[10px] text-muted-foreground">{darkMode ? 'الوضع الليلي' : 'الوضع الفاتح'}</p>
              </div>
            </div>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-6 rounded-full p-1 transition-colors ${darkMode ? 'bg-primary' : 'bg-muted'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${darkMode ? '-translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>

          {/* Notifications */}
          <div className="flex items-center justify-between p-5 border-b border-border hover:bg-muted/30 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-100 rounded-xl text-blue-600">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm">التنبيهات</h4>
                <p className="text-[10px] text-muted-foreground">تذكير يومي بالعادات</p>
              </div>
            </div>
            <button 
              onClick={() => setNotifications(!notifications)}
              className={`w-12 h-6 rounded-full p-1 transition-colors ${notifications ? 'bg-primary' : 'bg-muted'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${notifications ? '-translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>

          {/* Privacy & Security */}
          <div className="flex items-center justify-between p-5 hover:bg-muted/30 transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-green-100 rounded-xl text-green-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm">الخصوصية والأمان</h4>
                <p className="text-[10px] text-muted-foreground">إدارة بياناتك وحمايتها</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;