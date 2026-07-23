import mongoose from "mongoose";
import express from "express"
import stdModel from "./Models/stdModel.js"

import  { setServers } from "node:dns/promises"

setServers(["8.8.8.8" , "1.1.1.1"])

const URI = "mongodb+srv://muhammad:admin@cluster0.btwmrtq.mongodb.net/"
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))
const app = express()

app.use(express.json())

const PORT = 4000

app.listen(PORT, ()=>console.log(`Server running on localhost:${PORT}`))




mongoose.connect(URI)
.then((response)=>console.log("MongoDB running.."))
.catch((err)=>console.log(err))

console.log(stdModel , "milgaya");


app.get("/", (request , response)=>{
response.send("Server running..")
})

app.post("/create-user" , async (request , response)=>{
console.log(request.body)
response.send("user created")

await stdModel.create(request.body)
})


app.get("/gell-all-student" , async (request , response)=>{
const allUsers = await stdModel.find()
response.send(allUsers)
})

app.put("/update-user" , async (request , response)=>{
    await stdModel.findByIdAndUpdate(request.body, request.body)
    response.send("Updated..")

})



app.get("/specific-age-find" , async (request , response)=>{

    
    let filter = {
age: { 
    $gt: 16
 }   
 }
const findedUsers = await stdModel.find(filter)
response.send(findedUsers)
  
})




app.get("/find-One" , async (request , response)=>{
    let filter = {
    _id : "6a6288f010ee9b99eca55151"
}

const findSpecificUser = await stdModel.findOne(filter)

response.send(findSpecificUser)
})

app.delete("/delete-specific-user" , async (request , response)=>{
await stdModel.findByIdAndDelete(request.body)
response.send(`${JSON.stringify(request.body)}`)
})


app.get("/find-specific" , async (request , response)=>{
    let filter = {
        _id : "6a629344967a204c6691ca59",
    }
const foundUser = await stdModel.findById(filter)
response.send(foundUser)
})

app.put("/update-specific-through-email" , async (request , response)=>{
let filter = {
    email : "mohammad@gamil.com"
}

const updatedDetails = await stdModel.findOneAndUpdate(filter , request.body)
response.send(updatedDetails)
})