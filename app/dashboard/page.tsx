'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [lessonTitle, setLessonTitle] = useState('');
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin');
    if (adminStatus === 'true') {
      setIsAdmin(true);
    }

    fetch('/api/courses')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.courses) {
          setCourses(data.courses);
          if (data.courses.length > 0) {
            setSelectedCourseId(data.courses[0].id.toString());
          }
        }
      })
      .catch((err) => console.error('خطأ في جلب الكورسات:', err));
  }, []);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoFile || !lessonTitle || !selectedCourseId) {
      alert('يرجى ملء جميع الحقول واختيار ملف الفيديو.');
      return;
    }

    setUploading(true);
    setMessage('');

    const formData = new FormData();
    formData.append('file', videoFile);
    formData.append('title', lessonTitle);
    formData.append('courseId', selectedCourseId);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setMessage('✨ تم رفع الفيديو ونشر الدرس بنجاح في الكورس!');
        setLessonTitle('');
        setVideoFile(null);
      } else {
        setMessage('❌ حدث خطأ أثناء رفع الفيديو.');
      }
    } catch (err) {
      setMessage('❌ فشل الاتصال بالخادم.');
    } finally {
      setUploading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    setIsAdmin(false);
    window.location.href = '/login';
  };

  return (
    <main className="min-h-screen dir-rtl p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* رأس لوحة التحكم */}
        <div className="bg-slate-900/70 border border-indigo-500/20 p-8 rounded-3xl shadow-xl backdrop-blur-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-xs bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 px-3 py-1 rounded-full font-bold">
              {isAdmin ? '👑 لوحة تحكم الأدمن (صاحب المنصة)' : '🎓 لوحة تحكم الطالب'}
            </span>
            <h1 className="text-3xl font-black text-white mt-2">أهلاً بك في لوحة التحكم 👋</h1>
            <p className="text-slate-400 text-sm mt-1">تابع الكورسات وإدارتها بكل سهولة.</p>
          </div>

          {isAdmin && (
            <button 
              onClick={handleLogout}
              className="bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white px-4 py-2 rounded-xl text-xs font-bold transition"
            >
              تسجيل الخروج 🚪
            </button>
          )}
        </div>

        {/* نموذج رفع الفيديوهات الخاص بالأدمن */}
        {isAdmin && (
          <div className="bg-slate-950/80 border border-cyan-500/30 p-8 rounded-3xl shadow-2xl backdrop-blur-xl">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <span>📤</span> رفع درس جديد للكورس مباشرة
            </h2>
            <p className="text-slate-400 text-sm mb-6">اختر الكورس، اكتب عنوان الدرس، وارفع الفيديو من جهازك أو تليفونك.</p>

            {message && (
              <div className="p-4 rounded-xl text-sm mb-6 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-center font-medium">
                {message}
              </div>
            )}

            <form onSubmit={handleUpload} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">اختر الكورس</label>
                <select 
                  value={selectedCourseId}
                  onChange={(e) => setSelectedCourseId(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900 border border-indigo-500/20 rounded-xl text-white focus:outline-none focus:border-cyan-400 text-right transition"
                >
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>{c.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">عنوان الدرس</label>
                <input 
                  type="text" 
                  value={lessonTitle}
                  onChange={(e) => setLessonTitle(e.target.value)}
                  placeholder="مثال: الدرس الأول: مقدمة في البرمجة"
                  className="w-full px-4 py-3 bg-slate-900 border border-indigo-500/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-right transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">ملف الفيديو (MP4)</label>
                <input 
                  type="file" 
                  accept="video/*"
                  onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
                  className="w-full file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-bold file:bg-indigo-500/20 file:text-indigo-300 hover:file:bg-indigo-500/30 text-slate-400 bg-slate-900 border border-indigo-500/20 rounded-xl cursor-pointer"
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={uploading}
                className="w-full py-3.5 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/20 transition duration-300 disabled:opacity-50"
              >
                {uploading ? 'جاري رفع الفيديو وحفظه في المنصة... ⏳' : 'رفع ونشر الدرس 🚀'}
              </button>
            </form>
          </div>
        )}

        {/* عرض الكورسات */}
        <h2 className="text-2xl font-bold text-white mb-6">الدورات التدريبية المتاحة للتصفح 📚</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course: any) => (
            <div key={course.id} className="bg-slate-900/60 border border-indigo-500/20 p-6 rounded-2xl flex justify-between items-center backdrop-blur-md hover:border-cyan-500/40 transition">
              <div>
                <span className="text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-3 py-1 rounded-xl font-bold">
                  {course.level}
                </span>
                <h3 className="font-bold text-white text-xl mt-3">{course.title}</h3>
                <p className="text-sm text-slate-400 mt-1">👨‍🏫 {course.tutor}</p>
              </div>
              <Link 
                href={`/courses/${course.id}`}
                className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500 hover:text-slate-950 px-5 py-2.5 rounded-xl text-sm font-bold transition duration-200"
              >
                متابعة
              </Link>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}