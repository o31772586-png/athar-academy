'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminEarningsPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [transactions, setTransactions] = useState<any[]>([]);
  const router = useRouter();

  const loadData = () => {
    const savedTransactions = JSON.parse(localStorage.getItem('admin_transactions') || '[]');
    setTransactions(savedTransactions);

    // حساب الفلوس المحصلة فعلياً (العمليات المفعلة)
    const total = savedTransactions.reduce((sum: number, item: any) => {
      if (item.status && item.status.includes('مفعل')) {
        return sum + (item.amount || 299);
      }
      return sum;
    }, 0);

    setTotalEarnings(total);
  };

  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin');
    if (adminStatus !== 'true') {
      router.push('/dashboard');
      return;
    }
    setIsAdmin(true);
    loadData();
  }, [router]);

  // دالة لتأكيد الأدمن لاستلام الفلوس يدوياً (سواء فوري أو فودافون كاش)
  const handleConfirmPayment = (indexToConfirm: number) => {
    const updatedTransactions = [...transactions];
    updatedTransactions[indexToConfirm].status = 'مفعل وناشط ✅';
    
    setTransactions(updatedTransactions);
    localStorage.setItem('admin_transactions', JSON.stringify(updatedTransactions));

    // تحديث في كورسات الطالب أيضاً
    const myCourses = JSON.parse(localStorage.getItem('my_courses') || '[]');
    if (myCourses[indexToConfirm]) {
      myCourses[indexToConfirm].status = 'مفعل وناشط ✅';
      localStorage.setItem('my_courses', JSON.stringify(myCourses));
    }

    loadData();
    alert('🎉 تم تأكيد وصول الفلوس وتفعيل الكورس للطالب بنجاح!');
  };

  if (!isAdmin) return null;

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 dir-rtl">
      {/* عنوان اللوحة */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-black text-white">💰 الإدارة المالية وخزانة المنصة</h1>
          <p className="text-slate-400 text-sm mt-1">سجل المبيعات والتحويلات المالية للطلاب</p>
        </div>
        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-2 rounded-2xl text-xs font-bold">
          الخزانة الرئيسية 👑
        </span>
      </div>

      {/* إحصائيات مالية */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-slate-900/80 border border-emerald-500/30 p-6 rounded-3xl backdrop-blur-xl">
          <span className="text-slate-400 text-xs font-bold block mb-2">إجمالي رصيد المنصة الحقيقي</span>
          <div className="text-4xl font-black text-emerald-400">{totalEarnings} ج.م</div>
          <span className="text-[10px] text-emerald-500/80 mt-2 block">متحصل من العمليات المؤكدة ✅</span>
        </div>

        <div className="bg-slate-900/80 border border-amber-500/20 p-6 rounded-3xl backdrop-blur-xl">
          <span className="text-slate-400 text-xs font-bold block mb-2">في انتظار التأكيد / السداد</span>
          <div className="text-4xl font-black text-amber-400">
            {transactions.filter(t => t.status && t.status.includes('⏳')).length} طالب
          </div>
          <span className="text-[10px] text-amber-500/80 mt-2 block">فوري / محافظ كاش ⏳</span>
        </div>

        <div className="bg-slate-900/80 border border-cyan-500/20 p-6 rounded-3xl backdrop-blur-xl">
          <span className="text-slate-400 text-xs font-bold block mb-2">إجمالي الطلبات</span>
          <div className="text-4xl font-black text-cyan-400">{transactions.length} طلب</div>
          <span className="text-[10px] text-slate-500 mt-2 block">كل وسائل الدفع</span>
        </div>
      </div>

      {/* جدول البيانات */}
      <div className="bg-slate-900/60 border border-indigo-500/20 p-6 rounded-3xl backdrop-blur-xl">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <span>📊</span>
          <span>سجل طلبات الشراء وتأكيد الاستلام</span>
        </h2>

        {transactions.length === 0 ? (
          <div className="text-center py-12 text-slate-400 border border-dashed border-slate-800 rounded-2xl">
            لا توجد أي مبيعات أو عمليات دفع حية حتى الآن.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm">
              <thead className="bg-slate-950/80 text-slate-400 border-b border-indigo-500/10">
                <tr>
                  <th className="p-4">اسم الطالب</th>
                  <th className="p-4">البريد الإلكتروني</th>
                  <th className="p-4">وسيلة الدفع</th>
                  <th className="p-4">المبلغ</th>
                  <th className="p-4">التاريخ والوقت</th>
                  <th className="p-4">الحالة</th>
                  <th className="p-4">الإجراء</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {transactions.map((item: any, idx: number) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition">
                    <td className="p-4 font-bold text-white flex items-center gap-2">
                      <span>🎓</span> {item.studentName}
                    </td>
                    <td className="p-4 text-cyan-400 text-xs font-mono dir-ltr text-right">{item.studentEmail}</td>
                    <td className="p-4 text-xs font-bold text-amber-300">{item.method}</td>
                    <td className="p-4 font-black text-emerald-400">{item.amount || 299} ج.م</td>
                    <td className="p-4 text-slate-400 text-xs">{item.date}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 border rounded-xl text-xs font-bold inline-block ${
                        item.status && item.status.includes('مفعل')
                          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                          : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4">
                      {item.status && item.status.includes('⏳') && (
                        <button 
                          onClick={() => handleConfirmPayment(idx)}
                          className="px-3 py-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-xl transition"
                        >
                          تأكيد وصول الفلوس ✔️
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
