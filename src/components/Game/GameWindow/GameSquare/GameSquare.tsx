import style from './GameSquare.module.css';
import cn from 'classnames'
import { useContext } from 'react';
import { TilesContext } from '../../../../context/tiles.context';


interface Props {
  over: boolean
}


export const GameSquare = ({ over }: Props) => {

  const { tiles } = useContext(TilesContext);

  return (
    <div className={
      cn(style.container,
        'border-reverse',
        { [style.over]: over })}>
      {
        tiles.tilesJSX
      }
    </div>
  );
};

