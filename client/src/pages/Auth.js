import { Myheader } from "../components/myheader/myheader";
import {Container} from 'react-bootstrap';
import Style from '../style/Page.module.css';
import Myinput from "../ux/myinput/mybutton";
import Mybutton from "../ux/mybutton/mybutton";
import { NavLink,useLocation } from "react-router-dom";
import {React, useContext, useState, } from "react";
import { login, registration } from "../api/user";
import { observer } from "mobx-react-lite";
import UserStore from "../storage/UserStorage"


 
const Auth = observer( (  )=> {
  const userStore = new UserStore();

  const [email,changeemail] = useState("")
  const [pasword,changepasword] = useState("")
  const location = useLocation();
  const islogin = location.pathname === '/login'
  

let date;


let t = false
const signin = async()=>{
try{if(islogin){
    date= await login(email,pasword); 
    console.log(date);
  }else{
    date = await registration(email,pasword);
   
  }
   console.log(date)
  localStorage.setItem('user',date.email)
  userStore.setIsAuth(true);
   window.location.href = "http://localhost:3000";
  
  
  
}

catch(e){
  alert()
}

  
  
}
 
    return (
      <div className="App">
       <Myheader logo='main' href='http://localhost:3000/' isauht={false}></Myheader>
       <div className={Style.container} >


       
       <div className={Style.Logindiv}>
        
       {islogin? <form className={Style.formst}>
          
          <Myinput placeholder="write email.." value={email} onChange={e=> changeemail(e.target.value)}  style={{width:850,margin:"20px"}} /> 
          <Myinput placeholder="write password.." value={pasword} onChange={e=> changepasword(e.target.value)} type="password" style={{width:850,margin:"20px"}} />
          
          
          <div className={Style.divbtn}>
            <div className={Style.textrig} >
              not registration? <NavLink to='http://localhost:3000/registration'>Register</NavLink>
            </div>
            <Mybutton type="button"  onClick={signin}>login</Mybutton>
          </div>
          
         
         
        </form> :
        <form className={Style.formst}>
          
          <Myinput placeholder="write email.." value={email} onChange={e=> changeemail(e.target.value)} style={{width:850,margin:"20px"}} /> 
          <Myinput  placeholder="write password.."type="password" value={pasword} onChange={e=> changepasword(e.target.value)}  style={{width:850,margin:"20px"}} />
          
         
          
          <div className={Style.divbtn}>
            <div className={Style.textrig} >
              Have account? <NavLink to='http://localhost:3000/login'>login</NavLink>
            </div>
            <Mybutton type="button" onClick={signin}>Registrarion</Mybutton>
          </div>
          
         
         
        </form>
        
        }
       </div>
       </div>
      </div>
    );
  })
  
  export default Auth;