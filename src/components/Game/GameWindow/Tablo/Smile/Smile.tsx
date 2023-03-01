import style from './Smile.module.css';
import svgItem   from './icons/smileEmj.svg'
import cn from 'classnames'
interface Props{

};


export const Smile = (props:Props) => {

  return <div className={cn(style.smile, 'border')}><img className='svg' src={svgItem} alt="smile"/></div>;
};

