'use client';
import Link from 'next/link';

export default function HomePage() {
  const courses = [
    {
      id: 'eng-101',
      title: 'طلاقة اللغة الإنجليزية الشاملة (English Fluency)',
      category: 'اللغات الأجنبية 🇬🇧',
      price: '299 ج.م',
      instructor: 'م. عمر عبد العزيز',
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80',
      description: 'اتقن المحادثة والصوتيات من الصفر وتحدث بثقة بدون خوف مع تدريبات تفاعلية حية.',
      level: 'من المبتدئ للمتقدم'
    },
    {
      id: 'ger-101',
      title: 'كورس اللغة الألمانية الشامل (Deutsch A1-B2)',
      category: 'اللغات الأجنبية 🇩🇪',
      price: '349 ج.م',
      instructor: 'د. أحمد حسن',
      image: 'https://images.unsplash.com/photo-1527866512907-a35a62a7f6be?auto=format&fit=crop&w=800&q=80',
      description: 'طريقك المباشر للسفر والدراسة في ألمانيا، تغطية كاملة للقواعد وامتحانات Goethe.',
      level: 'جميع المستويات'
    },
    {
      id: 'turk-101',
      title: 'احتراف اللغة التركية للمحادثة والإتقان 🇹🇷',
      category: 'اللغات الأجنبية 🇹🇷',
      price: '279 ج.م',
      instructor: 'أ. سارة محمود',
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80',
      description: 'تعلم التركية اليومية، التعامل مع السكان المحليين، وقواعد النطق الصحيح بسهولة.',
      level: 'مبتدئ - متوسط'
    },
    {
      id: 'cs-101',
      title: 'دبلومة البرمجة وتطوير المواقع الكاملة (Full-Stack)',
      category: 'التكنولوجيا والبرمجة 💻',
      price: '399 ج.م',
      instructor: 'م. عمر عبد العزيز',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      description: 'تعلم JavaScript, React, Next.js وبناء مشاريع واقعية حقيقية تؤهلك لسوق العمل.',
      level: 'احترافي'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 dir-rtl overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      {/* 1. Hero Section - الواجهة الرئيسية الضخمة */}
      <section className="relative py-20 md:py-32 px-6 overflow-hidden border-b border-indigo-500/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 to-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <span className="inline-block bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-6 backdrop-blur-md">
            🚀 المنصة التعليمية الرائدة للغات والبرمجة 2026
          </span>

          <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
            ارتقِ بمهاراتك مع <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              أكاديمية أثر التعليمية
            </span>
          </h1>

          <p className="text-slate-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            محتوى تعليمي نادر ومصمم بأعلى جودة لمساعدتك على إتقان اللغات الأجنبية والبرمجة مع تطبيق عملي ومتابعة شخصية مستمرة خطوة بخطوة.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="#courses" 
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black rounded-2xl shadow-xl shadow-cyan-500/20 transition-all duration-300 text-base"
            >
              استكشف الكورسات المتاحة 📚
            </Link>
            <Link 
              href="/login" 
              className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-800 border border-indigo-500/30 text-white font-bold rounded-2xl transition duration-300 text-base"
            >
              انشئ حسابك الآن 🚀
            </Link>
          </div>

          {/* إحصائيات سريعة */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-slate-800/80">
            <div>
              <div className="text-3xl md:text-4xl font-black text-cyan-400">+10,000</div>
              <div className="text-xs md:text-sm text-slate-400 mt-1">طالب مشترك</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-blue-400">98%</div>
              <div className="text-xs md:text-sm text-slate-400 mt-1">نسبة رضا الطلاب</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-indigo-400">+150</div>
              <div className="text-xs md:text-sm text-slate-400 mt-1">ساعة تدريبية حية</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-emerald-400">24/7</div>
              <div className="text-xs md:text-sm text-slate-400 mt-1">دعم فني وتطبيقي</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. قسم لماذا محتوانا فريد ومختلف (Why Us) */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">لماذا محتوى "أثر" مفيش زيه؟ ✨</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">نحن لا نقدم مجرد دروس مسجلة، بل بنينا منظومة تعليمية كاملة تضمن لك الوصول لغايتك.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/60 border border-indigo-500/20 p-8 rounded-3xl backdrop-blur-xl hover:border-cyan-500/40 transition group">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🎯</div>
            <h3 className="text-xl font-bold text-white mb-3">منهج عملي وليس نظري</h3>
            <p className="text-slate-400 text-sm leading-relaxed">تطبيق مباشر من اليوم الأول، تمارين محاكاة للواقع، ومشاريع تبني بها ملف أعمالك (Portfolio).</p>
          </div>

          <div className="bg-slate-900/60 border border-indigo-500/20 p-8 rounded-3xl backdrop-blur-xl hover:border-blue-500/40 transition group">
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">👨‍🏫</div>
            <h3 className="text-xl font-bold text-white mb-3">متابعة شخصية وتصحيح</h3>
            <p className="text-slate-400 text-sm leading-relaxed">فريق المحاضرين يتابع الواجبات، ويصحح الأخطاء بالنطق والبرمجة لضمان التطور الحقيقي.</p>
          </div>

          <div className="bg-slate-900/60 border border-indigo-500/20 p-8 rounded-3xl backdrop-blur-xl hover:border-indigo-500/40 transition group">
            <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">📜</div>
            <h3 className="text-xl font-bold text-white mb-3">شهادة إتمام معتمدة</h3>
            <p className="text-slate-400 text-sm leading-relaxed">تحصل على شهادة موثقة فور إكمال متطلبات الكورس لتعزيز سيرتك الذاتية وحسابك على LinkedIn.</p>
          </div>
        </div>
      </section>

      {/* 3. تفاصيل المجالات والمسارات (Tracks Detail) */}
      <section className="py-20 px-6 bg-slate-900/40 border-y border-indigo-500/10">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* مسار اللغات */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-cyan-400 font-bold text-sm block mb-2">🌍 مسار اللغات الأجنبية</span>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6">تحدث 3 لغات عالمية بطلاقة وبدون تعقيد</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                نركز في أكاديمية أثر على أهم ثلاث لغات مطلوبة في سوق العمل والسفر:
              </p>
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">✓</span>
                  <b>اللغة الإنجليزية:</b> من الصوتيات واكتساب الحصيلة اللغوية حتى إجراء مقابلات العمل.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">✓</span>
                  <b>اللغة الألمانية:</b> الشرح المبسط للقواعد الألمانية المعقدة للوصول للمستوى B2/C1.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">✓</span>
                  <b>اللغة التركية:</b> تعلّم اللغة وتعبيراتها الثقافية للتعامل اليومي أو الدراسة في تركيا.
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                alt="مسار اللغات" 
                className="rounded-3xl shadow-2xl border border-indigo-500/20 object-cover w-full h-80 md:h-96"
              />
            </div>
          </div>

          {/* مسار البرمجة */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" 
                alt="مسار البرمجة" 
                className="rounded-3xl shadow-2xl border border-indigo-500/20 object-cover w-full h-80 md:h-96"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-blue-400 font-bold text-sm block mb-2">💻 مسار التكنولوجيا والبرمجة</span>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6">ابنِ مستقبلك كمطور برمجيات محترف</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                نأخذك من الأساسيات والمنطق البرمجي السليم حتى بناء تطبيقات ومواقع إنتاجية كاملة باستخدام أحداث التقنيات:
              </p>
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">✓</span>
                  أساسيات الخوارزميات وهياكل البيانات بلغة سهلة ومبسطة.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">✓</span>
                  تطوير الواجهات والأنظمة المتكاملة بـ Next.js & React & Tailwind.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">✓</span>
                  طرق ربط قواعد البيانات وبوابات الدفع الإلكترونية حقيقياً.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 4. معرض الكورسات المتاحة مع بوسترات الغلاف الاحترافية (Course Cards with Cover Images) */}
      <section id="courses" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-bold text-sm block mb-2">📚 الكورسات المتاحة حالياً</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">اختر كورس وباشر رحلتك فوراً 🚀</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">تصفح البوسترات الرسمية للكورسات واشترك بضغطة زر واحدة.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="bg-slate-900/80 border border-indigo-500/20 rounded-3xl overflow-hidden shadow-2xl hover:border-cyan-500/50 transition duration-300 flex flex-col group"
            >
              {/* صورة كفر الكورس البوستر الاحترافي */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-xl text-xs font-bold text-cyan-400 border border-cyan-500/30">
                  {course.category}
                </div>
                <div className="absolute bottom-4 left-4 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-slate-300">
                  {course.level}
                </div>
              </div>

              {/* تفاصيل الكورس */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">
                  {course.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4 grow">
                  {course.description}
                </p>

                <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                  <div>
                    <span className="text-[10px] text-slate-500 block">المحاضر</span>
                    <span className="text-xs font-bold text-slate-300">{course.instructor}</span>
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] text-slate-500 block">الاستثمار</span>
                    <span className="text-lg font-black text-cyan-400">{course.price}</span>
                  </div>
                </div>

                <Link 
                  href="/checkout" 
                  className="mt-6 w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black rounded-xl text-center text-sm shadow-md transition"
                >
                  اشترك الآن في الكورس ⚡
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. آراء وانطباعات الطلاب */}
      <section className="py-20 px-6 bg-slate-900/30 border-t border-indigo-500/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">ماذا يقول طلاب "أثر"؟ 💬</h2>
            <p className="text-slate-400 text-sm">قصص نجاح واقعية لطلاب تحولت تجربتهم التعليمية معنا.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl">
              <div className="text-amber-400 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">"كورس الألمانية فرق معايا جداً، القواعد بقت بسيطة وأسلوب المتابعة بيخليك تلتزم رغماً عنك."</p>
              <div className="text-xs font-bold text-cyan-400">- محمد علي (طالب ألماني)</div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl">
              <div className="text-amber-400 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">"دبلومة البرمجة في أكاديمية أثر مفيش زيها، بناء مشاريع حقيقية وربط بوابات الدفع خلاني أشتغل فريلانسر."</p>
              <div className="text-xs font-bold text-cyan-400">- محمود سعيد (مطور مواقع)</div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl">
              <div className="text-amber-400 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">"كورس الإنجليزي غير فكرتي عن التعلم، بقى عندي جرأة اتكلم مع أجانب بدون ما اتلخبط."</p>
              <div className="text-xs font-bold text-cyan-400">- نورهان العباسي</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. دعوة للانضمام والختام (CTA) */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-900/40 via-blue-900/40 to-indigo-900/40 border border-cyan-500/30 p-10 md:p-16 rounded-3xl text-center backdrop-blur-xl relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">جاهز تبدأ سيب أثر حقيقي في مستقبلك؟ 🚀</h2>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto mb-8">
            انضم الآن لآلاف الطلاب وابدأ في تعلم اللغات والبرمجة بأحدث أسلوب تعليمي في الوطن العربي.
          </p>
          <Link 
            href="/login" 
            className="inline-block px-10 py-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black rounded-2xl text-lg shadow-xl transition"
          >
            سجل حساب جديد مجاناً 🎉
          </Link>
        </div>
      </section>

    </main>
  );
}
