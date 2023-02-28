import React, { SyntheticEvent, useState } from "react";

export const App: React.FC = () => {
  const [begin, setBegin] = useState<boolean>(false);

  const startGame = (e: SyntheticEvent<HTMLButtonElement>): void => {
    setBegin(true);
  };
  const endGame = (e: SyntheticEvent<HTMLButtonElement>): void => {
    if(begin){
      setBegin(false);
    }
  };

  return (
    <div className="App">
      {!begin ? (
        <div>
          <h1>Игра сапер</h1>
          <button onClick={startGame}>Начать</button>
        </div>
      ) : (
        <div>
          <h1>игра</h1>
          <button onClick={endGame}>Завершить</button>
        </div>
      )}
    </div>
  );
};
