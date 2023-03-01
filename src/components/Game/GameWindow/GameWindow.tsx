import style from './GameWindow.module.css';
import cn from 'classnames'
import { GameSquare } from './GameSquare/GameSquare';
import { Tablo } from './Tablo/Tablo';
interface Props{

};


export const GameWindow = (props:Props) => {

  return (
    <div className={cn(style.window, 'border')}>
      <Tablo/>
      <GameSquare/>
    </div>
  );
};

