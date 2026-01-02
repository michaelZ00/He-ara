import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bgImage from './assets/A8959791-11.png';
import Sun from './assets/sun.png';
import Moon from './assets/full-moon.png';
import SunSet from './assets/sun-set.png';
import DayTime from './assets/DayTime.png';
import NightTime2 from './assets/NightTime2.jpeg';
import NightTime3 from './assets/NightTime3.png';



/**
 * FeatureSwitcher Component
 * 
 * This component displays an interactive tab/slider section.
 * It allows users to switch between different lighting modes (Day, Evening, Night)
 * and see a corresponding image and description.
 * 
 * Features:
 * - Clickable tabs for desktop.
 * - Horizontal scroll/snap for mobile.
 * - Animated image transitions.
 */
const FeatureSwitcher = () => {
  const [activeTab, setActiveTab] = useState(0);
  const scrollContainerRef = useRef(null);

  // Configuration array for the lighting modes.
  // Each object represents a tab with its specific content, icon, and color theme.
  const features = [
    {
      title: "ביום: אור מלא, חזק ואנרגטי להערת החלל והשראה. ",
      info: "",
      image: DayTime, 
      icon: Sun,
      color: "bg-yellow-500"
    },
    {
      title: "בערב: קצת עמעום הופך את הסלון לחלל מרגיע, אינטימי ויוקרתי. ",
      info: "",
      image: NightTime2,
      icon: SunSet,
      color: "bg-amber-500"
    },
    {
      title: "בלילה: שליטה על האור תיתן לנו אפשרות להתכונן לשינה, ועדין להשאיר אווירה נעימה.",
      info: "",
      image: NightTime3,
      icon: Moon,
      color: "bg-zinc-100"
    }
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerCenter = container.getBoundingClientRect().left + container.clientWidth / 2;
      
      let closestIndex = 0;
      let minDistance = Number.MAX_VALUE;

      Array.from(container.children).forEach((child, index) => {
        const rect = child.getBoundingClientRect();
        const childCenter = rect.left + rect.width / 2;
        const distance = Math.abs(containerCenter - childCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeTab) {
        setActiveTab(closestIndex);
      }
    }
  };

  return (
    // Main Section Container
    <section className="max-w-[100rem] mx-4 md:mx-auto py-12 md:py-20 relative bg-zinc-900 border border-white/10 text-white px-4 md:px-6 rounded-3xl shadow-2xl overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover opacity-50" />
      </div>

      {/* Content Container */}
      <div className="max-w-full mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center md:text-right">אור הוא לא רק בשביל לראות, הוא גם בשביל האווירה. </h2>
        
        <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center ">
          
          {/* LEFT SIDE: THE IMAGE DISPLAY */}
          {/* Displays the active feature image with a fade transition */}
          <div className="w-full md:w-2/3">
            <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  src={features[activeTab].image}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-fill"
                />
              </AnimatePresence>
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </div>

          {/* RIGHT SIDE: THE INFO & TABS */}
          {/* Contains the clickable buttons (desktop) or scrollable list (mobile) */}
          <div className="w-full md:w-1/3">
            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              dir="rtl"
              className="flex md:block overflow-x-auto md:overflow-visible gap-4 md:space-y-4 pb-4 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {features.map((feature, idx) => (
                // Individual Tab/Button
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`relative w-full md:min-w-full flex-shrink-0 text-right p-4 md:p-6 rounded-2xl border transition-all duration-300 snap-center overflow-hidden ${
                    activeTab === idx 
                    ? 'bg-white/5 border-white/20 shadow-lg backdrop-blur-sm' 
                    : 'border-transparent opacity-50 hover:opacity-100 hover:bg-white/5'
                  }`}
                >
                  {activeTab === idx && (
                    // Active State Visuals (Glow effects)
                    <>
                      <motion.div layoutId="glow-line" className={`absolute right-0 top-0 bottom-0 w-1.5 ${feature.color}`} />
                      <motion.div layoutId="glow-blur" className={`absolute right-0 top-0 bottom-0 w-16 ${feature.color} blur-xl opacity-40`} />
                    </>
                  )}

                  {/* Tab Content (Icon + Title) */}
                  <div className="flex items-center gap-4 w-full relative z-10">
                    <img src={feature.icon} alt="" className={`w-8 h-8 flex-shrink-0 ${activeTab === idx ? 'opacity-100' : 'opacity-50 grayscale'}`} />
                    <h3 className="flex-1 min-w-0 text-base md:text-lg font-bold leading-snug break-words whitespace-normal text-right">{feature.title}</h3>
                  </div>
                  
                  {/* Expandable Description (Visible only when active) */}
                  {activeTab === idx && (
                    <motion.p 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="mt-3 text-zinc-400 leading-relaxed"
                    >
                      {feature.info}
                    </motion.p>
                  )}
                </button>
              ))}
            </div>
            {/* Mobile Scroll Indicator (Dots/Bars) */}
            <div className="flex md:hidden justify-center gap-2 mt-4">
              {features.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    activeTab === idx ? 'w-8 bg-white' : 'w-4 bg-zinc-700'
                  }`}
                />
              ))}
            </div>
            {/* ------------------------------- */}
            
     
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSwitcher;