import { NextResponse } from 'next/server';
import { getAllVideos, addVideo } from '@/app/data/videos';

// GET - 모든 비디오 목록 가져오기
export async function GET() {
  try {
    const videos = getAllVideos();
    return NextResponse.json({ success: true, data: videos });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message || '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// POST - 새 비디오 추가하기
export async function POST(request) {
  try {
    const body = await request.json();
    const result = addVideo(body);

    if (result.error) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, data: result.video });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message || '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
