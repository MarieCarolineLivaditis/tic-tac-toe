import Board from '../Board/Board';
import PlayAgainBtn from '../PlayAgainBtn/PlayAgainBtn';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header-title">Tic Tac Toe Game</h1>
      </header>
      <main className="App-main">
        <Board />
        <PlayAgainBtn />
      </main>
    </div>
  );
}

export default App;
