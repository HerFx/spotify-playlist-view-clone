import './App.css';
import LeftNav from './components/Nav/LeftNav';
import Header from './components/Header/Header';
import BottomNav from './components/Nav/BottomNav';
import Playlist from './components/Playlist/Playlist';

function App() {
  return (
    <div className="App">
      <LeftNav />
      <div className='playlist'>
      <Header />
      <Playlist />
      </div>
      <BottomNav />
    </div>
  );
}

export default App;
