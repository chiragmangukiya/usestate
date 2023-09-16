import React, { useState, useRef } from 'react'
import './Frm.css'

function Frm() {

  const ref = useRef([]);
  const initial={
    fname: '',
    lname:'',
    address:'',
    gender:'',
    state:'',
    city:'',
    dob:'',
    pincode:'',
    course:'',
    email:'',
    hobby:[]
  }
  
  const [studata,setstudata]=useState(initial);
  const [alldata,setalldata]=useState([]);
  
  const [editid,seteditid]=useState();
  const [isedit,setisedit]=useState(false);

  const getData = (e) => {
    setstudata({...studata,[e.target.name]:e.target.value}); 
  }

  const dltData = (dltId) => {
      const newData = alldata.filter((item,i)=> i != dltId )
      setalldata(newData);
  }
  const editData = (eId) => {
    seteditid(eId);
    setisedit(true)
    const editedData=alldata[eId]
    setstudata(editedData);
  }
  const addData = () => {

    if(isedit){
      
      const edata=[...alldata];
      edata[editid]=studata;
      setalldata(edata)
      setisedit(false)
      
    }
    else{
      setalldata(alldata=>[...alldata,studata]);
      // console.log(alldata);
      for (let i = 0; i < ref.current.length; i++) {
          ref.current[i].checked = false;
      }
      setstudata({
        fname: '',
        lname:'',
        address:'',
        gender:'',
        state:'',
        city:'',
        dob:'',
        pincode:'',
        course:'',
        email:'',
        hobby:[]
      })
    }

  }

  return (
    <>
        <div className="main">
          <div className="container">
            <div className="signup-content">
              <div className="signup-form">
                <form method="POST" className="register-form" id="register-form">
                  <h2 align="center" className='frm_title'>student registration form</h2>
                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name :</label>
                      <input type="text" name="fname" value={studata.fname} onChange={getData}  />
                    </div>
                    <div className="form-group">
                      <label htmlFor="father_name">Last Name :</label>
                      <input type="text" name="lname" value={studata.lname} id="father_name" onChange={getData} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address :</label>
                    <input type="text" name="address" id="address" value={studata.address} onChange={getData} />
                  </div>
                  <div className="form-radio">
                    <label className="radio-label">Gender :</label>
                    <div className="form-radio-item">
                      <input type="radio" name="gender" id="male" checked={studata.gender==='Male'} onChange={getData} value="Male" />
                      <label htmlFor="male">Male</label>
                      <span className="check" />
                    </div>
                    <div className="form-radio-item">
                      <input type="radio" name="gender" id="female" onChange={getData} checked={studata.gender==='Female'} value="Female" />
                      <label htmlFor="female">Female</label>
                      <span className="check" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="state">State :</label>
                      <div className="form-select">
                        <select name="state" id="state" value={studata.state} onChange={getData}>
                          <option value />
                          <option value="us">America</option>
                          <option value="uk">English</option>
                        </select>
                        <span className="select-icon"><i className="zmdi zmdi-chevron-down" /></span>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="city">City :</label>
                      <div className="form-select">
                        <select name="city" id="city" onChange={getData} value={studata.city}>
                          <option value />
                          <option value="losangeles">Los Angeles</option>
                          <option value="washington">Washington</option>
                        </select>
                        <span className="select-icon"><i className="zmdi zmdi-chevron-down" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="birth_date">DOB :</label>
                    <input type="date" name="dob" id="birth_date" onChange={getData} value={studata.dob}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="pincode">Pincode :</label>
                    <input type="text" name="pincode" id="pincode" onChange={getData}  value={studata.pincode}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="course">Course :</label>
                    <div className="form-select">
                      <select name="course" id="course" onChange={getData} value={studata.course}>
                        <option value />
                        <option value="computer">Computer Operator &amp; Pragramming Assistant</option>
                        <option value="desiger">Designer</option>
                        <option value="marketing">Marketing</option>
                      </select>
                      <span className="select-icon"><i className="zmdi zmdi-chevron-down" /></span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email ID :</label>
                    <input type="email" name="email" id="email" onChange={getData} value={studata.email}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="photo">Photo :</label>
                    <input type="file" name="photo" id="photo" onChange={getData} value={studata.photo}/>
                  </div>
                  <div className="">
                    <label className="radio-label">Hobby :</label>
                    <input type="checkbox"  ref={(element) => { ref.current[0] = element }} name="hobby" onChange={()=>{ studata.hobby.push("Cricket") }} value="Cricket"></input>Cricket

                    <input type="checkbox" ref={(element) => { ref.current[1] = element }} name="hobby" onChange={()=>{ studata.hobby.push("Reading") }} value="Reading"></input>Reading

                    <input type="checkbox" ref={(element) => { ref.current[2] = element }} name="hobby" onChange={()=>{ studata.hobby.push("Travelling") }} value="Travelling"></input>Travelling

                  </div>
                  <div className="form-submit">
                    <input type="button" defaultValue={(isedit) ? 'Update' : 'Submit'} className="submit" onClick={addData} id='submit' />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <hr />
        <br></br>
        <div className='col-10 mx-auto'>
          <table className='table table-bordered' cellPadding={10} width={80}>
            <tr>
              <th>No</th>
              <th>Photo</th>
              <th>Student Name</th>
              <th>Address</th>
              <th>Gender</th>
              <th>State</th>
              <th>City</th>
              <th>DOB</th>
              <th>Pincode</th>
              <th>Course</th>
              <th>Email</th>
              <th>Hobby</th>
              <th>Action</th>
            </tr>
            {
              alldata.map((item,ind)=>{
                return(
                  <tr>
                    <th>{ind+1}</th>
                    <td>{item.fname} {item.lname}</td>
                    <td>{item.address}</td>
                    <td>{item.gender}</td>
                    <td>{item.state}</td>
                    <td>{item.city}</td>
                    <td>{item.dob}</td>
                    <td>{item.pincode}</td>
                    <td>{item.course}</td>
                    <td>{item.email}</td>
                    <td>{item.hobby}</td>
                    <td>
                      <input type="button" className='btn btn-sm btn-info bg-info text-white' value="Update" onClick={()=>{editData(ind)}} />
                      <input type="button" className='btn btn-sm btn-danger bg-danger text-white' value="Delete" onClick={()=>{dltData(ind)}} />
                      </td>
                  </tr>
                )
              })
            }
          </table>
        </div>
    </>
  )
}

export default Frm