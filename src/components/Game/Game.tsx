import style from './Game.module.css';
import { WithLayout } from '../../Layout/layout';
import { GameWindow } from './GameWindow/GameWindow';
import cn from 'classnames'
import { useAppSelector } from '../../store/hooks';

interface Props extends Record<string, unknown> {
  endGame: () => void
};


const Game = ({ endGame }: Props) => {
  const { isGameOver, isGameWin } = useAppSelector(state => state.game)




  return (
    <div className={style.wrapper}>

      {
      !isGameOver ? (
        isGameWin ? (
            <h1 className={style.win}>Вы выиграли</h1>
        )
        :
        (
        <h1>Сапер</h1>
        )
      ) : (
            <h1 className={style.lose}>Игра окончена</h1>
      )
      }
      <GameWindow />
      <button className={cn('btn', 'border')} onClick={endGame}>Завершить</button>
    </div>
  );
};


export default WithLayout(Game);
