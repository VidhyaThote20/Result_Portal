
let express = require("express")
let mongoose=require("mongoose")
const route = require("./routes/route")
let cors = require("cors")
let app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/resdb").then(()=>{
  console.log("ok")
})
app.use("/",route)
app.listen(5000)
