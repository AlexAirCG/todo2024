"use client";

import { useState } from "react";
import "./style.css";

const SYMBOL_X = "X";
const SYMBOL_O = "O";

const computeWinner = (cell) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (cell[a] && cell[a] === cell[b] && cell[a] === cell[c]) {
      return [a, b, c];
    }
  }
};

export default function GameApp() {
  const [currentStep, setCurrentStep] = useState(SYMBOL_X);
  const [cells, setCells] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [winnerSuqence, setWinnerSuqence] = useState();

  const handleCellsClick = (index) => {
    if (cells[index] || winnerSuqence) return;

    const cellsCopy = cells.slice();
    cellsCopy[index] = currentStep;
    const winner = computeWinner(cellsCopy);

    setCells(cellsCopy);
    setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
    setWinnerSuqence(winner);
  };

  const butReset = () => {
    setCells(Array.from({ length: 9 }, () => null));
    setCurrentStep(currentStep);
    setWinnerSuqence(undefined);
  };

  const winnerSymbol = winnerSuqence ? cells[winnerSuqence[0]] : undefined;

  const isDraw = !winnerSuqence && cells.filter((value) => value).length === 9;

  return (
    <div className="game">
      <GameInfo
        currentStep={currentStep}
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
      />
      <div className="game-field">
        {cells.map((symbol, index) => {
          return (
            <GameCell
              key={index}
              symbol={symbol}
              onClick={() => handleCellsClick(index)}
              isWinner={winnerSuqence?.includes(index)}
            />
          );
        })}
      </div>
      <button onClick={butReset} className="reset">
        Reset
      </button>
    </div>
  );
}

function GameInfo({ currentStep, isDraw, winnerSymbol }) {
  if (isDraw) {
    return <div className="game-info">Ничья</div>;
  }
  if (winnerSymbol) {
    return (
      <div className="game-info">
        Победа <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }
  return (
    <div className="game-info">
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  );
}

function GameCell({ symbol, onClick, isWinner }) {
  return (
    <button className={`cell ${isWinner ? "cell--win" : ""}`} onClick={onClick}>
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}

function GameSymbol({ symbol }) {
  const gameSybolCalssName = (symbol) => {
    if (symbol === SYMBOL_O) return "symbol--o";
    if (symbol === SYMBOL_X) return "symbol--x";
  };

  return (
    <span className={`symbol ${gameSybolCalssName(symbol)}`}>{symbol}</span>
  );
}
