'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      // السماح بدخول أي إيميل وباسورد فوراً
      localStorage.setItem('isAdmin', 'true');
      localStorage.setItem('userEmail', email);
      router.push('/dashboard');
    }
  };

  return (
    <main className="min-h-[80vh] flex items-center justify-center p-4 dir-rtl">
      <div className="relative bg-slate-900/80 border border-indigo-500/20 p-8 rounded-3xl shadow-2xl w-full max-w-md backdrop-blur-2xl">
        <div className="text-center mb-8">
          <span className="text-4xl inline-block mb-2">🔑</span>
          <h1 className="text-3xl font-black text-white">تسجيل الدخول</h1>
          <p className="text-slate-400 text-sm mt-1">أهلاً بك مجدداً في منصة أكاديمية أثر</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">البريد الإلكتروني</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 bg-slate-950/60 border border-indigo-500/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-right transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">كلمة المرور</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-slate-950/60 border border-indigo-500/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-right transition"
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/20 transition duration-300 mt-2"
          >
            دخول للمنصة 🚀
          </button>
        </form>
      </div>
    </main>
  );
}
