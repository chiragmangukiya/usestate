import React, { useState } from 'react'

const Calculator = () => {

     let [num,setnum]=useState('');
     let [fval,setfval]=useState('');
     let [sign,setsign]=useState('');

     const no = (n) => {
          setnum(num+n);
          if(n === 'C'){
               setnum('');
          }
     }
     const action = (s) => {
          setfval(num);
          setnum('');
          setsign(s);
     }
     const back = () => {
          setnum(num.substr(0,(num).length-1));
     }
     const ans = () => {

          if(sign === '+'){
               setnum(parseInt(fval)+parseInt(num));
          }
          if(sign === '-'){
               setnum(parseInt(fval)-parseInt(num));
          }
          if(sign === '*'){
               setnum(parseInt(fval)*parseInt(num));
          }
          if(sign === '/'){
               setnum(parseInt(fval)/parseInt(num));
          }

     }

  return (
    <>
     <div className="calculator">
               <input type="text" name="" id="display" value={num} />

               <div className="box">
                    <input type="button" value="7" onClick={(e)=>{no(e.target.value)}}/>
                    <input type="button" value="8" onClick={(e)=>{no(e.target.value)}}/>
                    <input type="button" value="9" onClick={(e)=>{no(e.target.value)}}/>
                    <input type="button" value="/" onClick={(e)=>{action(e.target.value)}}/>

                    <input type="button" value="4" onClick={(e)=>{no(e.target.value)}}/>
                    <input type="button" value="5" onClick={(e)=>{no(e.target.value)}}/>
                    <input type="button" value="6" onClick={(e)=>{no(e.target.value)}}/>
                    <input type="button" value="*" onClick={(e)=>{action(e.target.value)}}/>

                    <input type="button" value="1" onClick={(e)=>{no(e.target.value)}}/>
                    <input type="button" value="2" onClick={(e)=>{no(e.target.value)}}/>
                    <input type="button" value="3" onClick={(e)=>{no(e.target.value)}}/>
                    <input type="button" value="-" onClick={(e)=>{action(e.target.value)}}/>

                    <input type="button" value="0" onClick={(e)=>{no(e.target.value)}}/>
                    <input type="button" value="C" onClick={(e)=>{no(e.target.value)}}/>
                    <input type="button" value="=" onClick={ans}/>
                    <input type="button" value="+" onClick={(e)=>{action(e.target.value)}}/>

                    <input type="button" value="Back" onClick={back}/>
               </div>
          </div>
    </>
  )
}

export default Calculator;