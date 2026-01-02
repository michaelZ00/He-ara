// import React from 'react';
import { motion } from 'framer-motion';
import FeatureSwitcher from './FeatureSwitcher';
import LightQuality from './LightQuality';
import PhoneApp from './PhoneApp';
import CtaSection from './CtaSection';
import Heara from './assets/Logo.webp';

const Logo = () => (
  <div className="flex items-center gap-2 group">
    <img src={Heara} alt="הארה" className="h-12 object-contain" />
  </div>
);

/**
 * App Component
 * 
 * The main entry point for the landing page application.
 * It orchestrates the layout, including the Hero section, feature components, and the footer.
 * 
 * Structure:
 * - Navbar (Logo)
 * - Hero Section (Main Title & Intro)
 * - FeatureSwitcher (Interactive Tabs)
 * - LightQuality (Features Grid)
 * - PhoneApp (Mobile App Showcase)
 * - CtaSection (Call to Action)
 * - Footer (Contact & Socials)
 */
const App = () => {
  // Configuration for text content and links
  // Centralizes all text to make updates easier without touching the JSX structure
  const content = {
    hero: {
      welcome: "ברוכים הבאים",
      titleStart: "לעולם של ",
      titleHighlight: "אור",
      titleEnd: " וטכנולוגיה",
      descStart: "אנחנו ב",
      brandName: "הארה",
      descMiddle: " לא רק מוכרים נורות. אנחנו יוצרים ",
      descHighlight: " חוויות ויזואליות ",
      descEnd: " באמצעות שליטה חכמה שמציבה את האווירה בדיוק בידיים שלכם."
    },
    footer: {
      phone: "055-7040115",
      email: "info@he-ara.co.il",
      copyright: "© 2025 הארה תאורה חכמה",
      tagline: "The Art of Light Control",
      links: {
        facebook: "https://www.facebook.com/people/%D7%94%D7%90%D7%A8%D7%94-%D7%90%D7%95%D7%95%D7%99%D7%A8%D7%AA-%D7%A9%D7%9C%D7%99%D7%98%D7%94-%D7%91%D7%97%D7%9C%D7%9C/61572885532688/",
        instagram: "https://www.instagram.com/heara.il/",
        whatsapp: "https://wa.me/972557040115"
      },
      storeLinks: {
        ios: "#",
        android: "#"
      }
    }
  };

  return (
    // Main Application Wrapper
    <div className="min-h-screen bg-zinc-950 text-zinc-100 dir-rtl relative overflow-x-hidden font-sans" dir="rtl">
      
      {/* Ambient Background Light */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Logo />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-24 px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
              <span className="block text-zinc-400 text-2xl md:text-3xl font-medium mb-4 tracking-[0.2em] uppercase">{content.hero.welcome}</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">{content.hero.titleStart}</span>
              <span className="text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.5)]">{content.hero.titleHighlight}</span> 
              <span className="block md:inline text-zinc-100 italic font-serif">{content.hero.titleEnd}</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-zinc-400 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              {content.hero.descStart}<span className="text-white font-medium italic">{content.hero.brandName}</span>{content.hero.descMiddle}
              <span className="text-zinc-200">{content.hero.descHighlight}</span> 
              {content.hero.descEnd}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Feature Components */}
      <FeatureSwitcher />

     <LightQuality />

      <PhoneApp />

      {/* Call To Action Section */}
      <CtaSection />


      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-center text-center md:text-right">
          {/* Footer Logo */}
          <div className="flex justify-center md:justify-start">
            <Logo />
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col items-center gap-3">
             <a href={`tel:${content.footer.phone}`} className="text-zinc-300 hover:text-yellow-400 font-bold transition flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                {content.footer.phone}
             </a>
             <a href={`mailto:${content.footer.email}`} className="text-zinc-500 hover:text-white transition flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                {content.footer.email}
             </a>
             <p className="text-zinc-600 text-xs mt-4">{content.footer.copyright}</p>
          </div>

          {/* Social Links & Tagline */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-zinc-500 text-sm tracking-widest uppercase italic">{content.footer.tagline}</p>
            <div className="flex gap-6">
               {/* Facebook Icon */}
               <a href={content.footer.links.facebook} target="_blank" className="text-zinc-500 hover:text-yellow-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
               </a>
               {/* Instagram Icon */}
               <a href={content.footer.links.instagram} target="_blank" className="text-zinc-500 hover:text-yellow-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
               </a>
               {/* WhatsApp Icon */}
               <a href={content.footer.links.whatsapp} target="_blank" className="text-zinc-500 hover:text-yellow-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.506-.669-.514-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.084 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
               </a>
            </div>

            {/* App Store & Google Play Icons */}
            <div className="flex gap-4 mt-2 pt-4 border-t border-zinc-900/50">
               <a href={content.footer.storeLinks.ios} className="text-zinc-500 hover:text-white transition-colors" title="Download on App Store">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.93 3.69-.93.95 0 1.93.29 2.6.74-.68.98-1.11 2.85-.11 4.34 1.1 1.65 2.79 1.93 2.9 1.96-.02.09-.44 1.52-1.46 3.12zm-4.03-16.5c.6 1.13-.05 2.75-1.24 3.25-.97.34-2.29-.27-2.6-1.5-.36-1.37.99-3.05 2.24-3.08.32 0 .91.09 1.6.33z"/></svg>
               </a>
               <a href={content.footer.storeLinks.android} className="text-zinc-500 hover:text-white transition-colors" title="Get it on Google Play">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91,3.34,2.39,3.84,2.15L13.69,12L3.84,21.85C3.34,21.6,3,21.09,3,20.5 M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12 M20.16,10.81C20.5,11.08,20.75,11.5,20.75,12c0,0.5-0.25,0.92-0.59,1.19l-2.2,1.23L15.38,12l2.58-2.42L20.16,10.81 M16.81,8.88L14.54,11.15L6.05,2.66l10.76,6.22"/></svg>
               </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;