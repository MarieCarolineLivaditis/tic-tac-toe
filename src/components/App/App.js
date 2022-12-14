import { useState, useEffect } from 'react';
import Board from '../Board/Board';
import PlayAgainBtn from '../PlayAgainBtn/PlayAgainBtn';
import WinCounter from '../WinCounter/WinCounter';

import './App.scss';

function App() {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setBoard] = useState([
    {
      id: 1,
      value: '',
    },
    {
      id: 2,
      value: '',
    },
    {
      id: 3,
      value: '',
    },
    {
      id: 4,
      value: '',
    },
    {
      id: 5,
      value: '',
    },
    {
      id: 6,
      value: '',
    },
    {
      id: 7,
      value: '',
    },
    {
      id: 8,
      value: '',
    },
    {
      id: 9,
      value: '',
    },
  ]);

  const [isX, setIsX] = useState(true);
  const [winner, setWinner] = useState(false);
  const [counterX, setCounterX] = useState(0);
  const [counterO, setCounterO] = useState(0);
  const [remaingTurns, setRemaingTurns] = useState(10);

  const message = 'Bravo ! Vous avez gagné !';

  const changeBoard = () => {
    setBoard([...board]);
  };
  const changeTurn = () => {
    setIsX(!isX);
  };

  const resetGame = () => {
    setBoard([
      {
        id: 1,
        value: '',
      },
      {
        id: 2,
        value: '',
      },
      {
        id: 3,
        value: '',
      },
      {
        id: 4,
        value: '',
      },
      {
        id: 5,
        value: '',
      },
      {
        id: 6,
        value: '',
      },
      {
        id: 7,
        value: '',
      },
      {
        id: 8,
        value: '',
      },
      {
        id: 9,
        value: '',
      },
    ]);

    setWinner(false);
    setRemaingTurns(10);
  };

  const checkWinner = () => {
    winningPatterns.map((item) => {
      const [a, b, c] = item;
      if ((board[a].value !== '' && board[a].value !== undefined) && board[a].value === board[b].value && board[a].value === board[c].value) {
        setWinner(true);
      }
      return true;
    });
    if (!winner) {
      setRemaingTurns((oldRemainingTurns) => oldRemainingTurns - 1);
      console.log(remaingTurns);
    }
  };

  const wins = () => {
    if (winner && !isX) {
      setCounterX((oldCounter) => oldCounter + 1);
    } if (winner && isX) {
      setCounterO((oldCounter) => oldCounter + 1);
    }
  };

  useEffect(() => {
    checkWinner();
  }, [board]);

  useEffect(() => {
    wins();
  }, [winner]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header-title">Tic Tac Toe Game</h1>
      </header>
      <main className="App-main">
        <div className="App-main-infoSection">
          <WinCounter
            counterX={counterX}
            counterO={counterO}
          />
        </div>
        <div className="App-main-boardSection">
          {!winner && (
          <Board
            board={board}
            changeBoard={changeBoard}
            changeTurn={changeTurn}
            isX={isX}
            winner={winner}
          />
          )}
        </div>
        <div className="App-main-message">
          {winner && message}
          {(winner || remaingTurns === 0) && <PlayAgainBtn resetGame={resetGame} />}
        </div>
      </main>
    </div>
  );
}

export default App;
