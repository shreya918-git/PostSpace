import './App.css'
import React, { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { login,logout } from './store/storeSlices'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from './components'
import { useauthenticate } from './appwrite/Authenticate'
function App() {
  const [loading,isloading]=useState(true)
  const dispatch=useDispatch()
 useEffect(()=>{ useauthenticate.getcurrentinfo()
  .then((userdata)=>{if (userdata) dispatch(login(userdata))
 else dispatch(logout())
 
}).finally(()=>isloading(false))
},[])
 return !loading?(<div>
  <Header/>
  <main>
  <Outlet/>
  </main>
  <Footer/>
 </div>):null
}

export default App

  