'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function CourseWatchPage() {
  // فيديو المحاضرة الصينية/الأجنبية
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/embed/WKAntgNZPFs?cc_load_policy=1&hl=ar'); 
  const [activeLesson, setActiveLesson] = useState(1);

  const lessons = [
    { 
      id: 1, 
      title: 'المحاضرة الأولى: الشرح الصيني/الأجنبي (مترجم) 🎬', 
      embedUrl: 'https://www.youtube.com/embed/WKAntgNZPFs?cc_load_policy=1&hl=ar',
      transcript: 'أهلاً بكم في هذه المحاضرة التعليمية. سنقوم بشرح المفاهيم الأساسية خطوة بخطوة مع ترجمة كاملة للعربية.'
    },
    { 
      id: 2, 
      title: 'المحاضرة الثانية: التطبيق والورشة العملية 💻', 
      embedUrl: 'https://www.youtube.com/embed/WKAntgNZPFs?cc_load_policy=1&hl=ar',
      transcript: 'في هذا الجزء نطبق المفاهيم البرمجية واللغوية عملياً مع شرح التفاصيل باللغة العربية.'
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 dir-rtl">
      {/* العنوان */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <span className="text-cyan-400 text-xs font-bold block mb-1">🌐 مشغل المحاضرات المترجمة آلياً</span>
          <h1 className="text-2xl md:text-3xl font-black text-white">المحاضرة التعليمية (دعم الترجمة العربية)</h1>
        </div>
        <Link href="/profile" className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2 rounded-xl transition">
          عودة للبروفايل ↩️
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* مشغل الفيديو */}
        <div className="lg:col-span-2 space-y-4">
          <div className="relative w-full aspect-video bg-slate-950 rounded-3xl overflow-hidden border border-indigo-500/20 shadow-2xl">
            <iframe 
              src={videoUrl}
              title="مشغل الفيديو المترجم"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* صندوق إرشادات الترجمة العربية */}
          <div className="bg-slate-900/80 border border-cyan-500/30 p-5 rounded-2xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🈴 ➔ 🇪🇬</span>
              <div>
                <h4 className="text-sm font-bold text-white">تفعيل الترجمة العربية الكتابية:</h4>
                <p className="text-xs text-slate-400">اضغط على زرار <b>(CC)</b> أو <b>الإعدادات ⚙️</b> داخل المشغل ⬅️ الترجمة التلقائية ⬅️ اختر <b>اللغة العربية</b>.</p>
              </div>
            </div>
          </div>

          {/* تفاصيل ونص المحاضرة المترجم */}
          <div className="bg-slate-900/60 border border-indigo-500/20 p-6 rounded-2xl">
            <h3 className="font-bold text-white text-sm mb-2 flex items-center gap-2">
              <span>📝</span>
              <span>الملخص النصي للمحاضرة باللغة العربية</span>
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              {lessons.find(l => l.id === activeLesson)?.transcript}
            </p>
          </div>
        </div>

        {/* قائمة الدروس */}
        <div className="bg-slate-900/80 border border-indigo-500/20 p-6 rounded-3xl h-fit">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span>📺</span>
            <span>دروس المحاضرة</span>
          </h2>

          <div className="space-y-3">
            {lessons.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => {
                  setActiveLesson(lesson.id);
                  setVideoUrl(lesson.embedUrl);
                }}
                className={`w-full text-right p-4 rounded-2xl border text-xs font-bold transition flex items-center justify-between gap-3 ${
                  activeLesson === lesson.id
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                    : 'bg-slate-950/40 border-indigo-500/10 text-slate-400 hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{activeLesson === lesson.id ? '▶️' : '📁'}</span>
                  <span>{lesson.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
