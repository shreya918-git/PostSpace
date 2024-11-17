import  React from 'react'
import Container from '../components/InputField/Container'
import PostForm from '../components/PostForm/PostForm'
export default function AddForm(){
    return(
        <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
        </div>
    )
}