import { WithLayout } from '../../Layout/layout';
import style from './Start.module.css';
import cn from 'classnames'

interface StartProps  extends Record<string, unknown>{
  startGame: () => void
};


const Start = ({ startGame }: StartProps) => {

  return (
    <div className={cn(style.start, 'border') }>
      <h1 className={style.title}>Cапер</h1>
      <button onClick={startGame} className={cn('btn', 'border')}>Начать игру</button>
    </div>
  )
};


export default WithLayout(Start)
