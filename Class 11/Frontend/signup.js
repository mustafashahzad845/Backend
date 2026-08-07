import BASE_URL from "./congif.js";
    // const signupBtn = document.getElementById("signupBtn")
// signupBtn.addEventListener("click", "submit")
const validateUser = (() =>{
    const userId = localStorage.getItem("user")
    console.log(userId);
    

// if(userId){
// user login nhi hai
// location.replace("./dashboard.html")
// return
// }

})()


const signupHandler = async ()=>{
    const firstName = document.getElementById("firstName").value
const lastName = document.getElementById("lastName").value
const email = document.getElementById("email").value
const password = document.getElementById("password").value


if (!firstName || !lastName || !email || !password) {
    alert("Required fileds are missing")
    return
}
const obj = {
    firstName,
lastName,
email,
password
}
const res = await fetch(`${BASE_URL}/api/signup` , {
    method : "POST" , 
    headers : {
        "Content-Type" : "application/json"
    },body : JSON.stringify(obj)
})
.then(res=>res.json())
// console.log(allusers.data);
console.log(res);

return
const isUserExist = allusers.data.find(
    (singleUser)=>{
if(singleUser.email === email){
    return true
}
// console.log(singleUser);

    }
)
console.log(isUserExist , "ye raha result");

if (isUserExist) {
    alert("User already exist")
    return
}



// return

const userObj = {
    firstName,
lastName,
email,
password
}
console.log(userObj);

try {
    const res = await fetch("http://localhost:4000/signup-user" , {
    method : "POST",
    headers : {
    "Content-Type" : "application/json"
    } , body : JSON.stringify(userObj)
})
.then(res=>res.json())
console.log(res.status);


if(res.status){
alert(res.message)
location.replace("./index.html")
return
}

} catch (error) {
    console.log(error);
    
}

}
window.signupHandler = signupHandler