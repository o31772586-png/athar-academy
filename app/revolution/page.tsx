'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';

// قائمة الجمل والتوقيتات الزمنية الخاصة بالمشهد (بالثواني)
const transcriptData = [
  {
    start: 0.0,
    end: 3.5,
    en: "Look, that was supposed to be a private, personal thing between us.",
    ar: "انظر، كان من المفترض أن يكون هذا أمراً خاصاً وشخصياً بيننا."
  },
  {
    start: 3.5,
    end: 7.0,
    en: "And I really think we should keep it that way.",
    ar: "وأعتقد حقاً أنه ينبغي علينا إبقاؤه على هذا النحو."
  },
  // تقدر تزود جمل جديدة هنا براحتك بنفس التنسيق حسب توقيت الفيديو!
];

export default function RevolutionCoursePage() {
  const [mediaType, setMediaType] = useState<'video' | 'youtube'>('video');
  const [currentSubtitle, setCurrentSubtitle] = useState(transcriptData[0]);
  const videoRef = useRef<HTMLVideoElement>(null);

  // دالة لتتبع ثواني الفيديو وتغيير النص فوراً
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const active = transcriptData.find(
        (item) => currentTime >= item.start && currentTime <= item.end
      );
      if (active) {
        setCurrentSubtitle(active);
      }
    }
  };

  // دالة لتكرار جملة معينة عند الضغط عليها (Listen & Repeat)
  const handleRepeatSentence = (start: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = start;
      videoRef.current.play();
    }
  };

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
              <video 
                ref={videoRef}
                controls 
                onTimeUpdate={handleTimeUpdate}
                className="w-full h-full object-contain"
                preload="metadata"
              >
                <source src="/friends-scene.mp4" type="video/mp4" />
                متصفحك لا يدعم تشغيل الفيديو.
              </video>
            ) : (
              <iframe 
                src="https://www.youtube.com/embed/WKAntgNZPFs?cc_load_policy=1&hl=ar"
                title="يوتيوب"
                className="w-full h-full border-0"
                allowFullScreen
              ></iframe>
            )}
          </div>

          {/* صندوق الترجمة الفورية والتحليل التفاعلي (يتبع الفيديو ثانية بثانية) */}
          <div className="bg-slate-900/80 border border-cyan-500/30 p-6 rounded-2xl space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span>🤖</span>
                <span>الترجمة التفاعلية الفورية (Listen & Repeat)</span>
              </h4>
              <span className="text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full font-bold animate-pulse">🟢 متزامن مع الفيديو</span>
            </div>

            <div className="space-y-3 bg-slate-950/80 p-5 rounded-xl border border-indigo-500/20 text-sm">
              <div>
                <span className="text-slate-400 text-xs block mb-1">🇺🇸 النص الأصلي بالمشهد:</span>
                <p className="text-white font-mono text-base font-bold">&quot;{currentSubtitle.en}&quot;</p>
              </div>
              <div className="pt-3 border-t border-slate-800">
                <span className="text-cyan-400 text-xs block mb-1">🇪🇬 الترجمة العربية الفورية:</span>
                <p className="text-slate-200 text-base font-semibold">&quot;{currentSubtitle.ar}&quot;</p>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 text-center">💡 اضغط على أي جملة في القائمة الجانبية لإعادة الاستماع والتدريب عليها فوراً.</p>
          </div>
        </div>

        {/* لوحة سكربت الحوار والتدريب (Transcript Playlist) */}
        <div className="bg-slate-900/80 border border-indigo-500/20 p-6 rounded-3xl h-fit space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span>📜</span>
            <span>سكربت المشهد (اضغط للتدريب)</span>
          </h2>

          <div className="space-y-3 max-h-[380px] overflow-y-auto pl-1">
            {transcriptData.map((item, index) => (
              <button
                key={index}
                onClick={() => handleRepeatSentence(item.start)}
                className={`w-full text-right p-3 rounded-2xl border text-xs transition flex flex-col gap-1 ${
                  currentSubtitle.start === item.start 
                    ? 'bg-cyan-500/25 border-cyan-400 text-white shadow-lg' 
                    : 'bg-slate-950/40 border-indigo-500/10 text-slate-400 hover:bg-slate-800/50'
                }`}
              >
                <div className="flex justify-between items-center w-full">
                  <span className="font-mono text-[10px] text-cyan-300">[{item.start}s - {item.end}s]</span>
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">كرر 🔄</span>
                </div>
                <p className="font-medium">{item.en}</p>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800">
            <h3 className="text-xs font-bold text-slate-300 mb-2">📺 مصادر المشاهد</h3>
            <div className="space-y-2">
              <button
                onClick={() => setMediaType('video')}
                className={`w-full text-right p-3 rounded-xl border text-xs font-bold transition flex items-center justify-between ${
                  mediaType === 'video' ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'bg-slate-950/40 border-indigo-500/10 text-slate-400'
                }`}
              >
                <span>🎬 مشهد Friends (مباشر)</span>
              </button>
              <button
                onClick={() => setMediaType('youtube')}
                className={`w-full text-right p-3 rounded-xl border text-xs font-bold transition flex items-center justify-between ${
                  mediaType === 'youtube' ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'bg-slate-950/40 border-indigo-500/10 text-slate-400'
                }`}
              >
                <span>▶️ محاضرة اليوتيوب</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
