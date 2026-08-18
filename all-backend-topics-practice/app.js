// import http from "http"
// http.createServer()
console.log("Hello World");
console.log("Hello World");

import fs from "fs";
const createFile = (() => {
  fs.writeFileSync(
    "index.html",
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello Mustafa</h1>
</body>
</html>`,
  );
})();

const readFile = (() => {
  const fileReaded = fs.readFileSync("./index.html", "utf-8");
  console.log(fileReaded);
})();

const editFile = (() => {
  fs.appendFile("./index.html", "#############", (error, success) => {
    if (error) {
      console.log("error");
    } else {
      console.log("file updated..");
    }
  });
})();

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

const createDirectory = (()=>{
    fs.mkdirSync("./Project/Cluster/Database/Collection" , {recursive : true})
fs.writeFileSync("./Project/Cluster/Database/Collection/document.txt" , `Mustafa`)

})()
