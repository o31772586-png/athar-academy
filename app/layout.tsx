'use client';
import './globals.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const checkAuth = () => {
    if (typeof window !== 'undefined') {
      const email = localStorage.getItem('userEmail');
      const name = localStorage.getItem('userName');
      const currentUser = localStorage.getItem('currentUser');

      let foundName = '';
      if (currentUser) {
        try {
          const parsed = JSON.parse(currentUser);
          foundName = parsed.name || parsed.email;
        } catch (e) {
          foundName = currentUser;
        }
      } else if (name) {
        foundName = name;
      } else if (email) {
        foundName = email;
      }

      if (foundName) {
        setUser({ name: foundName.split('@')[0] });
      } else {
        setUser(null);
      }
    }
  };

  useEffect(() => {
    setIsLoaded(true);
    checkAuth();

    const interval = setInterval(checkAuth, 400);
    window.addEventListener('storage', checkAuth);

    return () => {
      clearInterval(interval);
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-slate-100 min-h-screen flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
        
        {/* شريط التنقل - Glassmorphism Navbar */}
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-indigo-500/20 px-4 py-3 transition-all">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 10v6M2 10v6"></path>
                </svg>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                أكاديمية أثر
              </span>
            </Link>

            <div className="flex gap-2 items-center">
              <Link 
                href="/" 
                className="text-slate-300 hover:text-cyan-400 font-medium text-sm transition-colors px-2 py-1.5 rounded-lg hover:bg-slate-800/50"
              >
                الرئيسية
              </Link>
              
              <Link 
                href="/dashboard" 
                className="text-slate-300 hover:text-cyan-400 font-medium text-sm transition-colors px-2 py-1.5 rounded-lg hover:bg-slate-800/50"
              >
                لوحة التحكم
              </Link>

              {/* التحقق الصارم بعد اكتمال التحميل */}
              {isLoaded && (
                user ? (
                  <div className="flex items-center gap-2">
                    <Link 
                      href="/profile" 
                      className="flex items-center gap-1.5 bg-slate-800/90 border border-cyan-500/30 hover:border-cyan-400 px-3 py-1.5 rounded-xl transition shadow-md"
                    >
                      <span className="text-base">🎓</span>
                      <span className="text-xs font-bold text-cyan-400 truncate max-w-[80px]">
                        {user.name}
                      </span>
                    </Link>

                    <button 
                      onClick={handleLogout}
                      className="px-2.5 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 text-xs font-bold rounded-xl transition"
                    >
                      خروج 🚪
                    </button>
                  </div>
                ) : (
                  <Link 
                    href="/login" 
                    className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-medium rounded-xl group bg-gradient-to-br from-cyan-500 to-blue-600 hover:text-white text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 active:scale-95"
                  >
                    <span className="relative px-3.5 py-1.5 rounded-[10px] font-bold">
                      إنشاء حساب 🚀
                    </span>
                  </Link>
                )
              )}

            </div>
          </div>
        </nav>

        {/* محتوى الصفحات */}
        <div className="grow">
          {children}
        </div>

        {/* التذييل */}
        <footer className="bg-slate-950/80 border-t border-indigo-500/10 py-6 px-4 text-center text-slate-400 text-xs mt-12 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="font-medium">جميع الحقوق محفوظة © 2026 - <span className="text-cyan-400 font-bold">أكاديمية أثر</span> 🚀</p>
            <div className="flex gap-4 text-slate-400">
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
