import style from './GameSquare.module.css';
import cn from 'classnames'
import { Tile } from './Tile/Tile';
import { useContext } from 'react';
import { BombsContext } from '../../../../context/bomb.context';



export const GameSquare = () => {

  const {bombs} = useContext(BombsContext);
  const arr = []

  const tileHadle = (e: any) => {
    console.log(e);
  }

  for (let i = 0; i < 16  * 16; i++) {
    arr.push(<Tile key={i} onClick={tileHadle}  />)
  }
  return (
    <div className={cn(style.container, 'border-reverse')}>
      {
        arr
      }
    </div>
  );
};

