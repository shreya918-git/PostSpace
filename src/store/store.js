// import {configureStore} from '@reduxjs/toolkit'
// import  Reducers  from './storeSlices'
// export const Store=configureStore({
//     reducer: Reducers
// })
// import { configureStore } from '@reduxjs/toolkit';
// import Reducers from './storeSlices';

// export const Store = configureStore({
//     reducer: {
//         auth: Reducers,  // 'auth' should match the slice name
//     },
// });
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './storeSlices';  // Correctly import the reducer

export const store = configureStore({
    reducer: {
        auth: authReducer,  // Use the correct slice reducer
    },
});

