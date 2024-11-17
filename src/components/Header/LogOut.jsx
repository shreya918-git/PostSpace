// import React from 'react'
// import { logout } from '../../store/storeSlices'
// import {useauthenticate} from "../../appwrite/Authenticate"
// import { useDispatch } from 'react-redux'
// function LogOut(){
//     const dispatch=useDispatch();
//     const CurrentStatus=useauthenticate.logout().then(()=>{      //all the functions defined in appwrite are promises in themselves
//         dispatch(logout())
//     })
//     return(
//         <>
//         <button onClick={()=>CurrentStatus} className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
//         </>
//     )
// }
// export default LogOut
// src/components/LogOut.jsx
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { logout } from '../../store/storeSlices';
// import { useauthenticate } from '../../appwrite/Authenticate';
// import { useNavigate } from 'react-router-dom';
// function LogOut() {
//     const dispatch = useDispatch();
//     const nav=useNavigate();
//     const handleLogout = async () => {
//         try {
//             await useauthenticate.logout(); // Log out from Appwrite
//             localStorage.removeItem('session'); // Remove session info
//             dispatch(logout());
//             nav('/');
//              // Update Redux state
//         } catch (error) {
//             console.error("Logout error:", error);
//         }
//     };

//     return <button onClick={handleLogout}>Log Out</button>;
// }

// export default LogOut;
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/storeSlices';
import { useauthenticate } from '../../appwrite/Authenticate';
import { useNavigate } from 'react-router-dom';

function LogOut() {
    const dispatch = useDispatch();
    const nav = useNavigate();

    const handleLogout = async () => {
        try {
            await useauthenticate.logout(); // Log out from Appwrite
            localStorage.removeItem('session'); // Remove session info
            dispatch(logout()); // Update Redux state
            
            // Delay navigation to ensure Redux state has updated
            setTimeout(() => {
                nav('/'); // Redirect to home page
            }, 100); 
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return <button onClick={handleLogout}  className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Log Out</button>;
}

export default LogOut;
