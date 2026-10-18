'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // محاكاة عملية معالجة الدفع لمدة 1.5 ثانية
    setTimeout(() => {
      // حفظ تفاصيل الكورس المشترك به في localStorage
      const purchasedCourses = JSON.parse(localStorage.getItem('my_courses') || '[]');
      const newCourse = {
        title: 'كورس أساسيات البرمجة المتقدمة',
        date: new Date().toLocaleDateString('ar-EG'),
        status: 'مفعل وناشط ✅'
      };
      
      // عدم تكرار الكورس لو تم شراؤه مسبقاً
      if (!purchasedCourses.some((c: any) => c.title === newCourse.title)) {
        purchasedCourses.push(newCourse);
        localStorage.setItem('my_courses', JSON.stringify(purchasedCourses));
      }

      setLoading(false);
      alert('🎉 تم الدفع بنجاح! تم تفعيل الكورس في حسابك.');
      router.push('/profile');
    }, 1500);
  };

  return (
    <main className="max-w-2xl mx-auto px-6 py-12 dir-rtl">
      <div className="bg-slate-900/80 border border-indigo-500/20 p-8 rounded-3xl shadow-2xl backdrop-blur-xl relative overflow-hidden">
        
        {/* تزيين خلفي */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="text-center mb-8">
          <span className="text-4xl inline-block mb-2">💳</span>
          <h1 className="text-3xl font-black text-white">بوابة الدفع الآمنة</h1>
          <p className="text-slate-400 text-sm mt-1">أكمل بيانات الدفع للاشتراك الفوري في الكورس</p>
        </div>

        {/* ملخص الطلب المصغر */}
        <div className="bg-slate-950/60 border border-indigo-500/10 p-4 rounded-2xl mb-6 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-white text-sm">كورس أساسيات البرمجة</h3>
            <p className="text-xs text-slate-400 mt-0.5">وصول مدى الحياة + شهادة إتمام</p>
          </div>
          <span className="text-cyan-400 font-black text-lg">299 ج.م</span>
        </div>

        <form onSubmit={handlePayment} className="space-y-5">
          {/* اختيار وسيلة الدفع */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">اختر وسيلة الدفع</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`py-3 px-4 rounded-xl border text-sm font-bold transition flex items-center justify-center gap-2 ${
                  paymentMethod === 'card' 
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' 
                    : 'bg-slate-950/40 border-indigo-500/20 text-slate-400 hover:bg-slate-800/40'
                }`}
              >
                <span>💳</span> بطاقة ائتمانية
              </button>
              
              <button
                type="button"
                onClick={() => setPaymentMethod('wallet')}
                className={`py-3 px-4 rounded-xl border text-sm font-bold transition flex items-center justify-center gap-2 ${
                  paymentMethod === 'wallet' 
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' 
                    : 'bg-slate-950/40 border-indigo-500/20 text-slate-400 hover:bg-slate-800/40'
                }`}
              >
                <span>📱</span> محفظة إلكترونية
              </button>
            </div>
          </div>

          {/* حقول الإدخال حسب وسيلة الدفع */}
          {paymentMethod === 'card' ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-1.5">رقم البطاقة</label>
                <input 
                  type="text" 
                  required
                  placeholder="4500 •••• •••• ••••"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950/60 border border-indigo-500/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-right transition"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-1.5">تاريخ الانتهاء</label>
                  <input 
                    type="text" 
                    required
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 bg-slate-950/60 border border-indigo-500/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-right transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-1.5">رمز الأمان (CVV)</label>
                  <input 
                    type="password" 
                    required
                    maxLength={3}
                    placeholder="123"
                    className="w-full px-4 py-3 bg-slate-950/60 border border-indigo-500/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-right transition"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-1.5">رقم المحفظة الإلكترونية</label>
              <input 
                type="tel" 
                required
                placeholder="01012345678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950/60 border border-indigo-500/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-right transition"
              />
            </div>
          )}

          {/* زر إتمام الدفع */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/20 transition duration-300 mt-4 flex items-center justify-center gap-2"
          >
            {loading ? (
              <span>جاري معالجة الدفع الآمن... 🔄</span>
            ) : (
              <span>إتمام الدفع واشتراك الآن 🚀</span>
            )}
          </button>
        </form>

      </div>
    </main>
  );
}
