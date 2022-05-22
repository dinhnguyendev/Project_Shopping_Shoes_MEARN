import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import payReducer from './paySlice';
import storage from 'redux-persist/lib/storage';
import productReducer from './productSlice';
import navbarReducer from './navbarSlice';
import cartReducer from './cartSlice';
import orderReducer from './orderSlice';
import customerReducer from './customerSlice';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


const rootReducer = combineReducers({
    user: userReducer,
    products: productReducer,
    navbar: navbarReducer,
    cart: cartReducer,
    pay: payReducer,
    order: orderReducer,
    customer: customerReducer
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ["user"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export let persistor = persistStore(store);
