'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'fawry' | 'wallet'>('fawry');
  
  // بيانات البطاقة
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  // بيانات المحفظة
  const [walletPhone, setWalletPhone] = useState('');

  // نتيجه العملية
  const [fawryCode, setFawryCode] = useState<string | null>(null);
  const [walletPending, setWalletPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // توليد رقم مرجعي لفوري
  const generateFawryCode = () => {
    return Math.floor(100000000 + Math.random() * 900000000).toString();
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const studentName = localStorage.getItem('userName') || currentUser.name || 'طالب متميز';
    const studentEmail = localStorage.getItem('userEmail') || currentUser.email || 'لا يوجد بريد';

    // 1. الدفع عبر فوري
    if (paymentMethod === 'fawry') {
      setTimeout(() => {
        const code = generateFawryCode();
        setFawryCode(code);

        const newTransaction = {
          studentName,
          studentEmail,
          title: 'كورس أساسيات البرمجة المتقدمة',
          amount: 299,
          method: 'فوري (Fawry)',
          fawryCode: code,
          date: new Date().toLocaleDateString('ar-EG') + ' - ' + new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }),
          status: 'في انتظار السداد عبر فوري ⏳'
        };

        saveTransaction(newTransaction, false); // لم يتم التفعيل بعد
        setLoading(false);
      }, 1000);

    // 2. الدفع عبر المحفظة الإلكترونية
    } else if (paymentMethod === 'wallet') {
      if (!walletPhone || walletPhone.length < 11) {
        setErrorMessage('⚠️ يرجى إدخال رقم محفظة إلكترونية صحيح (11 رقم)');
        setLoading(false);
        return;
      }

      setTimeout(() => {
        setWalletPending(true);

        const newTransaction = {
          studentName,
          studentEmail,
          title: 'كورس أساسيات البرمجة المتقدمة',
          amount: 299,
          method: `محفظة إلكترونية (${walletPhone})`,
          date: new Date().toLocaleDateString('ar-EG') + ' - ' + new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }),
          status: 'في انتظار تحويل فودافون كاش ⏳'
        };

        saveTransaction(newTransaction, false); // لم يتم التفعيل بعد
        setLoading(false);
      }, 1000);

    // 3. الدفع عبر البطاقة الائتمانية (مع فحص الحقول)
    } else if (paymentMethod === 'card') {
      const cleanCard = cardNumber.replace(/\s+/g, '');
      if (cleanCard.length < 16) {
        setErrorMessage('❌ رقم البطاقة غير مكتمل! يرجى إدخال 16 رقم بشكل صحيح.');
        setLoading(false);
        return;
      }
      if (!expiry || !cvv || cvv.length < 3) {
        setErrorMessage('❌ يرجى استكمال تاريخ الانتهاء ورمز الأمان CVV بشكل صحيح.');
        setLoading(false);
        return;
      }

      setTimeout(() => {
        const newTransaction = {
          studentName,
          studentEmail,
          title: 'كورس أساسيات البرمجة المتقدمة',
          amount: 299,
          method: 'بطاقة ائتمانية',
          date: new Date().toLocaleDateString('ar-EG') + ' - ' + new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }),
          status: 'مفعل وناشط ✅'
        };

        saveTransaction(newTransaction, true); // تفعيل حقيقي للبطاقة السليمة
        setLoading(false);
        alert('🎉 تم الخصم بنجاح وتفعيل الكورس فوراً في حسابك!');
        router.push('/profile');
      }, 1200);
    }
  };

  const saveTransaction = (transaction: any, isActivatedImmediately: boolean) => {
    // حفظ في سجل الإدارة المالية
    const allTransactions = JSON.parse(localStorage.getItem('admin_transactions') || '[]');
    allTransactions.push(transaction);
    localStorage.setItem('admin_transactions', JSON.stringify(allTransactions));

    // حفظ في كورسات الطالب
    const myCourses = JSON.parse(localStorage.getItem('my_courses') || '[]');
    // التأكد من عدم تكرار المعاملة لنفس الكورس
    const existingIndex = myCourses.findIndex((c: any) => c.title === transaction.title);
    if (existingIndex >= 0) {
      myCourses[existingIndex] = transaction;
    } else {
      myCourses.push(transaction);
    }
    localStorage.setItem('my_courses', JSON.stringify(myCourses));
  };

  return (
    <main className="max-w-2xl mx-auto px-6 py-12 dir-rtl">
      <div className="bg-slate-900/80 border border-indigo-500/20 p-8 rounded-3xl shadow-2xl backdrop-blur-xl relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="text-center mb-8">
          <span className="text-4xl inline-block mb-2">💳</span>
          <h1 className="text-3xl font-black text-white">بوابة الدفع الإلكتروني</h1>
          <p className="text-slate-400 text-sm mt-1">اختر إحدى الطرق الثلاث المعتمة لإتمام الاشتراك</p>
        </div>

        {/* ملخص الطلب */}
        <div className="bg-slate-950/60 border border-indigo-500/10 p-4 rounded-2xl mb-6 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-white text-sm">كورس أساسيات البرمجة المتقدمة</h3>
            <p className="text-xs text-slate-400 mt-0.5">وصول مدى الحياة + شهادة إتمام</p>
          </div>
          <span className="text-cyan-400 font-black text-lg">299 ج.م</span>
        </div>

        {errorMessage && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3.5 rounded-xl text-xs font-bold mb-5 text-center">
            {errorMessage}
          </div>
        )}

        {/* إذا لم يتم إصدار رقم فوري أو طلب محفظة بعد */}
        {!fawryCode && !walletPending ? (
          <form onSubmit={handlePayment} className="space-y-5">
            {/* طرق الدفع الثلاث */}
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">اختر وسيلة الدفع</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => { setPaymentMethod('fawry'); setErrorMessage(''); }}
                  className={`py-3 px-2 rounded-xl border text-xs font-bold transition flex flex-col items-center justify-center gap-1 ${
                    paymentMethod === 'fawry' 
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300' 
                      : 'bg-slate-950/40 border-indigo-500/20 text-slate-400 hover:bg-slate-800/40'
                  }`}
                >
                  <span className="text-base">🟡</span>
                  <span>خدمة فوري</span>
                </button>

                <button
                  type="button"
                  onClick={() => { setPaymentMethod('wallet'); setErrorMessage(''); }}
                  className={`py-3 px-2 rounded-xl border text-xs font-bold transition flex flex-col items-center justify-center gap-1 ${
                    paymentMethod === 'wallet' 
                      ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300' 
                      : 'bg-slate-950/40 border-indigo-500/20 text-slate-400 hover:bg-slate-800/40'
                  }`}
                >
                  <span className="text-base">📱</span>
                  <span>محفظة كاش</span>
                </button>

                <button
                  type="button"
                  onClick={() => { setPaymentMethod('card'); setErrorMessage(''); }}
                  className={`py-3 px-2 rounded-xl border text-xs font-bold transition flex flex-col items-center justify-center gap-1 ${
                    paymentMethod === 'card' 
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' 
                      : 'bg-slate-950/40 border-indigo-500/20 text-slate-400 hover:bg-slate-800/40'
                  }`}
                >
                  <span className="text-base">💳</span>
                  <span>بطاقة بنكية</span>
                </button>
              </div>
            </div>

            {/* تفاصيل فوري */}
            {paymentMethod === 'fawry' && (
              <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-2xl text-amber-200 text-xs space-y-2">
                <p className="font-bold text-sm">📌 الدفع عن طريق منافذ فوري:</p>
                <p>• اضغط أدناه لإصدار الرقم المرجعي المكون من 9 أرقام.</p>
                <p>• توجه لأقرب ماكينة فوري وسدد المبلغ كمدفوعات متنوعة خلال 72 ساعة.</p>
              </div>
            )}

            {/* تفاصيل المحفظة الإلكترونية */}
            {paymentMethod === 'wallet' && (
              <div className="space-y-3">
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-3.5 rounded-2xl text-emerald-200 text-xs">
                  <p className="font-bold">📱 المحافظ المدعومة: (فودافون كاش / أورنج كاش / اتصالات كاش / وي كاش)</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-1.5">رقم المحفظة التي سيتم التحويل منها</label>
                  <input 
                    type="tel" 
                    required
                    maxLength={11}
                    placeholder="01012345678"
                    value={walletPhone}
                    onChange={(e) => setWalletPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950/60 border border-indigo-500/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 text-right transition"
                  />
                </div>
              </div>
            )}

            {/* تفاصيل البطاقة الائتمانية */}
            {paymentMethod === 'card' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-1.5">رقم البطاقة (16 رقم)</label>
                  <input 
                    type="text" 
                    required
                    maxLength={19}
                    placeholder="4500 0000 0000 0000"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950/60 border border-indigo-500/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-right transition font-mono dir-ltr"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-1.5">تاريخ الانتهاء</label>
                    <input 
                      type="text" 
                      required
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-950/60 border border-indigo-500/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-center transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-1.5">رمز CVC / CVV</label>
                    <input 
                      type="password" 
                      required
                      maxLength={4}
                      placeholder="123"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-950/60 border border-indigo-500/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-center transition"
                    />
                  </div>
                </div>
              </div>
            )}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/20 transition duration-300 mt-4 flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>جاري معالجة الطلب... 🔄</span>
              ) : paymentMethod === 'fawry' ? (
                <span>إصدار الرقم المرجعي لـ فوري 🟡</span>
              ) : paymentMethod === 'wallet' ? (
                <span>تأكيد طلب التحويل عبر المحفظة 📱</span>
              ) : (
                <span>دفع 299 ج.م والتأكيد 🚀</span>
              )}
            </button>
          </form>

        ) : fawryCode ? (
          /* كارت فوري */
          <div className="text-center space-y-6 py-4">
            <div className="w-16 h-16 bg-amber-500/20 border border-amber-500/40 text-amber-400 rounded-full flex items-center justify-center text-3xl mx-auto shadow-lg shadow-amber-500/10">
              🟡
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-1">تم إصدار كود فوري بنجاح!</h2>
              <p className="text-slate-400 text-xs">سداد المبلغ مطلوب لتفعيل الكورس في حسابك</p>
            </div>

            <div className="bg-slate-950 border border-amber-500/30 p-6 rounded-2xl relative">
              <span className="text-xs text-slate-400 block mb-1">الرقم المرجعي للدفع (Fawry Ref Code)</span>
              <span className="text-3xl font-black text-amber-400 tracking-wider font-mono dir-ltr inline-block">
                {fawryCode}
              </span>
            </div>

            <button 
              onClick={() => router.push('/profile')}
              className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition"
            >
              متابعة حالة الكورس في ملفي الشخصي 🎓
            </button>
          </div>
        ) : (
          /* كارت المحفظة الإلكترونية */
          <div className="text-center space-y-6 py-4">
            <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center text-3xl mx-auto shadow-lg shadow-emerald-500/10">
              📱
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-1">يرجى تحويل المبلغ لإتمام الاشتراك</h2>
              <p className="text-slate-400 text-xs">قم بفتح محفظتك الإلكترونية وتحويل مبلغ <b>299 ج.م</b> إلى الرقم:</p>
            </div>

            <div className="bg-slate-950 border border-emerald-500/30 p-5 rounded-2xl">
              <span className="text-xs text-slate-400 block mb-1">رقم محفظة إدارة الأكاديمية</span>
              <span className="text-2xl font-black text-emerald-400 font-mono dir-ltr inline-block">
                01099887766
              </span>
            </div>

            <p className="text-xs text-slate-400">
              سيتم مراجعة وتأكيد استلام التحويل من الرقم ({walletPhone}) وتفعيل الكورس لديك فوراً.
            </p>

            <button 
              onClick={() => router.push('/profile')}
              className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition"
            >
              الانتقال لملفي الشخصي 🎓
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
