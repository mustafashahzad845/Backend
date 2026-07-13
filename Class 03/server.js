import express from "express"

const PORT = 5000
const app = express()

app.listen(PORT , ()=> console.log(`Server is running on ${PORT}`))

app.get("/" , (request , response)=>{
    response.send("Server running..")
})

app.get("/jobs" , (request , response)=>{
response.send("Hiring")
})