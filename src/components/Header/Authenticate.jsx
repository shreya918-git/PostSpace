import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Protect({children,authentication=true}){
    const [loader,setloader]=useState(false)
    const nav=useNavigate()
    const authstatus=useSelector((state)=>state.auth.status)
    useEffect(()=>{
        if(authentication && authentication!==authstatus){
              nav("/login")
        }
        else if(!authentication && authentication==!authstatus){
            nav("/")
        }
        setloader(false)
    },[authstatus,nav,authentication])
    return (
        <>
            {loader ? <h2>Loading...</h2> : children}
        </>
    );
    
}