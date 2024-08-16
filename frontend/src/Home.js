import React,{useEffect,useState} from "react";
import axios from 'axios'
const Home=()=>{
    let [data,setData]=useState([])
    let [f,setF] = useState(true)
    useEffect(()=>{
        axios.get("http://localhost:5000/getdata").then((res)=>{
            setData(res.data)
        })
        },[f])
let del=(hno)=>{
    // alert("hello")
    axios.delete(`http://localhost:5000/del/${hno}`).then((res)=>{
        console.log(res.data);
        setF((f)=>!f)
    })
}

return(
    <div>
        <table border={1}>
            <tr>
                <th>Hno</th>
                <th>Name</th>
                <th>phno</th>
                <th>Gender</th>
                <th>sub1</th>
                <th>sub2</th>
                <th>sub3</th>
                <th>sub4</th>
                <th>Total</th>
                <th>Delete Record</th>
            
            </tr>
{
    data.map((item)=>{
        return(
            <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.phno}</td>
                <td>{item.gen}</td>
                <td>{item.sub1}</td>
                <td>{item.sub2}</td>
                <td>{item.sub3}</td>
                <td>{item.sub4}</td>
                <td>{item.sub1+item.sub2+item.sub3+item.sub4}</td>
                <td><button onClick={()=>del(item._id)}>Delete</button></td>

            </tr>
        )
    })
}

        </table>
    </div>
    
)
}
export default Home