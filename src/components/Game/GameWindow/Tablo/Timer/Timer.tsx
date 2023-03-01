import { useEffect, useState } from 'react';
import style from './Timer.module.css';
import { counterUpdate } from '../counthelper';
import Zero from '../img/zero.svg';



export const Timer = () => {
  const [time, setTime] = useState<number>(40);
  const [over, setOver] = useState<boolean>(false)
  // const [icons, setIcons] = useState<string[]>(counterUpdate(time));


  const tick = () => {
    if (over) return;

    if (time === 0) {
      setOver(true)
      return;
    }
    setTime(time - 1)
  }



  useEffect(() => {
    let timerID = setInterval(
      () => {
        tick()
      },
      60000
    );

    return () => {
      clearInterval(timerID)
    }
  })



  const icons = counterUpdate(time)

  return (
    <div className={style.timer}>
      {
        !over ? (
          icons.map((ic, inx) => <span key={inx}><img className={style.number} src={ic} alt="count" /></span>)
        ) : (
            <>
              <span><img className={style.number} src={Zero} alt="count"/></span>
              <span><img className={style.number} src={Zero} alt="count"/></span>
              <span><img className={style.number} src={Zero} alt="count"/></span>
            </>
        )
      }
    </div>
  );
};

