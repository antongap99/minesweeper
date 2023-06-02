import style from "./Tile.module.css";
import cn from "classnames";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  SyntheticEvent,
  useContext,
  useMemo,
  useState,
} from "react";
import { BombsContext } from "../../../../../context/bomb.context";
import { SmilesContext } from "../../../../../context/smile.context";
import { Emojies } from "../../../../../context/smile.context";
import { TilesContext } from "../../../../../context/tiles.context";
import { GameContext } from "../../../../../context/game.context";
import { BOMBS, HEIGHT, WIDTH } from "../../../../../const/const";
import { openTiles, pickTiles } from "../../../../../service/gameContol";
import { countOpenedTiles } from "../../../../../service/helpers";

interface TileProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  bomb?: boolean;
  coordinates: number[];
  over: boolean;
  nearByBombs?: number;
  open: boolean;
  index: number;
  picked: boolean;
}

enum RightPick {
  noClickYet,
  flag,
  question,
}

export const Tile = ({ bomb, index, over, nearByBombs, open }: TileProps) => {
  const [pick, setPick] = useState<RightPick>(RightPick.noClickYet);
  const { bombs, setBombs } = useContext(BombsContext);
  const { setEmoji } = useContext(SmilesContext);
  const [isTargetBomb, setIsTargetBomb] = useState<boolean>(false);
  const { isGameOver, setIsGameOver, setIsGameWin, firstClick, setfirstClick } =
    useContext(GameContext);
  const { tiles, setNewTiles } = useContext(TilesContext);

  const classes = useMemo(() => cn(
    {
      [style.picked]: pick === 1,
      [style.question]: pick === 2,
      [style.over]: isGameOver && bomb && pick !== 1,
      [style.cross]: pick === 1 && isGameOver && !bomb,
      [style.bomb]: isTargetBomb,
      [style.open]: open,
      [`tile${nearByBombs}`]: open,
    },
    style.tile
  ), [bomb, isGameOver, isTargetBomb, nearByBombs, open, pick]) ;


  const rightClickHandle = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    switch (pick) {
      case 0:
        setPick(RightPick.flag);
        setBombs && setBombs(bombs - 1);
        index &&  setNewTiles && setNewTiles(pickTiles(tiles.copeTyles, index, over));
        break;
      case 1:
        setPick(RightPick.question);
        setBombs && setBombs(bombs + 1);
        break;
      case 2:
        setPick(RightPick.noClickYet);
        break;
      default:
        break;
    }
  }

  const mouseDownHandle = () => {
    setEmoji && setEmoji(Emojies.Surprice);
  }

  const mouseLeaveHandle = () => {
    setEmoji && !isGameOver && setEmoji(Emojies.Smile);
  }

  const mouseUpHandle = () => {
    setEmoji && setEmoji(Emojies.Smile);
  }

  const onClickHandle = () => {
    if (pick === RightPick.flag || pick === RightPick.question) return;
    if (firstClick && setNewTiles) setfirstClick && setfirstClick(false)

    if (!firstClick && bomb) {
      setIsTargetBomb(true);
      setEmoji && setEmoji(Emojies.Sed);
      setIsGameOver && setIsGameOver(true);
      return;
    }

    if (
      (firstClick && setNewTiles) ||
      (!firstClick && !bomb && setNewTiles)
    ) {
      setNewTiles(
        openTiles(
          tiles.copeTyles,
          index,
          WIDTH,
          HEIGHT,
          firstClick,
          isGameOver
        )
      );
      setfirstClick && setfirstClick(false);
    }

    const openedTeles = countOpenedTiles(tiles);
    if (openedTeles === WIDTH * HEIGHT - BOMBS) {
      setIsGameWin && setIsGameWin(openedTeles === WIDTH * HEIGHT - BOMBS);
      setEmoji && setEmoji(Emojies.Win);
    }
  }

  return (
    <button
      className={classes}
      onContextMenu={rightClickHandle}
      onMouseDown={mouseDownHandle}
      onMouseLeave={mouseLeaveHandle}
      onMouseUp={mouseUpHandle}
      onClick={onClickHandle}
    ></button>
  );
};