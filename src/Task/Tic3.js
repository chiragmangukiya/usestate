import React, { useState } from 'react'

function Tic3() {
     
     
     let [btn,setbtn]=useState(['','','','','','','','','']);
     let [winner,setwin]=useState('');
     let cnt=0;

     const game = (i) => {
          
          if(btn[i]===''){
               
               btn[i]='X';
               setbtn([...btn]);
               cnt++;
               
               pc();

               win(0,1,2,'X');
               win(3,4,5,'X');
               win(6,7,8,'X');
               win(0,3,6,'X');
               win(1,4,7,'X');
               win(2,5,8,'X');
               win(0,4,8,'X');
               win(2,4,6,'X');

               win(0,1,2,'O');
               win(3,4,5,'O');
               win(6,7,8,'O');
               win(0,3,6,'O');
               win(1,4,7,'O');
               win(2,5,8,'O');
               win(0,4,8,'O');
               win(2,4,6,'O');

          }          
     }

     const pc = () => {

          if(cnt < 5){
               while(true){
                    let val = Math.floor(Math.random()*9);
                    if(btn[val] === ''){
                         btn[val]='O'; 
                         setbtn([...btn]);         
                         break;
                    }
               }
          }          
          // console.log(btn);  

     }

     const win = (p1,p2,p3,sign) => {
          if(btn[p1]==sign && btn[p2]==sign && btn[p3]==sign){
               setwin(`${sign} is Win`);
          }            
     }

  return (
    <>
          <div className="tic_tac">
               <input type="button" value={btn[0]} onClick={()=>{game(0)}}/>
               <input type="button" value={btn[1]} onClick={()=>{game(1)}}/>
               <input type="button" value={btn[2]} onClick={()=>{game(2)}}/>
               <input type="button" value={btn[3]} onClick={()=>{game(3)}}/>
               <input type="button" value={btn[4]} onClick={()=>{game(4)}}/>
               <input type="button" value={btn[5]} onClick={()=>{game(5)}}/>
               <input type="button" value={btn[6]} onClick={()=>{game(6)}}/>
               <input type="button" value={btn[7]} onClick={()=>{game(7)}}/>
               <input type="button" value={btn[8]} onClick={()=>{game(8)}}/>
          </div>
          <h1>{winner}</h1>
    </>
  )
}

export default Tic3