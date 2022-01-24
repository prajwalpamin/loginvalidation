import {Link} from "react-router-dom"
import "../Loginform/index.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
const SignupForm = () => {
  const [name,setName]=useState();
  const [isAdmin,setIsAdmin]=useState(0);
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [confirmPassword,setConfirmPassword]=useState();

  const handleSubmit=(e)=>{
    e.preventDefault()
    const userData={name,isAdmin,email,password,confirmPassword}
     axios.post("http://localhost:8080/register",userData)
          .then(res=>console.log(res)).catch((err)=>console.log(err))
  }
  return (
    <div id="form-div">
      <form id="form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" label="name" value={name} onChange={(e)=>setName(e.target.value)} required />
        <label>admin</label>
        <input type="checkbox" value={isAdmin} onChange={(e)=>setIsAdmin(e.target.value)} />
        <label>Email</label>
        <input type="email" label="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" label="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
        <label>Confirm Password</label>
        <input type="password" label="confirmPassword" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required />
        <p>already user <Link to="/">Login</Link></p>
        <input type="submit" value="Signup" />
      </form >
    </div>
  );
};
export default SignupForm;