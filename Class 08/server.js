import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()
const PORT = 4300

app.use(express.json())

import {setServers} from "node:dns/promises";


setServers(["8.8.8.8" , "1.1.1.1"])

const URI = "mongodb+srv://muhammad:admin@cluster0.btwmrtq.mongodb.net/"

mongoose.connect(URI)
.then((res)=>console.log(res))
.catch((err)=>console.log(err , "Err"))

app.listen(PORT, ()=>console.log(`Server running on localhost:${PORT}`))