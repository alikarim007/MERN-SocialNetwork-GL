//=
import express from 'express';
import mongoose from 'mongoose';
import '../Models/user.js'

const router = express.Router();
const User = mongoose.model("User");

router.get('/', (req,res)=>{
    res.send("hello from SERVER/ROUTE/auth.js")
});

router.post('/signup',(req, res) => {
   const {name, email, password} = req.body;
    if(!name || !email || !password){
        return res.status(422).json({error:"Please add all details"});
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"User with same email already exist"});
        }
       const user = new User({
           email:email,
           password:password,
           name:name
       })
       user.save()
            .then(user => {
                return res.json({message: "Account Created Successfully"} );
            })
            .catch(err => {
                console.log(err);
            })
    })
    .catch(err => {
        console.log(err);
    })
});

export default router;