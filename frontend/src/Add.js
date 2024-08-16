import axios from 'axios'
import React,{useState} from 'react'
const Add=()=>{
    let [data,setData]=useState({"_id":"","name":"","phno":"","gen":"","sub1":"","sub2":"","sub3":"","sub4":""})
    let [status,setstatus]=useState("")
    let [msg,setMsg]=useState("")
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let add=()=>{
        if(data._id==""||data.name==""||data.phno==""||data.gen==""||data.sub1==""||data.sub2==""||data.sub3==""||data.sub4==""){
           alert("enter all")
        }
        else{
        axios.post("http://localhost:5000/add",data).then((res)=>{
             setstatus(res.data.msg)
             console.log(res.data)
            if(res.data.msg!=="error in adding record")
            {
                setData({"_id":"","name":"","phno":"","gen":"","sub1":"","sub2":"","sub3":"","sub4":""})
            }
        })
    }
    }
    return(
        <div className="container">
            {status && <div className="status">{status}</div>}
            <div className="form-group">
                <label htmlFor="_id">ID:</label>
                <input type="text" id="_id" name="_id" onChange={fun} value={data._id} />
            </div>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" onChange={fun} value={data.name} />
            </div>
            <div className="form-group">
                <label htmlFor="phno">Phone Number:</label>
                <input type="text" id="phno" name="phno" onChange={fun} value={data.phno} />
            </div>
            <div className="form-group">
                <label>Gender:</label>
                <input type="radio" id="male" name="gen" onChange={fun} value="male" checked={data.gen === 'male'} />
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="gen" onChange={fun} value="female" checked={data.gen === 'female'} />
                <label htmlFor="female">Female</label>
            </div>
            <div className="form-group">
                <label htmlFor="sub1">Subject 1:</label>
                <input type="text" id="sub1" name="sub1" onChange={fun} value={data.sub1} />
            </div>
            <div className="form-group">
                <label htmlFor="sub2">Subject 2:</label>
                <input type="text" id="sub2" name="sub2" onChange={fun} value={data.sub2} />
            </div>
            <div className="form-group">
                <label htmlFor="sub3">Subject 3:</label>
                <input type="text" id="sub3" name="sub3" onChange={fun} value={data.sub3} />
            </div>
            <div className="form-group">
                <label htmlFor="sub4">Subject 4:</label>
                <input type="text" id="sub4" name="sub4" onChange={fun} value={data.sub4} />
            </div>
            <div>{msg}</div>
            <button onClick={add}  className='primary'>Add</button>
        </div>
    )
}
export default Add