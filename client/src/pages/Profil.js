import { Mycurs } from "../components/mycurslist/mycurs_";
import { Myheader } from "../components/myheader/myheader";
import { curses } from "./Page";
import style from '../style/Page.module.css'
function Profile() {
  console.log(curses)
   const coursID = '1 3';
   const coursidarr = [];
  let coursarr =[ ];
  curses.map((elem)=>{
    console.log(localStorage.getItem(`curs${elem.id}`))
      coursidarr.push(localStorage.getItem(`curs${elem.id}`))
  })
 console.log(coursarr)
 curses.map((elem)=>{
   for (let index = 0; index < coursidarr.length; index++) {
      
    if(coursidarr[index] == elem.id){
      return coursarr.push(elem)
    }
    
     }
     
  })
   
  
    return (
      <div className="App">
      <Myheader logo='MAIN' href='http://localhost:3000/' isauht={true}></Myheader>
      <div className={style.Profilediv}>{coursarr.map((elem)=>{
        
         return <Mycurs posts={elem} ></Mycurs>
      }) }
       
      </div>
      
      </div>
    );
  }
  
  export default Profile;