'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // التحقق من صلاحية الأدمن والجلسة الحالية
    const adminStatus = localStorage.getItem('isAdmin');
    const name = localStorage.getItem('userName') || localStorage.getItem('userEmail');
    
    if (adminStatus === 'true') {
      setIsAdmin(true);
    }
    if (name) {
      setUserName(name);
    }
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 dir-rtl">
      {/* الترحيب بالمستخدم */}
      <div className="bg-slate-900/60 border border-indigo-500/20 p-8 rounded-3xl backdrop-blur-xl mb-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h1 className="text-3xl font-black text-white">
            مرحباً بك، <span className="text-cyan-400">{userName || 'في المنصة'}</span> 👋
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            تابع كورساتك ودراستك من مكان واحد بكل سهولة.
          </p>
        </div>

        {/* ظهور زر الرفع حصرياً للأدمن فقط */}
        {isAdmin && (
          <Link 
            href="/upload" 
            className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-2xl shadow-lg shadow-cyan-500/20 transition duration-300 flex items-center gap-2"
          >
            <span>➕</span>
            <span>رفع كورس / درس جديد</span>
          </Link>
        )}
      </div>

      {/* منطقة الكورسات المتاحة */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span>📚</span>
          <span>الكورسات المتاحة</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* كارت كورس تجريبي */}
          <div className="bg-slate-900/80 border border-indigo-500/20 p-6 rounded-2xl backdrop-blur-md hover:border-cyan-500/40 transition">
            <div className="w-full h-40 bg-slate-800 rounded-xl mb-4 flex items-center justify-center text-4xl">
              💻
            </div>
            <h3 className="text-xl font-bold text-white mb-2">كورس أساسيات البرمجة</h3>
            <p className="text-slate-400 text-sm mb-4">تعلم المفاهيم البرمجية الأساسية ولغة JavaScript من الصفر.</p>
            <button className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-semibold rounded-xl border border-indigo-500/20 transition">
              مشاهدة الدروس 📖
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
