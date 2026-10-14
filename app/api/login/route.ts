import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // التأكد من إدخال البيانات
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'يرجى إدخال البريد الإلكتروني وكلمة المرور' },
        { status: 400 }
      );
    }

    // قبول أي بريد إلكتروني وكلمة مرور صحيحة التنسيق وتعدي الدخول بنجاح فوراً
    return NextResponse.json({
      success: true,
      message: 'تم تسجيل الدخول بنجاح!',
      user: { 
        name: email.split('@')[0], 
        email: email, 
        role: 'student' 
      }
    });

  } catch (error) {
    console.error('Login Error:', error);
    return NextResponse.json(
      { success: successOrFalse => false, message: 'حدث خطأ في السيرفر' },
      { status: 500 }
    );
  }
}
