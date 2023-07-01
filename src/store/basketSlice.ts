import { PayloadAction, createSlice, current } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from 'react-redux'

import type { TypedUseSelectorHook } from 'react-redux'
import type { AppDispatch, RootState } from "./store"

import { IModels } from "../components/dataItems"

export interface IItem extends IModels {
    totalCount: number
    totalCost : number
}

interface IInitStore {
    itemsInBasket: IItem[] | []
}

const initialState: IInitStore =  {
    itemsInBasket: []
}

export const basketSlice = createSlice({
    name: 'basketSlice',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<IModels>) => {
            const indexCurrentModelInBasket = state.itemsInBasket.findIndex(el => el.modelNumber === action.payload.modelNumber)
            if (indexCurrentModelInBasket === -1) {
                // if basket have not item - add new item with necessary start values
                const addingItem: IItem = {
                    ...action.payload,
                    totalCount: 1,
                    totalCost: action.payload.cost
                }
                state.itemsInBasket.push(addingItem)
                console.log(current(state))
            } else {
                // if item have in basket - find it index and increase by 1
                const currentItem = state.itemsInBasket[indexCurrentModelInBasket]

                currentItem.totalCount += 1;
                currentItem.totalCost = currentItem.cost * currentItem.totalCount;
            }
        },
        decrement: ( state ) => {
            state.itemsInBasket[0].totalCount -= 1
        },
    }
})

export const { increment, decrement } = basketSlice.actions

export default basketSlice.reducer

// export hooks 
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
