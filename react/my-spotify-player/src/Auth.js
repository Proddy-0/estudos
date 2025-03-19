import axios from 'axios';
import { useEffect } from 'react';

const SPOTIFY_AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private&response_type=token&show_dialog=true`;

export default function Auth({ onLogin }) {
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const token = params.get('access_token');

    if (token) {
      localStorage.setItem('spotifyToken', token);
      onLogin(token);
    }
  }, []);

  return (
    <div className="login-screen">
      <h1>Meu Player Spotify</h1>
      <a href={SPOTIFY_AUTH_URL} className="login-button">
        Login com Spotify Premium
      </a>
    </div>
  );
}