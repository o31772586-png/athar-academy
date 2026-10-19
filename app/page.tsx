'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white dir-rtl py-20 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        
        <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-bold">
          منصة أكاديمية أثر التعليمية ✨
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-white">
          مرحباً بك في <span className="text-cyan-400">أكاديمية أثر</span> 🚀
        </h1>

        <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          نحن لا نقدم مجرد دروس تقليدية، بل نحدث ثورة في أسلوب التعلم عبر محاكاة واقعية وتقنيات تفاعلية حية تترك أثراً حقيقياً في مستقبلك.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a href="#courses" className="bg-cyan-500 text-slate-950 font-bold px-8 py-3.5 rounded-2xl text-sm">
            استكشف الكورسات 🎯
          </a>
          <Link href="/revolution" className="bg-slate-900 border border-indigo-500/30 text-slate-200 font-bold px-8 py-3.5 rounded-2xl text-sm">
            تجربة ورشة Friends الحية
          </Link>
        </div>

      </div>

      <section id="courses" className="max-w-5xl mx-auto mt-20 pt-10 border-t border-indigo-500/10 space-y-8">
        <h2 className="text-2xl font-bold text-center text-white">مساراتنا التعليمية 📚</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-cyan-500/30 p-6 rounded-3xl space-y-4">
            <h3 className="text-xl font-bold text-cyan-400">🇺🇸 اللغة الإنجليزية (Friends Workshop)</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              تعلم المحادثة من مشاهد حقيقية مع نظام تكرار تفاعلي وترجمة متزامنة.
            </p>
            <Link href="/revolution" className="inline-block bg-cyan-500 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs">
              دخول الكورس المباشر
            </Link>
          </div>

          <div className="bg-slate-900 border border-indigo-500/10 p-6 rounded-3xl space-y-4">
            <h3 className="text-xl font-bold text-white">🇩🇪 اللغة الألمانية (Deutsch)</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              إتقان قواعد اللغة الألمانية والمحادثات اليومية من الصفر للطلاقة.
            </p>
            <span className="inline-block bg-slate-800 text-slate-500 font-bold px-4 py-2 rounded-xl text-xs">
              قريباً ⏳
            </span>
          </div>

          <div className="bg-slate-900 border border-indigo-500/10 p-6 rounded-3xl space-y-4">
            <h3 className="text-xl font-bold text-white">🇹🇷 اللغة التركية (Türkçe)</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              تعلم تعبيرات الشارع والدراما التركية والتركيبات الأساسية للمحادثة.
            </p>
            <span className="inline-block bg-slate-800 text-slate-500 font-bold px-4 py-2 rounded-xl text-xs">
              قريباً ⏳
            </span>
          </div>

          <div className="bg-slate-900 border border-indigo-500/10 p-6 rounded-3xl space-y-4">
            <h3 className="text-xl font-bold text-white">💻 البرمجة والذكاء الاصطناعي</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              تعلم التفكير المنطقي، بناء المواقع والتطبيقات، واستغلال الذكاء الاصطناعي.
            </p>
            <span className="inline-block bg-slate-800 text-slate-500 font-bold px-4 py-2 rounded-xl text-xs">
              قريباً ⏳
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
