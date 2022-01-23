const express=require("express")
const userShema=require("../model/userSchema")
const { validationResult } = require("express-validator")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const registerUser=(req,res)=>{


    const errors =validationResult(req);
    if(!errors.isEmpty()){
        return res.status(404).json({errors:errors.array()})
    }
    const {name,email,isAdmin,password,confirmPassword}=req.body;
    console.log(req.body)
    if(password!==confirmPassword){
        return res.status(404).json("passwords doesnt match")
    }
    const hashPassword=bcrypt.hashSync(password,10)
    const user=new userShema({name,email,isAdmin,password:hashPassword});
    console.log(user)
    user.save((err,user)=>{
        if(err){
            return res.json(err)
        }else{
            return res.status(201).json({message:"user registered",user})
        }
    })

}
const userDetails=(req,res)=>{
  userShema.find({},(err,users)=>{
      if(err){
          return res.json(err)
      }else{
          return res.json(users)
      }
  })
}
const loginUser=async(req,res)=>{
    const {email,password}=req.body
    if(!email||!password){
        if(!email){
            return res.json("email required")
        }else if(!password){
            return res.json("password required")
        }
    }
    const user=await userShema.findOne({email:email})
    if(user==null){
        return res.status(404).json({error:"user not registered with this Email"})
    }
    else{
        const pass=bcrypt.compareSync(password, user.password)
        if(pass==false){
            return res.send("incorrect password")
        }else{
            const token=jwt.sign({email:user.email},"shhh")
            res.json(token)
        }
    }

}

module.exports={registerUser,userDetails,loginUser}