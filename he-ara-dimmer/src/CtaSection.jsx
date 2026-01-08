import React from "react";
import { motion } from "framer-motion";
import trackUserVisit from "./CtaCounter";


/**
 * CtaSection Component
 * 
 * Renders the "Call to Action" section at the bottom of the page.
 * Encourages users to purchase the product with a prominent button.
 */
const CtaSection = () => {
  // Configuration object for text and links
  // Modify this object to update the content without touching the layout structure
  const content = {
    title: "מוכנים לשדרג את הבית",
    highlight: "לסטנדרט טכנולוגי חדש ?",
    buttonText: "הזמינו עכשיו את נורת Sky",
    // buttonLink: "https://he-ara.co.il/%d7%93%d7%99%d7%9e%d7%a8-%d7%90%d7%99%d7%a0%d7%93%d7%a7%d7%a1/",
    subText: "והצטרפו לאלפי בתים שכבר מעצבים באור"
  };

  return (
<section className="py-24 relative overflow-hidden flex justify-center">

  <motion.div 
    className="w-[90%] md:w-[80%] max-w-7xl relative z-10 overflow-hidden rounded-[40px] border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-md"
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >

    {/* Background Overlay: Adds a subtle yellow tint behind the content */}
    <div className="absolute inset-0 bg-yellow-500/[0.03] pointer-events-none" />
    
    {/* Content Wrapper: Handles padding and text alignment */}
    <div className="py-16 md:py-24 px-6 text-center relative z-10">
      <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tight">
        {content.title} <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-zinc-600">
          {content.highlight}
        </span>
      </h3>
      
      <a 
        href={content.buttonLink}
        onClick={trackUserVisit}
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black text-xl font-bold px-14 py-5 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(234,179,8,0.3)] hover:shadow-[0_25px_50px_rgba(234,179,8,0.5)]"
      >
        {content.buttonText}
      </a>
      
      {/* Footer Text Container: Groups the subtext and potential decorative elements */}
      <div className="mt-10 flex flex-col items-center gap-2">
        <p className="text-zinc-400 font-medium tracking-wide">
          {content.subText}
        </p>

        {/* <div className="h-1 w-12 bg-yellow-500/30 rounded-full" /> */}
      </div>
    </div>
  </motion.div>
</section>
    )
}

export default CtaSection;