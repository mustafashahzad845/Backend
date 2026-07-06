import http from "http"
const PORT = 4000 
const server = http.createServer((request , response)=>{
console.log(request.url);

if(request.url === "/"){
response.end("Server running.. on full speed")
}else if(request.url === "/jobs"){
response.end("Hiring JOBS..")
}else if(request.url === "/company"){
response.end("Aplinode")
}

})

server.listen(PORT , ()=> console.log(`Server running on PORT:${PORT}`))