import React from 'react';
import PlaylistHeader from './components/PlaylistHeader';
import SongList from './components/SongList';

function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <PlaylistHeader />
      <SongList />
    </div>
  );
}

export default App;