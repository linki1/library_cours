import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  {createContext} from 'react';
import UserStore from './storage/UserStorage';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Context.Provider value={{
        user: new UserStore(),
    }}>
        <App />
    </Context.Provider>,
  
);

