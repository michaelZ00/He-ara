// import React from "react";
import { motion } from 'framer-motion';

/**
 * PhoneApp Component
 * 
 * Displays a section highlighting the mobile app capabilities.
 * Includes a text description with a feature list and an animated phone UI visualization.
 */
const PhoneApp = () =>  {
  // Text content configuration
  const content = {
    title: "שליטה מלאה מהנייד",
    description: "האפליקציה החכמה שלנו מאפשרת לכם לשלוט על עוצמת האור, לקבוע טיימרים, וליצור תרחישי תאורה מותאמים אישית - הכל בלחיצת כפתור מהסמארטפון שלכם."
  };

  // List of features displayed with checkmarks
  const features = [
    "כיבוי והדלקה מכל מקום בעולם",
    "תזמון שעות פעילות (שעון שבת חכם)",
    "תמיכה ב-Google Home ו-Alexa"
  ];

    return (
      <>
             {/* Smart Control Section */}
      <section className="max-w-7xl mx-4 md:mx-auto py-16 bg-zinc-900/30 relative overflow-hidden border border-white/10 rounded-3xl shadow-2xl mb-12">
        <div className="max-w-full mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          
          {/* Left Side: Text Content & Features List */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-right"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{content.title}</h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              {content.description}
            </p>
            <ul className="space-y-4 text-zinc-300 inline-block text-right">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-sm">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Right Side: Animated Phone Visualization */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
             {/* Abstract Phone UI Representation */}
             {/* This container creates the phone frame with rotation effects on hover */}
             <div className="relative z-10 bg-zinc-950 rounded-[2.5rem] border-4 border-zinc-800 p-2 shadow-2xl w-[260px] mx-auto transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
                <div className="bg-zinc-900 rounded-[2rem] overflow-hidden h-[500px] relative border border-zinc-800">
                  {/* Screen Header */}
                  <div className="h-14 border-b border-zinc-800 flex items-center justify-between px-6">
                    <span className="text-xs text-zinc-500">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-4 bg-zinc-800 rounded-full"></div>
                      <div className="w-4 h-4 bg-zinc-800 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Screen Body */}
                  <div className="p-6 flex flex-col gap-6">
                    <div className="text-center mb-4">
                      <div className="text-zinc-500 text-sm mb-1">בוקר טוב</div>
                      <div className="text-xl font-bold">הבית שלי</div>
                    </div>
                    
                    {/* Device Card 1 (Active) */}
                    <div className="bg-zinc-800/50 p-4 rounded-2xl border border-yellow-500/30 relative overflow-hidden">
                      <div className="absolute inset-0 bg-yellow-500/5"></div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                        </div>
                        <div className="w-8 h-4 bg-yellow-500 rounded-full relative">
                          <div className="w-4 h-4 bg-white rounded-full absolute right-0 shadow-sm"></div>
                        </div>
                      </div>
                      <div className="font-bold">סלון</div>
                      <div className="text-xs text-yellow-500 mt-1">דולק • 80%</div>
                    </div>

                    {/* Device Card 2 (Inactive) */}
                    <div className="bg-zinc-800/30 p-4 rounded-2xl border border-zinc-700/30">
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-zinc-700/30 flex items-center justify-center text-zinc-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21h6a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2z"/><path d="M9 3h6a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M6 3v18"/><path d="M18 3v18"/></svg>
                        </div>
                        <div className="w-8 h-4 bg-zinc-700 rounded-full relative">
                          <div className="w-4 h-4 bg-zinc-500 rounded-full absolute left-0 shadow-sm"></div>
                        </div>
                      </div>
                      <div className="font-bold text-zinc-400">חדר שינה</div>
                      <div className="text-xs text-zinc-600 mt-1">כבוי</div>
                    </div>
                  </div>
                </div>
             </div>
             {/* Glow behind phone */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-yellow-500/20 blur-[80px] -z-10 rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </section>
      </>
    );
};

export default PhoneApp;    
