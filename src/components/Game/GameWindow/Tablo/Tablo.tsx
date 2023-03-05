import style from './Tablo.module.css';
import cn from 'classnames'
import { BombCounter } from './BombCounter/BombCounter';
import { Timer } from './Timer/Timer';
import { Smile } from './Smile/Smile';
import { TabloContextProvider } from '../../../../context/Tablo.context';

export const Tablo = () =>  (
    <TabloContextProvider>
      <div className={cn(style.wrapper)}>
        <div className={cn(style.tablo, 'border-reverse')}>
          <BombCounter />
          <Smile />
          <Timer />
        </div>
      </div>
    </TabloContextProvider>
  );


