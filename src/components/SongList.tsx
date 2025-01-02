import React from 'react';
import { Heart, MoreHorizontal } from 'lucide-react';

const songs = [
  {
    id: 1,
    title: "Can't Take My Eyes off You",
    artist: "Frankie Valli",
    album: "Gold",
    duration: "3:32"
  },
  {
    id: 2,
    title: "Perfect",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    duration: "4:23"
  },
  {
    id: 3,
    title: "All of Me",
    artist: "John Legend",
    album: "Love in the Future",
    duration: "4:29"
  },
  // Add more songs as needed
];

export default function SongList() {
  return (
    <div className="px-6 py-4">
      <table className="w-full">
        <thead>
          <tr className="text-neutral-400 text-sm border-b border-neutral-800">
            <th className="font-normal text-left py-3 w-12">#</th>
            <th className="font-normal text-left">標題</th>
            <th className="font-normal text-left">專輯</th>
            <th className="font-normal text-left w-32">時間</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={song.id} className="group hover:bg-white/5 transition">
              <td className="py-3 text-neutral-400">{index + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="text-white">{song.title}</div>
                    <div className="text-sm text-neutral-400">{song.artist}</div>
                  </div>
                </div>
              </td>
              <td className="text-neutral-400">{song.album}</td>
              <td>
                <div className="flex items-center gap-4 text-neutral-400">
                  <Heart size={16} className="opacity-0 group-hover:opacity-100 hover:text-white cursor-pointer" />
                  <span>{song.duration}</span>
                  <MoreHorizontal size={16} className="opacity-0 group-hover:opacity-100 hover:text-white cursor-pointer" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}