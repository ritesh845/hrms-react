import { createStore,applyMiddleware } from '@reduxjs/toolkit'
import rootReducer from './index';
import { logger } from "redux-logger";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension"

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware,logger))
  )
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
