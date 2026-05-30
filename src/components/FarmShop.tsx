import React from 'react';
import { Store, Coins, Sparkles, Sprout, Hammer, Flower2 } from 'lucide-react';
import { shopItems } from '../data/mockData';
import { motion } from 'framer-motion';

const FarmShop: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      {/* Farm Preview */}
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl group border-4 border-card">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/c4e6a5e7-a658-4a9f-9ac6-13f7c37017d3/farm-background-ace0f783-1780139361172.webp" 
          alt="Virtual Farm"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
          <div className="flex items-center justify-between text-white">
            <div>
              <h3 className="text-xl font-bold">مزرعتي السعيدة</h3>
              <p className="text-xs opacity-80">المستوى 5 • مزارع مجتهد</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-2xl flex items-center gap-2 border border-white/20">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span className="font-bold">2,450 XP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Points & Stats */}
      <div className="bg-card border border-border p-5 rounded-3xl flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 border border-amber-100 shadow-inner">
            <Coins className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-medium">الرصيد الحالي</p>
            <h4 className="text-xl font-black text-foreground">1,250 <span className="text-sm font-bold text-muted-foreground">نقطة</span></h4>
          </div>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-xl text-xs font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform">
          كسب المزيد
        </button>
      </div>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {[
          { icon: Sprout, label: 'بذور', color: 'bg-green-500' },
          { icon: Hammer, label: 'أدوات', color: 'bg-blue-500' },
          { icon: Flower2, label: 'ديكور', color: 'bg-purple-500' },
          { icon: Store, label: 'الكل', color: 'bg-primary' },
        ].map((cat, i) => (
          <button key={i} className="flex flex-col items-center gap-2 min-w-[70px]">
            <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-black/5`}>
              <cat.icon className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-muted-foreground">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Shop Items */}
      <div className="grid grid-cols-2 gap-4">
        {shopItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-card border border-border p-4 rounded-3xl flex flex-col items-center text-center group hover:border-primary/50 transition-colors shadow-sm"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h5 className="font-bold text-sm mb-2">{item.title}</h5>
            <div className="mt-auto w-full">
              <button className="w-full flex items-center justify-center gap-2 bg-secondary/80 hover:bg-primary hover:text-primary-foreground p-2 rounded-xl transition-all font-bold text-xs">
                <Coins className="w-3 h-3" />
                <span>{item.price}</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FarmShop;