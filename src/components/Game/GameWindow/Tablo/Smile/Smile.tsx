import style from './Smile.module.css';
import SmileIcon from './icons/smileEmj.svg'
import SedIcon from './icons/sadEmj.svg'
import SurpriceIcon from './icons/surprise.svg'
import WinIcon from './icons/withGlasses.svg'
import cn from 'classnames';
import { useContext, FC } from 'react';
import { BombsContext } from '../../../../../context/bomb.context';
import { Emojies, SmilesContext } from '../../../../../context/smile.context';
import { GameContext } from '../../../../../context/game.context';
import { TilesContext } from '../../../../../context/tiles.context';
import { createAndshuffleTiles } from '../../GameSquare/tilesControl';
import { TabloContext } from '../../../../../context/Tablo.context';
import { BOMBS, HEIGHT, WIDTH } from '../../../../../const/const';



export const Smile: FC = () => {

  const { emoji, setEmoji } = useContext(SmilesContext);
  const { setNewTiles } = useContext(TilesContext)
  const { setBombs } = useContext(BombsContext)
  const { isGameOver, setIsGameOver , setfirstClick, firstClick} = useContext(GameContext)
  const { setTime } = useContext(TabloContext)
  const startGame = () => {
    setIsGameOver && setIsGameOver(false)
    setfirstClick && setfirstClick(true)
    setNewTiles && setNewTiles(createAndshuffleTiles(WIDTH, HEIGHT, BOMBS, firstClick, isGameOver))
    setEmoji && setEmoji(Emojies.Smile)
    setBombs && setBombs(BOMBS);
    setTime && setTime(40)
  }


  const renderSwitch = (param: Emojies) => {
    switch (param) {
      case 'SMILE':
        return <img className='svg' src={SmileIcon} alt="smile" />;
      case 'SURPRICE':
        return <img className='svg' src={SurpriceIcon} alt="smile" />;
      case 'SED':
        return <img className='svg' src={SedIcon} alt="smile" />;
      case 'WIN':
        return <img className='svg' src={WinIcon} alt="smile" />;
      default:
        return 'foo';
    }
  }


  return (
    <div onClick={startGame} className={cn(style.smile, 'border')}>
      {renderSwitch(emoji)}
    </div>
  )
};

