
import {$authHost, $host} from "./index";
import {jwtDecode} from "jwt-decode"

export const registration = async (email, password) => {
    try{
      const {data}= await $host.post('/api/user/registration', {email, password})
    console.log('ss') 
      return jwtDecode(data.token)
    }
    catch(e){
        console.log(e)
    }
    
    // localStorage.setItem('token', data.token)
   
}

export const login = async (email, password) => {
    const  {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}



export const check = async () => {
    const  {data} = await $authHost.get('api/user/auth')
     localStorage.setItem('token', data.token)
    console.log('corect')
    return jwtDecode(data.token)
}

export const checkList = async (email, crid) => {
    try {
      const { data } = await $host.post('api/user/checkList', {crid, email });
      console.log(data)
      return data;
    } catch (e) {
      console.error('eror');
    }
  };

  export const returnarr= async (email) => {
    try {
      const { data } = await $host.post('api/user/getcours', { email });
      console.log(data)
      return data;
    } catch (e) {
      console.error('eror');
    }
  };