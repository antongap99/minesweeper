import style from './BombCounter.module.css';
import { counterUpdate } from '../counthelper';
import { useAppSelector } from '../../../../../store/hooks';


export const BombCounter = () => {
  const bombCount = useAppSelector(state => state.game.bombCount)

  const icons = counterUpdate(bombCount)


  return (
    <div className={style.counter}>
      {
        icons.map((ic, inx) => <span key={inx}><img className={style.number} src={ic} alt="count" /></span>)
      }
    </div>
  )
};

