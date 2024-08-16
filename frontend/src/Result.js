import Ract,{useState}from 'react'
import axios from 'axios'
const Result=()=>{
    let[hno,setHno]=useState()
    let[err,setErr]=useState("")
    let[data,setData]=useState({})
    let fun=(e)=>{
        setHno(e.target.value)
    }
    let getres=()=>{
        axios.get(`http://localhost:5000/getres/${hno}`).then((res)=>{
            if(res.data){
                setData(res.data)
                setErr("")
            }
            else{
                setErr("check hno")
                setData({})
            }
        })
    }
            return( 
                <div class="container">
                    {err!=""&&<div>{err}</div>}
                    <input type='text' onChange={fun}/>
                    <button onClick={getres}>GetResults</button>
                    {data._id!=undefined&&<table>
                        <tr>
                            <th>
                                Hno
                            </th>
                            <td>{data._id}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{data.name}</td>
                        </tr>
                        <tr>
                            <th>phno</th>
                            <td>{data.phno}</td>
                        </tr>
                        <tr>
                            <th>Gender</th>
                            <th>{data.gen}</th>
                        </tr>
                        <tr>
                            <th>Sub1</th>
                            <td>{data.sub1}</td>
                        </tr>
                        <tr>
                            <th>Sub2</th>
                            <td>{data.sub2}</td>
                        </tr>
                        <tr>
                            <th>Sub3</th>
                            <td>{data.sub3}</td>
                        </tr>
                        <tr>
                            <th>Sub4</th>
                            <td>{data.sub4}</td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td>{data.sub1+data.sub2+data.sub3+data.sub4}</td>
                        </tr>
                    </table>}
                    
                </div>
            )
        } 
export default Result