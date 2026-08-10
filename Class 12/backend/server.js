import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { setServers } from "node:dns/promises";
import StudentModel from "./models/student.js";

setServers(["8.8.8.8", "1.1.1.1"]);
dotenv.config();

const URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

mongoose.connect(URI).then((res) => console.log("MongoDB connected"));

const app = express();

app.use(express.json());
app.use(cors());

// Routes

app.get("/", (request, response) => {
  response.json({
    message: "Server is successfully running...",
    body: null,
    status: true,
  });
});

app.post("/api/signup", async (request, response) => {
  try {
    const { firstName, lastName, email, password } = request.body;

    if (!firstName || !lastName || !email || !password) {
      response.json({
        message: "Required fields are missing",
        body: null,
        status: false,
      });
      return;
    }

    const hashPassword = await bcrypt.hash(password, 10);
    console.log(hashPassword);

    const obj = {
      ...request.body,
      password: hashPassword,
    };

    //Email Already Exist
    const emailExist = await StudentModel.findOne({ email });
    console.log(emailExist);

    if (emailExist) {
      response.json({
        message: "User already exist",
        body: null,
        status: false,
      });
      return;
    }

    const createUser = await StudentModel.create(obj);
    console.log(createUser);

    response.json({
      message: "User Created",
      status: true,
      data: createUser,
    });
  } catch (error) {
    response.json({
      message: error.message,
      body: null,
      status: false,
    });
  }
});

//Login API
app.post("/api/login", async (request, response) => {
  try {
    const { email, password } = request.body;

    if (!email || !password) {
      response.json({
        message: "Required fields are missing",
        body: null,
        status: false,
      });
      return;
    }

//get all users
const allUsers = await StudentModel.find()
console.log(allUsers);
 

    const findUser = await StudentModel.find({email});
    console.log(findUser, "finded user");
console.log(findUser.length , "udud");

    if (findUser.length !== 1) {
      response.json({
        message: "User not found",
        body: null,
        status: false,
      });
      return;
    }

    // return

    const comparePassword = await bcrypt.compare(password, findUser[0].password);
    console.log(comparePassword, "comparePassword");
// return
    if (!comparePassword) {
      response.json({
        message: "invalid email or password",
        body: null,
        status: false,
      });
      return
    }

    const jwtToken = jwt.sign(
      {
        _id: findUser[0]._id,
        fullName: findUser[0].fullName,
        email: findUser[0].email,
      },
      process.env.JWT_Signature_Key,
    );

    console.log(jwtToken);

    response.json({
      message: "Login Successfully",
      status: true,
      token : jwtToken,
      
      
    });
  } catch (error) {
    // alert(error.message)
    response.json({
      status: false,
      body: null,
      message: error.message,
    });
  }

  // response.json({
  //   message : "User found",
  //   status : true,

  // })
});

// Server running and listening

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
