import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative">
      
      {/* القسم الرئيسي - صورة اللوجو خلفية كاملة للمستطيل */}
      <section className="w-full max-w-4xl mx-auto text-center p-8 sm:p-16 rounded-3xl relative overflow-hidden shadow-2xl border border-indigo-500/30">
        
        {/* طبقة خلفية اللوجو التي تملأ المستطيل بالكامل */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/watermark.jpg')" }}
        ></div>

        {/* طبقة تغميش شفافة فوق الصورة لضمان وضوح الكلام */}
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-0"></div>

        {/* محتوى المستطيل (الكلام والأزرار) */}
        <div className="relative z-10">
          
          {/* شارة صغيرة فوق العنوان */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            انطلق نحو المستقبل
          </div>

          {/* العنوان الرئيسي */}
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            طوّر مهاراتك مع <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">أكاديمية أثر</span>
          </h1>

          {/* الوصف */}
          <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8">
            تعلم أحدث البرمجيات والتقنيات مع أفضل الكورسات التفاعلية المصممة خصيصاً لمساعدتك في بناء مشاريعك.
          </p>

          {/* أزرار التفاعل */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/register" 
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-200"
            >
              ابدأ الآن مجاناً
            </Link>
            <Link 
              href="/courses" 
              className="px-8 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-slate-200 font-semibold text-lg border border-slate-700 hover:border-slate-500 transition-all duration-200"
            >
              استعرض الكورسات
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
