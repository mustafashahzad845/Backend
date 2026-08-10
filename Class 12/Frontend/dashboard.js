// const validateUser = (() =>{
//     const userId = localStorage.getItem("user")
//     console.log(userId);
    

// if(!userId){
// // user login nhi hai
// location.replace("./index.html")
// return
// }

// })()


const logoutFunctionality = () => {
    localStorage.clear()
    location.replace("./index.html")
}

