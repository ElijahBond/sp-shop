import { configureStore, combineReducers } from '@reduxjs/toolkit';
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
import sessionStorage from 'redux-persist/es/storage/session';

import {basketSlice} from './basketSlice';
import { itemsApi } from './itemsApi';

const rootReducer = combineReducers({
    basketSlice: basketSlice.reducer,
    [itemsApi.reducerPath]: itemsApi.reducer
});

const persistConfig = {
    key: 'spShop',
    storage: sessionStorage,
    blacklist: [itemsApi.reducerPath]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(
            {
                serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }
        ).concat(itemsApi.middleware),
})

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch