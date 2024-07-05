import Mybutton from "../../ux/mybutton/mybutton"
import style from "./style.module.css"
import React, { useState } from "react"
import { checkList,returnarr} from "../../api/user";
export const Mycurs = ({posts, isauth, id})=>{
    let email = localStorage.getItem('user');
     let change = true;
     if(isauth){
     change=false;
    }
    let count
    async function addarr(){
      if(email != undefined){
       localStorage.setItem(`curs${posts.id}`, posts.id)
      }
     
    }

   return(<div className={style.cursdiv}>
    <img className={style.cursimg} src={posts.img} alt="cours img" />
    <a href={posts.href} className={style.cursp}>{posts.text}</a>
   
    <form > 
     <Mybutton type="button"   onClick={addarr}  disable={change} style={{width:'185px', height:'50px'}}>join</Mybutton>
    </form>
    
   </div>)

}