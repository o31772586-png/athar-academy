import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { getDatabase, saveDatabase } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const file: File | null = data.get('file') as unknown as File;
    const courseId = data.get('courseId') as string;
    const title = data.get('title') as string;

    if (!file || !courseId || !title) {
      return NextResponse.json({ success: false, message: 'الرجاء إدخال عنوان الدرس، اختيار الكورس، وملف الفيديو' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // إنشاء مجلد public/videos تلقائياً لو مش موجود
    const uploadDir = path.join(process.cwd(), 'public', 'videos');
    await mkdir(uploadDir, { recursive: true });

    // تنظيف اسم الملف وحفظه بامتداده
    const ext = path.extname(file.name) || '.mp4';
    const filename = `${Date.now()}${ext}`;
    const filePath = path.join(uploadDir, filename);

    // كتابة الملف على السيرفر
    await writeFile(filePath, buffer);

    const videoUrl = `/videos/${filename}`;

    // حفظ الدرس الجديد في قاعدة البيانات (db.json)
    const db = getDatabase();
    if (!db.lessons) {
      db.lessons = [];
    }

    const newLesson = {
      id: Date.now(),
      courseId: parseInt(courseId),
      title: title,
      duration: '10 دقائق',
      videoUrl: videoUrl,
    };

    db.lessons.push(newLesson);
    saveDatabase(db);

    return NextResponse.json({ 
      success: true, 
      message: 'تم رفع الفيديو وحفظ الدرس بنجاح!', 
      lesson: newLesson 
    });
  } catch (error) {
    console.error('Upload Error:', error);
    return NextResponse.json({ success: false, error: 'فشل في عملية الرفع' }, { status: 500 });
  }
}