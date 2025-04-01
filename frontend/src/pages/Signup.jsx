import axios from "axios";
import React, { useState } from "react";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const SignUp=()=>{
    const [Visibility,setVisibility]=useState(false);
    const handleCLick=()=>{
        setVisibility(!Visibility);
    }
    const [Values,setValues]=useState({
        username:"",
        email:"",
        password:"",
        address:""
    });

   const change=(e)=>{
      const {name,value}=e.target;
      setValues({...Values,[name]:value});
   }
   const navigate=useNavigate();
   const submit=async()=>{
      try{
        if(Values.username==="" || Values.password==="" || Values.email==="" || Values.address===""){
            alert("All fields are required");
        }
        else{
            const res=await axios.post("http://localhost:1000/api/v1/sign-up",Values);
            console.log(res.data);
            alert("Sign-up Successfull");
            navigate('/SignIn');
        }
      }catch(err){
        console.log(err);
      }
   }

    return(
        <div className="h-auto bg-zinc-900 px-12 py-8 flex items-center justify-center">
            <div className="bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6">
            <p className="text-zinc-200 text-xl">Sign Up</p>
            <div className="mt-4">
            </div>
            <div>
                <label htmlFor="" className="text-zinc-400">Username</label>
                <input value={Values.username} onChange={change} type="text" className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none" placeholder="username" name="username" required></input>
            </div>
            <div className="mt-4">
                <label htmlFor="" className="text-zinc-400">Email</label>
                <input value={Values.email} onChange={change} type="text" className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none" placeholder="xyz@example.com" name="email" required></input>
            </div>
            <div className="mt-4">
                <label htmlFor="" className="text-zinc-400">Password</label>
                <div className="flex items-center gap-2">
                <input value={Values.password} onChange={change} type={Visibility==false ? 'password' : 'text'} className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none" placeholder="password" name="password" required></input>
                <button className="bg-zinc-500 px-1 py-1 rounded-2xl hover:bg-zinc-100 duration-75" onClick={handleCLick}>{Visibility ? <MdOutlineVisibility/> : <MdOutlineVisibilityOff/>}</button>
                </div>
            </div>
            <div className="mt-4">
                <label className="text-zinc-400">Address</label>
                <textarea value={Values.address} onChange={change} className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none" placeholder="address" name="address" required></textarea>
            </div>
            <div className="mt-4">
                <button onClick={submit} className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-300 duration-75">SignUp</button>
            </div>
            </div>
            
        </div>
    )
}

export default SignUp;