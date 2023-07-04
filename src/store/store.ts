import { configureStore } from '@reduxjs/toolkit'
import {basketSlice} from './basketSlice'
import { itemsApi } from './itemsApi'

export const store = configureStore({
    reducer: {
        basketSlice: basketSlice.reducer,
        [itemsApi.reducerPath]: itemsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(itemsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch