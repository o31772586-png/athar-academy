'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [isRegistering, setIsRegistering] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('isAdmin', 'true');
      localStorage.setItem('userEmail', email);
      if (name) localStorage.setItem('userName', name);

      window.location.href = '/dashboard';
    }
  };

  return (
    <main className="min-h-[85vh] flex items-center justify-center p-4 dir-rtl">
      <div className="relative bg-slate-900/80 border border-indigo-500/20 p-8 rounded-3xl shadow-2xl w-full max-w-md backdrop-blur-2xl transition-all">
        
        <div className="text-center mb-8">
          <span className="text-4xl inline-block mb-2">
            {isRegistering ? '🚀' : '🔑'}
          </span>
          <h1 className="text-3xl font-black text-white">
            {isRegistering ? 'إنشاء حساب جديد' : 'تسجيل الدخول'}
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            {isRegistering 
              ? 'أهلاً بك! أنشئ حسابك للبدء في تعلم الكورسات' 
              : 'أهلاً بك مجدداً في منصة أكاديمية أثر'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {isRegistering && (
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-1.5">الاسم الكامل</label>
              <input 
                type="text" 
                required={isRegistering}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-slate-950/60 border border-indigo-500/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-right transition"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1.5">البريد الإلكتروني</label>
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
            <label className="block text-sm font-semibold text-slate-300 mb-1.5">كلمة المرور</label>
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
            {isRegistering ? 'إنشاء الحساب للانضمام 🚀' : 'دخول للمنصة 🔑'}
          </button>
        </form>

        <div className="mt-6 text-center border-t border-slate-800 pt-4">
          <p className="text-slate-400 text-sm">
            {isRegistering ? 'لديك حساب بالفعل؟' : 'ليس لديك حساب حتى الآن؟'}
            <button 
              type="button"
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-cyan-400 font-bold mr-2 hover:underline focus:outline-none"
            >
              {isRegistering ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}
            </button>
          </p>
        </div>

      </div>
    </main>
  );
}
