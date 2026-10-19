'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';

const transcriptData = [
  {
    start: 0.0,
    end: 4.0,
    en: "Look, that was supposed to be a private, personal thing between us.",
    ar: "انظر، كان من المفترض أن يكون هذا أمراً خاصاً وشخصياً بيننا."
  },
  {
    start: 4.0,
    end: 8.0,
    en: "And I really think we should keep it that way.",
    ar: "وأعتقد حقاً أنه ينبغي علينا إبقاؤه على هذا النحو."
  }
];

export default function RevolutionCoursePage() {
  const [mediaType, setMediaType] = useState<'video' | 'youtube'>('video');
  const [currentSubtitle, setCurrentSubtitle] = useState(transcriptData[0]);
  const videoRef = useRef<HTMLVideoElement>(null);

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

          {/* صندوق الترجمة الفورية البارز (تحت الفيديو مباشرة وبتتغير مع حركة الكلام) */}
          <div className="bg-slate-900/90 border border-cyan-500/40 p-6 rounded-2xl space-y-3 shadow-2xl">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-cyan-300 flex items-center gap-2">
                <span>💬</span>
                <span>الترجمة الحية التفاعلية (Listen & Repeat)</span>
              </h4>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full font-bold animate-pulse">● متزامن مع الصوت</span>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-indigo-500/20 space-y-2">
              <p className="text-yellow-300 font-mono text-sm md:text-base font-bold">
                🇺🇸 {currentSubtitle.en}
              </p>
              <p className="text-white text-sm md:text-base font-semibold pt-1 border-t border-slate-800/80">
                🇪🇬 {currentSubtitle.ar}
              </p>
            </div>
          </div>
        </div>

        {/* لوحة سكربت الحوار والمصادر الجانبية */}
        <div className="bg-slate-900/80 border border-indigo-500/20 p-6 rounded-3xl h-fit space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span>📜</span>
            <span>سكربت المشهد (اضغط للتكرار)</span>
          </h2>

          <div className="space-y-3 max-h-[280px] overflow-y-auto pl-1">
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
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">إعادة 🔄</span>
                </div>
                <p className="font-medium">{item.en}</p>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800">
            <h3 className="text-xs font-bold text-slate-300 mb-2">📺 مصادر المشاهد المتاحة</h3>
            <div className="space-y-2">
              <button
                onClick={() => setMediaType('video')}
                className={`w-full text-right p-3 rounded-xl border text-xs font-bold transition flex items-center justify-between ${
                  mediaType === 'video' ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'bg-slate-950/40 border-indigo-500/10 text-slate-400'
                }`}
              >
                <span>🎬 مشهد Friends (فيديو مباشر)</span>
              </button>
              <button
                onClick={() => setMediaType('youtube')}
                className={`w-full text-right p-3 rounded-xl border text-xs font-bold transition flex items-center justify-between ${
                  mediaType === 'youtube' ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'bg-slate-950/40 border-indigo-500/10 text-slate-400'
                }`}
              >
                <span>▶️ محاضرة اليوتيوب المترجمة</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
