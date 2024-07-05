import Mybutton from "../../ux/mybutton/mybutton"
import Myinput from "../../ux/myinput/mybutton"
import Myselect from "../../ux/myselect/mysekect"
import { Mycurs } from "./mycurs_"
import style from "./style.module.css"
import React, { useState } from "react"

export const Myshowcurses = ({ hrefuser, isauth,sortedpost, value,changer})=>{
  
  console.log(sortedpost.map((elem)=>{return elem}))

  let arrarticle = '';
  let counter = 0;
  if (sortedpost.id !== 0) {
      arrarticle = sortedpost.map((elem)=>{
        console.log(elem)
        counter++;
        return<Mycurs id={counter} posts={ elem}  isauth={true}></Mycurs>;
      })
                  
  }

  else {
      arrarticle = <h1 style={{ textAlign: 'center' }}>no posts</h1>;
  }
counter=0;
// let doparr =[]
//      posts.map((elem)=>{
//       return <Mycurs posts={elem} hrefuser='/' isauth={true}></Mycurs>;
//     }) 
   
   return(
   <div className={style.maidiv}> 
    <div className={style.optiondiv}>
  <Myinput
  value={value.input}
  onChange={e => changer({ ...value, input: e.target.value })} ></Myinput>
  <Myselect
  velue={value.qeri}
   arroption={[
                { title: ' name', value: 'name' },
                { title: ' number', value: 'id' },
            ]} 
            onChange={selectedsort => changer({ ...value, qeri: selectedsort })}
            defaultValue={'Filter:'} ></Myselect>
    </div>
    <div className={style.maidiv}> {sortedpost.map((elem)=>{
    return <Mycurs posts={elem} hrefuser='/' isauth={true}></Mycurs>;
  }) }
    
   </div> </div>
   )

}