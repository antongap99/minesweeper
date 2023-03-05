import { useEffect, useContext } from 'react';
import style from './Timer.module.css';
import { UpdateTime } from '../counthelper';

import { TabloContext } from '../../../../../context/Tablo.context';
import { useAppSelector } from '../../../../../store/hooks';

export const Timer = () => {
  const { time, setTime } = useContext(TabloContext)
  const { isGameOver, isGameWin } = useAppSelector(state => state.game)

  const tick = () => {
    if (isGameWin || isGameOver) {
      return;
    }
    setTime && setTime(time + 1)
  }



  useEffect(() => {
      let timerID = setInterval(tick, 1000);

    return () => {
      clearInterval(timerID)
    }
  })

  const icons: string[] = UpdateTime(time)

  return (
    <div className={style.timer}>
      {
          icons.map((ic, inx) => <span key={inx}><img className={style.number} src={ic} alt="count" /></span>)
      }
    </div>
  );
};

