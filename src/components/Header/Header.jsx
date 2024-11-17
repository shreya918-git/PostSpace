// import React from 'react'
// import {LogOut,Logo} from '../index'
// import Container from '../InputField/Container'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// function Header(){
//     const navigate=useNavigate();
//     const currentstatus = useSelector((state) => state.initialstate.status);
//     const navItem=[
//         {
//             slug:'/',
//             name:'Home',
//             active:true
//         },
//         {
//             name: "Login",
//             slug: "/login",
//             active: !currentstatus,
//         },
//         {
//             name: "Signup",
//             slug: "/signup",
//             active: !currentstatus,
//         },
//         {
//             name: "All Posts",
//             slug: "/all-posts",
//             active: currentstatus,
//         },
//         {
//             name: "Add Post",
//             slug: "/add-post",
//             active: currentstatus,
//         }
//     ]
//     return(
//         <>
//         <header>
//         <Container>
//             <nav>
//                 <div>
//                 <Link to='/'>
//               <Logo width='70px'   />

//               </Link>
//                 </div>
//                 <ul>
//                     {navItem.map((items)=>          
//                         items.active ? (<li key={items.name}>
//                             <button onClick={()=>navigate(items.slug)}>{items.name}</button>
//                         </li>):null
//                     )}
//                     <li>if(currentstatus)
//                     <LogOut/>
//                     </li>
//                 </ul>
//             </nav>
//         </Container>
//         </header>
//         </>
//     )
// }
// export default Header
// import React from 'react';
// import { LogOut, Logo } from '../index'; // Assuming LogOut and Logo are correct imports
// import Container from '../InputField/Container';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// function Header() {
//     const navigate = useNavigate();
//     // Corrected useSelector to access the state.auth.status path
//     const currentstatus = useSelector((state) => state.auth.status);

//     // Define navigation items
//     const navItem = [
//         { slug: '/', name: 'Home', active: true },
//         { name: 'Login', slug: '/login', active: !currentstatus },
//         { name: 'Signup', slug: '/signup', active: !currentstatus },
//         { name: 'All Posts', slug: '/all-posts', active: currentstatus },
//         { name: 'Add Post', slug: '/add-post', active: currentstatus },
//     ];

//     return (
//         <header>
//             <Container>
//                 <nav>
//                     <div>
//                         <Link to='/'>
//                             <Logo width='70px' />
//                         </Link>
//                     </div>
//                     <ul>
//                         {navItem.map(
//                             (items) =>
//                                 items.active && (
//                                     <li key={items.name}>
//                                         <button onClick={() => navigate(items.slug)}>
//                                             {items.name}
//                                         </button>
//                                     </li>
//                                 )
//                         )}

//                         {/* LogOut is rendered conditionally if the user is logged in */}
//                         {currentstatus && (
//                             <li>
//                                 <LogOut />
//                             </li>
//                         )}
//                     </ul>
//                 </nav>
//             </Container>
//         </header>
//     );
// }

// export default Header;
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LogOut from './LogOut';
import Logo from '../Logo';
import Container from '../InputField/Container';
import { Link } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const currentstatus = useSelector((state) => state.auth.status);

    const navItem = [
        { slug: '/', name: 'Home', active: true },
        { name: 'Login', slug: '/login', active: !currentstatus },
        { name: 'Signup', slug: '/signup', active: !currentstatus },
        { name: 'All Posts', slug: '/all-posts', active: currentstatus },
        { name: 'Add Post', slug: '/add-post', active: currentstatus },
    ];

    return (
        <header className='py-3 shadow bg-gray-500'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to='/'>
                            <Logo width='70px' />
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItem.map(
                            (items) =>
                                items.active && (
                                    <li key={items.name}>
                                        <button onClick={() => navigate(items.slug)}  className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                                            {items.name}
                                        </button>
                                    </li>
                                )
                        )}
                        {currentstatus && (
                            <li>
                                <LogOut />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;

