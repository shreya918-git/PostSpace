// import React from 'react'
// function Button(
//     {children},
//     text="white",
//     type = "button",
//     bgColor = "bg-blue-600",
//     textColor = "text-white",
//     classname = "",
//     ...props
// ){
//     return(
//         <>
//         <button className={`${classname} ${bgColor} ${textColor}`} {...props} type={`${type}`}>{children}</button>
//         </>
//     )
// }
// export default Button
import React from 'react';

function Button({
    children,
    text = "white",
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    classname = "",
    ...props
}) {
    return (
        <button
            className={`${classname} ${bgColor} ${textColor}`}
            type={type}
            {...props}  // Spread the remaining props to the button
        >
            {children}
        </button>
    );
}

export default Button;
