import React, { useState } from 'react'

function Simple() {
  let [data,setdata]=useState('Admin');
  let [name,setname]=useState('');
  const [count, setCount] = useState(0);

  const btnHandler=()=>{ 
    setdata('CDMI');
  }
  const getdata=()=>{
    console.log(name);
  }


  return (
    <>
          <h1>{data}</h1>
        <input type="button" value="Change" onClick={btnHandler} />

        <input type="text" name="" onChange={(e)=>setname(e.target.value)}/>
        <input type="button" value="Get" onClick={getdata} />
        <br></br>
        <br></br>

        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
          Click me
          </button>
        </div>

    </>
  )
}

export default Simple