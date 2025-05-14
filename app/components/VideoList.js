'use client';
import React, { useState } from 'react';

export default function VideoList({
  loading,
  error,
  videoList,
  currentVideoId,
  setCurrentVideoId,
  handleDeleteVideo,
  handleAddVideo,
}) {
  const [newVideo, setNewVideo] = useState({ id: '', title: '' });
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="absolute top-5 right-5 z-10 bg-black/70 rounded-lg p-4 backdrop-blur-sm max-h-[80vh] overflow-auto">
      <h2 className="text-white font-bold mb-2 text-center">
        유튜브 영상 목록
      </h2>

      {loading ? (
        <p className="text-white text-center py-2">로딩 중...</p>
      ) : error ? (
        <p className="text-red-500 text-center py-2">{error}</p>
      ) : (
        <>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-white/80 border-b border-white/20">
                <th className="py-2 text-left">제목</th>
                <th className="py-2 w-10 text-center">삭제</th>
              </tr>
            </thead>
            <tbody>
              {videoList.map((video) => (
                <tr
                  key={video.id}
                  className={`border-b border-white/10 hover:bg-white/10 cursor-pointer ${
                    currentVideoId === video.id ? 'bg-white/20' : ''
                  }`}
                >
                  <td
                    className="py-2 text-white"
                    onClick={() => setCurrentVideoId(video.id)}
                  >
                    {video.title}
                  </td>
                  <td
                    className="py-2 text-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteVideo(video.id);
                    }}
                  >
                    <button className="text-red-400 hover:text-red-300">
                      ×
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {showForm ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!newVideo.id || !newVideo.title) {
                  alert('ID와 제목을 모두 입력해주세요.');
                  return;
                }
                handleAddVideo(newVideo);
                setNewVideo({ id: '', title: '' });
                setShowForm(false);
              }}
              className="mt-4 border-t border-white/20 pt-2"
            >
              <div className="mb-2">
                <label className="block text-white text-xs mb-1">
                  유튜브 비디오 ID
                </label>
                <input
                  type="text"
                  value={newVideo.id}
                  onChange={(e) =>
                    setNewVideo({ ...newVideo, id: e.target.value })
                  }
                  className="w-full bg-black/50 text-white border border-white/30 rounded px-2 py-1 text-xs"
                  placeholder="dQw4w9WgXcQ"
                />
              </div>
              <div className="mb-2">
                <label className="block text-white text-xs mb-1">제목</label>
                <input
                  type="text"
                  value={newVideo.title}
                  onChange={(e) =>
                    setNewVideo({ ...newVideo, title: e.target.value })
                  }
                  className="w-full bg-black/50 text-white border border-white/30 rounded px-2 py-1 text-xs"
                  placeholder="비디오 제목"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded"
                >
                  추가
                </button>
                <button
                  type="button"
                  className="bg-gray-600 hover:bg-gray-700 text-white text-xs px-3 py-1 rounded"
                  onClick={() => setShowForm(false)}
                >
                  취소
                </button>
              </div>
            </form>
          ) : (
            <button
              onClick={() => setShowForm(true)}
              className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1 rounded"
            >
              새 비디오 추가
            </button>
          )}
        </>
      )}
    </div>
  );
}
