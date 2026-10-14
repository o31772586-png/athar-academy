import './globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 text-slate-100 min-h-screen flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
        
        {/* شريط التنقل العصري - Glassmorphism Navbar */}
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-indigo-500/20 px-6 py-4 transition-all">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
  <img src="/watermark.jpg" alt="شعار أكاديمية أثر" className="w-10 h-10 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform" />
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
                href="/login" 
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-xl group bg-linear-to-br from-cyan-500 to-blue-600 group-hover:from-cyan-500 group-hover:to-blue-600 hover:text-white text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 active:scale-95"
              >
                <span className="relative px-5 py-2 transition-all ease-in duration-75 rounded-[10px] bg-opacity-0 font-bold">
                  تسجيل الدخول ✨
                </span>
              </Link>
            </div>
          </div>
        </nav>

        {/* محتوى الصفحات */}
        <div className="grow">
          {children}
        </div>

        {/* تذييل الصفحة الفخم - Footer */}
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
