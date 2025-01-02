import React from 'react';
import { Play, Shuffle, MoreHorizontal } from 'lucide-react';

export default function PlaylistHeader() {
  return (
    <div className="flex items-end p-6 bg-gradient-to-b from-purple-900/60 to-neutral-900 h-[340px]">
      <div className="flex gap-8 items-end">
        <img
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=300&h=300"
          alt="Playlist Cover"
          className="w-48 h-48 shadow-2xl rounded-lg"
        />
        <div className="flex flex-col gap-2">
          <span className="text-neutral-300 text-sm">播放清單</span>
          <h1 className="text-4xl font-bold text-white mb-4">我的最愛音樂</h1>
          <div className="flex items-center gap-2 text-neutral-300 text-sm">
            <span>由 User 建立</span>
            <span>•</span>
            <span>50 首歌曲</span>
          </div>
          <div className="flex gap-4 mt-6">
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-neutral-200 transition">
              <Play size={20} fill="black" />
              播放
            </button>
            <button className="text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium flex items-center gap-2 transition">
              <Shuffle size={20} />
              隨機播放
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}