
import style from "./style.module.css"

export const Myblockds = ({tite, children})=>{

   return(<div className={style.blockbc}>
    <p className={style.blocktitle}>{tite}</p>
    <p className={style.blocktext}>{children}</p>
   </div>)

}