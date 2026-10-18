'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ProfilePage() {
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);
  const [courses, setCourses] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        setUser({ name: storedUser, email: localStorage.getItem('userEmail') || '', role: 'student' });
      }
    } else {
      router.push('/login');
    }

    // جلب الكورسات المشتركة من localStorage
    const savedCourses = JSON.parse(localStorage.getItem('my_courses') || '[]');
    setCourses(savedCourses);
  }, [router]);

  const handleLogout = () => {
    localStorage.clear();
    router.push('/login');
  };

  if (!user) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center text-slate-400">
        جاري تحميل البيانات... ⏳
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 dir-rtl">
      {/* كارت معلومات المستخدم */}
      <div className="bg-slate-900/80 border border-indigo-500/20 p-8 rounded-3xl shadow-2xl backdrop-blur-xl mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-4xl text-white shadow-lg">
            🎓
          </div>
          
          <div className="text-center md:text-right grow">
            <h1 className="text-3xl font-black text-white">{user.name || 'طالب متميز'}</h1>
            <p className="text-slate-400 text-sm mt-1">{user.email}</p>
            <div className="mt-3 inline-block bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-3 py-1 rounded-xl text-xs font-bold">
              {user.role === 'admin' ? 'مدير المنصة (Admin) 👑' : 'طالب مشترك (Student) 📖'}
            </div>
          </div>

          <button 
            onClick={handleLogout}
            className="px-5 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 font-semibold rounded-xl transition"
          >
            تسجيل الخروج 🚪
          </button>
        </div>
      </div>

      {/* قسم الكورسات المشترك بها */}
      <div className="bg-slate-900/60 border border-indigo-500/20 p-8 rounded-3xl backdrop-blur-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span>📚</span>
            <span>الكورسات المشترك بها</span>
          </h2>
          <Link 
            href="/checkout" 
            className="text-xs bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-3.5 py-2 rounded-xl font-bold transition"
          >
            + اشتراك في كورس جديد
          </Link>
        </div>

        {courses.length === 0 ? (
          <div className="text-center py-10 text-slate-400 border border-dashed border-slate-800 rounded-2xl">
            <p className="mb-2">لم تقم بالاشتراك في أي كورسات بعد.</p>
            <Link href="/checkout" className="text-cyan-400 font-bold hover:underline text-sm">
              تصفح الكورسات واشترك الآن 🚀
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map((course: any, index: number) => (
              <div key={index} className="bg-slate-950/60 border border-indigo-500/10 p-5 rounded-2xl flex items-center gap-4">
                <div className="text-3xl">💻</div>
                <div>
                  <h3 className="font-bold text-white">{course.title}</h3>
                  <p className="text-xs text-slate-400 mt-1">تاريخ الاشتراك: {course.date} | <span className="text-emerald-400 font-semibold">{course.status}</span></p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
