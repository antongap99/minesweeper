import { WithLayout } from '../../Layout/layout';
import { Button } from '../Button/Button';
import style from './Start.module.css';
import cn from 'classnames'

interface StartProps  extends Record<string, unknown>{
  startGame: () => void
};


const Start = ({ startGame }: StartProps) =>  (
  <div className={cn(style.start, 'border') }>
    <h1 className={style.title}>Cапер</h1>
    <Button text='Начать игру' handle={startGame}/>
  </div>
);


export default WithLayout(Start)
