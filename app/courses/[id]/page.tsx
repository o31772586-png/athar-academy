'use client';

export const dynamic = 'force-dynamic';

import { useState, use, useEffect } from 'react';
import Link from 'next/link';
export default function CourseDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const courseId = parseInt(resolvedParams.id);

  const [course, setCourse] = useState<any>(null);
  const [lessons, setLessons] = useState<any[]>([]);
  const [activeLesson, setActiveLesson] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/courses')
      .then((res) => res.json())
      .then((data) => {
        const foundCourse = data.courses.find((c: any) => Number(c.id) === courseId);
        const courseLessons = data.lessons.filter((l: any) => Number(l.courseId) === courseId);
        
        setCourse(foundCourse);
        setLessons(courseLessons);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching course details:', err);
        setLoading(false);
      });
  }, [courseId]);

  if (loading) {
    return <div className="p-12 text-center text-slate-400">جاري تحميل بيانات الكورس... ⏳</div>;
  }

  if (!course) {
    return (
      <div className="p-12 text-center dir-rtl">
        <h1 className="text-3xl font-bold text-red-400 mb-4">الكورس غير موجود! ⚠️</h1>
        <Link href="/" className="text-cyan-400 underline hover:text-cyan-300">العودة للرئيسية</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen dir-rtl p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* زر العودة */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
          ← العودة لكافة الكورسات
        </Link>

        {/* مشغل الفيديو التفاعلي الحقيقي */}
        {activeLesson ? (
          <div className="bg-slate-900/90 border border-cyan-500/30 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>▶️</span> جاري مشاهدة: <span className="text-cyan-300">{activeLesson.title}</span>
              </h2>
              <button 
                onClick={() => setActiveLesson(null)}
                className="text-xs bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500 hover:text-white px-3 py-1.5 rounded-lg transition"
              >
                إغلاق الفيديو ✖
              </button>
            </div>
            
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-black">
              <video 
                className="w-full h-full object-contain"
                controls
                autoPlay
                src={activeLesson.videoUrl}
              >
                متصفحك لا يدعم تشغيل الفيديو.
              </video>
            </div>
          </div>
        ) : null}

        {/* تفاصيل الكورس */}
        <div className="bg-slate-900/70 border border-indigo-500/20 p-8 rounded-3xl shadow-xl backdrop-blur-xl">
          <span className="inline-block bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs px-3.5 py-1.5 rounded-xl font-bold mb-3">
            {course.level}
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">{course.title}</h1>
          <p className="text-slate-300 leading-relaxed text-base mb-6">{course.description}</p>
          
          <div className="flex flex-wrap gap-6 text-sm text-slate-400 border-t border-slate-800 pt-6">
            <span>👨‍🏫 المحاضر: <strong className="text-white">{course.tutor}</strong></span>
            <span>⏱️ المدة: <strong className="text-cyan-400">{course.duration}</strong></span>
          </div>
        </div>

        {/* قائمة الدروس المرفوعة */}
        <div className="bg-slate-900/70 border border-indigo-500/20 p-8 rounded-3xl shadow-xl backdrop-blur-xl">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            🎬 دروس الكورس المتاحة
          </h2>

          <div className="space-y-4">
            {lessons.length > 0 ? (
              lessons.map((lesson, index) => (
                <div 
                  key={lesson.id} 
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-slate-800/50 hover:bg-slate-800 p-5 rounded-2xl border border-indigo-500/10 hover:border-cyan-500/40 transition gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold text-sm border border-indigo-500/30">
                      {index + 1}
                    </span>
                    <span className="font-semibold text-slate-100">{lesson.title}</span>
                  </div>

                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <span className="text-xs text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1.5 rounded-lg font-mono">
                      ⏱️ {lesson.duration}
                    </span>
                    <button 
                      onClick={() => setActiveLesson(lesson)}
                      className="bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-lg shadow-cyan-500/20 transition active:scale-95"
                    >
                      تشغيل الدرس 🎬
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-slate-400 text-center py-6">لم يتم رفع دروس لهذا الكورس حتى الآن. ارفع أول درس من لوحة التحكم! ✨</p>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}
