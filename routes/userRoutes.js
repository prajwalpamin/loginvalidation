const express = require("express");
const { Result } = require("express-validator");
const {loginUser,userDetails,registerUser}=require("../controllers/userController")
const {body,validationResult}=require("express-validator")
const routes=express();

routes.post("/register",body("email").isEmail(),registerUser);
routes.post("/login",loginUser);
routes.get("/user",userDetails);

module.exports=routes;