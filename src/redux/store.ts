import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import rootReducer from './index';
import { composeWithDevTools } from "redux-devtools-extension"
import { persistStore } from "redux-persist";
import { rootSaga } from "./rootSaga";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware,logger))
)

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
