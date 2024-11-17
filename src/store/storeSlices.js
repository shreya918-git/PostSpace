// import { createSlice } from "@reduxjs/toolkit";    //redux store helps us to know to the current state of user whether loggedin or loggedout
// const initialstate={
//     status:false,
//     userdata:"hi"
// };
// const Storeslicer=createSlice({
//     name:"auth",
//     initialstate,
//     reducers:
//     {
//         login:(state,action)=>{
//             state.status=true
//             state.userdata=action.payload
//         },
//         logout:(state)=>{
//             state.status=false
//             state.userdata="Login to see posts"
//         }
//     }
// })
// export const {login,logout} = Storeslicer.actions
// const Reducers=Storeslicer.reducer
// export default Reducers
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userdata: "hi"
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true
            state.userdata = action.payload
        },
        logout: (state) => {
            state.status = false
            state.userdata = "Login to see posts"
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
