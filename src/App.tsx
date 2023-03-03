import React, { useState } from "react";
import Game from "./components/Game/Game";
import Start from "./components/Start/Start";
import { GameContextProvider } from "./context/game.context";

export const App: React.FC = () => {
  const [begin, setBegin] = useState<boolean>(true);

  const startGame = (): void => {
    setBegin(true);
  };
  const endGame = (): void => {
    if (begin) {
      setBegin(false);
    }
  };

  return (
    <div className="App">
      {!begin ? (
        <Start startGame={startGame} />
      ) : (
        <GameContextProvider>
          <Game endGame={endGame} />
        </GameContextProvider>
      )}
    </div>
  );
};
