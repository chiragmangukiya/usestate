import React, { useState } from 'react'
import { FaTrashCan,FaPenToSquare } from "react-icons/fa6";

function Todo() {

     const [task,setTask]=useState('');
     const [alldata,setalldata]=useState([]);

     const [editId,setEditId]=useState();
     const [isEdit,setIsEdit]=useState(false)

     const dltHandler = (dId) => {
          const newData=alldata.filter((i,j) => j!=dId )
          setalldata(newData);
     }
     const editHandler = (eId) => {
          setEditId(eId);
          setIsEdit(true);
          const upData=alldata[eId];
          setTask(upData);
     }
     const addData = () => {
          if(isEdit){
               alldata[editId]=task;   
               setTask('');
          }
          else{
               setalldata([...alldata,task]);
               setTask('')
          }
     }

  return (
    <>
          <div className="todo_box">
               <h1 className='todo_title'>ToDo List</h1>
               <div className='input_parent'>
                    <input type='text' className='txt_box' name="task" value={task} placeholder="Add Item" onChange={(e)=>{setTask(e.target.value)}}/>

                    <input type="button" value="Add" className='add_btn' onClick={addData} />
               </div>
               <div className="display_data">
                    <ul>
                    {
                         alldata.map((item,ind)=>(
                              <li>
                                   <div>{ind+1}. {item}</div>
                                   <div className='action_btn'>
                                        <button onClick={()=>{dltHandler(ind)}}><FaTrashCan></FaTrashCan></button>
                                        <button onClick={()=>{editHandler(ind)}}><FaPenToSquare></FaPenToSquare></button>
                                   </div>
                              </li>
                         ))
                    }
                    </ul>
               </div>
          </div>
    </>
  )
}

export default Todo