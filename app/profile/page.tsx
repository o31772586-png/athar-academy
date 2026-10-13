import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6" dir="rtl">
      
      {/* الشريط العلوي */}
      <header className="max-w-4xl mx-auto flex justify-between items-center pb-6 border-b border-slate-800 mb-8">
        <h1 className="text-2xl font-bold text-blue-400">الملف الشخصي</h1>
        <Link 
          href="/dashboard" 
          className="bg-slate-800 hover:bg-slate-700 text-sm px-4 py-2 rounded-lg border border-slate-700 transition-colors"
        >
          ← العودة للوحة التحكم
        </Link>
      </header>

      <main className="max-w-4xl mx-auto flex flex-col gap-6">
        
        {/* كارت البيانات الشخصية */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-center gap-6">
          <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-3xl font-bold border-4 border-slate-700 shadow-inner">
            ع
          </div>
          <div className="text-center md:text-right flex-1">
            <h2 className="text-2xl font-bold mb-1">عمر عبد العزيز</h2>
            <p className="text-slate-400 text-sm mb-3">طالب متدرب | أكاديمية أثر</p>
            <span className="bg-blue-950 text-blue-400 border border-blue-800 text-xs px-3 py-1 rounded-full font-medium">
              حساب نشط
            </span>
          </div>
        </div>

        {/* تفاصيل الحساب */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg font-bold mb-4 text-slate-200 border-b border-slate-700 pb-2">بيانات الحساب</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-750">
              <span className="text-xs text-slate-400 block mb-1">البريد الإلكتروني</span>
              <p className="text-sm font-semibold text-slate-200">omar@example.com</p>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-750">
              <span className="text-xs text-slate-400 block mb-1">تاريخ الانضمام</span>
              <p className="text-sm font-semibold text-slate-200">أكتوبر 2026</p>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-750">
              <span className="text-xs text-slate-400 block mb-1">الكورسات المسجلة</span>
              <p className="text-sm font-semibold text-blue-400">3 كورسات</p>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-750">
              <span className="text-xs text-slate-400 block mb-1">الشهادات المكتسبة</span>
              <p className="text-sm font-semibold text-emerald-400">1 شهادة</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}