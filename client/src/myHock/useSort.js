import { useMemo } from "react";

export const useSortedPost = (cours, qeri)=>{
    // console.log(cours,qeri)
    const f = useMemo(() => {
      console.log(qeri)
        if (qeri == 'name') {
          return [...cours].sort((a, b) =>  
          a[qeri].localeCompare(b[qeri]));
         }
         else if(qeri == 'id'){
          return [...cours].sort((a, b) =>  
          a[qeri] - (b[qeri]));
         }
        else {
          return cours
        } },[cours, qeri])
       
        return f;
}


export const useSortedAndSearchcurs = (input, qeri, cours)=>{
let sortedcurs=  useSortedPost(cours,qeri);
       
  const s = useMemo(() => {
         
    const arr =  sortedcurs.filter(
          (elem) => {
           
            if (elem.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()) || elem.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
              return elem
            }
          })
          return arr;
       
      }, [input, sortedcurs])
      
    return s;
}