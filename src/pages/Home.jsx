// import React,{useState,useEffect}  from 'react'
// import { useSelector } from 'react-redux'
// import { useservice } from '../appwrite/Services'
// import Container from '../components/InputField/Container'
// import Preview from '../components/Header/Postform'
// export default function Home(){
//     const [posts,setposts]=useState([])
//     const status=useSelector((state)=>state.auth.status)
//     useEffect(()=>{
//        if(status)
//         useservice.allposts().then(
//         (resp)=>setposts(resp.documents)
//     )
//     else
//         return(
//             <>
//               <div className="w-full py-8 mt-4 text-center">
//                 <Container>
//                     <div className="flex flex-wrap">
//                         <div className="p-2 w-full">
//                             <h1 className="text-2xl font-bold hover:text-gray-500">
//                                 Login to read posts
//                             </h1>
//                         </div>
//                     </div>
//                 </Container>
//             </div>
//             </>
//         )
//     },[])
//    return(
//     <>
//     <Container>
//     <div className='w-full py-8'>
//         {posts.map((post)=>{
//             <div key={post.$id} className='p-2 w-1/4'>
//             <Preview {...post}/>
//             </div>
//         })}
//         </div>
//     </Container>
//     </>
//    )
// }
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useservice } from '../appwrite/Services';
import Container from '../components/InputField/Container';
import Preview from '../components/Header/Postform';

export default function Home() {
    const [posts, setPosts] = useState([]);
    const status = useSelector((state) => state.auth.status);

    useEffect(() => {
        if (status) {
            useservice.allposts().then((resp) => setPosts(resp.documents));
        }
    }, [status]); // Add status to the dependency array

    if (!status) {
        // Show "Login to read posts" if the user is logged out
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <Container>
            <div className='w-full py-8 flex'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <Preview {...post} />
                    </div>
                ))}
            </div>
        </Container>
    );
}
