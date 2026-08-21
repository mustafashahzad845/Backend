// import http from "http"
// http.createServer()
// console.log("Hello World");
// console.log("Hello World");

// import fs from "fs";
// const createFile = (() => {
//   fs.writeFileSync(
//     "index.html",
//     `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>Hello Mustafa</h1>
// </body>
// </html>`,
//   );
// })();

// const readFile = (() => {
//   const fileReaded = fs.readFileSync("./index.html", "utf-8");
//   console.log(fileReaded);
// })();

// const editFile = (() => {
//   fs.appendFile("./index.html", "#############", (error, success) => {
//     if (error) {
//       console.log("error");
//     } else {
//       console.log("file updated..");
//     }
//   });
// })();

// const deleteFile = (() => {
//   fs.unlink("./name.txt", (error, success) => {
//     if (error) {
//       console.log("file delete nhi hoe");
//     } else {
//       console.log("delete hogayi hai..");
//     }
//   });
// })();

// const updateFile = (()=>{
//     fs.appendFileSync("./in.html", "Mustafa")
// })()

// const createDirectory = (()=>{
//     fs.mkdirSync("./Project/Cluster/Database/Collection" , {recursive : true})
// fs.writeFileSync("./Project/Cluster/Database/Collection/document.txt" , `Mustafa`)

// })()

// import dotenv from "dotenv";
// import http from "http";
// import fs from "fs";

// dotenv.config();



// const server = http.createServer((request, response) => {
//   if (request.url===  "/") {
//     response.end("Server running..");
//   } else if (request.url === "/create-user") {
//     response.end("User created..");
//     // console.log(userObj);
// let userObj = {
//   email: "mustafa@gmail.com",
//   password: 123456,
// };
//     fs.writeFileSync("./user.txt", JSON.stringify(userObj));
//   } else if (request.url === "/read-user") {
// if(!fs.existsSync("./user.txt")){
// response.end("user nhi hai koi bhi")
// return
// }

//     const readUser = fs.readFileSync("./user.txt", "utf-8");
//     response.end(readUser);
//   } else if (request.url === "/update-user") {
// let userObj = {
//   email: "shafay@gmail.com",
//   password: 123456,
// };
//     fs.writeFileSync("./user.txt", JSON.stringify(userObj));
//     response.end("user updated");
//   } else if (request.url === "/delete-user") {
//     fs.unlinkSync("./user.txt");
//     response.end("user deleted");
//   } else {
//     response.end(`${request.url} is not a valid api`);
//   }
// });

// server.listen(process.env.PORT, () =>
//   console.log(`server running on localhost:${process.env.PORT}`),
// );


import { dummyApi } from "./config.js"; 
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();
import express from "express"
const app = express()
const PORT = process.env.PORT
app.listen(PORT, ()=>console.log(`Server is running on lovalhost:${PORT}`))

app.get("/" , (request , response)=>{
response.end(`Express Server running..`)
})

app.get("/api" , (request , response)=>{

response.send(dummyApi)
})

app.get("/company" , (request , response)=>{
response.send("Aplinode Company hai tech ki")
})