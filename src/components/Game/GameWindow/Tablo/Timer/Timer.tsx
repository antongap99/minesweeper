import { useEffect, useState, useContext } from 'react';
import style from './Timer.module.css';
import { timeUpdate } from '../counthelper';

import { TabloContext } from '../../../../../context/Tablo.context';
import { GameContext } from '../../../../../context/game.context';



export const Timer = () => {
  const { time, setTime } = useContext(TabloContext)
  const [over, setOver] = useState<boolean>(false)
  const { isGameOver, isGameWin } = useContext(GameContext)

  const tick = () => {
    if (over) return;

    if (time === 2400 || isGameWin || isGameOver) {
      setOver(true)
      return;
    }
    setTime && setTime(time + 1)
  }



  useEffect(() => {
    let timerID = setInterval(
      () => {
        tick()
      },
      1000
    );

    return () => {
      clearInterval(timerID)
    }
  })



  const icons = timeUpdate(time)

  return (
    <div className={style.timer}>
      {
        !over  ? (
          icons.map((ic, inx) => <span key={inx}><img className={style.number} src={ic} alt="count" /></span>)
        ) : (
          icons.map((ic, inx) => <span key={inx}><img className={style.number} src={ic} alt="count" /></span>)
        )
      }
    </div>
  );
};

