'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function RevolutionCoursePage() {
  const [mediaType, setMediaType] = useState<'video' | 'youtube'>('video');

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 dir-rtl">
      {/* العنوان العلوي */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <span className="text-cyan-400 text-xs font-bold block mb-1">🌐 أكاديمية أثر - ورشة محادثات Friends</span>
          <h1 className="text-2xl md:text-3xl font-black text-white">كورس ريفلوشن - ورشة الاستماع الحية 🎧</h1>
        </div>
        <Link href="/" className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2 rounded-xl transition">
          عودة للرئيسية ↩️
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* مشغل الوسائط */}
        <div className="lg:col-span-2 space-y-4">
          <div className="relative w-full aspect-video bg-slate-950 rounded-3xl overflow-hidden border border-indigo-500/20 shadow-2xl flex items-center justify-center">
            {mediaType === 'video' ? (
              // مشغل الفيديو المباشر من سيرفر المنصة
              <video 
                controls 
                className="w-full h-full object-contain"
                src="/friends.mp4"
              >
                متصفحك لا يدعم تشغيل الفيديو.
              </video>
            ) : (
              // مشغل اليوتيوب الاحتياطي
              <iframe 
                src="https://www.youtube.com/embed/WKAntgNZPFs?cc_load_policy=1&hl=ar"
                title="يوتيوب"
                className="w-full h-full border-0"
                allowFullScreen
              ></iframe>
            )}
          </div>

          {/* صندوق الترجمة الفورية والتحليل للمشهد */}
          <div className="bg-slate-900/80 border border-cyan-500/30 p-6 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span>🤖</span>
                <span>الترجمة العربية الفورية والتحليل (Listen & Repeat)</span>
              </h4>
              <span className="text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full font-bold">🟢 نشط ومفعل</span>
            </div>

            <div className="space-y-3 bg-slate-950/60 p-4 rounded-xl border border-indigo-500/10 text-xs">
              <div>
                <span className="text-slate-400 block mb-1">🇺🇸 النص الأصلي بالمشهد (English):</span>
                <p className="text-white font-mono">"Look, that was supposed to be a private, personal thing between us.[span_0](start_span)"[span_0](end_span)</p>
              </div>
              <div className="pt-2 border-t border-slate-800">
                <span className="text-cyan-400 block mb-1">🇪🇬 الترجمة العربية الفورية:</span>
                <p className="text-slate-200">"انظر، كان من المفترض أن يكون هذا أمراً خاصاً وشخصياً بيننا."</p>
              </div>
            </div>
          </div>
        </div>

        {/* لوحة الاختيار وتبديل المشاهد */}
        <div className="bg-slate-900/80 border border-indigo-500/20 p-6 rounded-3xl h-fit space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span>📺</span>
            <span>مصادر المشاهد</span>
          </h2>

          <div className="space-y-3">
            <button
              onClick={() => setMediaType('video')}
              className={`w-full text-right p-4 rounded-2xl border text-xs font-bold transition flex items-center justify-between ${
                mediaType === 'video' ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'bg-slate-950/40 border-indigo-500/10 text-slate-400'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>🎬</span>
                <span>مشهد Friends (فيديو مباشر)</span>
              </div>
            </button>

            <button
              onClick={() => setMediaType('youtube')}
              className={`w-full text-right p-4 rounded-2xl border text-xs font-bold transition flex items-center justify-between ${
                mediaType === 'youtube' ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'bg-slate-950/40 border-indigo-500/10 text-slate-400'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>▶️</span>
                <span>محاضرة اليوتيوب المترجمة</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
