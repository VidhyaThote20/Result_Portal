import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// let express = require("express")
// let jwt = require("jsonwebtoken")
// let app = express()
// app.use(express.json())
// app.use(express.json())
// app.post("//login",(req,res)=>{
//   let token = jwt.sign({"_id":req.body._id},"Fsd4")
//   res.json({"token":token})
// })
// app.get("/data",(req,res)=>{
//   try{
//     jwt.verify(req.header.authorization,"Fsd4")
//     res.json({"msg":"you are are allowed to access data"})
//   }
//   catch(err)
//   {
//     res.json({"msg":"pla login and send a req"})
//   }
// }
// )
// app.listen(5000)
