import React, { Component, useContext } from "react";
import {observer} from "mobx-react-lite";
import{Switch,Route,Redirect, Routes} from "react-router-dom"
import  Profil  from "../pages/Profil.js";
import  Auth from "../pages/Auth.js";
import  Cours from "../pages/Cours.js";
import  Page  from "../pages/Page.js";
import  Js  from "../pages/Cursjs.js";
import  Csh from "../pages/Cursc#.js";
import  Cplpl from "../pages/Cursc++.js";
import { Context } from "../index.js";

const AppRouter = observer(() => {
    const {user} = useContext(Context);
    console.log(user);
   
    return ( 
      
       <Routes>
       {user.isAuth && <Route path='/profile' element={<Profil/>}/>} 

         <Route path='/login' element={<Auth/>}/> 
         <Route path='/registration' element={<Auth/>}/> 
         <Route path='/' element={<Page/>}/> 
         <Route path='/js' element={<Js/>}/> 
         <Route path='/cshp' element={<Csh/>}/> 
         <Route path='/cplus' element={<Cplpl/>}/> 
       
       </Routes>
    );
});

export default AppRouter;