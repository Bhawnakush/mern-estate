import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"


export default function SignIn() {
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
 
  try {
    const res=await fetch('/api/auth/signin',{
    method:'POST',
    headers:
    {
      'Content-type':'application/json',

    },
    body:JSON.stringify(formData),
})
const data=await res.json();
if(data.success===false)
{
  setError(data.message);
  setLoading(false);

return ;}
setLoading(false)
setError(null);
console.log(data)
navigate('/')
}
catch(error)
{setLoading(false)
  setError(error.message)
  console.log('error signing up',error)
}}
console.log(formData);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semmibold my-7">Sign In</h1>

      <form  onSubmit={handleSubmit} className="flex flex-col gap-4">
       
        <input type="text" placeholder="email" className="border p-3 rounded-lg" id ="email"onChange={handleChange}/>
<input type="text"  placeholder="password" className="border p-3 rounded-lg" id="password"onChange={handleChange}/>    
<button  disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95
 disabled:opacity-80" > {loading ? 'Loading...':'Sign In'} </button>  </form>
 <div className="flex gap-2 mt-5"> <p> dont have a account?</p>
 <Link to ={"/signup"}>
  <span className="text-blue-700">Sign Up</span>
 </Link></div>
 {error && <p className="text-res-500 mt-5">{error}</p>}
    </div>
  )
}
