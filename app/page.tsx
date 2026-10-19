'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white dir-rtl selection:bg-cyan-500 selection:text-black">
      {/* قسم الترحيب الرئيسي والهوية البصرية لأكاديمية أثر */}
      <section className="relative overflow-hidden py-20 px-4 border-b border-indigo-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-bold shadow-lg">
            <span>✨</span>
            <span>الجيل الجديد من منصات تعلم اللغات وتطوير الذات</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            مرحباً بك في <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">أكاديمية أثر</span> 🚀
          </h1>
          
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            حيث الإتقان الحقيقي والتجربة التفاعلية المبتكرة! نحن لسنا مجرد منصة كورسات عادية، بل بيئة متكاملة مصممة خصيصاً لتصنع فرقاً حقيقياً في مهاراتك وثقتك بنفسك. كورساتنا لا مثيل لها لأنها تبنيك خطوة بخطوة بطريقة تفاعلية ممتعة.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="#courses" 
              className="bg-gradient-to-r from-cyan-5
    </main>
  );
}
