import style from './GameSquare.module.css';
import cn from 'classnames'
import { useAppSelector } from '../../../../store/hooks';
import { Tile } from './Tile/Tile';


interface Props {
  over: boolean
  win: boolean
}


export const GameSquare = ({ over, win }: Props) => {

  const { tiles } = useAppSelector(state => state.tiles)

  return (
    <div className={
      cn(style.container,
        'border-reverse',
        {
          [style.over]: over,
          [style.win]: win,
        })}>
      {
        tiles.map((tile, index) => {
          if (tile.bomb) {
            return <Tile key={tile.key}
              bomb={true}
              coordinates={tile.сoordinates}
              over={over}
              index={index}
              open={tile.open}
              picked={tile.picked} />
          } else {
            return <Tile
              key={tile.key}
              bomb={false}
              coordinates={tile.сoordinates}
              nearByBombs={tile.value}
              open={tile.open}
              over={over}
              index={index}
              picked={tile.picked}
            />
          }

        })
      }
    </div>
  );
};

