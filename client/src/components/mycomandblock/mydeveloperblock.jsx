import style from "./style.module.css"

export const Mydeveloperblock = ({img,  children})=>{

   return( <div className={style.divimg}>
    <img  src={img}  className={style.image}/>
    <div className={style.textdiv}>
        <p className={style.text}>
         {children}
        </p>
    </div>
   </div>)

}