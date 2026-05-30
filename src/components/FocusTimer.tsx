import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Timer as TimerIcon, Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

const FocusTimer: React.FC = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(25 * 60);

  useEffect(() => {
    let interval: any = null;
    if (isActive && totalSeconds > 0) {
      interval = setInterval(() => {
        setTotalSeconds((prev) => prev - 1);
        setMinutes(Math.floor((totalSeconds - 1) / 60));
        setSeconds((totalSeconds - 1) % 60);
      }, 1000);
    } else if (totalSeconds === 0) {
      setIsActive(false);
      clearInterval(interval);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, totalSeconds]);

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
    setTotalSeconds(25 * 60);
  };

  const adjustTime = (amount: number) => {
    if (isActive) return;
    const newMins = Math.max(1, Math.min(120, minutes + amount));
    setMinutes(newMins);
    setSeconds(0);
    setTotalSeconds(newMins * 60);
  };

  const progress = (totalSeconds / (minutes * 60 || 1)) * 100;

  return (
    <div className="space-y-10 flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500 py-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
          <TimerIcon className="w-6 h-6 text-primary" />
          <span>مؤقت التركيز</span>
        </h2>
        <p className="text-muted-foreground text-sm">ركز على عادتك وابتعد عن المشتتات</p>
      </div>

      {/* Circular Timer Display */}
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Progress Circle SVG */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="128"
            cy="128"
            r="120"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="12"
            className="text-muted/20"
          />
          <motion.circle
            cx="128"
            cy="128"
            r="120"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="12"
            strokeDasharray="753.98"
            strokeDashoffset={753.98 - (753.98 * progress) / 100}
            strokeLinecap="round"
            className="text-primary"
            transition={{ duration: 0.5 }}
          />
        </svg>

        <div className="relative flex flex-col items-center">
          <span className="text-5xl font-black tabular-nums tracking-tighter">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </span>
          <span className="text-xs font-bold text-muted-foreground uppercase mt-2">دقائق</span>
        </div>
      </div>

      {/* Time Adjusters (Manual set) */}
      {!isActive && (
        <div className="flex items-center gap-8">
          <button 
            onClick={() => adjustTime(-5)}
            className="p-3 bg-card border border-border rounded-2xl hover:bg-muted transition-colors active:scale-90"
          >
            <Minus className="w-6 h-6" />
          </button>
          <span className="font-bold text-lg">{minutes} دقيقة</span>
          <button 
            onClick={() => adjustTime(5)}
            className="p-3 bg-card border border-border rounded-2xl hover:bg-muted transition-colors active:scale-90"
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Controls */}
      <div className="flex items-center gap-4 w-full max-w-xs">
        <button 
          onClick={resetTimer}
          className="flex-1 flex items-center justify-center gap-2 bg-secondary/80 py-4 rounded-3xl font-bold active:scale-95 transition-all"
        >
          <RotateCcw className="w-5 h-5" />
          <span>إعادة</span>
        </button>
        <button 
          onClick={toggleTimer}
          className={`flex-[2] flex items-center justify-center gap-2 py-4 rounded-3xl font-bold shadow-lg active:scale-95 transition-all ${
            isActive 
              ? "bg-orange-500 text-white shadow-orange-500/20" 
              : "bg-primary text-primary-foreground shadow-primary/20"
          }`}
        >
          {isActive ? (
            <>
              <Pause className="w-6 h-6 fill-current" />
              <span>إيقاف مؤقت</span>
            </>
          ) : (
            <>
              <Play className="w-6 h-6 fill-current" />
              <span>ابدأ الآن</span>
            </>
          )}
        </button>
      </div>

      {/* Quick Presets */}
      <div className="grid grid-cols-3 gap-3 w-full">
        {[10, 25, 50].map((preset) => (
          <button
            key={preset}
            onClick={() => {
              if (isActive) return;
              setMinutes(preset);
              setSeconds(0);
              setTotalSeconds(preset * 60);
            }}
            className={`p-3 rounded-2xl border text-sm font-bold transition-all ${
              minutes === preset ? "bg-primary/10 border-primary text-primary" : "bg-card border-border text-muted-foreground hover:border-primary/50"
            }`}
          >
            {preset} د
          </button>
        ))}
      </div>
    </div>
  );
};

export default FocusTimer;