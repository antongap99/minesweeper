import style from './GameSquare.module.css';
import cn from 'classnames'
import { Tile } from './Tile/Tile';
interface Props {

};


export const GameSquare = (props: Props) => {
  const arr = []
  for (let i = 0; i < 16  * 16; i++) {
    arr.push(<Tile key={i}/>)
  }
  return (
    <div className={cn(style.container, 'border-reverse')}>
      {
        arr
      }
    </div>
  );
};

