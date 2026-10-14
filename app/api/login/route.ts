import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // فحص إدخال البيانات
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'يرجى أدخال البريد الإلكتروني وكلمة المرور' },
        { status: 400 }
      );
    }

    // هنا يمكنك تسجيل الدخول بحساب أدمن/مستخدم للتجربة والمُعاينة
    // يمكنك إضافة الإيميل والباسورد الخاص بك هنا مؤقتاً
    const validEmail = "omarandnour725@gmail.com";
    const validPassword = "12345678"; // أو كلمة المرور التي تفضلها

    if (email === validEmail && password === validPassword) {
      return NextResponse.json({
        success: true,
        message: 'تم تسجيل الدخول بنجاح!',
        user: { name: 'عمر عبد العزيز', email: validEmail, role: 'admin' }
      });
    }

    return NextResponse.json(
      { success: false, message: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.' },
      { status: 401 }
    );

  } catch (error) {
    console.error('Login Error:', error);
    return NextResponse.json(
      { success: false, message: 'حدث خطأ في السيرفر أثناء تسجيل الدخول' },
      { status: 500 }
    );
  }
}
