import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()
const PORT = 4000


app.use(express.json())
app.use(cors())
app.listen(PORT, ()=>console.log(`server runnig on https:localhost:${PORT}`))


import {setServers} from "node:dns/promises"
setServers(["8.8.8.8" , "1.1.1.1"])
const URI = `mongodb+srv://muhammad:admin@cluster0.btwmrtq.mongodb.net/?appName=Cluster0`

mongoose.connect(URI)
// .then((res)=>console.log(res))
// .then((err)=>console.log(err))



// Model Import
import userModel from "./Models/userSchema.js"


app.post("/signup-user" ,async (req, res)=>{
// userModel.create(req.body)
// console.log(req.body);

userModel.create(req.body)

res.json(
    {
        message : "signup successfully",
        status : true
    }
)

})


app.get("/get-all-users" , async  (req , res)=>{
console.log(req.query.userId);

if (req.query.userId) {
 //single fetch 
 const singleUserFind = await userModel.findOne({_id : req.query.userId})  
 res.json({
    maessage : `${req.query.userId} ye wala user mil gaya`,
    data : singleUserFind
 })
}else{
    //fetch all
        const allUsers = await  userModel.find() 
 res.json(
    {
        message : "All users data",
        data : allUsers
    }
 )

}



//  console.log({_id : req.query.userId});
 
})

// app.post("/create" , )