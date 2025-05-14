// 초기 비디오 리스트 데이터
let videos = [
  { id: '9bZkp7q19f0', title: '강남스타일' },
  { id: 'dQw4w9WgXcQ', title: 'Never Gonna Give You Up' },
  { id: 'gdZLi9oWNZg', title: 'BTS - Dynamite' },
  { id: 'ioNng23DkIM', title: 'BLACKPINK - How You Like That' },
  { id: '60ItHLz5WEA', title: 'Alan Walker - Faded' },
];

// 모든 비디오 가져오기
export function getAllVideos() {
  return videos;
}

// 비디오 추가하기
export function addVideo(video) {
  // ID 중복 체크
  const exists = videos.find((v) => v.id === video.id);
  if (exists) {
    return { error: '이미 존재하는 비디오 ID입니다.' };
  }

  // 필수 필드 체크
  if (!video.id || !video.title) {
    return { error: 'ID와 제목은 필수 항목입니다.' };
  }

  videos.push(video);
  return { success: true, video };
}

// 비디오 삭제하기
export function deleteVideo(id) {
  const initialLength = videos.length;
  videos = videos.filter((video) => video.id !== id);

  // 삭제 결과 체크
  if (videos.length === initialLength) {
    return { error: '해당 ID의 비디오를 찾을 수 없습니다.' };
  }

  return { success: true };
}
