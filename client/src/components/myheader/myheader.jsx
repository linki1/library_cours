import Mybutton from "../../ux/mybutton/mybutton"
import style from "./style.module.css"

export const Myheader = ({isauht, logo, href})=>{
 if(!isauht){
   return(<header>
    <div className={style.main}>
    <img className={style.image} src="./assets/mainicon.jpg" alt="main icon"/>
    <a href={href} className={style.mainText}>{logo}</a>
    <div className={style.logdiv} >
      <form action="http://localhost:3000/login">
      <Mybutton to="/login" style={{height:"40px",marginBottom:"10px"}}>login</Mybutton>
      </form>
      <img style={{marginBottom:"10px"}} className={style.image} src="./assets/usericon.jpg" alt="main icon"/>
    </div>
    </div>
   </header>)
 }
 else{
  return(<header>
    <div className={style.main}>
    <img className={style.image} src="./assets/mainicon.jpg" alt="main icon"/>
    <a href={href} className={style.mainText}>{logo}</a>
    <div className={style.logdiv} >
    <form action="http://localhost:3000/profile">
      <Mybutton to="/login" style={{height:"40px",marginBottom:"10px"}}>cabinet</Mybutton>
      </form>
    </div>
    </div>
   </header>
  )
 }

}