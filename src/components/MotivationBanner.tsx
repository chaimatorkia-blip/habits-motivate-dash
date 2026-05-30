import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quotes } from '../data/mockData';

const MotivationBanner: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-32 md:h-40 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/90 to-primary shadow-lg border border-primary/20 flex items-center justify-center px-6 text-center">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')] pointer-events-none"></div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground font-amiri leading-relaxed mb-2">
            "{quotes[index].text}"
          </p>
          <span className="text-sm md:text-base text-primary-foreground/80 font-cairo">
            — {quotes[index].source}
          </span>
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute bottom-3 flex gap-1.5">
        {quotes.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-6 bg-primary-foreground" : "w-1.5 bg-primary-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MotivationBanner;