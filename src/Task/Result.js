import { useEffect, useState } from 'react'

const Result = () => {

     let initial={
          rno:0,
          sname:'',
          s1:0,
          s2:0,
          s3:0,
          s4:0,
          s5:0,
          total:0,
          per:0
     }

     let [data,setdata]=useState(initial)
     let [detail,setdetail]=useState([]);

     let [upid,setupid]=useState(-1);
     let [isupdate,isSetUpdate]=useState(false);

     let result = () => {

          data.total=parseInt(data.s1)+parseInt(data.s2)+parseInt(data.s3)+parseInt(data.s4)+parseInt(data.s5);
          data.per=(data.total/5)+"%";

          if(isupdate){
               let edata=[...detail];
               edata[upid]=data;
               setdetail(edata);
          }
          else{
               setdetail(detail=>[...detail,data]);
               isSetUpdate(false)
          }
          
     }

     let dlt=(n)=>{
          const newData=detail.filter((val,ind)=> ind!=n )
          setdetail(newData);
     }
     let update=(k)=>{
          setupid(k);
          isSetUpdate(true);
          const newData=detail[k]
          setdata(newData);
     }
     let resultchange = (e) => {
          setdata({...data,[e.target.name]:e.target.value})
     }
     
  return (
    <>
          <div className="result">
               <table width="70%" align='' border={1}>
                    <tbody>
                         <tr>
                              <td>Roll No.</td>
                              <td>
                                   <input type="text" name="rno" value={data.rno} id="" onChange={resultchange} />
                              </td>
                         </tr>
                         <tr>
                              <td>Stu. Name</td>
                              <td>
                                   <input type="text" name="sname" value={data.sname} id="" onChange={resultchange}/>
                              </td>
                         </tr>
                         <tr>
                              <td>Sub 1</td>
                              <td>
                                   <input type="text" name="s1" value={data.s1} id="" onChange={resultchange}/>
                              </td>
                         </tr>
                         <tr>
                              <td>Sub 2</td>
                              <td>
                                   <input type="text" name="s2" value={data.s2} id="" onChange={resultchange}/>
                              </td>
                         </tr>
                         <tr>
                              <td>Sub 3</td>
                              <td>
                                   <input type="text" name="s3" value={data.s3} id="" onChange={resultchange}/>
                              </td>
                         </tr>
                         <tr>
                              <td>Sub 4</td>
                              <td>
                                   <input type="text" name="s4" value={data.s4} id="" onChange={resultchange}/>
                              </td>
                         </tr>
                         <tr>
                              <td>Sub 5</td>
                              <td>
                                   <input type="text" name="s5" value={data.s5} id="" onChange={resultchange}/>
                              </td>
                         </tr>
                         <tr>
                              <td colSpan={2} align='center'>
                                   <input type="button" value="Submit" onClick={result} />
                              </td>
                         </tr>
                    </tbody>
               </table>
          </div>

          <div className="print">
               <table border={1} align='center' width="80%">
                    <thead>
                         <tr>
                              <th>Roll No.</th>
                              <th>Student Name</th>
                              <th>Sub 1</th>
                              <th>Sub 2</th>
                              <th>Sub 3</th>
                              <th>Sub 4</th>
                              <th>Sub 5</th>
                              <th>Total</th>
                              <th>Per</th>
                              <th>Action</th>
                         </tr>
                    </thead>
                    <tbody>
                    {
                         detail.map((item,ind) => (
                              <tr>
                                   <td>{item.rno}</td>
                                   <td>{item.sname}</td>
                                   <td>{item.s1}</td>
                                   <td>{item.s2}</td>
                                   <td>{item.s3}</td>
                                   <td>{item.s4}</td>
                                   <td>{item.s5}</td>
                                   <td>{item.total}</td>
                                   <td>{item.per}</td>
                                   <td>
                                        <button onClick={()=>{dlt(ind)}}>Delete</button> | <button onClick={()=>{update(ind)}}>Edit</button>
                                   </td>
                              </tr>
                         ))
                    }
                    </tbody>
               </table>
          </div>
    </>
  )
}

export default Result