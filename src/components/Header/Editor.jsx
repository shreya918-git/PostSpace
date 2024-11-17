// import React from 'react'
// import { Controller } from 'react-hook-form'
// import {Editor} from '@tinymce/tinymce-react'
// export default function Editor({label,name,control,defaultvalue=''}){
//   return(
//     <>
//       {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
//       <div className='w-full'>
//         <Controller
//         name={name}
//         control={control}
//         render={({field:{onChange}})=>{
//             <Editor
//         initialValue={defaultvalue}
//         init={{
//             initialValue: defaultvalue,
//             height: 500,
//             menubar: true,
//             plugins: [
//                 "image",
//                 "advlist",
//                 "autolink",
//                 "lists",
//                 "link",
//                 "image",
//                 "charmap",
//                 "preview",
//                 "anchor",
//                 "searchreplace",
//                 "visualblocks",
//                 "code",
//                 "fullscreen",
//                 "insertdatetime",
//                 "media",
//                 "table",
//                 "code",
//                 "help",
//                 "wordcount",
//                 "anchor",
//             ],
//             toolbar:
//             "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
//             content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
//         }}
//         onEditorChange={onChange}
//         />
//         }}
//         />
//       </div>
//     </>
//   )
// }
import React from 'react';
import { Controller } from 'react-hook-form';
import { Editor as TinyMCEEditor } from '@tinymce/tinymce-react';

export default function Editor({ label, name, control, defaultvalue = '' }) {
  return (
    <>
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}
      <div className="w-full">
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange } }) => {
            // Ensure you return the JSX here
            return (
              <TinyMCEEditor
              apiKey='f9pbxs3j3tlm2j8jzsjmx2mx52phfyphfecegt3b49xacvj1'
                initialValue={defaultvalue}
                init={{
                  initialValue: defaultvalue,
                  height: 500,
                  menubar: true,
                  plugins: [
                    'image',
                    'advlist',
                    'autolink',
                    'lists',
                    'link',
                    'image',
                    'charmap',
                    'preview',
                    'anchor',
                    'searchreplace',
                    'visualblocks',
                    'code',
                    'fullscreen',
                    'insertdatetime',
                    'media',
                    'table',
                    'code',
                    'help',
                    'wordcount',
                    'anchor',
                  ],
                  toolbar:
                    'undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help',
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                }}
                onEditorChange={onChange}
              />
            );
          }}
        />
      </div>
    </>
  );
}