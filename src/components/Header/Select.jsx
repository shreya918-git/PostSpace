// import React,{useId} from 'react'
// const Select=React.forwardRef(({options,label,classname,...props},ref)=>{
//     const id=useId()   //ref important for linking otherwise the field wont show
// return(
//     <>
//     {label && <label htmlFor={id} classname={`${classname}`}>{label}</label>}
//     {<select {...props} id={id} className={`${classname}`} ref={ref}>   
//         {options?.map((option)=>(
//             <option key={option} value={option}>
//                 {option}
//             </option>
// ))}
//         </select>}
//     </>
// )
// })
// export default Select   //another way to use forward ref
import React, { useId } from 'react';

const Select = React.forwardRef(({ options, label, className, ...props }, ref) => {
    const id = useId();
    return (
        <>
            {label && <label htmlFor={id} className={`${className}`}>{label}</label>}
            <select {...props} id={id} className={`${className}`} ref={ref}>
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </>
    );
});

export default Select;
