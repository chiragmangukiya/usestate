import React, { useState } from 'react'
const Calc = () => {

     let [no1,setno1]=useState('');
     let [no2,setno2]=useState('');
     let [ans,setans]=useState();

     const ansHandler = (sign) => {
          if(sign=='+'){
               setans(`${parseInt(no1)+ parseInt(no2)}`);
          }
          if(sign=='-'){
               setans(`${parseInt(no1)- parseInt(no2)}`);
          }
          if(sign=='*'){
               setans(`${parseInt(no1)* parseInt(no2)}`);
          }
          if(sign=='/'){
               setans(`${parseInt(no1)/ parseInt(no2)}`);
          }
     }

  return (
    <>
          No1 : <input type="text" name="" id="" onChange={(e)=>setno1(e.target.value)} /><br></br>
          No2 : <input type="text" name="" id="" onChange={(e)=>setno2(e.target.value)}/><br></br>

          <input type="button" name="" value="+" onClick={(s)=>ansHandler(s.target.value)} />
          <input type="button" name="" value="-" onClick={(s)=>ansHandler(s.target.value)} />
          <input type="button" name="" value="*" onClick={(s)=>ansHandler(s.target.value)} />
          <input type="button" name="" value="/" onClick={(s)=>ansHandler(s.target.value)} />
          
          <br></br>
          <h1>{ans}</h1>
    </>
  )
}


export default Calc;