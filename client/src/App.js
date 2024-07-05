
// import React from "react";
// import AppRouter from "./components/AppRouter";
// import { BrowserRouter } from "react-router-dom";
import {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./api/user";
import {Spinner} from "react-bootstrap";
import React from "react";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";

// observer()
const App = ()=>  {
  return (
   <BrowserRouter div classname='app'>
    <AppRouter/>
    </BrowserRouter>
  );
};

export default App;

