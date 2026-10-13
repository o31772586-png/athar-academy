import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 py-4 px-8 dir-rtl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          أكاديمية أثر 📚
        </Link>
        <div className="flex gap-4 items-center">
          <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium">
            الرئيسية
          </Link>
          <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
            تسجيل الدخول
          </Link>
        </div>
      </div>
    </nav>
  );
}