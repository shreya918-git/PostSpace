import React from 'react'
import { useservice } from '../../appwrite/Services'
import { Link } from 'react-router-dom'
function Preview({$id,title,featuredImage}){
      return(
        <> 
        <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={useservice.getfilepreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
        </Link>
        </>
      )
}
export default Preview