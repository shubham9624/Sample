const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
mongoose.connect('mongodb+srv://shubham:Shubham123@cluster0.ctpjsnp.mongodb.net/userappnew').then(
    ()=>{
        console.log("Connected to Database");
    }
);

const userSchema = mongoose.model('Users',{
    username: String,
    email: String,
    password: String
});
app.post('/signup', function (req,res){
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const existingUser=userSchema.findOne({username: username});
    if(existingUser){
        return res.status(403).send({"msg":"Username already exists"});
    }
    const newUser = new userSchema({
        username: username,
        email: email,
        password:password
    });
    newUser.save().then(
        ()=>{
            console.log('User saved successfully');
        }).catch(err =>{
            console.log("Error uploding tyo DB");
        });
        res.status(200).json({"msg":"User saved successfully"});
});
app.listen(3000,() => {
    console.log("Server is running on port 3000");
});
