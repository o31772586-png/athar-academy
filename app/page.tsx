'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white dir-rtl selection:bg-cyan-500 selection:text-black">
      {/* قسم الترحيب الرئيسي والهوية البصرية لأكاديمية أثر */}
      <section className="relative overflow-hidden py-20 px-4 border-b border-indigo-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-bold shadow-lg">
            <span>✨</span>
            <span>الجيل الجديد من منصات تعلم اللغات وتطوير الذات</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            مرحباً بك في <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">أكاديمية أثر</span> 🚀
          </h1>
          
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            حيث الإتقان الحقيقي والتجربة التفاعلية المبتكرة! نحن لسنا مجرد منصة كورسات عادية، بل بيئة متكاملة مصممة خصيصاً لتصنع فرقاً حقيقياً في مهاراتك وثقتك بنفسك. كورساتنا لا مثيل لها لأنها تبنيك خطوة بخطوة بطريقة تفاعلية ممتعة.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="#courses" 
              className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black px-8 py-3.5 rounded-2xl shadow-xl transition transform hover:-translate-y-0.5 text-sm"
            >
              استكشف كورساتنا فوراً 🎯
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

      {/* قسم مميزات أكاديمية أثر (لماذا نحن؟) */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-2xl md:text-3xl font-black text-white">لماذا كورساتنا لا توصف ومختلفة تماماً؟ 🔥</h2>
          <p className="text-slate-400 text-xs md:text-sm">نقدم لك أدوات حصرية تجعل رحلتك التعليمية ممتعة وفعالة من أول دقيقة.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-indigo-500/10 p-6 rounded-3xl space-y-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-lg">💡</div>
            <h3 className="font-bold text-white text-base">تفاعل ثانية بثانية</h3>
            <p className="text-slate-400 text-xs leading-relaxed">نظام "Listen & Repeat" والترجمة الفورية التفاعلية يجعل لسانك يتعود على النطق الصحيح كأنه في بيئة أجنبية حية.</p>
          </div>

          <div className="bg-slate-900/60 border border-indigo-500/10 p-6 rounded-3xl space-y-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-400/20 flex items-center justify-center text-indigo-400 text-lg">🎬</div>
            <h3 className="font-bold text-white text-base">محتوى من قلب الواقع</h3>
            <p className="text-slate-400 text-xs leading-relaxed">نستخدم أقوى مشاهد الأفلام والمسلسلات العالمية (مثل Friends) لتعلم المحادثات الحقيقية والدارجة وليست الأكاديمية المعقدة.</p>
          </div>

          <div className="bg-slate-900/60 border border-indigo-500/10 p-6 rounded-3xl space-y-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 text-lg">🚀</div>
            <h3 className="font-bold text-white text-base">رحلتك تبدأ فوراً</h3>
            <p className="text-slate-400 text-xs leading-relaxed">بضغطة زر واحدة تبدأ المحاضرة، وتتنقل بين مصادر المشاهد ومتابعة السكربت بكل سلاسة وبدون أي تعقيد تقني.</p>
          </div>
        </div>
      </section>

      {/* قسم عرض الكورسات المتاحة */}
      <section id="courses" className="py-16 px-4 max-w-6xl mx-auto border-t border-indigo-500/10">
        <div className="flex justify-between items-center mb-10">
          <div>
            <span className="text-cyan-400 text-xs font-bold block mb-1">تصفح الأقسام</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">كورسات وبرامج أكاديمية أثر 📚</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* كورس ريفلوشن - ورشة محادثات Friends */}
          <div className="bg-slate-900/80 border border-cyan-500/30 rounded-3xl p-6 flex flex-col justify-between space-y-6 shadow-2xl relative overflow-hidden group hover:border-cyan-400 transition">
            <div className="absolute top-0 left-0 bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-black text-[10px] px-4 py-1 rounded-br-2xl">
              الأكثر طلباً 🔥
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-xs text-cyan-400 font-bold block">محادثة وسماع حى</span>
              <h3 className="text-xl font-bold text-white">كورس ريفلوشن - ورشة Friends</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                تعلم اللغة الإنجليزية من خلال تحليل وتكرار المشاهد السينمائية الحية مع نظام ترجمة تفاعلي متزامن.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full">🟢 متاح الآن</span>
              <Link 
                href="/revolution" 
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs transition shadow-lg"
              >
                ابدأ رحلتك فوراً ↩️
              </Link>
            </div>
          </div>

          {/* كورسات قادمة قريباً */}
          <div className="bg-slate-950/40 border border-indigo-500/10 rounded-3xl p-6 flex flex-col justify-between space-y-6 opacity-60">
            <div className="space-y-3">
              <span className="text-xs text-slate-400 font-bold block">قريباً</span>
              <h3 className="text-xl font-bold text-white">أساسيات القواعد الشاملة</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                دورة مخصصة لبناء قواعد اللغة الإنجليزية من الصفر حتى الاحتراف بطرق مبسطة بعيداً عن التعقيد.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">قريباً في الأكاديمية</span>
              <span className="text-xs text-slate-500 font-bold px-4 py-2 rounded-xl bg-slate-900">ترقبونا ⏳</span>
            </div>
          </div>
        </div>
      </section>

      {/* ذيل الصفحة (Footer) */}
      <footer className="py-8 text-center text-xs text-slate-500 border-t border-indigo-500/10 mt-12">
        <p>جميع الحقوق محفوظة © 2026 أكاديمية أثر — نحو تجربة تعليمية لا تُنسى ✨</p>
      </footer>
    </main>
  );
}
