import { NextResponse } from 'next/server';
import { deleteVideo } from '@/app/data/videos';

// DELETE - 비디오 삭제하기
export async function DELETE(request, { params }) {
  try {
    const id = params.id;

    if (!id) {
      return NextResponse.json(
        { success: false, error: '삭제할 비디오 ID를 제공해주세요.' },
        { status: 400 }
      );
    }

    const result = deleteVideo(id);

    if (result.error) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message || '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
