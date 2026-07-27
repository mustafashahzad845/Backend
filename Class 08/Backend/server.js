import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import stdModel from "./Models/stdSchema.js"


const app = express()
const PORT = 4300

app.use(express.json())
app.use(cors())

app.listen(PORT, _=>console.log(`Server running on http://localhost:${PORT}`))

import {setServers} from "node:dns/promises"
import { log } from "node:console"
setServers(["8.8.8.8" , "1.1.1.1"])
const URI = `mongodb+srv://muhammad:admin@cluster0.btwmrtq.mongodb.net/?appName=Cluster0`
mongoose.connect(URI)
.then((res)=>console.log(res))
.catch((err)=>console.log(err))


app.get("/" , (request , response)=>{
response.send("Server running..")
})


app.post("/create-user" , async (request , response)=>{
// console.log(typeof request.body);
await stdModel.create(request.body)
    response.send("user created")

})

app.post("/update-specific" , async (request , response)=>{
    
await stdModel.findByIdAndUpdate(request.body._id , request.body)
response.send('update hogaya..')

})

app.get("/find/:email" , async (req , res)=>{
const findedStd = await stdModel.findOneAndDelete(req.params)
res.send(`${req.params.email} wala user deleted..`)

// console.log(req.params)
})