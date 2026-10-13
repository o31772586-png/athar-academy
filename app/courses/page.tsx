'use client';

import Link from 'next/link';

export default function CoursesCatalogPage() {
  // قائمة الكورسات المتاحة في المنصة
  const availableCourses = [
    {
      id: 1,
      title: 'أساسيات البرمجة بـ Python',
      description: 'تعلم البرمجة من الصفر حتى الاحتراف باستخدام لغة بايثون وتطبيقاتها العملية.',
      tutor: 'د. أحمد علي',
      duration: '15 ساعة',
      level: 'مبتدئ',
    },
    {
      id: 2,
      title: 'تطوير تطبيقات الويب بـ Next.js',
      description: 'ابني تطبيقات ويب حديثة، سريعة، ومتكاملة باستخدام أحدث إصدارات Next.js و React.',
      tutor: 'م. عمر عبد العزيز',
      duration: '25 ساعة',
      level: 'متوسط',
    },
    {
      id: 3,
      title: 'إتقان اللغة الإنجليزية للمبتدئين',
      description: 'طوّر مهارات المحادثة والاستماع والقواعد بأسلوب تفاعلي ممتع.',
      tutor: 'أ. سارة حسن',
      duration: '20 ساعة',
      level: 'مبتدئ',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6" dir="rtl">
      
      {/* الشريط العلوي */}
      <header className="max-w-6xl mx-auto flex justify-between items-center pb-6 border-b border-slate-800 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-blue-400">أثر أكاديمي | استعراض الكورسات</h1>
          <p className="text-sm text-slate-400">اختر كورسك وابدأ رحلة تطوير مهاراتك اليوم</p>
        </div>
        <div className="flex gap-3">
          <Link 
            href="/dashboard" 
            className="bg-slate-800 hover:bg-slate-700 text-sm px-4 py-2 rounded-lg border border-slate-700 transition-colors"
          >
            لوحة التحكم
          </Link>
          <Link 
            href="/" 
            className="bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2 rounded-lg transition-colors font-medium shadow"
          >
            الرئيسية
          </Link>
        </div>
      </header>

      {/* قائمة الكورسات */}
      <main className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold mb-6 text-slate-200">جميع الدورات المتاحة</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableCourses.map((course) => (
            <div 
              key={course.id} 
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all shadow-lg"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs text-blue-400 font-semibold bg-blue-950 px-2.5 py-1 rounded-full border border-blue-800/40">
                    {course.level}
                  </span>
                  <span className="text-xs text-slate-400">{course.duration}</span>
                </div>

                <h3 className="text-lg font-bold mb-2 text-white">{course.title}</h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">{course.description}</p>
                <p className="text-xs text-slate-300 mb-6 font-medium">المحاضر: {course.tutor}</p>
              </div>

              <div>
                <Link 
                  href={`/courses/${course.id}`}
                  className="block text-center w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2.5 rounded-lg transition-colors font-medium shadow"
                >
                  عرض تفاصيل الكورس
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}