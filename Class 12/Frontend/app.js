// const validateUser = (() =>{
//     const userId = localStorage.getItem("user")
//     console.log(userId);

// if(userId){
// // user login nhi hai
// location.replace("./dashboard.html")
// return
// }

// })()

import BASE_URL from "./congif.js";

const loginHandler = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const obj = {
    email,
    password,
  };

  console.log(obj);

  const res = await fetch(`${BASE_URL}/api/login`, {
    method: "POST",
    headers : {
        "Content-Type"  : "application/json",
    }, body : JSON.stringify(obj) 
  }).then(res=>res.json())

console.log(res);


if(!res.status){
alert(res.message)
return
}

alert(res.message)
localStorage.setItem("token", res.token)
location.replace("./dashboard.html")
  //     const allUsers = await fetch("http://localhost:4000/get-all-users")
  //         .then(res => res.json())

  //     console.log(allUsers);

  //     const checkUser = allUsers.data.find(
  //         (singleUser) => {
  //             // console.log(singleUser);
  //             if (userObj.email === singleUser.email && userObj.password === singleUser.password) {
  // return true
  //             }
  //         }
  //     )
  // console.log(checkUser);

  //     if (checkUser) {
  //         alert("Login Successfully")
  //         localStorage.setItem("user", checkUser._id)
  //         location.replace("./dashboard.html")
  //     } else {
  //         alert("Invalid email or password")
  //     }
};

window.loginHandler = loginHandler;
