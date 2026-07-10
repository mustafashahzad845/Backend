import fs from "fs"


import http from "http"
const PORT = 4000
const server = http.createServer((request, response) => {
    console.log(request.url);

    const userData = {}

    if (request.url === "/") {
        response.end("Server running.. on full speed")
    } else if (request.url === "/createUser") {
        // console.log("Hi");
        // response.end("JSON")

        userData.email = "mustafa@gmail.com"
        userData.password = 123456

        const createFile = (() => {
            fs.mkdirSync("./content/data", { recursive: true })
            fs.writeFileSync("./content/data/userData", JSON.stringify(userData))
            const readFile = fs.readFileSync("./content/data/userData", "utf-8")
            // console.log(readFile);
            response.setHeader("Content-Type", "application/json")
            response.end(readFile)
        })()


    } else if (request.url === "/updateUser") {
        const updateFile = (() => {
            userData.email = "jaffar@gmail.com"
            userData.password = 123456
            fs.mkdirSync("./content/data", { recursive: true })
            fs.writeFileSync("./content/data/userData", JSON.stringify(userData))
            const readFile = fs.readFileSync("./content/data/userData", "utf-8")
            // console.log(readFile);
            response.setHeader("Content-Type", "application/json")
            response.end(readFile)
        })()
    } else if (request.url === "/deleteUser") {
        fs.mkdirSync("./content/data", { recursive: true })
        fs.writeFileSync("./content/data/userData", "")
        const readFile = fs.readFileSync("./content/data/userData", "utf-8")
        // console.log(readFile);
        response.setHeader("Content-Type", "application/json")
        response.end("User Deleted..")
    }

})

server.listen(PORT, () => console.log(`Server running on PORT:${PORT}`))






