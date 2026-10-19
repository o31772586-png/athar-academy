'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';

// توقيتات المشهد (8 ثواني)
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
          <div className="relative w-full aspect-video bg-black rounded-3xl overflow-hidden border border-indigo-500/20 shadow-2xl flex items-center justify-center">
            {mediaType === 'video' ? (
              <div className="relative w-full h-full flex items-center justify-center">
                <video 
                  ref={videoRef}
                  controls 
                  onTimeUpdate={handleTimeUpdate}
                  className="w-full h-full object-contain"
                  preload="metadata"
                >
                  <source src="/friends-scene.mp4" type="video/mp4" />
                  <track src="/subtitles.vtt" kind="subtitles" srcLang="ar" label="العربية" default />
                  متصفحك لا يدعم تشغيل الفيديو.
                </video>

                {/* الترجمة السينمائية في أسفل الشاشة تماماً */}
                <div className="absolute bottom-3 inset-x-0 pointer-events-none flex flex-col items-center justify-center px-4 text-center z-20 space-y-0.5">
                  <p className="bg-black/80 text-yellow-300 text-xs md:text-sm font-bold px-3 py-0.5 rounded shadow-lg font-sans tracking-wide">
                    {currentSubtitle.en}
                  </p>
                  <p className="bg-black/80 text-white text-xs md:text-sm font-semibold px-3 py-0.5 rounded shadow-lg font-sans dir-rtl">
                    {currentSubtitle.ar}
                  </p>
                </div>
              </div>
            ) : (
              <iframe 
                src="https://www.youtube.com/embed/WKAntgNZPFs?cc_load_policy=1&hl=ar"
                title="يوتيوب"
                className="w-full h-full border-0"
                allowFullScreen
              ></iframe>
            )}
          </div>

          {/* صندوق معلومات إضافية والتحليل القديم */}
          <div className="bg-slate-900/80 border border-cyan-500/30 p-6 rounded-2xl space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span>🤖</span>
                <span>التحليل والتكرار التفاعلي (Listen & Repeat)</span>
              </h4>
              <span className="text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full font-bold animate-pulse">🟢 متزامن مع الفيديو</span>
            </div>
            <p className="text-[12px] text-slate-300">
              استمع للمشهد وتابع الترجمة السينمائية أسفل الفيديو مباشرة، ويمكنك الضغط على أي جملة في القائمة الجانبية لإعادة التدريب عليها فوراً.
            </p>
          </div>
        </div>

        {/* لوحة سكربت الحوار والمصادر القديمة بالكامل */}
        <div className="bg-slate-900/80 border border-indigo-500/20 p-6 rounded-3xl h-fit space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span>📜</span>
            <span>سكربت المشهد (اضغط للتدريب)</span>
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
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">كرر 🔄</span>
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
