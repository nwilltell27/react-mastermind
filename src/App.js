import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Mastermind
      </header>
      <GameBoard />
      <ColorPicker />
      <GameTimer />
      <NewGameButton />
      <Footer />
    </div>
  );
}

export default App;
