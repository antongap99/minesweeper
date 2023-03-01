import style from './Tile.module.css';
import cn from 'classnames'
interface Props{

};


export const Tile = (props:Props) => {

  return <div className={cn(style.tile, 'border')}></div>;
};

