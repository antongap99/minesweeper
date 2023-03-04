import style from './Smile.module.css';
import SmileIcon from './icons/smileEmj.svg'
import SedIcon from './icons/sadEmj.svg'
import SurpriceIcon from './icons/surprise.svg'
import WinIcon from './icons/withGlasses.svg'
import cn from 'classnames';
import { useContext, FC } from 'react';
import { BombsContext } from '../../../../../context/bomb.context';
import { Emojies, SmilesContext } from '../../../../../context/smile.context';
import { createShuffledTiles } from '../../../../../control/tilesControl';
import { TabloContext } from '../../../../../context/Tablo.context';
import { BOMBS, HEIGHT, TIME, WIDTH } from '../../../../../const/const';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { gameActions } from '../../../../../store/game/gameSlice';
import { tilesActions } from '../../../../../store/tiles/tilesSlice';



export const Smile: FC = () => {
  const dispatch = useAppDispatch()
  const { emoji, setEmoji } = useContext(SmilesContext);
  const { setBombs } = useContext(BombsContext)
  const { isGameOver, firstClick } = useAppSelector(state => state.game)


  const { setTime } = useContext(TabloContext);

  const UpdateGame = () => {
    dispatch(gameActions.UpdateGame({
      firstClick: true,
      isGameOver: false,
      isGameWin: false,
    }))
    dispatch(tilesActions.createTiles(createShuffledTiles(WIDTH, HEIGHT, BOMBS, firstClick, isGameOver)))
    setEmoji && setEmoji(Emojies.Smile)
    setBombs && setBombs(BOMBS);
    setTime && setTime(TIME)
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
    <div onClick={UpdateGame} className={cn(style.smile, 'border')}>
      {renderSwitch(emoji)}
    </div>
  )
};

