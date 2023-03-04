import React, { useState } from "react";
import Game from "./components/Game/Game";
import Start from "./components/Start/Start";


export const App: React.FC = () => {
  const [begin, setBegin] = useState<boolean>(false);

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
          <Game endGame={endGame} />
      )}
    </div>
  );
};
