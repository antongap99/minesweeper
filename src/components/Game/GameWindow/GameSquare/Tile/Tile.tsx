import style from './Tile.module.css';
import cn from 'classnames'
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?:ReactNode
  bombs?:number
};


export const Tile = (props:Props) => {

  return <div className={cn(style.tile, 'border')}></div>;
};

