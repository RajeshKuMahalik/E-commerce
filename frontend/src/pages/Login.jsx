import React,{useContext, useEffect, useState} from 'react'
import {FaUser,FaLock}  from 'react-icons/fa'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name,setName] = useState('')
    const [currentState, setCurrentState] = useState('Sign Up')
    const {navigate, token, setToken} = useContext(ShopContext)
  
    const handleLogin = async (e) => {
      e.preventDefault();
    try {
      if(currentState === 'Sign Up'){
                 
     const {data} = await axios.post('https://e-commerce-738i.onrender.com/api/user/register',{name,email,password})
     if(data.success) {
      localStorage.setItem('token', data.token)
      setToken(data.token)
     } else {
      toast.error(data.message)
     }
      } else {
  
        const {data} = await axios.post("https://e-commerce-738i.onrender.com/api/user/login", {password, email})
        if(data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error,message)
    }
    }


    useEffect(()=>{
      if(token) {
        navigate('/')
      }
    },[token])
  
    return (
      <div className="flex items-center justify-center mt-20 ">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">{currentState === 'Sign Up' ? "Create Account" : "Login"}</h2>
          <form onSubmit={handleLogin} className="space-y-4"> 
            {
              currentState === "Sign Up" && <div className='w-full relative'>
                  <p>Full Name</p>
                  <FaUser className="absolute left-3 top-8 text-gray-500" />
                  <input type='name' placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)} required className="w-full pl-10 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
            }
            <div className="relative">
            <p>Email</p>
              <FaUser className="absolute left-3 top-8 text-gray-500" />
              <input type="email" placeholder="Email" className="w-full pl-10 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="relative">
            <p>Password</p>
              <FaLock className="absolute left-3 top-8 text-gray-500" />
              <input type="password" placeholder="Password" className="w-full pl-10 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type='submit' className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition" >{currentState === 'Sign Up' ? 'Create Account' : 'Login'}</button>
          </form>
          {
            currentState === "Sign Up"
            ? <p className='mt-3'>Already have an Account ? <span onClick={()=> setCurrentState('Login')} className='text-center text-blue-500 cursor-pointer'>Login here</span></p>
            : <p className='mt-3'>Don't have an account ? <span onClick={()=> setCurrentState('Sign Up')} className="text-center text-blue-500 cursor-pointer">Sign up</span></p>
          }  
        </div>
      </div>
    );
  };
  

export default Login
