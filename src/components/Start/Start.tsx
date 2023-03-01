import { WithLayout } from '../../Layout/layout';
import style from './Start.module.css';

interface StartProps  extends Record<string, unknown>{
  startGame: () => void
};


const Start = ({ startGame }: StartProps) => {

  return (
    <div className={style.start}>
      <h1 className={style.title}>Cапер</h1>
      <button onClick={startGame} className={style.btn}>Начать игру</button>
    </div>
  )
};


export default WithLayout(Start)
