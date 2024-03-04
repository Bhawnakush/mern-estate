// import React from 'react'
import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"


export default function SignUp() {
const [formData,setFormData]=useState({})
const [error,setError]=useState(null);
const[loading,setLoading]=useState(false);
const navigate=useNavigate();

const handleChange =(e)=>{
  setFormData(
    {
      ...formData,
      [e.target.id.trim()]:e.target.value,
    }
  )
}
const handleSubmit= async(e)=>{
  e.preventDefault();
  setLoading(true)
  if (!formData.username || !formData.email || !formData.password) {
    console.error("Please fill in all required fields.");
    return;
  }
  try {
    const res=await fetch('/api/auth/signup',{
    method:'POST',
    headers:
    {
      'Content-type':'application/json',

    },
    body:JSON.stringify(formData),
})
const data=await res.json();
console.log(data)
if(data.success===false)
{
 
  setLoading(false);
  setError(data.message);
 
 

return ;}
setLoading(false)
setError(null);

navigate('/signin')
}
catch(error)
{setLoading(false)
  setError(error.message)
  //console.log('error signing up',error)
}}
//console.log(formData);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semmibold my-7">Sign Up</h1>

      <form  onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text"
          placeholder ="username" 
          className="border p-3 rounded-lg "
           id ="username"
           onChange={handleChange}/>
        <input type="email" placeholder="email" className="border p-3 rounded-lg" id ="email"onChange={handleChange}/>
<input type="password"  placeholder="password" className="border p-3 rounded-lg" id="password"onChange={handleChange}/>    
<button  disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95
 disabled:opacity-80" > {loading ? 'Loading...':'Sign Up'} </button>  </form>
 <div className="flex gap-2 mt-5"> <p>Have a account?</p>
 <Link to ={"/signin"}>
  <span className="text-blue-700">Sign in</span>
 </Link></div>
 {error && <p className="text-res-500 mt-5">{error}</p>}
    </div>
  )
}
