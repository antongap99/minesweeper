import { useEffect, useContext } from 'react';
import style from './Timer.module.css';
import { timeUpdate } from '../counthelper';
import { TabloContext } from '../../../../../context/Tablo.context';
import { GameContext } from '../../../../../context/game.context';


export const Timer = () => {
  const { time, setTime } = useContext(TabloContext)
  const { isGameOver, setIsGameOver , isGameWin } = useContext(GameContext)

  const tick = () => {
    if (isGameOver) return;

    if ( isGameWin || isGameOver) {
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
        !setIsGameOver  ? (
          icons.map((ic, inx) => <span key={inx}><img className={style.number} src={ic} alt="count" /></span>)
        ) : (
          icons.map((ic, inx) => <span key={inx}><img className={style.number} src={ic} alt="count" /></span>)
        )
      }
    </div>
  );
};

