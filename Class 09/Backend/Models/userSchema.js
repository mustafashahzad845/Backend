import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        
        firstName : {
            type : String
        },
        lastName :  {
            type : String
        },
        email :  {
            type : String
        },
        password :  {
            type : String
        }
    
    }
)

const userModel = mongoose.model("userdetails" , userSchema)
export default userModel