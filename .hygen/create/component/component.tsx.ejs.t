---
to: <%= absPath %>/<%= component_name %>.tsx
---

import style from './<%= component_name %>.module.css';

interface Props{

};


export const <%= component_name %> = (props:Props) => {

  return <div className = {style.container}></div>;
};

