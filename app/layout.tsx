'use client';
import './globals.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userName, setUserName] = useState<string | null>(null);
  const pathname = usePathname(); // لمتابعة التنقل بين الصفحات

  const checkUserStatus = () => {
    const name = localStorage.getItem('userName') || localStorage.getItem('userEmail');
    if (name) {
      setUserName(name);
    } else {
      setUserName(null);
    }
  };

  useEffect(() => {
    checkUserStatus();

    // الاستماع لأي تغيير في التخزين أو تنقل بين الصفحات لتحديث الهيدر فوراً
    window.addEventListener('storage', checkUserStatus);
    return () => {
      window.removeEventListener('storage', checkUserStatus);
    };
  }, [pathname]);

  return (
    <html lang="ar" dir="rtl">
      <body className="bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 text-slate-100 min-h-screen flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
        
        {/* شريط التنقل العصري - Glassmorphism Navbar */}
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-indigo-500/20 px-6 py-4 transition-all">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                {/* أيقونة طاقية التخرج */}
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 10v6M2 10v6"></path>
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                أكاديمية أثر
              </span>
            </Link>

            <div className="flex gap-4 items-center">
              <Link 
                href="/" 
                className="text-slate-300 hover:text-cyan-400 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-slate-800/50"
              >
                الرئيسية
              </Link>
              
              <Link 
                href="/dashboard" 
                className="text-slate-300 hover:text-cyan-400 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-slate-800/50"
              >
                لوحة التحكم
              </Link>

              {/* يختفي زر إنشاء حساب فور تسجيل الدخول ويحل محله الإيموجي والملف الشخصي */}
              {userName ? (
                <Link 
                  href="/profile" 
                  className="flex items-center gap-2 bg-slate-800/80 border border-cyan-500/30 hover:border-cyan-400 px-4 py-2 rounded-xl transition shadow-md group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">🎓</span>
                  <span className="text-sm font-bold text-cyan-400 truncate max-w-[120px]">
                    {userName.split('@')[0]}
                  </span>
                </Link>
              ) : (
                <Link 
                  href="/login" 
                  className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-xl group bg-linear-to-br from-cyan-500 to-blue-600 hover:text-white text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 active:scale-95"
                >
                  <span className="relative px-5 py-2 rounded-[10px] font-bold">
                    إنشاء حساب 🚀
                  </span>
                </Link>
              )}
            </div>
          </div>
        </nav>

        {/* محتوى الصفحات */}
        <div className="grow">
          {children}
        </div>

        {/* التذييل */}
        <footer className="bg-slate-950/80 border-t border-indigo-500/10 py-8 px-6 text-center text-slate-400 text-sm mt-12 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-medium">جميع الحقوق محفوظة © 2026 - <span className="text-cyan-400 font-bold">أكاديمية أثر</span> 🚀</p>
            <div className="flex gap-6 text-slate-400">
              <a href="#" className="hover:text-cyan-400 transition-colors">عن المنصة</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">الشروط والأحكام</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">تواصل معنا</a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
