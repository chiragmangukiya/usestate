import React, { useEffect, useState } from 'react'

function Puzzle() {
     
    
     let [btn1,setbtn1]=useState('1');
     let [btn2,setbtn2]=useState('2');
     let [btn3,setbtn3]=useState('3');
     let [btn4,setbtn4]=useState('4');
     let [btn5,setbtn5]=useState('5');
     let [btn6,setbtn6]=useState('6');
     let [btn7,setbtn7]=useState('7');
     let [btn8,setbtn8]=useState('');
     let [btn9,setbtn9]=useState('8');
     let [win,setwin]=useState('');

          const puzzle1 = () => {
               if(btn2 === ''){
                    setbtn2(btn1);
                    setbtn1('');
               }
               if(btn4 === ''){
                    setbtn4(btn1);
                    setbtn1('');
               }
               winner();

          }
          const puzzle2 = () => {
               if(btn1 === ''){
                    setbtn1(btn2);
                    setbtn2('');
               }
               if(btn3 === ''){
                    setbtn3(btn2);
                    setbtn2('');
               }
               if(btn5 === ''){
                    setbtn5(btn2);
                    setbtn2('');
               }
               winner();

          }
          const puzzle3 = () => {
               if(btn2 === ''){
                    setbtn2(btn3);
                    setbtn3('');
               }
               if(btn6 === ''){
                    setbtn6(btn3);
                    setbtn3('');
               }
               winner();

          }
          const puzzle4 = () => {
               if(btn1 === ''){
                    setbtn1(btn4);
                    setbtn4('');
               }
               if(btn5 === ''){
                    setbtn5(btn4);
                    setbtn4('');
               }
               if(btn7 === ''){
                    setbtn7(btn4);
                    setbtn4('');
               }
               winner();

          }
          const puzzle5 = () => {
               if(btn2 === ''){
                    setbtn2(btn5);
                    setbtn5('');
               }
               if(btn4 === ''){
                    setbtn4(btn5);
                    setbtn5('');
               }
               if(btn6 === ''){
                    setbtn6(btn5);
                    setbtn5('');
               }
               if(btn8 === ''){
                    setbtn8(btn5);
                    setbtn5('');
               }
               winner();

          }
          const puzzle6 = () => {
               if(btn3 === ''){
                    setbtn3(btn6);
                    setbtn6('');
               }
               if(btn5 === ''){
                    setbtn5(btn6);
                    setbtn6('');
               }
               if(btn9 === ''){
                    setbtn9(btn6);
                    setbtn6('');
               }
               winner();

          }
          const puzzle7 = () => {
               if(btn4 === ''){
                    setbtn4(btn7);
                    setbtn7('');
               }
               if(btn8 === ''){
                    setbtn8(btn7);
                    setbtn7('');
               }
               winner();

          }
          const puzzle8 = () => {
               if(btn5 === ''){
                    setbtn5(btn8);
                    setbtn8('');
               }
               if(btn7 === ''){
                    setbtn7(btn8);
                    setbtn8('');
               }
               if(btn9 === ''){
                    setbtn9(btn8);
                    setbtn8('');
               }
               winner();

          }
          const puzzle9 = () => {
               if(btn8 === ''){
                    setbtn8(btn9);
                    setbtn9('');
               }
               if(btn6 === ''){
                    setbtn6(btn9);
                    setbtn9('');
               }
               winner();
          }

          const winner = () => {
               if(btn1==='1' && btn2==='2' && btn3==='3' && btn4==='4' && btn5==='5' && btn6==='6' && btn7==='7' && btn8==='8' && btn9===''){
                    setwin('You are Winner');
               }
          }
     

  return (
    <>
          <div className="tic_tac">
               <input type="button" value={btn1} onClick={()=>{puzzle1()}}/>
               <input type="button" value={btn2} onClick={()=>{puzzle2()}}/>
               <input type="button" value={btn3} onClick={()=>{puzzle3()}}/>
               <input type="button" value={btn4} onClick={()=>{puzzle4()}}/>
               <input type="button" value={btn5} onClick={()=>{puzzle5()}}/>
               <input type="button" value={btn6} onClick={()=>{puzzle6()}}/>
               <input type="button" value={btn7} onClick={()=>{puzzle7()}}/>
               <input type="button" value={btn8} onClick={()=>{puzzle8()}}/>
               <input type="button" value={btn9} onClick={()=>{puzzle9()}}/>
          </div>
          <h1>{win}</h1>
    </>
  )
}

export default Puzzle