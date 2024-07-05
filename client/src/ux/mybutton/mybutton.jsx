import React from 'react';
import clas from './style.module.css';

const Mybutton = ({children,...props})=>{
return (<button{...props} className={clas.Mybutton}>
  {children}
</button>)
}

export default Mybutton