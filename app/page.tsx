import { getDatabase } from '@/lib/db';
import Link from 'next/link';

export default function Home() {
  const db = getDatabase();
  const courses = db.courses;

  return (
    <main className="min-h-screen dir-rtl p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        
        {/* قسم الترحيب - Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-indigo-900/80 via-purple-900/60 to-slate-900 border border-indigo-500/30 p-8 md:p-12 mb-12 shadow-2xl backdrop-blur-xl">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-4 shadow-sm">
              ✨ انطلق نحو المستقبل
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              طوّر مهاراتك مع <span className="bg-linear-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">أكاديمية أثر</span>
            </h1>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              تعلم أحدث البرمجيات والتقنيات مع أفضل الكورسات التفاعلية المصممة خصيصاً لمساعدتك في بناء مشاريعك.
            </p>
          </div>
        </div>

        {/* عنوان قسم الكورسات */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2">
              <span>🔥</span> الدورات التدريبية المتاحة
            </h2>
            <p className="text-slate-400 text-sm mt-1">اختر الكورس وابدأ رحلة التعلم الآن</p>
          </div>
        </div>

        {/* شبكة الكورسات الملونة */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course: any, idx: number) => (
            <Link key={course.id} href={`/courses/${course.id}`} className="group block">
              <div className="relative h-full bg-slate-900/60 border border-indigo-500/20 rounded-2xl p-7 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 backdrop-blur-md flex flex-col justify-between overflow-hidden group-hover:-translate-y-1">
                
                {/* شريط زينة علوي */}
                <div className={`absolute top-0 right-0 left-0 h-1.5 bg-linear-to-r ${idx % 2 === 0 ? 'from-cyan-400 to-blue-600' : 'from-purple-500 to-pink-500'}`}></div>

                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3.5 py-1 rounded-xl text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {course.level}
                    </span>
                    <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                      {idx % 2 === 0 ? '💻' : '🌐'}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                    {course.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <span>👨‍🏫</span> <span className="font-semibold">{course.tutor}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
                    <span>⏱️</span> <span>{course.duration}</span>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}