import style from './Tile.module.css';
import cn from 'classnames'
import { ButtonHTMLAttributes, DetailedHTMLProps, SyntheticEvent, useContext, useState } from 'react';
import { BombsContext } from '../../../../../context/bomb.context';
import { SmilesContext } from '../../../../../context/smile.context';
import { Emojies } from '../../../../../context/smile.context';
import { openTiles, pickedTiles } from '../../../../../control/tilesControl';
import { BOMBS, HEIGHT, WIDTH } from '../../../../../const/const';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { gameActions } from '../../../../../store/game/gameSlice';
import { tilesActions } from '../../../../../store/tiles/tilesSlice';

interface TileProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  bomb?: boolean;
  coordinates: number[]
  over: boolean
  nearByBombs?: number
  open: boolean
  index: number
  picked: boolean
};

enum RightPick {
  noClickYet,
  flag,
  question,
}




export const Tile = ({ bomb, index, over, nearByBombs, open }: TileProps) => {
  const dispath = useAppDispatch()
  const [pick, setPick] = useState<RightPick>(RightPick.noClickYet)
  const { bombs, setBombs } = useContext(BombsContext);
  const { setEmoji } = useContext(SmilesContext);
  const [isTargetBomb, setIsTargetBomb] = useState<boolean>(false);

  const { isGameOver, firstClick } = useAppSelector(state => state.game)
  const { tiles } = useAppSelector(state => state.tiles)


  const classes = cn(style.tile, {
    [style.picked]: pick === 1,
    [style.question]: pick === 2,
    [style.over]: isGameOver && bomb && pick !== 1 ,
    [style.cross]: pick === 1 && isGameOver && !bomb,
    [style.bomb]: isTargetBomb,
    [style.tile0]: nearByBombs === 0 && open,
    [style.tile1]: nearByBombs === 1 && open,
    [style.tile2]: nearByBombs === 2 && open,
    [style.tile3]: nearByBombs === 3 && open,
    [style.tile4]: nearByBombs === 4 && open,
    [style.tile5]: nearByBombs === 5 && open,
    [style.tile6]: nearByBombs === 6 && open,
    [style.tile7]: nearByBombs === 7 && open,
    [style.tile8]: nearByBombs === 8 && open,
    [style.tile9]: nearByBombs === 9 && open,
  })




  return (
    <button
      className={classes}
      onContextMenu={(e: SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (pick === 0 && setBombs) {
          setPick(RightPick.flag);
          setBombs(bombs - 1)
          dispath(tilesActions.updateTiles((pickedTiles(tiles.copeTyles, index, over))))
        }

        if (pick === 1 && setBombs) {
          setPick(RightPick.question);
          setBombs(bombs + 1)
        } else if (pick === 2) {
          setPick(RightPick.noClickYet);
        }

      }}
      onMouseDown={() => {
        if (setEmoji) {
          setEmoji(Emojies.Surprice)
        }

      }}
      onMouseUp={() => {
        setEmoji && setEmoji(Emojies.Smile)
      }}
      onClick={() => {
        if (pick === RightPick.flag || pick === RightPick.question) {
          return;
        }

        if (firstClick) {
          dispath(tilesActions.updateTiles(openTiles(tiles.copeTyles, index, WIDTH, HEIGHT, firstClick, isGameOver)))
          dispath(gameActions.updateFirstClick(false))
        }
        if (!firstClick && !bomb) {
          dispath(tilesActions.updateTiles(openTiles(tiles.copeTyles, index, WIDTH, HEIGHT, firstClick, isGameOver)))
        }
        if (!firstClick && bomb) {
          setIsTargetBomb(true);
          setEmoji && setEmoji(Emojies.Sed);
          dispath(gameActions.updateGameOver(true))
          return;
        }

        const openedTiles: number = tiles.copeTyles.reduce((bombs, tile) => {
          if ((tile.picked || tile.open) && !tile.bomb) {
            return bombs + 1;
          } else {
            return bombs;
          }
        }, 0)

        if (openedTiles === WIDTH * HEIGHT - BOMBS) {
          dispath(gameActions.updateGameWin(openedTiles === WIDTH * HEIGHT - BOMBS))
          setEmoji && setEmoji(Emojies.Win)
        }

      }}
    ></button>
  );
};

