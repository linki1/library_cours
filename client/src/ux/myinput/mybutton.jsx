import React from 'react';
import clas from './style.module.css';

const Myinput = React.forwardRef((props, ref) => {

  return < input ref={ref} {...props} className={clas.Myinput} />



})

export default Myinput