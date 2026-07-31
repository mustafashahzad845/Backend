const loginHandler = async () => {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const userObj = {
        email,
        password
    }

    console.log(userObj);


    const allUsers = await fetch("http://localhost:4000/get-all-users")
        .then(res => res.json())

    console.log(allUsers);

    const checkUser = allUsers.data.find(
        (singleUser) => {
            // console.log(singleUser);
            if (userObj.email === singleUser.email && userObj.password === singleUser.password) {
return true
            }
        }
    )
console.log(checkUser);

    if (checkUser) {
        alert("Login Successfully")
        localStorage.setItem("user", checkUser._id)
        location.replace("./dashboard.html")
    } else {
        alert("Invalid email or password")
    }


}


window.loginHandler = loginHandler