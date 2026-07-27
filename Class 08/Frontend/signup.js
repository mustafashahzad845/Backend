const signupHandler = async () => {
   const firstName = document.getElementById("firstName").value
   const lastName = document.getElementById("lastName").value
   const email = document.getElementById("email").value
   const password = document.getElementById("password").value


   const userObj = {
    firstName,
lastName,
email,
password,
   }


await fetch("http://localhost:4300/create-user" , {
 method : "POST",
headers : {
            "Content-Type": "application/json",
},
body : JSON.stringify(userObj)
}
)



   console.log(userObj);
   





}

// window.signupHandler = signupHandler
window.signupHandler = signupHandler