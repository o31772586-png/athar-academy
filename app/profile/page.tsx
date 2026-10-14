'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    // جلب بيانات المستخدم الحالي من localStorage
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // لو مش مسجل، يوجهه لصفحة تسجيل الدخول
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    localStorage.removeItem('isAdmin');
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
              {user.role === 'admin' ? 'مدير المنصة (Admin)' : 'طالب مشترك (Student)'}
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
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span>📚</span>
          <span>الكورسات المشترك بها</span>
        </h2>

        {/* عرض قائمة الكورسات أو رسالة في حال عدم وجود اشتراكات بعد */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-950/60 border border-indigo-500/10 p-5 rounded-2xl flex items-center gap-4">
            <div className="text-3xl">💻</div>
            <div>
              <h3 className="font-bold text-white">كورس أساسيات البرمجة</h3>
              <p className="text-xs text-slate-400 mt-1">حالة الاشتراكات: مفعل وناشط ✅</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
