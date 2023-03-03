import style from './Game.module.css';
import { WithLayout } from '../../Layout/layout';
import { GameWindow } from './GameWindow/GameWindow';
import { GameContext } from '../../context/game.context';
import { useContext } from 'react';

interface Props extends Record<string, unknown> {
  endGame: () => void
};


const Game = ({ endGame }: Props) => {
  const { isGameOver } = useContext(GameContext)
  return (
    <div className={style.wrapper}>

      {!isGameOver ? (
        <h1>Сапер</h1>
      ) : (
        <h1>Игра окончена</h1>
      )
      }
      <GameWindow />
      <button onClick={endGame}>Завершить</button>
    </div>
  );
};


export default WithLayout(Game);
