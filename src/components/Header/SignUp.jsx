import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import {useauthenticate} from '../../appwrite/Authenticate'
import { useNavigate,Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../../store/storeSlices';
import Input from './input';
import Button from './Button';
function SignUp(){
    const nav=useNavigate();
    const  {register,handleSubmit}=useForm();
    const [error,seterror]=useState("")
    const dispatch=useDispatch()
    const Signup=async(data)=>{
        seterror("")
        try {
            const userData = await useauthenticate.createaccount({...data})
            if (userData) {
                const userData = await useauthenticate.getcurrentinfo()
                if(userData) dispatch(login(...userData));
                nav("/")
            }
        } catch (error) {
            seterror(error.message)
        }
    }
    return(
        <>
        <div>
            <h2>Already have an account?</h2>
            <Link to='/login'>Login</Link>
        </div>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <div>
            <form onSubmit={handleSubmit(Signup)}>
                <Input type="text" label="Enter Username" {...register("username",{
                    required:true
                })}/>
                <Input type="email" label="Enter Mail" {...register("email",{
                    required:true,
                    validate:{matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address"}
                })}/>
                <Input type="password" label="Enter Password" minLength="8" maxLength="15" {...register("password",{
                    required:true
                })}/>
                <Button type='submit'>SignUp</Button>
            </form>
        </div>
        </>
    )
}
export default SignUp