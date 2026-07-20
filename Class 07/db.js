import mongoose from "mongoose";
const URI = "mongodb+srv://sheikhmuhammad:<db_password>@mycluster.oc3uvud.mongodb.net/"

import  { setServers } from "node:dns/promises"

setServers(["8.8.8.8" , "1.1.1.1"])


mongoose.connect(URI)
.then((response)=>console.log(response))
.catch((err)=>console.log(err))
