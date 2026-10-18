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
                className="text-slate-300 hover:text-cyan-400 font-medium text-sm transition-colors px-2 py-
