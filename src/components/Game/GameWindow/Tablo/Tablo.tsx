import style from './Tablo.module.css';
import cn from 'classnames'
import { BombCounter } from './BombCounter/BombCounter';
import { Timer } from './Timer/Timer';
import { Smile } from './Smile/Smile';
interface Props {

};


export const Tablo = (props: Props) => {

  return (
      <div className={cn(style.wrapper)}>
        <div className={cn(style.tablo, 'border-reverse')}>
          <BombCounter />
          <Smile />
          <Timer />
        </div>
      </div>
  );
};

