'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'fawry'>('card');
  const [cardNumber, setCardNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // جلب بيانات الطالب الحالي المسجل دخوله
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const studentName = localStorage.getItem('userName') || currentUser.name || 'طالب متميز';
    const studentEmail = localStorage.getItem('userEmail') || currentUser.email || 'لا يوجد بريد';

    setTimeout(() => {
      // 1. إعداد تفاصيل المعاملة المالية والكورس
      const newTransaction = {
        studentName: studentName,
        studentEmail: studentEmail,
        title: 'كورس أساسيات البرمجة المتقدمة',
        amount: 299,
        method: paymentMethod === 'fawry' ? 'فوري (Fawry)' : 'بطاقة ائتمانية',
        date: new Date().toLocaleDateString('ar-EG') + ' - ' + new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }),
        status: 'مفعل وناشط ✅' // تفعيل فوري آلياً بدون انتظار
      };

      // 2. حفظ الكورس في قائمة كورسات الطالب
      const myCourses = JSON.parse(localStorage.getItem('my_courses') || '[]');
      if (!myCourses.some((c: any) => c.title === newTransaction.title)) {
        myCourses.push(newTransaction);
        localStorage.setItem('my_courses', JSON.stringify(myCourses));
      }

      // 3. تسجيل المعاملة في الخزانة المالية للادارة
      const allTransactions = JSON.parse(localStorage.getItem('admin_transactions') || '[]');
      allTransactions.push(newTransaction);
      localStorage.setItem('admin_transactions', JSON.stringify(allTransactions));

      setLoading(false);
      alert('🎉 تم إتمام الدفع بنجاح وتفعيل الكورس فوراً في حسابك!');
      router.push('/profile');
    }, 1200);
  };

  return (
    <main className="max-w-2xl mx-auto px-6 py-12 dir-rtl">
      <div className="bg-slate-900/80 border border-indigo-500/20 p-8 rounded-3xl shadow-2xl backdrop-blur-xl relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="text-center mb-8">
          <span className="text-4xl inline-block mb-2">💳</span>
          <h1 className="text-3xl font-black text-white">بوابة الدفع الآمنة</h1>
          <p className="text-slate-400 text-sm mt-1">اشترك الآن ويتم تفعيل الكورس في حسابك فوراً</p>
        </div>

        {/* ملخص الطلب */}
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
                onClick={() => setPaymentMethod('fawry')}
                className={`py-3 px-4 rounded-xl border text-sm font-bold transition flex items-center justify-center gap-2 ${
                  paymentMethod === 'fawry' 
                    ? 'bg-amber-500/20 border-amber-400 text-amber-300' 
                    : 'bg-slate-950/40 border-indigo-500/20 text-slate-400 hover:bg-slate-800/40'
                }`}
              >
                <span>🟡</span> خدمة فوري (Fawry)
              </button>
            </div>
          </div>

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
            <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-2xl text-amber-200 text-xs space-y-2">
              <p className="font-bold text-sm">⚡ الدفع المباشر عبر فوري</p>
              <p>اضغط على إتمام الدفع وسيتم تحصيل المبلغ فوراً وتفعيل الكورس في حسابك تلقائياً دون أي تأخير.</p>
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/20 transition duration-300 mt-4 flex items-center justify-center gap-2"
          >
            {loading ? (
              <span>جاري خصم المبلغ وتفعيل الكورس... 🔄</span>
            ) : (
              <span>دفع 299 ج.م وتفعيل الكورس فوراً 🚀</span>
            )}
          </button>
        </form>

      </div>
    </main>
  );
}
