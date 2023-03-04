import style from './GameWindow.module.css';
import cn from 'classnames'
import { GameSquare } from './GameSquare/GameSquare';
import { Tablo } from './Tablo/Tablo';
import { BombsContextProvider } from '../../../context/bomb.context';
import { SmilesContextProvider } from '../../../context/smile.context';
import { useAppSelector } from '../../../store/hooks';



export const GameWindow = () => {
  const { isGameOver, isGameWin } = useAppSelector(state => state.game)

  return (
      <SmilesContextProvider>
        <BombsContextProvider>
          <div className={cn(style.window, 'border')}>
            <Tablo />
            <GameSquare over={isGameOver} win={isGameWin}  />
          </div>
        </BombsContextProvider>
      </SmilesContextProvider>
  );
};

