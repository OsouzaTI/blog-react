import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import PostsReducer from './reducers/posts'

const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({
    posts: PostsReducer
})
const _persistReducer = persistReducer(persistConfig, reducers)
const store = createStore(
        _persistReducer,
        compose(applyMiddleware(thunk))
    )
const persistor = persistStore(store)
export { store, persistor };
