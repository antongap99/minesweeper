import { useContext } from 'react';
import { BombsContext } from '../../../../../context/bomb.context';
import style from './BombCounter.module.css';
import { counterUpdate } from '../counthelper';


export const BombCounter = () => {
  const { bombs } = useContext(BombsContext);
  const icons = counterUpdate(bombs)

  return (
    <div className={style.counter}>
      {
        icons.map((ic, inx) => <span key={inx}><img className={style.number} src={ic} alt="count" /></span>)
      }
    </div>
  )
};

