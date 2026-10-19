'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function RevolutionCoursePage() {
  // فيديو المحاضرة الأساسي (الذي يعمل باليوتيوب مع الترجمة التلقائية)
  const [videoUrl] = useState('https://www.youtube.com/embed/WKAntgNZPFs?cc_load_policy=1&hl=ar&cc_lang_pref=ar'); 

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 dir-rtl">
      {/* العنوان العلوي */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <span className="text-cyan-400 text-xs font-bold block mb-1">🌐 أكاديمية أثر - نظام الترجمة الفورية والتدريب</span>
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
              title="كورس ريفلوشن إبيسود 14 ومحاضرات الاستماع"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* صندوق الترجمة الفورية والتحليل (مستوحى من ورشة اللغات Friends) */}
          <div className="bg-slate-900/80 border border-cyan-500/30 p-6 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span>🤖</span>
                <span>خاصية الترجمة العربية الفورية والتحليل اللغوي</span>
              </h4>
              <span className="text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full font-bold">🟢 نشط الآن</span>
            </div>

            <div className="space-y-3 bg-slate-950/60 p-4 rounded-xl border border-indigo-500/10 text-xs">
              <div>
                <span className="text-slate-400 block mb-1">🇺🇸 النص الإنجليزي المقابل (Listening Track):</span>
                <p className="text-white font-mono">"Look, that was supposed to be a private, personal thing between us."</p>
              </div>
              <div className="pt-2 border-t border-slate-800">
                <span className="text-cyan-400 block mb-1">🇪🇬 الترجمة العربية الفورية:</span>
                <p className="text-slate-200">"انظر، كان من المفترض أن يكون هذا أمراً خاصاً وشخصياً بيننا."</p>
              </div>
            </div>
          </div>

          {/* ملخص الحلقة وتوجيهات الاستخدام */}
          <div className="bg-slate-900/60 border border-indigo-500/20 p-6 rounded-2xl">
            <h3 className="font-bold text-white text-sm mb-2 flex items-center gap-2">
              <span>📝</span>
              <span>دليل المتابعة والتكرار</span>
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              هذه الحلقة تجمع بين قوة المحتوى التقني وورش عمل الاستماع والتكرار (Listen & Repeat). يمكنك تفعيل الترجمة من المشغل أعلاه أو متابعة التحليل اللغوي المباشر أسفل الفيديو للاستفادة القصوى.
            </p>
          </div>
        </div>

        {/* قائمة الدروس والحلقات */}
        <div className="bg-slate-900/80 border border-indigo-500/20 p-6 rounded-3xl h-fit space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span>📺</span>
            <span>محتويات الإصدار</span>
          </h2>

          <div className="space-y-3">
            <div className="w-full text-right p-4 rounded-2xl border bg-cyan-500/20 border-cyan-400 text-cyan-300 text-xs font-bold flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span>▶️</span>
                <span>الحلقة الأساسية (Revolution Ep. 14)</span>
              </div>
            </div>

            <div className="w-full text-right p-4 rounded-2xl border bg-slate-950/40 border-indigo-500/10 text-slate-400 text-xs font-bold flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span>🎧</span>
                <span>ورشة الاستماع والتكرار (Friends)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
