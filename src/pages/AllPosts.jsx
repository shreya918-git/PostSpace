import React, { useState } from 'react'
import { useservice } from '../appwrite/Services'
import Preview from '../components/Header/Postform'
import { Container } from '../components';
function Allposts(){
    const [posts,setposts]=useState([]);
    useservice.allposts().then((posts)=>
       { if(posts){
            setposts(posts.documents)}})   //query results are structured with a documents array which contains the posts
    return(
        <>
         <div className='w-full py-8 flex'>
        <Container>
        <div className='flex flex-wrap'>
        {posts?.map((post)=>(
            <div key={post.$id} className='p-2 w-1/4'>
            <Preview {...post} />
        </div>
        ))}
        </div>
        </Container>
        </div>
        </>
    )
}
export default  Allposts
// import React, { useState, useEffect } from 'react';
// import { useservice } from '../appwrite/Services';
// import Preview from '../components/Header/Postform';
// import { Container } from '../components';

// function Allposts() {
//     const [posts, setposts] = useState([]);

//     // Use useEffect to fetch posts only once when the component mounts
//     useEffect(() => {
//         useservice.allposts().then((posts) => {
//             if (posts) {
//                 setposts(posts.documents);
//             }
//         });
//     }, []);

//     return (
//         <div className='w-full py-8 flex justify-center'>
//             <Container>
//                 <div className='flex flex-row flex-wrap -mx-2'>
//                     {posts?.map((post) => (
//                         <div key={post.$id} className='p-2 w-1/4'>
//                             <Preview {...post} />
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </div>
//     );
// }

// export default Allposts;
// import React, { useState, useEffect } from 'react';
// import { useservice } from '../appwrite/Services';
// import Preview from '../components/Header/Postform';

// function Allposts() {
//     const [posts, setposts] = useState([]);

//     useEffect(() => {
//         useservice.allposts().then((posts) => {
//             if (posts) {
//                 setposts(posts.documents);
//             }
//         });
//     }, []);

//     return (
//         <div className='w-full py-8 flex justify-center'>
//             {/* Main flex container to arrange posts in a row with wrapping */}
//             <div className='flex flex-wrap gap-4 justify-center'>
//                 {posts?.map((post) => (
//                     <div key={post.$id} className='w-1/4 min-w-[200px] p-2'>
//                         <Preview {...post} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Allposts;

// import React, { useState, useEffect } from 'react';
// import { useservice } from '../appwrite/Services';
// import Preview from '../components/Header/Postform';

// function Allposts() {
//     const [posts, setposts] = useState([]);

//     useEffect(() => {
//         useservice.allposts().then((posts) => {
//             if (posts) {
//                 setposts(posts.documents);
//             }
//         });
//     }, []);

//     return (
//         <div style={{ width: '100%', padding: '2rem', display: 'flex', justifyContent: 'center' }}>
//             {/* Main container with Flexbox and wrapping */}
//             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', width: '100%' }}>
//                 {posts?.map((post) => (
//                     <div key={post.$id} style={{ padding: '1rem', width: '23%' }}>
//                         <Preview {...post} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Allposts;
