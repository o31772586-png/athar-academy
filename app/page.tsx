'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white dir-rtl selection:bg-cyan-500 selection:text-black">
      
      {/* القسم الرئيسي الترحيب الهوية لأكاديمية أثر */}
      <section className="relative overflow-hidden py-20 px-4 border-b border-indigo-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-bold shadow-lg">
            <span>✨</span>
            <span>منصة أكاديمية أثر التعليمية</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            مرحباً بك في <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">أكاديمية أثر</span> 🚀
          </h1>
          
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            حيث الإتقان الحقيقي والتجربة التعليمية الفريدة. كورساتنا مصممة خصيصاً لتصنع فرقاً حقيقياً في مستقبلك ومهاراتك عبر أساليب تفاعلية متطورة.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="#courses" 
              className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black px-8 py-3.5 rounded-2xl shadow-xl transition transform hover:-translate-y-0.5 text-sm"
            >
              استكشف الكورسات فوراً 🎯
            </a>
            <Link 
              href="/revolution" 
              className="bg-slate-900 border border-indigo-500/30 hover:border-cyan-400/50 text-slate-200 font-bold px-8 py-3.5 rounded-2xl transition text-sm flex items-center gap-2"
            >
              <span>🎧 ورشة محادثات Friends الحية</span>
              <span className="text-cyan-400">←</span>
            </Link>
          </div>
        </div>
      </section>

      {/* قسم اللغات والمعلومات (ألماني، إنجليزي، تركي، برمجة) */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-2xl md:text-3xl font-black text-white">لماذا كورساتنا مختلفة ولماذا نحن الخيار الأفضل؟ 🔥</h2>
          <p className="text-slate-400 text-xs md:text-sm">نقدم لك مسارات تعليمية متكاملة للغات والتقنية بعيداً عن التعقيد التقليدي.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900/60 border border-indigo-500/10 p-6 rounded-3xl space-y-3 shadow-xl">
            <span className="text-xl">🇺🇸</span>
            <h3 className="font-bold text-white text-base">اللغة الإنجليزية</h3>
            <p className="text-slate-400 text-xs leading-relaxed">إتقان المحادثة والاستماع الحي من قلب الواقع ومقاطع الأفلام والمسلسلات العالمية.</p>
          </div>

          <div className="bg-slate-900/60 border border-indigo-500/10 p-6 rounded-3xl space-y-3 shadow-xl">
            <span className="text-xl">🇩🇪</span>
            <h3 className="font-bold text-white text-base">اللغة الألمانية</h3>
            <p className="text-slate-400 text-xs leading-relaxed">تعلم قواعد الألمانية والنطق الصحيح بخطوات مبسطة ومناسبة للسفر والعمل.</p>
          </div>

          <div className="bg-slate-900/60 border border-indigo-500/10 p-6 rounded-3xl space-y-3 shadow-xl">
            <span className="text-xl">🇹🇷</span>
            <h3 className="font-bold text-white text-base">اللغة التركية</h3>
            <p className="text-slate-400 text-xs leading-relaxed">استكشف جمال اللغة التركية وأهم التعبيرات المستخدمة في الحياة اليومية والدراما.</p>
          </div>

          <div className="bg-slate-900/60 border border-indigo-500/10 p-6 rounded-3xl space-y-3 shadow-xl">
            <span className="text-xl">💻</span>
            <h3 className="font-bold text-white text-base">البرمجة والذكاء الاصطناعي</h3>
            <p className="text-slate-400 text-xs leading-relaxed">بناء البرمجيات وتطوير المهارات التقنية الحديثة باستخدام أدوات الذكاء الاصطناعي.</p>
          </div>
        </div>
      </section>

      {/* قسم معاينة الكورسات المتاحة */}
      <section id="courses" className="py-16 px-4 max-w-6xl mx-auto border-t border-indigo-500/10">
        <div className="flex justify-between items-center mb-10">
          <div>
            <span className="text-cyan-400 text-xs font-bold block mb-1">معاينة الكورسات الحصرية</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">اختر كورس وباشر رحلتك فوراً 📚</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* كورس ريفلوشن - ورشة محادثات Friends */}
          <div className="bg-slate-900/80 border border-cyan-500/30 rounded-3xl p-6 flex flex-col justify-between space-y-6 shadow-2xl relative overflow-hidden group hover:border-cyan-400 transition">
            <div className="absolute top-0 left-0 bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-black text-[10px] px-4 py-1 rounded-br-2xl">
              الإصدار الحصري 🔥
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-xs text-cyan-400 font-bold block">محادثة وسماع حى</span>
              <h3 className="text-xl font-bold text-white">كورس ريفلوشن - ورشة محادثات Friends</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                الحلقة الاستثنائية والفريدة من نوعها مع نظام تكرار تفاعلي وترجمة متزامنة ثانية بثانية لتطوير لسانك.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full">🟢 متاح الآن</span>
              <Link 
                href="/revolution" 
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs transition shadow-lg"
              >
                معاينة وزيارة الكورس ↩️
              </Link>
            </div>
          </div>

          {/* طلاقة اللغة الإنجليزية الشاملة */}
          <div className="bg-slate-900/80 border border-indigo-500/20 rounded-3xl p-6 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-3">
              <span className="text-xs text-indigo-400 font-bold block">الإنجليزية العامة</span>
              <h3 className="text-xl font-bold text-white">طلاقة اللغة الإنجليزية الشاملة (English Fluency)</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                اتقن المحادثة والصوتيات من الصفر وتحدث بثقة بدون خوف مع تدريبات حية ومكثفة.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-bold">مسار متكامل</span>
              <span className="text-xs text-slate-400 bg-slate-800 px-4 py-2 rounded-xl">قريباً ⏳</span>
            </div>
          </div>
        </div>
      </section>

      {/* ذيل الصفحة */}
      <footer className="py-8 text-center text-xs text-slate-500 border-t border-indigo-500/10 mt-12">
        <p>جميع الحقوق محفوظة © 2026 أكاديمية أثر — نحو تجربة تعليمية لا تُنسى ✨</p>
      </footer>
    </main>
  );
}
