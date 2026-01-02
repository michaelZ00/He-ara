import React from 'react';
import { motion } from 'framer-motion';


/**
 * LightQuality Component
 * 
 * This component renders the "About" or "Quality" section of the landing page.
 * It highlights key features (Energy Saving, Durability, Eye Health) using a grid layout.
 * 
 * Dependencies:
 * - framer-motion: Used for scroll animations and hover effects.
 */
const LightQuality = () => {
  // Configuration array for the feature cards.
  // Edit this array to change the content (Title, Icon, Description) without touching the JSX.
  const features = [
    { title: "חיסכון באנרגיה", icon: "⚡", desc: "ניצול מקסימלי של חשמל עם טכנולוגיית LED מתקדמת." },
    { title: "עמידות לשנים", icon: "⏳", desc: "הנורות שלנו מתוכננות לעבוד אלפי שעות ללא הפסקה." },
    { title: "בריאות לעיניים", icon: "👁️", desc: "אור יציב ללא הבהובים השומר על הראייה שלכם." }
  ];

  return (

    // Section container with ID "about" for navigation anchors
<section id="about" className="py-32 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">האיכות שמאחורי האור</h2>
          <div className="h-1 w-30 bg-yellow-500 mx-auto rounded-full mb-6" />
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            טכנולוגיית הדימור שלנו הונדסה כדי להעניק לכם ערך מוסף בכל הדלקת אור.
          </p>
        </div>

        {/* Grid of Feature Cards with Staggered Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => (
            // Individual Feature Card
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 hover:border-yellow-400/30 transition-all group backdrop-blur-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/5 blur-3xl rounded-full -mr-10 -mt-10 group-hover:bg-yellow-500/10 transition-colors" />
              <div className="w-16 h-16 bg-zinc-800 text-yellow-500 rounded-2xl flex items-center justify-center mb-8 text-3xl shadow-inner border border-zinc-700/50">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-md font-light leading-7">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
  )
}

export default LightQuality;