// import React, { useCallback } from 'react'
// import Input from '../Header/input'
// import { useNavigate } from 'react-router-dom'
// import { useForm } from 'react-hook-form'
// import Editor from '../Header/Editor'
// import { useSelector } from 'react-redux'
// import { useservice } from '../../appwrite/Services'
// import Select from '../Header/Select'
// import Button from '../Header/Button'
// function PostForm({post=null}){
//     const {register,handleSubmit,watch,setValue,getValues,control}=useForm()
//     const nav=useNavigate();
//     const data2=useSelector((state)=>state.auth.userdata)
//     const submit=async (data)=>{
          var file
//         if(post){
//             const file=data.image[0]?useservice.storage(data.image[0]):null
//      
//         if(file){
//             useservice.deletefile(post.featuredImage)
//         }
//        const dbpost=await useservice.updatedata(post.$id,{...post,featuredImage:file?file.$id:undefined})
//        if(dbpost)
//         nav(`/post/${dbpost.$id}`)
//        else{
//         const fileupload=await useservice.storage(data.image[0])
//         if(fileupload){
//         const file=file.$id
//         data.featuredImage=file;
//         const newpost=await useservice.createdocument({...data,userid:data2.$id})
//         if(newpost){
//             nav(`./post/${newpost.$id}`)
//         }
//         }}
//     }
//     const slugtransform=useCallback((value)=>{
//         if(value && typeof value=='string')
//         return value.trim().toLowerCase().replace(/\s/g,'-')
//         return ''
//     })
//     React.useEffect((value)=>{
//        const subscription= watch((value,{name})=>{
//             if (name='title'){
//            setValue('slug', slugtransform(value.title)),{shouldvalidate:true}}
//         })
//         return ()=>subscription.unsubscribe();
//     },[watch,slugtransform,setValue])
//     return(

//         <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
//             <div className="w-2/3 px-2">
//                 <Input
//                     label="Title :"
//                     placeholder="Title"
//                     className="mb-4"
//                     {...register("title", { required: true })}
//                 />
//                 <Input
//                     label="Slug :"
//                     placeholder="Slug"
//                     className="mb-4"
//                     {...register("slug", { required: true })}
//                     onInput={(e) => {
//                         setValue("slug", slugtransform(e.currentTarget.value), { shouldValidate: true });
//                     }}
//                 />
//                 <Editor label="Content :" name="content" control={control} defaultValue={getValues("content")} />
//             </div>
//             <div className="w-1/3 px-2">
//                 <Input
//                     label="Featured Image :"
//                     type="file"
//                     className="mb-4"
//                     accept="image/png, image/jpg, image/jpeg, image/gif"
//                     {...register("featuredImage", { required: !post })}
//                 />
//                 {post && (
//                     <div className="w-full mb-4">
//                         <img
//                             src={`useservice.getfilepreview(${post.featuredImage})`}
//                             alt={post.title}
//                             className="rounded-lg"
//                         />
//                     </div>
//                 )}
//                 <Select
//                     options={["active", "inactive"]}
//                     label="Status"
//                     className="mb-4"
//                     {...register("status", { required: true })}
//                 />
//                 <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
//                     {post ? "Update" : "Submit"}
//                 </Button>
//             </div>
//         </form>
//     );
// }
// export default PostForm
import React, { useCallback } from 'react';
import Input from '../Header/input';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Editor from '../Header/Editor';
import { useSelector } from 'react-redux';
import { useservice } from '../../appwrite/Services';
import Select from '../Header/Select';
import Button from '../Header/Button';

function PostForm( {post=null} ) {
    const { register, handleSubmit, watch, setValue, getValues, control } = useForm();
    const nav = useNavigate();
    const data2 = useSelector((state) => state.auth.userdata);

    const submit = async (data) => {
        let file = null;
        if (post) {
            file = data.image && data.image[0] ? await useservice.storage2(data.image[0]) : null;
            if (file) {
                await useservice.deletefile(post.featuredImage);
            }
            const dbpost = await useservice.updatedata(post.$id, { ...data, featuredImage: file ? file.$id : undefined });
            if (dbpost) {
                nav(`/post/${dbpost.$id}`);
                return;
            }
        } else {
            console.log('Form data on submit:', data); // Debug the data object

            if (!data || typeof data !== 'object') {
                console.error("data is not a valid object:", data);
                return; // Exit early if data is invalid
            }
            file = data.image && data.image[0] ? await useservice.storage2(data.image[0]) : null;
            data.featuredImage=file.$id
            const mergedData = { ...data, userid: data2.$id };
            const newpost = await useservice.createdocument(mergedData);
            console.log('New post response:', newpost);
            if (newpost) {
                nav('/all-posts');
            }
        }
    };

    const slugtransform = useCallback((value) => {
        if (value && typeof value === 'string') {
            return value.trim().toLowerCase().replace(/\s/g, '-');
        }
        return '';
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugtransform(value.title), { shouldValidate: true });
            }
        });
        return () => subscription.unsubscribe();
    }, [watch, slugtransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    classname="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    classname="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugtransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <Editor label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    classname="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={useservice.getfilepreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    classname="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} classname="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}

export default PostForm;
