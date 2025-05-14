// 비디오 데이터 관련 API 서비스 함수들

export const VideoService = {
  // 비디오 목록 가져오기
  async fetchVideos() {
    try {
      const response = await fetch('/api/videos');
      const result = await response.json();

      if (result.success) {
        return { success: true, data: result.data };
      } else {
        return {
          success: false,
          error: result.error || '비디오 목록을 불러오는데 실패했습니다.',
        };
      }
    } catch (err) {
      console.error(err);
      return { success: false, error: '서버와의 통신에 문제가 발생했습니다.' };
    }
  },

  // 새 비디오 추가
  async addVideo(newVideo) {
    try {
      const response = await fetch('/api/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newVideo),
      });

      const result = await response.json();

      if (result.success) {
        return { success: true, data: result.data };
      } else {
        return { success: false, error: result.error || '추가 실패' };
      }
    } catch (err) {
      console.error(err);
      return { success: false, error: '서버 오류가 발생했습니다.' };
    }
  },

  // 비디오 삭제
  async deleteVideo(id) {
    try {
      const response = await fetch(`/api/videos/${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (result.success) {
        return { success: true };
      } else {
        return { success: false, error: result.error || '삭제 실패' };
      }
    } catch (err) {
      console.error(err);
      return { success: false, error: '서버 오류가 발생했습니다.' };
    }
  },
};
