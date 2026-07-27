import mongoose from "mongoose"
const stdSchema = new mongoose.Schema(
    {
        firstName : String,
        lastName : String,
        email : String,
        age : Number,
    }
)


const stdModel = mongoose.model("students" , stdSchema)

export default stdModel