import React from 'react';
import './components/Rick.css';
import { EpisodeList } from './components/presentational/EpisodeList';
import { LocationList } from './components/presentational/LocationList';

function App() {
  return (
    <div className="app">
      <h2>📺 Episodes</h2>
      <EpisodeList />

      <h2>📍 Locations</h2>
      <LocationList />
    </div>
  );
}

export default App;
