import { Mydescription } from "../components/myblockoption/mydescription";
import { Mycomandblock } from "../components/mycomandblock/mycomandblock";
import { Myshowcurses } from "../components/mycurslist/showcurses";
import { Myheader } from "../components/myheader/myheader";
import React, { useEffect, useMemo, useRef, useState,useContext } from 'react';
import { useSortedAndSearchcurs } from "../myHock/useSort";
import { checkList, returnarr} from "../api/user";
import { Context } from "../index.js";
import UserStore from "../storage/UserStorage"

export const curses = [
        {id:1,name:"JS",img:'./assets/jsicon.jpg',href:"http://localhost:3000/js",text:' JS is a lightweight, interpreted (or JIT-compiled) programming language with first-class functions. It is most widely used as a web page scripting language, but is also used in other software products such as Node.js or Apache CouchDB.'},
        {id:2,name:"C#",img:'./assets/csh.jpg',href:"http://localhost:3000/cshp",text:'C# is an object-oriented, component-oriented programming language. C# provides language designs to directly support this work concept. It was originally created for Windows projects, but now it’s a truly universal language: it writes games, desktop apps, web services, neural networks, and even graphics for metauniverses.'},
        {id:3,name:"C++",img:'./assets/cpl.png',href:"http://localhost:3000/cplus",text:'C+ː  is a compiled, statically typed general purpose programming language. isocpp.org Supports programming paradigms such as procedural programming, object-oriented programming, generalized programming.'}
    ]

function Page() {
 let isAuth;
  if(localStorage.getItem('user') == undefined){
    isAuth= false;
  }
  else{
    isAuth = true;
  }
 
   const auth = localStorage.getItem('auth')
  //  let context = useChec();
    const [arrcurs,changecours]= useState(curses)
    const [filter,changefilter]= useState({ input: '', qeri: '' })
    let sortedarr  = useSortedAndSearchcurs(filter.input,filter.qeri,arrcurs);
      
    
    console.log()
    return (
      <div className="App">
      <div  >
      <Myheader logo='Courses' href='http://localhost:3000/' isauht={isAuth}></Myheader>
      <Mydescription></Mydescription>
      <Mycomandblock></Mycomandblock>
     <Myshowcurses isauth={isAuth} posts={arrcurs} sortedpost={sortedarr} value={filter} changer={changefilter}></Myshowcurses>
     </div>
      </div>
      );
    
  }

  export default Page;