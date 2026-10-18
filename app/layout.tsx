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
        
        {/* شريط التنقل العلوي - Navbar */}
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-indigo-500/20 px-4 py-3 transition-all">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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

        {/* محتوى الصفحة */}
        <div className="grow">
          {children}
        </div>

        {/* الـ Footer الثابت في أسفل كافة الصفحات */}
        <footer className="w-full bg-slate-950 border-t border-indigo-500/20 py-8 px-6 text-slate-400 text-sm mt-auto backdrop-blur-md">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* اسم المنصة والحقوق */}
            <div className="text-center md:text-right">
              <h3 className="text-base font-bold text-white mb-1">أكاديمية أثر 🚀</h3>
              <p className="text-xs text-slate-500">جميع الحقوق محفوظة © 2026 - نحو تعليم برمجي ولغوي فريد.</p>
            </div>

            {/* الأيقونات المباشرة للتواصل Social Icons */}
            <div className="flex items-center gap-5">
              {/* فيسبوك */}
              <a 
                href="https://www.facebook.com/share/1F57XAVmem/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition shadow-md"
                title="فيسبوك"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* إنستجرام */}
              <a 
                href="https://www.instagram.com/athar.academy.eg?psln=MXFtdXN5eHZienhvOQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10 transition shadow-md"
                title="إنستجرام"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.161-2.759 6.161-6.163c0-3.403-2.758-6.162-6.161-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* واتساب */}
              <a 
                href="https://wa.me/201503717424" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition shadow-md"
                title="تواصل عبر الواتساب"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.301-.15-1.785-.881-2.062-.982-.276-.101-.477-.15-.678.15-.201.3-.779.982-.955 1.183-.175.201-.351.226-.652.075-.302-.151-1.274-.47-2.427-1.498-.897-.799-1.502-1.787-1.678-2.088-.175-.302-.019-.465.131-.615.136-.135.302-.351.452-.527.15-.176.201-.301.302-.502.101-.201.051-.376-.025-.526-.076-.151-.678-1.631-.929-2.233-.244-.587-.493-.508-.678-.517-.175-.008-.376-.008-.576-.008-.201 0-.527.075-.803.376-.276.301-1.054 1.029-1.054 2.509 0 1.48 1.08 2.91 1.23 3.11.15.201 2.126 3.248 5.15 4.551.719.31 1.281.495 1.719.633.722.23 1.379.197 1.9.12.581-.087 1.785-.729 2.036-1.431.251-.702.251-1.303.175-1.431-.075-.128-.276-.228-.577-.379z"/>
                </svg>
              </a>
            </div>

            {/* الروابط النصية */}
            <div className="flex gap-6 text-xs font-semibold">
              <a href="#" className="hover:text-cyan-400 transition-colors">عن المنصة</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">الشروط والأحكام</a>
              <a href="https://wa.me/201503717424" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">الدعم الفني</a>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}
