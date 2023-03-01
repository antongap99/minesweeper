import style from './GameWindow.module.css';
import cn from 'classnames'
import { GameSquare } from './GameSquare/GameSquare';
import { Tablo } from './Tablo/Tablo';
import { useState } from 'react';
import { BombsContextProvider } from '../../../context/bomb.context';
interface Props {

};


export const GameWindow = (props: Props) => {
  const [bombs, setBombs] = useState<number>(40)
  return (
    <BombsContextProvider bombs={bombs} updateSquare={setBombs}>
      <div className={cn(style.window, 'border')}>
        <Tablo />
        <GameSquare />
      </div>
    </BombsContextProvider>
  );
};

