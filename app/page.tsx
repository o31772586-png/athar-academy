'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white dir-rtl selection:bg-cyan-500 selection:text-black">
      
      {/* 1. قسم البداية والترحيب العريض */}
      <section className="relative overflow-hidden py-20 px-4 border-b border-indigo-500/10">
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs md:text-sm font-bold shadow-xl">
            <span>✨</span>
            <span>الجيل الجديد من منصات تعلم اللغات وتطوير الذات</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-tight">
            مرحباً بك في <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-indigo-500">أكاديمية أثر</span> 🚀
          </h1>
          
          <p className="text-slate-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
            نحن لا نقدم مجرد دروس تقليدية أو حفظ قواعد جاف.. نحن نحدث ثورة في أسلوب التعلم! نسير معك خطوة بخطوة من الصفر حتى الطلاقة الكاملة عبر محاكاة واقعية وتقنيات تفاعلية حية تترك أثراً حقيقياً في حياتك ومستقبلك.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <a 
              href="#explore-courses" 
              className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black px-8 py-4 rounded-2xl shadow-2xl transition text-sm md:text-base"
            >
              استكشف المسارات والكورسات 🎯
            </a>
            <Link 
              href="/revolution" 
              className="bg-slate-900 border border-indigo-500/30 hover:border-cyan-400/50 text-slate-200 font-bold px-8 py-4 rounded-2xl transition text-sm md:text-base flex items-center gap-2"
            >
              <span>🎧 تجربة ورشة Friends الحية</span>
              <span className="text-cyan-400">&larr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. قسم الكلام الإقناعي والرؤية */}
      <section className="py-20 px-4 max-w-5xl mx-auto space-y-16">
        
        <div className="bg-slate-900/60 border border-indigo-500/20 rounded-3xl p-8 md:p-12 space-y-6 shadow-2xl relative overflow-hidden">
          <span className="text-cyan-400 text-xs font-bold block tracking-widest">💡 رؤيتنا وفلسفتنا</span>
          <h2 className="text-2xl md:text-4xl font-black text-white leading-snug">
            لماذا تضيع سنوات في طرق التعلم القديمة بينما يمكنك إتقان المهارة في أشهر؟
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            معظم الناس يقضون سنوات طويلة في حفظ القواعد والكلمات المعزولة، وعندما يواجهون متحدثاً أصلياً أو موقفاً حقيقياً يتجمدون! في <strong className="text-cyan-300">أكاديمية أثر</strong>، غيرنا هذه المعادلة تماماً. نحن نؤمن بأن اللغة والمهارة تُكتسب بالاستماع الفعال، المحاكاة الفورية، والتكرار الذكي.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/40 border border-indigo-500/10 p-6 rounded-3xl space-y-3">
            <div className="text-3xl">🎯</div>
            <h3 className="text-lg font-bold text-white">تطبيق عملي من أول دقيقة</h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              لا تنظير ولا تعقيد، تدخل المحاضرة لتتكلم وتستمع وتتفاعل فوراً مع المواقف الحقيقية.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-indigo-500/10 p-6 rounded-3xl space-y-3">
            <div className="text-3xl">⚡</div>
            <h3 className="text-lg font-bold text-white">أدوات تفاعلية متطورة</h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              أنظمة Listen &amp; Repeat والترجمة المتزامنة المدمجة لضمان إتقان النطق ومتابعة تقدمك ثانية بثانية.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-indigo-500/10 p-6 rounded-3xl space-y-3">
            <div className="text-3xl">👑</div>
            <h3 className="text-lg font-bold text-white">جودة بلا مساومة</h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              محتوى مصمم بعناية فائقة ليعطيك أقصى قيمة تعليمية وبأعلى معايير بصرية وتقنية.
            </p>
          </div>
        </div>

      </section>

      {/* 3. قسم استعراض اللغات والكورسات التفصيلي */}
      <section id="explore-courses" className="py-20 px-4 max-w-6xl mx-auto border-t border-indigo-500/10 space-y-16">
        
        <div className="text-center space-y-3">
          <span className="text-cyan-400 text-xs font-bold bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-400/20 inline-block">
            📚 دليل الكورسات والمسارات الشامل
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            اختر لغتك أو مسارك وابدأ رحلتك فوراً
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-2xl mx-auto">
