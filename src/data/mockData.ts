import { Quote, Habit, ShopItem } from '../types';

export const quotes: Quote[] = [
  { id: 1, text: "وَالْعَصْرِ (1) إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ", source: "سورة العصر" },
  { id: 2, text: "نِعْمَتَانِ مَغْبُونٌ فِيهِمَا كَثِيرٌ مِنَ النَّاسِ: الصِّحَّةُ وَالْفَرَاغُ", source: "حديث شريف" },
  { id: 3, text: "وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ", source: "سورة النجم" },
  { id: 4, text: "أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ", source: "حديث شريف" },
  { id: 5, text: "إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلاً أَنْ يُتْقِنَهُ", source: "حديث شريف" }
];

export const initialHabits: Habit[] = [
  { id: '1', title: 'صلاة الفجر في وقتها', points: 50, completed: false, isActive: true },
  { id: '2', title: 'ورد القرآن اليومي', points: 30, completed: true, isActive: true },
  { id: '3', title: 'أذكار الصباح والمساء', points: 20, completed: false, isActive: true },
  { id: '4', title: 'الرياضة لمدة 30 دقيقة', points: 40, completed: false, isActive: true },
  { id: '5', title: 'شرب 2 لتر ماء', points: 15, completed: true, isActive: true },
  { id: '6', title: 'القراءة لمدة 20 دقيقة', points: 25, completed: false, isActive: true }
];

export const shopItems: ShopItem[] = [
  { id: 's1', title: 'بذور القمح الذهبي', price: 100, icon: '🌾', category: 'seed' },
  { id: 's2', title: 'شجرة الزيتون المباركة', price: 500, icon: '🌳', category: 'seed' },
  { id: 's3', title: 'فزاعة الطيور', price: 150, icon: '🎎', category: 'decoration' },
  { id: 's4', title: 'جرار حديث', price: 1000, icon: '🚜', category: 'tool' },
  { id: 's5', title: 'بيت ريفي خشبي', price: 2000, icon: '🏡', category: 'decoration' },
];