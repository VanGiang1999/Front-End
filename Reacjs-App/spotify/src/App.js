import './App.css';
import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import { Songs } from './Context';
import dataSongs from './data/songs.json';
import Playing from './components/Playing';
import { useState } from 'react';

function App() {
  const [song, setSong] = useState(dataSongs[0])
  const handleSetSong = (idSong) => {
    const song =  dataSongs.filter(song => song.id === idSong)
    setSong(song);
    console.log(song)
  }
  return (
    <div className="App">
      <Songs.Provider value={{dataSongs, song, handleSetSong }}>
        <Navbar/>
        <div className="grid grid-cols-3 text-neutral-400 h-screen-navbar-player">
            <DetailSong />
            <ListSong />
        </div>
        <Playing/>
      </Songs.Provider>
    </div>
  );
}

export default App;
