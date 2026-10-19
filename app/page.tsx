'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white dir-rtl selection:bg-cyan-500 selection:text-black">
      
      {/* 1. قسم البداية والترحيب العريض (Hero Section) */}
      <section className="relative overflow-hidden py-24 px-4 border-b border-indigo-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>
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
              className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black px-8 py-4 rounded-2xl shadow-2xl transition transform hover:-translate-y-1 text-sm md:text-base"
            >
              استكشف المسارات والكورسات 🎯
            </a>
            <Link 
              href="/revolution" 
              className="bg-slate-900 border border-indigo-500/30 hover:border-cyan-400/50 text-slate-200 font-bold px-8 py-4 rounded-2xl transition text-sm md:text-base flex items-center gap-2"
            >
              <span>🎧 تجربة ورشة Friends الحية</span>
              <span className="text-cyan-400">←</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. قسم الكلام الإقنعي الشامل (قصتنا فلسفتنا وليه أكاديمية أثر) */}
      <section className="py-20 px-4 max-w-5xl mx-auto space-y-16">
        
        {/* فقرة أولى: المشكلة والحل */}
        <div className="bg-slate-900/60 border border-indigo-500/20 rounded-3xl p-8 md:p-12 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <span className="text-cyan-400 text-xs font-bold block tracking-widest">💡 رؤيتنا وفلسفتنا</span>
          <h2 className="text-2xl md:text-4xl font-black text-white leading-snug">
            لماذا تضيع سنوات في طرق التعلم القديمة بينما يمكنك إتقان المهارة في أشهر؟
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed space-y-4">
            معظم الناس يقضون سنوات طويلة في حفظ القواعد والكلمات المعزولة، وعندما يواجهون متحدثاً أصلياً أو موقفاً حقيقياً يتجمدون! في <strong className="text-cyan-300">أكاديمية أثر</strong>، غيرنا هذه المعادلة تماماً. نحن نؤمن بأن اللغة والمهارة تُكتسب بالاستماع الفعال، المحاكاة الفورية، والتكرار الذكي.
          </p>
        </div>

        {/* مميزات سريعة بالرموز */}
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
              أنظمة Listen & Repeat والترجمة المتزامنة المدمجة لضمان إتقان النطق ومتابعة تقدمك ثانية بثانية.
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

      {/* 3. قسم استعراض اللغات والكورسات التفصيلي (ينزل الطالب يقرأ كورس كورس) */}
      <section id="explore-courses" className="py-20 px-4 max-w-6xl mx-auto border-t border-indigo-500/10 space-y-16">
        
        <div className="text-center space-y-3">
          <span className="text-cyan-400 text-xs font-bold bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-400/20 inline-block">
            📚 دليل الكورسات والمسارات الشامل
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            اختر لغتك أو مسارك وابدأ رحلتك فوراً
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-2xl mx-auto">
            تصفح الأقسام والبرامج المتاحة والمستقبلية بالتفصيل، واكتشف ما ستتعلمه في كل مسار.
          </p>
        </div>

        <div className="space-y-12">

          {/* 🇺🇸 كورس 1: اللغة الإنجليزية (ورشه Friends و كورس ريفلوشن) */}
          <div className="bg-slate-900/80 border border-cyan-500/30 rounded-3xl p-8 md:p-10 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🇺🇸</span>
                <div>
                  <span className="text-cyan-400 text-xs font-bold block">مسار المحادثة والطلاقة</span>
                  <h3 className="text-2xl md:text-3xl font-black text-white">كورس ريفلوشن - ورشة محادثات Friends الحية</h3>
                </div>
              </div>
              <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full">
                🟢 متاح الآن للتعلم المباشر
              </span>
            </div>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              هذا ليس كورساً عادياً للقواعد، بل ورشة عمل سينمائية تعتمد على تحليل مقاطع ومشاهد حقيقية من المسلسل الشهير Friends. ستتعلم التعبيرات الدارجة، كيفية نطق الكلمات كالمتحدث الأصلي، مع نظام تكرار تفاعلي وترجمة سريعة متزامنة ثانية بثانية لتكسر حاجز الخوف وتتحدث بطلاقة.
            </p>

            <div className="pt-4 border-t border-slate-800 flex flex-wrap justify-between items-center gap-4">
              <div className="text-xs text-slate-400 flex items-center gap-4">
                <span>⏱️ مشغل تفاعلي خاص</span>
                <span>🎧 نظام Listen & Repeat</span>
                <span>💬 ترجمة متزامنة</span>
              </div>
              <Link 
                href="/revolution" 
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black px-6 py-3 rounded-2xl text-xs md:text-sm transition shadow-lg"
              >
                دخول الكورس والتجربة المباشرة ↩️
              </Link>
            </div>
          </div>

          {/* 🇩🇪 كورس 2: اللغة الألمانية (Deutsch Course) */}
          <div className="bg-slate-900/60 border border-indigo-500/20 rounded-3xl p-8 md:p-10 space-y-6 shadow-xl">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🇩🇪</span>
                <div>
                  <span className="text-yellow-400 text-xs font-bold block">مسار اللغة الألمانية</span>
                  <h3 className="text-2xl md:text-3xl font-black text-white">كورس الألمانية الشامل (Deutsch Masterclass)</h3>
                </div>
              </div>
              <span className="text-xs text-amber-300 font-bold bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
                ⏳ قريباً في الأكاديمية
              </span>
            </div>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              دليلك الكامل لإتقان اللغة الألمانية من مستويات A1 حتى المستويات المتقدمة. يركز الكورس على تفكيك عقدة القواعد الألمانية الصعبة، وتبسيط تركيب الجمل، مع التدريب على محادثات السفر، العمل، والدراسة في ألمانيا بلغة نقية ومبسطة.
            </p>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400">يشمل: القواعد، المحادثة، واختبارات الممارسة</span>
              <button disabled className="bg-slate-800 text-slate-500 font-bold px-6 py-3 rounded-2xl text-xs cursor-not-allowed">
                انتظروا الإطلاق ⏳
              </button>
            </div>
          </div>

          {/* 🇹🇷 كورس 3: اللغة التركية (Turkish Course) */}
          <div className="bg-slate-900/60 border border-indigo-500/20 rounded-3xl p-8 md:p-10 space-y-6 shadow-xl">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🇹🇷</span>
                <div>
                  <span className="text-red-400 text-xs font-bold block">مسار اللغة التركية</span>
                  <h3 className="text-2xl md:text-3xl font-black text-white">كورس طلاقة اللغة التركية والمحادثات اليومية</h3>
                </div>
              </div>
              <span className="text-xs text-amber-300 font-bold bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
                ⏳ قريباً في الأكاديمية
              </span>
            </div>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              تعلم اللغة التركية بطريقة ممتعة وسلسة بعيداً عن الجفاف! ستتعلم أشهر التعبيرات والتشبيهات المستعملة في الشارع التركي والمسلسلات، مع شرح مبسط لقواعد التوافق الصوتي وتركيب الجمل لتعبر عن نفسك بكل ثقة وبدون تردد.
            </p>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400">يشمل: تعبيرات الشارع، الدراما، والتركيبات الأساسية</span>
              <button disabled className="bg-slate-800 text-slate-500 font-bold px-6 py-3 rounded-2xl text-xs cursor-not-allowed">
                انتظروا الإطلاق ⏳
              </button>
            </div>
          </div>

          {/* 💻 كورس 4: البرمجة والذكاء الاصطناعي (Programming & AI) */}
          <div className="bg-slate-900/60 border border-indigo-500/20 rounded-3xl p-8 md:p-10 space-y-6 shadow-xl">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">💻</span>
                <div>
                  <span className="text-purple-400 text-xs font-bold block">مسار التكنولوجيا والتقنية</span>
                  <h3 className="text-2xl md:text-3xl font-black text-white">دبلومة البرمجة وتطوير البرمجيات والذكاء الاصطناعي</h3>
                </div>
              </div>
              <span className="text-xs text-amber-300 font-bold bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
                ⏳ قريباً في الأكاديمية
              </span>
            </div>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              انطلاقتك الحقيقية في عالم التكنولوجيا! تعلم أساسيات البرمجة والتفكير المنطقي، البرمجة كائنية التوجه (OOP)، كيفية إنشاء المواقع والتطبيقات، واستغلال أدوات الذكاء الاصطناعي لتبني مشاريع قوية وتجهز نفسك لسوق العمل العالمي.
            </p>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400">يشمل: التفكير المنطقي، بناء المشاريع، والذكاء الاصطناعي</span>
              <button disabled className="bg-slate-800 text-slate-500 font-bold px-6 py-3 rounded-2xl text-xs cursor-not-allowed">
                انتظروا الإطلاق ⏳
              </button>
            </div>
          </div>

        </div>

      </section>

      {/* 4. ذيل الصفحة الختامي (Footer) */}
      <footer className="py-12 text-center text-xs text-slate-500 border-t border-indigo-500/10 bg-slate-950">
        <div className="max-w-4xl mx-auto space-y-3 px-4">
          <p className="text-slate-400 font-bold text-sm">أكاديمية أثر — نحو تجربة تعليمية فريدة ولا تُنسى ✨</p>
          <p>جميع الحقوق محفوظة © 2026</p>
        </div>
      </footer>

    </main>
  );
}
