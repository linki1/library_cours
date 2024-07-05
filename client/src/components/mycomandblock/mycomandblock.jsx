import { Mydeveloperblock } from "./mydeveloperblock"
import style from "./style.module.css"

export const Mycomandblock = ()=>{

   return(
    <div className={style.maindiv}>
        <Mydeveloperblock img="./assets/womendev.jpg">
        Alena - Frontend developer
        I’m a frontend developer with over 5 years of experience. I specialize in web application development.
        </Mydeveloperblock>
        <Mydeveloperblock img="./assets/mendev.jpg">
        Maksim  - Full-stack developer
        I’m a full-stack developer with over 7 years of experience. I specialize in developing web applications and mobile applications. 
        </Mydeveloperblock >
        <Mydeveloperblock img="./assets/mende2.jpg"> 
        David - Backend developer
        i'am a backend developer with more than 3 years of experience. I specialize in developing web services and APIs.
        </Mydeveloperblock>
    </div>
   )

}