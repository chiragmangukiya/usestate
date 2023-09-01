import React, { useState } from 'react'

function Tic() {
     
     var [cnt,setcnt]=useState(0);
     let [btn1,setbtn1]=useState('');
     let [btn2,setbtn2]=useState('');
     let [btn3,setbtn3]=useState('');
     let [btn4,setbtn4]=useState('');
     let [btn5,setbtn5]=useState('');
     let [btn6,setbtn6]=useState('');
     let [btn7,setbtn7]=useState('');
     let [btn8,setbtn8]=useState('');
     let [btn9,setbtn9]=useState('');
     let [winner,setwin]=useState('');


     
     const game = (i) => {
          
          if(i==1){
               if(btn1 == ''){
                    if(cnt%2==1){
                         setbtn1('X');
                    }
                    else{
                         setbtn1('O');
                    }
                    setcnt(cnt+1);
                    win();
               }
          }
          if(i==2){
               if(btn2 == ''){
                    if(cnt%2==1){
                         setbtn2('X');
                    }
                    else{
                         setbtn2('O');
                    }
                    setcnt(cnt+1);
                    win();
               }
          }
          if(i==3){
               if(btn3 == ''){
                    if(cnt%2==1){
                         setbtn3('X');
                    }
                    else{
                         setbtn3('O');
                    }
                    setcnt(cnt+1);
                    win();
               }
          }
          if(i==4){
               if(btn4 == ''){
                    if(cnt%2==1){
                         setbtn4('X');
                    }
                    else{
                         setbtn4('O');
                    }
                    setcnt(cnt+1);
                    win();
               }
          }
          if(i==5){
               if(btn5 == ''){
                    if(cnt%2==1){
                         setbtn5('X');
                    }
                    else{
                         setbtn5('O');
                    }
                    setcnt(cnt+1);
                    win();
               }
          }
          if(i==6){
               if(btn6 == ''){
                    if(cnt%2==1){
                         setbtn6('X');
                    }
                    else{
                         setbtn6('O');
                    }
                    setcnt(cnt+1);
                    win();
               }
          }
          if(i==7){
               if(btn7 == ''){
                    if(cnt%2==1){
                         setbtn7('X');
                    }
                    else{
                         setbtn7('O');
                    }
                    setcnt(cnt+1);
                    win();
               }
          }
          if(i==8){
               if(btn8 == ''){
                    if(cnt%2==1){
                         setbtn8('X');
                    }
                    else{
                         setbtn8('O');
                    }
                    setcnt(cnt+1);
                    win();
               }
          }
          if(i==9){
               if(btn9 == ''){
                    if(cnt%2==1){
                         setbtn9('X');
                    }
                    else{
                         setbtn9('O');
                    }
                    setcnt(cnt+1);
                    win();
               }
          }
          
     }

     const win = () => {

          if(btn1=='O' && btn2=='O' && btn3=='O'){
               setwin('O is Win');
          }            
     }

  return (
    <>
          <div className="tic_tac">
               <input type="button" value={btn1} onClick={()=>{game(1)}}/>
               <input type="button" value={btn2} onClick={()=>{game(2)}}/>
               <input type="button" value={btn3} onClick={()=>{game(3)}}/>
               <input type="button" value={btn4} onClick={()=>{game(4)}}/>
               <input type="button" value={btn5} onClick={()=>{game(5)}}/>
               <input type="button" value={btn6} onClick={()=>{game(6)}}/>
               <input type="button" value={btn7} onClick={()=>{game(7)}}/>
               <input type="button" value={btn8} onClick={()=>{game(8)}}/>
               <input type="button" value={btn9} onClick={()=>{game(9)}}/>
          </div>
          <h1>{winner}</h1>
    </>
  )
}

export default Tic