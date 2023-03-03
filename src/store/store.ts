// import { commentReducer } from './comment/commentReducer';
// import { tokenReducer } from './token/tokenReducer';
// import { tokenMiddleware } from './token/tokenReducer';
// import { authReducer } from './auth/authReducer';
// import { postsDataReducer } from './postData/postDataReducer';
// import postDataReducer from './postData/postDataSlice'
// import { countRequestReducer } from './countRequst/countRequestReducer';
import { configureStore } from '@reduxjs/toolkit';
// import commentsReducer from './comment/commentsSlice'

export const store = configureStore({
    reducer: {

    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tokenMiddleware),
})

export {};