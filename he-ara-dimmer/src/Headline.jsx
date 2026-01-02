import React, { useState } from 'react';

const Headline = () => {
  const [brightness, setBrightness] = useState(80);

  // פונקציה לחישוב צבע האור לפי הבהירות (מלבן חזק לצהוב חם)
  const getLightColor = () => {
    if (brightness > 70) return 'rgba(255, 255, 255, '; // לבן
    if (brightness > 40) return 'rgba(255, 240, 200, '; // צהוב בהיר
    return 'rgba(255, 200, 100, '; // כתום/חם
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dir-rtl" dir="rtl">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight text-amber-600">GOLDEN<span className="text-slate-800">LIGHT</span></div>
          <div className="hidden md:flex gap-8 font-medium">
            <a href="#about" className="hover:text-amber-600 transition">אודות</a>
            <a href="#demo" className="hover:text-amber-600 transition">הדמיה</a>
            <a href="#contact" className="hover:text-amber-600 transition">צור קשר</a>
          </div>
          <button className="bg-slate-900 text-white px-5 py-2 rounded-full font-medium hover:bg-amber-600 transition">
            לקטלוג
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            ברוכים הבאים לעולם של <span className="text-amber-500">אור</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            אנחנו לא רק מוכרים נורות, אנחנו מעצבים את הרגעים שלכם. 
            טכנולוגיית הדימור שלנו מאפשרת לכם לשלוט באווירה בדיוק מושלם.
          </p>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">נסו בעצמכם: שליטה בעוצמת האור</h2>
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 aspect-video flex items-center justify-center">
            {/* שכבת האור המשתנה */}
            <div 
              className="absolute inset-0 transition-all duration-500 ease-out"
              style={{ 
                backgroundColor: `${getLightColor()}${brightness / 100})`,
                boxShadow: `inset 0 0 150px rgba(0,0,0,${1 - brightness/100})`
              }}
            />
            
            {/* תוכן בתוך החלל המדומה */}
            <div className="relative text-center z-10 p-10 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
              <p className="text-white text-lg font-medium mb-2">עוצמת תאורה: {brightness}%</p>
              <p className="text-white/80 text-sm">
                {brightness > 70 ? "מצב יום: ריכוז ואנרגיה" : brightness > 30 ? "מצב ערב: אווירה חמה" : "מצב לילה: שלווה ורוגע"}
              </p>
            </div>
          </div>

          {/* Slider Control */}
          <div className="mt-10 max-w-md mx-auto">
            <input 
              type="range" 
              min="5" max="100" 
              value={brightness} 
              onChange={(e) => setBrightness(e.target.value)}
              className="w-full h-3 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between mt-4 text-slate-500 font-medium">
              <span>לילה</span>
              <span>ערב</span>
              <span>יום מלא</span>
            </div>
          </div>
        </div>
      </section>

      {/* About / Features */}
      <section id="about" className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="p-8 rounded-2xl bg-white shadow-sm border border-slate-100">
            <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">⚡</div>
            <h3 className="text-xl font-bold mb-4">חיסכון באנרגיה</h3>
            <p className="text-slate-600">ניצול מקסימלי של חשמל עם טכנולוגיית LED מתקדמת שחוסכת לכם כסף.</p>
          </div>
          <div className="p-8 rounded-2xl bg-white shadow-sm border border-slate-100">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">⏳</div>
            <h3 className="text-xl font-bold mb-4">עמידות לשנים</h3>
            <p className="text-slate-600">הנורות שלנו מתוכננות לעבוד אלפי שעות ללא ירידה בעוצמת ההארה.</p>
          </div>
          <div className="p-8 rounded-2xl bg-white shadow-sm border border-slate-100">
            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">👁️</div>
            <h3 className="text-xl font-bold mb-4">בריאות לעיניים</h3>
            <p className="text-slate-600">אור יציב ללא הבהובים (Flicker-free) ששומר על הראייה שלכם לאורך זמן.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold text-amber-500">GOLDENLIGHT</div>
          <p className="text-slate-400">© 2024 כל הזכויות שמורות לחברת התאורה שלכם.</p>
          <div className="flex gap-6">
            <span className="hover:text-amber-500 cursor-pointer">Facebook</span>
            <span className="hover:text-amber-500 cursor-pointer">Instagram</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Headline;