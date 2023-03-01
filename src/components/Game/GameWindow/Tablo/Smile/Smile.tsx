import style from './Smile.module.css';
import svgItem from './icons/smileEmj.svg'
import cn from 'classnames';
import { useContext } from 'react';
import { BombsContext } from '../../../../../context/bomb.context';
interface Props {

};


export const Smile = (props: Props) => {

  const { bombs, updateSquare } = useContext(BombsContext)

  const updateBombs = () => {
    const newBombs = bombs - 1
    if (updateSquare) {
      updateSquare(newBombs)
    }
  }

  return <div onClick={updateBombs} className={cn(style.smile, 'border')}><img className='svg' src={svgItem} alt="smile" /></div>;
};

