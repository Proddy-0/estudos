import { useState } from 'react';
import Auth from './Auth';
import Player from './Player';
import PlaylistSelector from './PlaylistSelector';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('spotifyToken'));

  return (
    <div className="app">
      {!token ? (
        <Auth onLogin={setToken} />
      ) : (
        <>
          <PlaylistSelector token={token} onSelectTrack={(uri) => {/* Implemente a reprodução */}} />
          <Player token={token} />
        </>
      )}
    </div>
  );
}