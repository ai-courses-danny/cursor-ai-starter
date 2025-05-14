'use client';
import React, { useState, useEffect } from 'react';
import SceneWrapper from './components/SceneWrapper';
import VideoList from './components/VideoList';
import { VideoService } from './services/VideoService';

export default function Home() {
  const [currentVideoId, setCurrentVideoId] = useState('9bZkp7q19f0');
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API로부터 비디오 목록 불러오기
  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      const result = await VideoService.fetchVideos();

      if (result.success) {
        setVideoList(result.data);
      } else {
        setError(result.error);
      }
      setLoading(false);
    };

    fetchVideos();
  }, []);

  // 새 비디오 추가
  const handleAddVideo = async (newVideo) => {
    const result = await VideoService.addVideo(newVideo);

    if (result.success) {
      setVideoList([...videoList, result.data]);
      return true;
    } else {
      alert(result.error || '추가 실패');
      return false;
    }
  };

  // 비디오 삭제
  const handleDeleteVideo = async (id) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    const result = await VideoService.deleteVideo(id);

    if (result.success) {
      setVideoList(videoList.filter((video) => video.id !== id));
      // 현재 재생 중인 비디오가 삭제되면 첫 번째 비디오로 설정
      if (currentVideoId === id && videoList.length > 1) {
        const nextVideo = videoList.find((video) => video.id !== id);
        if (nextVideo) setCurrentVideoId(nextVideo.id);
      }
    } else {
      alert(result.error || '삭제 실패');
    }
  };

  return (
    <div className="w-full h-full relative">
      <div className="absolute top-5 left-5 z-10 text-2xl font-bold text-white">
        월드버텍 AI 강의 실습 - 🧠 AI YouTube Link Manager
      </div>

      <VideoList
        loading={loading}
        error={error}
        videoList={videoList}
        currentVideoId={currentVideoId}
        setCurrentVideoId={setCurrentVideoId}
        handleDeleteVideo={handleDeleteVideo}
        handleAddVideo={handleAddVideo}
      />

      <SceneWrapper currentVideoId={currentVideoId} />
    </div>
  );
}
