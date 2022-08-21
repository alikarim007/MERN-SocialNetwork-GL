//= server/../auth.js
import express from "express";
import mongoose from "mongoose";
import "../Models/user.js";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';

const router = express.Router();
const User = mongoose.model("User");

router.get("/", (req, res) => {
  res.send("hello from SERVER/ROUTE/auth.js");
});

//SignUp
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(422).json({ error: "SignUp:-Please add all details" });
  }
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "User with same email already exist" });
      }
      bcryptjs.hash(password, 12).then((hashedpassword) => {
        const user = new User({
          email: email,
          password: hashedpassword,
          name: name,
        });
        user
          .save()
          .then((user) => {
            return res.json({ message: "Account Created Successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

//SignIn
router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "SignIn:- Please add all details" }); //recieving from client - blank details
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      //recieving from client - wrong Email ID
      return res.status(422).json({ error: "Invalid Email or Password" });
    }
    bcryptjs.compare(password,savedUser.password)
    .then(doMatch=>{
      if(doMatch){
        // res.json({message:"From Server: Successully Signed In"});
        const token = jwt.sign({_id:savedUser._id},'secret');
        const {_id,name,email} = savedUser;
        res.json({token,user:{_id,name,email}});
        console.log(token);       
      }
      else{
        return res.status(422).json({ error: "Invalid Email or Password" });
      }
    })
    .catch(err=>{
      console.log(err);
    })
  });
});

export default router;
