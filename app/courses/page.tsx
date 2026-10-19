'use client';

import Link from 'next/link';

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white dir-rtl selection:bg-cyan-500 selection:text-black py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* الهيدر العلوي */}
        <div className="text-center space-y-3">
          <span className="text-cyan-400 text-xs font-bold bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-400/20 inline-block">
            🧩 الإصدارات والكورسات المتاحة
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white">
            اختر كورس وباشر رحلتك فوراً 🚀
          </h1>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto">
            تصفح الكورسات الحصرية وانضم لإصدار ريفلوشن الجديد.
          </p>
        </div>

        {/* شبكة عرض الكورسات */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 1. كورس ريفلوشن - ورشة Friends */}
          <div className="bg-slate-900/80 border border-indigo-500/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-cyan-400/50 transition">
            <div className="relative aspect-video bg-slate-950 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
              <div className="w-full h-full bg-gradient-to-br from-indigo-600/30 to-cyan-500/30 flex items-center justify-center text-4xl">
                🎬
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">
                  كورس ريفلوشن - ورشة محادثات Friends الحية
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  الحلقة الاستثنائية والفريدة من نوعها، محتوى تفاعلي واعي متطور يفتح لك آفاقاً جديدة بالكامل.
                </p>
              </div>

              <Link 
                href="/revolution"
                className="w-full block text-center bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black py-3 rounded-2xl text-xs transition shadow-lg"
              >
                معاينة وزيارة الكورس
              </Link>
            </div>
          </div>

          {/* 2. طلاقة اللغة الإنجليزية الشاملة */}
          <div className="bg-slate-900/80 border border-indigo-500/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-indigo-400/50 transition">
            <div className="relative aspect-video bg-slate-950 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
              <div className="w-full h-full bg-gradient-to-br from-purple-600/30 to-pink-500/30 flex items-center justify-center text-4xl">
                🗣️
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition">
                  طلاقة اللغة الإنجليزية الشاملة (English Fluency)
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  اتقن المحادثة والصوتيات من الصفر وتحدث بثقة بدون خوف مع تدريبات تفاعلية حية.
                </p>
              </div>

              <button className="w-full text-center bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-3 rounded-2xl text-xs transition border border-indigo-500/20">
                قريباً ⏳
              </button>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
