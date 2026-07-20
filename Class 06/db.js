// console.log("Hello World")
const URI = "mongodb+srv://shahzadnagaria2:<db_password>@cluster0.f7as036.mongodb.net/"

import mongoose from "mongoose"
const mongooseConnection = mongoose.connect(URI)
console.log(mongooseConnection);
