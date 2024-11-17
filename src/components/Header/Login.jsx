import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {Link,useNavigate} from 'react-router-dom'
import {useauthenticate} from '../../appwrite/Authenticate'
import {useForm} from 'react-hook-form'
import Input from './input'
import Button from './Button'
import { login as loginslice } from '../../store/storeSlices'
function Login(){
    const nav=useNavigate();
    const dispatch=useDispatch();
    const [error,seterror]=useState("")
    const {register,handleSubmit}=useForm();
    const login=async(data)=>{
        seterror("")
        try{
            const userdata=await useauthenticate.login(data)
            if(userdata){
                const account=await useauthenticate.getcurrentinfo()
                if(account){
                    dispatch(loginslice(account))
                    nav("/")
                }
            }
        }
        catch(error){
            seterror(error.message)
        }
    }
    return(
        <>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <div>
            <h4>Dont have an account?</h4>
            <Link to='/signup' className=''>SignUp</Link>
        </div>
        <form onSubmit={handleSubmit(login)} className='mt-8'>
        <Input
        label="Enter Email"
        type="email"
        {...register('email',{required:true,validate:{
            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
            "Email address must be a valid address",
        }})}
        />
         <Input
        label="Enter Password"
        type="password"
        {...register('password',{required:true})}
        />
        <Button type="submit"    className="w-full">LogIn</Button>
        </form>
        </>
    )
}
export default Login

// function Login() {
//     const nav = useNavigate();
//     const dispatch = useDispatch();
//     const [error, setError] = useState("");
//     const { register, handleSubmit } = useForm();
    
//     // Renamed login to handleLogin to avoid conflicts
//     const handleLogin = async (data) => {
//         setError("");
//         try {
//             const userdata = await useauthenticate.login(data);
//             if (userdata) {
//                 const account = await useauthenticate.getcurrentinfo();
//                 if (account) {
//                     // Make sure that login here refers to an action, not a local function
//                     dispatch({ type: 'LOGIN', payload: account });
//                     nav("/");
//                 }
//             }
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     return (
//         <>
//             {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
//             <div>
//                 <h1>Don't have an account?</h1>
//                 <Link to='/signup'>SignUp</Link>
//             </div>
//             <form onSubmit={handleSubmit(handleLogin)} className='mt-8'>
//                 <Input
//                     label="Enter Email"
//                     type="email"
//                     {...register('email', {
//                         required: true,
//                         validate: {
//                             matchPattern: (value) =>
//                                 /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
//                                 "Email address must be a valid address",
//                         },
//                     })}
//                 />
//                 <Input
//                     label="Enter Password"
//                     type="password"
//                     {...register('password', { required: true })} // Corrected field name here
//                 />
//                 <Button type="submit" className="w-full">LogIn</Button>
//             </form>
//         </>
//     );
// }

// export default Login;
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import { useauthenticate } from '../../appwrite/Authenticate';
// import { useForm } from 'react-hook-form';
// import Input from './input';
// import Button from './Button';
// import { login } from '../../store/storeSlices';
// export default function Login() {
//     const nav = useNavigate();
//     const dispatch = useDispatch();
//     const [error, setError] = useState("");
//     const { register, handleSubmit } = useForm(); // Destructure methods from useauthenticate

//     const handleLogin = async (data) => {
//         setError("");
//         try {
//             const userdata = await useauthenticate.login(data);
//             if (userdata) {
//                 const account = await useauthenticate.getcurrentinfo();
//                 if (account) {
//                     dispatch(login(userdata));
//                     nav("/");
//                 }
//             }
//         } catch (error) {
//             setError(error.message || "An error occurred during login.");
//         }
//     };

//     return (
//         <>
//             {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
//             <div>
//                 <h1>Don't have an account?</h1>
//                 <Link to='/signup'>SignUp</Link>
//             </div>
//             <form onSubmit={handleSubmit(handleLogin)} className='mt-8'>
//                 <Input
//                     label="Enter Email"
//                     type="email"
//                     {...register('email', {
//                         required: true,
//                         validate: {
//                             matchPattern: (value) =>
//                                 /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
//                                 "Email address must be a valid address",
//                         },
//                     })}
//                 />
//                 <Input
//                     label="Enter Password"
//                     type="password"
//                     {...register('password', { required: true })}
//                 />
//                 <Button type="submit" className="w-full">LogIn</Button>
//             </form>
//         </>
//     );
// }
// src/components/login.jsx
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../../store/storeSlices';
// import { useauthenticate } from '../../appwrite/Authenticate'; // assuming useauthenticate is imported from your service

// function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const dispatch = useDispatch();

//     const handleLogin = async () => {
//         try {
//             const user = await useauthenticate.login(email, password);
//             localStorage.setItem('session', JSON.stringify(user)); 
//             if(user) {const account= useauthenticate.getcurrentinfo()
//                 if(account)// store session info
//             dispatch(login(user))}; // update Redux state
//         } catch (error) {
//             console.error("Login error:", error);
//         }
//     };

//     return (
//         <div>
//             <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
//             <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
//             <button onClick={handleLogin}>Login</button>
//         </div>
//     );
// }

// export default Login;

