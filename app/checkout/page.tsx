'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'fawry'>('fawry');
  const [cardNumber, setCardNumber] = useState('');
  const [fawryCode, setFawryCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // توليد رقم مرجعي عشوائي لفوري من 9 أرقام
  const generateFawryCode = () => {
    return Math.floor(100000000 + Math.random() * 900000000).toString();
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (paymentMethod === 'fawry') {
      setTimeout(() => {
        const generatedCode = generateFawryCode();
        setFawryCode(generatedCode);

        // حفظ الكورس بوضعية "في انتظار الدفع" أو تفعيله كمحاكاة
        const purchasedCourses = JSON.parse(localStorage.getItem('my_courses') || '[]');
        const newCourse = {
          title: 'كورس أساسيات البرمجة المتقدمة',
          date: new Date().toLocaleDateString('ar-EG'),
          status: 'في انتظار الدفع عبر فوري ⏳',
          fawryCode: generatedCode
        };

        if (!purchasedCourses.some((c: any) => c.title === newCourse.title)) {
          purchasedCourses.push(newCourse);
          localStorage.setItem('my_courses', JSON.stringify(purchasedCourses));
        }

        setLoading(false);
      }, 1200);
    } else {
      // دفع بالبطاقة البنكية
      setTimeout(() => {
        const purchasedCourses = JSON.parse(localStorage.getItem('my_courses') || '[]');
        const newCourse = {
          title: 'كورس أساسيات البرمجة المتقدمة',
          date: new Date().toLocaleDateString('ar-EG'),
          status: 'مفعل وناشط ✅'
        };

        if (!purchasedCourses.some((c: any) => c.title === newCourse.title)) {
          purchasedCourses.push(newCourse);
          localStorage.setItem('my_courses', JSON.stringify(purchasedCourses));
        }

        setLoading(false);
        alert('🎉 تم الدفع بنجاح! تم تفعيل الكورس في حسابك.');
        router.push('/profile');
      }, 1500);
    }
  };

  return (
    <main className="max-w-2xl mx-auto px-6 py-12 dir-rtl">
      <div className="bg-slate-900/80 border border-indigo-500/20 p-8 rounded-3xl shadow-2xl backdrop-blur-xl relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="text-center mb-8">
          <span className="text-4xl inline-block mb-2">💳</span>
          <h1 className="text-3xl font-black text-white">بوابة الدفع الآمنة</h1>
          <p className="text-slate-400 text-sm mt-1">اختر طريقة الدفع المناسبة للاشتراك في الكورس</p>
        </div>

        {/* ملخص الطلب */}
        <div className="bg-slate-950/60 border border-indigo-500/10 p-4 rounded-2xl mb-6 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-white text-sm">كورس أساسيات البرمجة</h3>
            <p className="text-xs text-slate-400 mt-0.5">وصول مدى الحياة + شهادة إتمام</p>
          </div>
          <span className="text-cyan-400 font-black text-lg">299 ج.م</span>
        </div>

        {!fawryCode ? (
          <form onSubmit={handlePayment} className="space-y-5">
            {/* اختيار وسيلة الدفع */}
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">اختر وسيلة الدفع</label>
              <div className="grid grid-cols-2 gap-4">
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
              </div>
            </div>

            {paymentMethod === 'fawry' ? (
              <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-2xl text-amber-200 text-xs space-y-2">
                <p className="font-bold text-sm">📌 كيف يتم الدفع عبر فوري؟</p>
                <p>1. سيتم إظهار رقم مرجعي خاص بك بعد الضغط على الزر أدناه.</p>
                <p>2. توجه لأي منفذ فوري أو استخدم تطبيق Fawry Yellow/MyFawry.</p>
                <p>3. اختر "دفع بكود الخدمة / مدفوعات متنوعة" واستخدم الرقم المرجعي.</p>
              </div>
            ) : (
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
            )}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-black rounded-xl shadow-lg shadow-amber-500/20 transition duration-300 mt-4 flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>جاري إصدار الرقم المرجعي... 🔄</span>
              ) : paymentMethod === 'fawry' ? (
                <span>توليد الرقم المرجعي لـ فوري 🟡</span>
              ) : (
                <span>إتمام الدفع بالبطاقة 🚀</span>
              )}
            </button>
          </form>
        ) : (
          /* عرض كارت الرقم المرجعي بعد توليده */
          <div className="text-center space-y-6 py-4">
            <div className="w-16 h-16 bg-amber-500/20 border border-amber-500/40 text-amber-400 rounded-full flex items-center justify-center text-3xl mx-auto shadow-lg shadow-amber-500/10">
              🟡
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-1">تم إصدار الرقم المرجعي بنجاح!</h2>
              <p className="text-slate-400 text-xs">يرجى الاحتفاظ بالرقم والسداد خلال 72 ساعة</p>
            </div>

            <div className="bg-slate-950 border border-amber-500/30 p-6 rounded-2xl relative">
              <span className="text-xs text-slate-400 block mb-1">الرقم المرجعي للدفع (Fawry Ref Number)</span>
              <span className="text-3xl font-black text-amber-400 tracking-wider font-mono dir-ltr inline-block">
                {fawryCode}
              </span>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => router.push('/profile')}
                className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition"
              >
                الانتقال لملفي الشخصي 🎓
              </button>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
