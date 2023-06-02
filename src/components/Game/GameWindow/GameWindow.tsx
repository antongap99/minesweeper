import style from './GameWindow.module.css';
import cn from 'classnames'
import { GameSquare } from './GameSquare/GameSquare';
import { Tablo } from './Tablo/Tablo';
import { BombsContextProvider } from '../../../context/bomb.context';
import { SmilesContextProvider } from '../../../context/smile.context';
import { TilesContextProvider } from '../../../context/tiles.context';
import { useContext } from 'react';
import { GameContext } from '../../../context/game.context';



export const GameWindow = () => {
  const { isGameOver, isGameWin } = useContext(GameContext)

  return (
    <TilesContextProvider isGameOver={isGameOver}>
      <SmilesContextProvider>
        <BombsContextProvider>
          <div className={cn(style.window, 'border')}>
            <Tablo />
            <GameSquare over={isGameOver} win={isGameWin}  />
          </div>
        </BombsContextProvider>
      </SmilesContextProvider>
    </TilesContextProvider>

  );
};

