import express from "express"
import fs from "fs"
import { json } from "stream/consumers"


const server = express()
const PORT = 5000


server.use(express.json()) 

server.post("/create-user" , (request , response)=>{
// console.log(request);
// console.log(request.body);

if(fs.existsSync("./user.txt")){
//already user
response.send("already user");

const getUsers = fs.readFileSync("./user.txt" , "utf-8")
console.log(getUsers , "all users");
console.log(getUsers.push(request.body) , "saree users +naye");

// console.log(JSON.stringify(getUsers.push(request.body)));

// fs.writeFileSync("./user.txt", JSON.stringify(getUsers.push(request.body)))

}else{
    // first user
response.send("first user");

fs.writeFileSync("./user.txt", JSON.stringify([request.body]))


}


// fs.writeFileSync("./user.txt" , JSON.stringify(request.body))
// response.send("User created")


})


server.listen(PORT , ()=>console.log(`express server running`))


