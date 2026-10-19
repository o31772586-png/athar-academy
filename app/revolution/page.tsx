'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RevolutionCoursePage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  // التعرف التلقائي على الأدمن وعلى حالة الدفع فور تحميل الصفحة
  useEffect(() => {
    // 1. فحص ما إذا كان المستخدم هو الأدمن (من خلال الاسم المعروض أو تسجيل الدخول)
    const storedUser = localStorage.getItem('user') || '';
    if (storedUser.includes('Abdelaziz') || localStorage.getItem('isAdmin') === 'true') {
      setIsAdmin(true);
    }

    // 2. فحص حالة الاشتراك المسبق
    if (localStorage.getItem('revolution_paid') === 'true') {
      setIsPaid(true);
    }
  }, []);

  // محاكاة عملية الدفع الفورية والتفعيل المباشر للكورس
  const handleInstantPayment = () => {
    // تفعيل الاشتراك فوراً وحفظه
    localStorage.setItem('revolution_paid', 'true');
    setIsPaid(true);
  };

  // الكورس يفتح فوراً لو كان المستخدم أدمن أو قام بالدفع
  const canAccess = isAdmin || isPaid;

  return (
    <main className="min-h-screen bg-slate-950 text-white dir-rtl selection:bg-cyan-500 selection:text-black py-12 px-4 relative">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* شريط معلومات الصفحة */}
        <div className="flex justify-between items-center bg-slate-900/80 border border-indigo-500/20 p-4 rounded-2xl relative z-20">
          <Link href="/" className="text-xs text-cyan-400 font-bold hover:underline">
            &rarr; العودة للصفحة الرئيسية
          </Link>

          <div>
            {isAdmin ? (
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                👑 معاينة الأدمن (فتح مباشر)
              </span>
            ) : isPaid ? (
              <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/20">
                ✅ الكورس مفعل بالكامل
              </span>
            ) : (
              <span className="text-xs font-bold text-slate-400 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
                🔒 محتوى بحاجة لاشتراك
              </span>
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

        {/* منطقة الكورس الأصلي */}
        <div className="relative">
          
          {/* المحتوى الأصلي للورشة (الفيديوهات والمشغل التفاعلي) */}
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

          {/* القفل يظهر فقط للزائر العادي الذي لم يدفع بعد، ويختفي تماماً للأدمن أو لمن دفع */}
          {!canAccess && (
            <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-md rounded-3xl z-10 flex flex-col items-center justify-center p-6 text-center space-y-6 border border-cyan-500/30 shadow-2xl">
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

              {/* زر الدفع المباشر الذي يفعل الكورس فوراً بدون رسائل تنبيهية */}
              <button 
                onClick={handleInstantPayment}
                className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black px-10 py-4 rounded-2xl text-sm md:text-base transition shadow-2xl active:scale-95"
              >
                اشترك الآن بـ 10,000 ج.م وافتح الكورس 🚀
              </button>
            </div>
          )}

        </div>

      </div>
    </main>
  );
}
