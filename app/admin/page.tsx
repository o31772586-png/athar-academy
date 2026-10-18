'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminEarningsPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [transactions, setTransactions] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    // التأكد من أن المستخدم أدمن
    const adminStatus = localStorage.getItem('isAdmin');
    if (adminStatus !== 'true') {
      router.push('/dashboard');
      return;
    }
    setIsAdmin(true);

    // جلب جميع المعاملات المالية الحقيقية المسجلة
    const savedTransactions = JSON.parse(localStorage.getItem('admin_transactions') || '[]');
    setTransactions(savedTransactions);

    // حساب إجمالي أرباح المنصة
    const total = savedTransactions.reduce((sum: number, item: any) => sum + (item.amount || 299), 0);
    setTotalEarnings(total);
  }, [router]);

  if (!isAdmin) return null;

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 dir-rtl">
      {/* عنوان اللوحة */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-black text-white">💰 الإدارة المالية وخزانة المنصة</h1>
          <p className="text-slate-400 text-sm mt-1">سجل المبيعات وإجمالي المبالغ المحصلة من الطلاب فورياً</p>
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
          <span className="text-[10px] text-emerald-500/80 mt-2 block">متاح للتحويل فوراً ✅</span>
        </div>

        <div className="bg-slate-900/80 border border-indigo-500/20 p-6 rounded-3xl backdrop-blur-xl">
          <span className="text-slate-400 text-xs font-bold block mb-2">إجمالي عمليات الشراء الناجحة</span>
          <div className="text-4xl font-black text-cyan-400">{transactions.length} مبيعة</div>
          <span className="text-[10px] text-slate-500 mt-2 block">تم التفعيل الآلي بنجاح ⚡</span>
        </div>

        <div className="bg-slate-900/80 border border-purple-500/20 p-6 rounded-3xl backdrop-blur-xl">
          <span className="text-slate-400 text-xs font-bold block mb-2">متوسط سعر الكورس</span>
          <div className="text-4xl font-black text-purple-400">299 ج.م</div>
          <span className="text-[10px] text-purple-400/80 mt-2 block">سعر موحد موثق</span>
        </div>
      </div>

      {/* جدول البيانات التفصيلي للطلاب والمدفوعات */}
      <div className="bg-slate-900/60 border border-indigo-500/20 p-6 rounded-3xl backdrop-blur-xl">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <span>📊</span>
          <span>تفاصيل مبيعات الطلاب والمبالغ المحصلة</span>
        </h2>

        {transactions.length === 0 ? (
          <div className="text-center py-12 text-slate-400 border border-dashed border-slate-800 rounded-2xl">
            لا توجد أي مبيعات أو مبالغ مدفوعة حتى الآن.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm">
              <thead className="bg-slate-950/80 text-slate-400 border-b border-indigo-500/10">
                <tr>
                  <th className="p-4">اسم الطالب</th>
                  <th className="p-4">البريد الإلكتروني</th>
                  <th className="p-4">الكورس المشتري</th>
                  <th className="p-4">المبلغ المدفوع</th>
                  <th className="p-4">وسيلة الدفع</th>
                  <th className="p-4">تاريخ ووقت الدفع</th>
                  <th className="p-4">حالة الكورس</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {transactions.map((item: any, idx: number) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition">
                    <td className="p-4 font-bold text-white flex items-center gap-2">
                      <span>🎓</span> {item.studentName}
                    </td>
                    <td className="p-4 text-cyan-400 text-xs font-mono dir-ltr text-right">{item.studentEmail}</td>
                    <td className="p-4 font-semibold text-slate-200">{item.title}</td>
                    <td className="p-4 font-black text-emerald-400 text-base">{item.amount || 299} ج.م</td>
                    <td className="p-4 text-xs font-bold text-amber-300">{item.method}</td>
                    <td className="p-4 text-slate-400 text-xs">{item.date}</td>
                    <td className="p-4">
                      <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-xs font-bold inline-block">
                        {item.status}
                      </span>
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
