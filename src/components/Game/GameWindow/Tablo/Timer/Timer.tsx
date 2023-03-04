import { useEffect } from 'react';
import style from './Timer.module.css';
import { timeUpdate } from '../counthelper';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { gameActions } from '../../../../../store/game/gameSlice';



export const Timer = () => {
  const dispatch = useAppDispatch()
  const { isGameOver, isGameWin, time } = useAppSelector(state => state.game)

  const tick = () => {
    if (isGameOver) return;

    if (isGameWin || isGameOver) {
      return;
    }
    dispatch(gameActions.updateTime(time + 1))

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
        !isGameOver  ? (
          icons.map((ic, inx) => <span key={inx}><img className={style.number} src={ic} alt="count" /></span>)
        ) : (
          icons.map((ic, inx) => <span key={inx}><img className={style.number} src={ic} alt="count" /></span>)
        )
      }
    </div>
  );
};

