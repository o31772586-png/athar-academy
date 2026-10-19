'use client';
import Link from 'next/link';

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white dir-rtl selection:bg-cyan-500 selection:text-black py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* قسم الهيدر والترحيب الحماسي */}
        <section className="text-center space-y-4 relative overflow-hidden p-8 rounded-3xl bg-slate-900/60 border border-indigo-500/20 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold">
            <span>🚀</span>
            <span>إصدارات وكورسات أكاديمية أثر</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            اختر كورس وباشر رحلتك فوراً 🔥
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            تصفح الكورسات الحصرية وانضم لإصدارات ريفلوشن الجديدة. نحن لا نقدم مجرد دورات تقليدية، بل نبنيك مهارة بمهارة عبر أساليب تفاعلية تجعل التعلم تجربة ممتعة ولا تُنسى!
          </p>
        </section>

        {/* قسم: لماذا كورسات أكاديمية أثر لا مثيل لها؟ */}
        <section className="bg-slate-900/40 border border-indigo-500/10 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl">
          <div className="text-right space-y-1">
            <h2 className="text-xl md:text-2xl font-bold text-cyan-400">💡 لماذا كورساتنا فريدة ولا تشبه غيرها؟</h2>
            <p className="text-slate-400 text-xs md:text-sm">نحن ندمج بين التطبيق العملي الفوري والتكنولوجيا التفاعلية لتصل للهداف في أسرع وقت.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-950/80 p-4 rounded-2xl border border-indigo-500/20 space-y-2">
              <span className="text-cyan-400 font-bold block text-sm">🎯 منهجية الممارسة المباشرة</span>
              <p className="text-slate-300 leading-relaxed">لا مكان للتلقين الجاف! نعتمد على الاستماع التفاعلي، المحاكاة الحية، وتحليل النصوص الواقعية.</p>
            </div>
            <div className="bg-slate-950/80 p-4 rounded-2xl border border-indigo-500/20 space-y-2">
              <span className="text-emerald-400 font-bold block text-sm">⚡ أدوات ذكية متطورة</span>
              <p className="text-slate-300 leading-relaxed">نظام "Listen & Repeat" والترجمة المتزامنة يساعدك على إتقان النطق وفهم التفاصيل ثانية بثانية.</p>
            </div>
            <div className="bg-slate-950/80 p-4 rounded-2xl border border-indigo-500/20 space-y-2">
              <span className="text-indigo-400 font-bold block text-sm">🏆 بيئة ممتعة ومحفزة</span>
              <p className="text-slate-300 leading-relaxed">تصميم سلس ومحتوى مشوق يضمن استمراريتك وشغفك بدون ملل.</p>
            </div>
          </div>
        </section>

        {/* قسم الكورسات والمسارات المتاحة (إنجليزية، ألماني، تركي، برمجة) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black text-white border-r-4 border-cyan-400 pr-3">📚 المسارات والكورسات المتاحة</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 1. كورس ريفلوشن - إبيسود 14 (Friends) */}
            <div className="bg-slate-900/80 border border-cyan-500/30 rounded-3xl p-6 flex flex-col justify-between space-y-4 hover:border-cyan-400 transition shadow-2xl">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-cyan-500/10 text-cyan-300 font-bold px-3 py-1 rounded-full border border-cyan-400/20">🇺🇸 اللغة الإنجليزية</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded">متاح الآن 🟢</span>
                </div>
                <h3 className="text-xl font-bold text-white">كورس ريفلوشن - إبيسود 14 (Revolution Ep. 14)</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  الحلقة الاستثنائية والفريدة من نوعها! محتوى تفاعلي واعي متطور يفتح لك آفاقاً جديدة بالكامل في الاستماع والمحادثة من مشاهد مسلسل Friends.
                </p>
              </div>
              <Link 
                href="/revolution"
                className="w-full text-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black py-3 rounded-2xl text-xs transition shadow-lg"
              >
                ابدأ الكورس الآن ↩️
              </Link>
            </div>

            {/* 2. طلاقة اللغة الإنجليزية الشاملة (English Fluency) */}
            <div className="bg-slate-900/80 border border-indigo-500/20 rounded-3xl p-6 flex flex-col justify-between space-y-4 hover:border-indigo-400 transition shadow-xl">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-indigo-500/10 text-indigo-300 font-bold px-3 py-1 rounded-full border border-indigo-400/20">🇺🇸 اللغة الإنجليزية</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded">متاح الآن 🟢</span>
                </div>
                <h3 className="text-xl font-bold text-white">طلاقة اللغة الإنجليزية الشاملة (English Fluency)</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  اتقن المحادثة والصوتيات من الصفر وتحدث بثقة بدون خوف مع تدريبات تفاعلية حية ومكثفة لتغطية كل الجوانب.
                </p>
              </div>
              <button className="w-full text-center bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-3 rounded-2xl text-xs transition border border-indigo-500/30">
                استكشف التفاصيل 🔍
              </button>
            </div>

            {/* 3. مسار اللغة الألماني (German Masterclass) */}
            <div className="bg-slate-900/80 border border-yellow-500/30 rounded-3xl p-6 flex flex-col justify-between space-y-4 hover:border-yellow-400 transition shadow-xl">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-yellow-500/10 text-yellow-300 font-bold px-3 py-1 rounded-full border border-yellow-400/20">🇩🇪 اللغة الألمانية</span>
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded">قريباً ⏳</span>
                </div>
                <h3 className="text-xl font-bold text-white">مسار اللغة الألمانية من الصفر للطلاقة (Deutsch)</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  تعلم قواعد الألمانية النطق والتركيبات الأساسية مع التركيز على المحادثات اليومية للعمل والسفر والحياة في ألمانيا.
                </p>
              </div>
              <button disabled className="w-full text-center bg-slate-900 text-slate-500 font-bold py-3 rounded-2xl text-xs cursor-not-allowed border border-slate-800">
                قريباً في الأكاديمية ⏳
              </button>
            </div>

            {/* 4. مسار اللغة التركية (Turkish Language) */}
            <div className="bg-slate-900/80 border border-red-500/30 rounded-3xl p-6 flex flex-col justify-between space-y-4 hover:border-red-400 transition shadow-xl">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-red-500/10 text-red-300 font-bold px-3 py-1 rounded-full border border-red-400/20">🇹🇷 اللغة التركية</span>
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded">قريباً ⏳</span>
                </div>
                <h3 className="text-xl font-bold text-white">طلاقة اللغة التركية والمحادثات اليومية (Türkçe)</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  اكتشف سحر اللغة التركية، قواعدها المبسطة، وأهم التعبيرات المستخدمة في المسلسلات والحياة اليومية مع التدريب الصوتي.
                </p>
              </div>
              <button disabled className="w-full text-center bg-slate-900 text-slate-500 font-bold py-3 rounded-2xl text-xs cursor-not-allowed border border-slate-800">
                قريباً في الأكاديمية ⏳
              </button>
            </div>

            {/* 5. مسار البرمجة والذكاء الاصطناعي (Programming & AI) */}
            <div className="bg-slate-900/80 border border-purple-500/30 rounded-3xl p-6 flex flex-col justify-between space-y-4 hover:border-purple-400 transition shadow-xl md:col-span-2">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-purple-500/10 text-purple-300 font-bold px-3 py-1 rounded-full border border-purple-400/20">💻 البرمجة والذكاء الاصطناعي</span>
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded">قريباً ⏳</span>
                </div>
                <h3 className="text-xl font-bold text-white">دبلومة البرمجة وتطوير البرمجيات والذكاء الاصطناعي</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  تعلم أساسيات البرمجة، البرمجة كائنية التوجه (OOP)، بناء المواقع والتطبيقات، واستخدام أدوات الذكاء الاصطناعي لتبدأ سيرتك المهنية بثقة.
                </p>
              </div>
              <button disabled className="w-full text-center bg-slate-900 text-slate-500 font-bold py-3 rounded-2xl text-xs cursor-not-allowed border border-slate-800">
                قريباً في الأكاديمية ⏳
              </button>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
