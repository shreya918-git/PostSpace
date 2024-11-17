// import React from 'react'
// import { useservice } from '../appwrite/Services'
// import { useState,useEffect} from 'react'
// import PostForm from '../components/PostForm/PostForm'
// import { useNavigate } from 'react-router-dom'
// import Container from '../components/InputField/Container'
// import { useParams } from 'react-router-dom'
// function Edit(){
//     const [post,setpost]=useState({})
//     const {slug}=useParams()
//     const nav=useNavigate()
//     useEffect((slug)=>{
//         if(slug){
//             useservice.selectdocument(slug).then((resp)=>{
//                 if(resp){
//                     setpost(resp)
//                 }
//                 else{
//                     nav('/')
//                 }
//             })
//         }
//     },[slug,nav])
//     return(
//         <>
//         <Container>
//            {post?<PostForm post={post}/>:null} 
//         </Container>
//         </>
//     )
// }
// export default Edit
import React, { useState, useEffect } from 'react';
import { useservice } from '../appwrite/Services';
import PostForm from '../components/PostForm/PostForm';
import { useNavigate, useParams } from 'react-router-dom';
import Container from '../components/InputField/Container';

function Edit() {
    const [post, setPost] = useState(null); // Set to null initially
    const { slug } = useParams();
    const nav = useNavigate();

    useEffect(() => {
        if (slug) {
            useservice.selectdocument(slug)
                .then((resp) => {
                    if (resp) {
                        setPost(resp);
                    } else {
                        nav('/');
                    }
                })
                .catch((error) => {
                    console.error("Error fetching document:", error);
                    nav('/'); // Navigate away on error
                });
        }
    }, [slug, nav]);

    return (
        <Container>
            {post ? <PostForm post={post} /> : <div>Loading...</div>}
        </Container>
    );
}

export default Edit;
