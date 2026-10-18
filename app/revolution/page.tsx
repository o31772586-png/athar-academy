'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function RevolutionCoursePage() {
  const [videoUrl] = useState('https://www.youtube.com/embed/WKAntgNZPFs?cc_load_policy=1&hl=ar'); 

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 dir-rtl">
      {/* العنوان العلوي */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <span className="text-cyan-400 text-xs font-bold block mb-1">⚡ الإصدار الحصري</span>
          <h1 className="text-2xl md:text-3xl font-black text-white">كورس ريفلوشن - إبيسود 14 (Revolution Ep. 14)</h1>
        </div>
        <Link href="/" className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2 rounded-xl transition">
          عودة للرئيسية ↩️
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* مشغل الفيديو الرئيسي */}
        <div className="lg:col-span-2 space-y-4">
          <div className="relative w-full aspect-video bg-slate-950 rounded-3xl overflow-hidden border border-indigo-500/20 shadow-2xl">
            <iframe 
              src={videoUrl}
              title="كورس ريفلوشن إبيسود 14"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* تنبيه الترجمة العربية */}
          <div className="bg-slate-900/80 border border-cyan-500/30 p-5 rounded-2xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌐</span>
              <div>
                <h4 className="text-sm font-bold text-white">تفعيل الترجمة العربية الفورية:</h4>
                <p className="text-xs text-slate-400">يمكنك الضغط على زرار <b>(CC)</b> أو <b>الإعدادات ⚙️</b> داخل مشغل الفيديو واختيار الترجمة العربية.</p>
              </div>
            </div>
          </div>

          {/* ملخص الحلقة */}
          <div className="bg-slate-900/60 border border-indigo-500/20 p-6 rounded-2xl">
            <h3 className="font-bold text-white text-sm mb-2 flex items-center gap-2">
              <span>📝</span>
              <span>ملخص حلقة ريفلوشن (Episode 14)</span>
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              هذه الحلقة تُمثل نقلة نوعية واستثنائية ضمن إصدارات ريفلوشن. تحتوي على شرح تفصيلي وعرض متقدم للدروس التقنية واللغوية مع دعم كامل للترجمة والمتابعة المستمرة.
            </p>
          </div>
        </div>

        {/* قائمة الدروس والحلقات */}
        <div className="bg-slate-900/80 border border-indigo-500/20 p-6 rounded-3xl h-fit">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span>📺</span>
            <span>محتويات الإصدار</span>
          </h2>

          <div className="space-y-3">
            <div className="w-full text-right p-4 rounded-2xl border bg-cyan-500/20 border-cyan-400 text-cyan-300 text-xs font-bold flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span>▶️</span>
                <span>حلقة ريفلوشن الأساسية (Ep. 14)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
