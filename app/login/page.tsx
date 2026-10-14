'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [isRegistering, setIsRegistering] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  //حدد إيميل الأدمن الرئيسي هنا
  const ADMIN_EMAIL = 'omarandnour725@gmail.com';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // جلب الحسابات المسجلة من localStorage
    const existingUsers = JSON.parse(localStorage.getItem('app_users') || '[]');

    if (isRegistering) {
      // التحقق هل الإيميل مسجل مسبقاً؟
      const userExists = existingUsers.find((u: any) => u.email === email);
      if (userExists) {
        setError('هذا البريد الإلكتروني مسجل بالفعل! قم بتسجيل الدخول.');
        return;
      }

      // إنشاء حساب جديد وتثبيته
      const newUser = {
        name,
        email,
        password,
        role: email === ADMIN_EMAIL ? 'admin' : 'student'
      };

      existingUsers.push(newUser);
      localStorage.setItem('app_users', JSON.stringify(existingUsers));
      
      // تسجيل الجلسة الحالية
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      localStorage.setItem('isAdmin', newUser.role === 'admin' ? 'true' : 'false');
      
      window.location.href = '/dashboard';
    } else {
      // تسجيل الدخول
      const user = existingUsers.find((u: any) => u.email === email && u.password === password);
      
      // السماح للأدمن الرئيسي بالدخول دائماً
      if (email === ADMIN_EMAIL && password === '12345678') {
        const adminUser = { name: 'عمر (الأدمن)', email: ADMIN_EMAIL, role: 'admin' };
        localStorage.setItem('currentUser', JSON.stringify(adminUser));
        localStorage.setItem('isAdmin', 'true');
        window.location.href = '/dashboard';
        return;
      }

      if (!user) {
        setError('البريد الإلكتروني أو كلمة المرور غير صحيحة!');
        return;
      }

      // دخول ناجح للمستخدم المسجل
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('isAdmin', user.role === 'admin' ? 'true' : 'false');
      window.location.href = '/dashboard';
    }
  };

  return (
    <main className="min-h-[85vh] flex items-center justify-center p-4 dir-rtl">
      <div className="relative bg-slate-900/80 border border-indigo-500/20 p-8 rounded-3xl shadow-2xl w-full max-w-md backdrop-blur-2xl">
        
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

        {error && (
          <div className="bg-red-500/10 text-red-400 p-3.5 rounded-xl text-sm mb-4 border border-red-500/20 text-center font-medium">
            {error}
          </div>
        )}

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
              onClick={() => { setIsRegistering(!isRegistering); setError(''); }}
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
