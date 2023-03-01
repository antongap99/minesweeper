import style from './Game.module.css';
import cn from 'classnames'
import { WithLayout } from '../../Layout/layout';
import { GameWindow } from './GameWindow/GameWindow';

interface Props extends Record<string, unknown> {
  endGame: () => void
};


const Game = ({endGame}: Props) => {

  return (
    <div className={style.wrapper}>
      <h1>Сапёр</h1>
      <GameWindow/>
      <button onClick={endGame}>Завершить</button>
    </div>
  );
};


export default WithLayout(Game);
