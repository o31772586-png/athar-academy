'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RevolutionCoursePage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminPass, setAdminPass] = useState('');
  const [passError, setPassError] = useState(false);

  // كلمة سر الأدمن المؤقتة
  const ADMIN_SECRET = 'admin123';

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPass === ADMIN_SECRET) {
      setIsAdmin(true);
      setShowAdminModal(false);
      setPassError(false);
      setAdminPass('');
    } else {
      setPassError(true);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white dir-rtl selection:bg-cyan-500 selection:text-black py-12 px-4 relative">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* شريط الأدمن العلوي */}
        <div className="flex justify-between items-center bg-slate-900/80 border border-indigo-500/20 p-4 rounded-2xl relative z-20">
          <Link href="/" className="text-xs text-cyan-400 font-bold hover:underline">
            &rarr; العودة للصفحة الرئيسية
          </Link>

          <div>
            {isAdmin ? (
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                👑 تم الدخول كـ الأدمن (الكورس مفتوح)
              </span>
            ) : (
              <button 
                onClick={() => setShowAdminModal(true)}
                className="text-xs font-bold text-slate-400 hover:text-white bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 transition"
              >
                دخول الأدمن 🔐
              </button>
            )}
          </div>
        </div>

        {/* عنوان الكورس الرئيسي */}
        <div className="text-center space-y-3">
          <span className="text-cyan-400 text-xs font-bold bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-400/20 inline-block">
            🎬 كورس ريفلوشن - Friends Workshop
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white">
            ورشة محادثات اللغة الإنجليزية الحية
          </h1>
        </div>

        {/* محتوى الكورس المفتوح (المحتوى الأساسي زي ما هو) */}
        <div className="relative">
          
          <div className="bg-slate-900/90 border border-cyan-500/40 rounded-3xl p-8 space-y-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-cyan-300">محتوى الورشة الحية والتطبيقات التفاعلية</h2>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              هنا يمكنك مشاهدة جميع الحلقات، استخدام المشغل التفاعلي، التدريب على خاصية Listen &amp; Repeat والوصول إلى الترجمة المتزامنة المباشرة.
            </p>

            {/* فيديو الكورس أو المشغل التفاعلي الأصلي */}
            <div className="aspect-video bg-slate-950 rounded-2xl border border-indigo-500/30 flex items-center justify-center text-slate-400 text-sm shadow-inner">
              <div className="text-center space-y-2">
                <div className="text-5xl">🎥</div>
                <p className="font-bold text-white">مشغل الفيديو التفاعلي والدروس الحية</p>
                <p className="text-xs text-slate-500">مشهد من مسلسل Friends - الحلقة 14</p>
              </div>
            </div>
          </div>

          {/* طبقة القفل التي تظهر للزائر العادي وتختفي عند تسجيل دخول الأدمن */}
          {!isAdmin && (
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md rounded-3xl z-10 flex flex-col items-center justify-center p-6 text-center space-y-6 border border-cyan-500/30 shadow-2xl">
              <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-4xl shadow-xl">
                🔒
              </div>

              <div className="space-y-3 max-w-lg">
                <h2 className="text-2xl md:text-3xl font-black text-white">
                  محتوى محمي — يلزم الاشتراك للوصول
                </h2>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                  هذا الكورس يتطلب اشتراكاً حائزاً للوصول الشامل والكامل لكافة المحاضرات والمشغل التفاعلي وخاصية التكرار الصوتي والترجمة المتزامنة.
                </p>
              </div>

              {/* كارت السعر 10,000 جنيه */}
              <div className="bg-slate-900 border border-cyan-500/40 rounded-2xl px-8 py-4 space-y-1 shadow-inner">
                <span className="text-xs text-slate-400 block font-bold">رسوم الاشتراك الكلي</span>
                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                  10,000 ج.م
                </div>
              </div>

              <button 
                onClick={() => alert('لإتمام الاشتراك، يرجى التواصل مع إدارة الأكاديمية لتفعيل حسابك فوراً.')}
                className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black px-10 py-4 rounded-2xl text-sm md:text-base transition shadow-2xl"
              >
                اشترك الآن بـ 10,000 ج.م وافتح الكورس 🚀
              </button>
            </div>
          )}

        </div>

      </div>

      {/* نافذة دخول الأدمن (Modal) */}
      {showAdminModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-slate-900 border border-indigo-500/30 p-6 rounded-3xl max-w-sm w-full space-y-5 shadow-2xl relative">
            <h3 className="text-lg font-bold text-white text-center">🔐 تسجيل دخول الأدمن</h3>
            
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div>
                <label className="text-xs text-slate-400 block mb-2">أدخل كلمة السر الخاصة بك:</label>
                <input 
                  type="password"
                  value={adminPass}
                  onChange={(e) => setAdminPass(e.target.value)}
                  placeholder="كلمة السر..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
                {passError && (
                  <span className="text-xs text-red-400 mt-1 block">كلمة السر غير صحيحة!</span>
                )}
              </div>

              <div className="flex gap-2">
                <button 
                  type="submit"
                  className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-2.5 rounded-xl text-xs transition"
                >
                  تأكيد الدخول
                </button>
                <button 
                  type="button"
                  onClick={() => { setShowAdminModal(false); setPassError(false); }}
                  className="bg-slate-800 text-slate-300 font-bold px-4 py-2.5 rounded-xl text-xs hover:bg-slate-700 transition"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </main>
  );
}
