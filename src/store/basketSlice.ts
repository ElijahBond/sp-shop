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
    itemsInBasket: IItem[] | [],
    amountItemsInBasket: number,
    isOpen: boolean
}

const initialState: IInitStore =  {
    itemsInBasket: [],
    amountItemsInBasket: 0,
    isOpen: true
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
            } else {
                // if item have in basket - find it index and increase by 1
                const currentItem = state.itemsInBasket[indexCurrentModelInBasket]

                currentItem.totalCount += 1;
                currentItem.totalCost = currentItem.cost * currentItem.totalCount;
            }

            // count the total number of items in basket
            state.amountItemsInBasket = counterItems(state.itemsInBasket)
        },
        addOne: (state, action: PayloadAction<string>) => {
            // increase by 1 item in basket 
            const currentItem = findCurrentItem(state.itemsInBasket, action.payload);

            currentItem.totalCount += 1;
            currentItem.totalCost = currentItem.cost * currentItem.totalCount;

            // count the total number of items in basket
            state.amountItemsInBasket = counterItems(state.itemsInBasket)
        },
        deleteOne: (state, action: PayloadAction<string>) => {
            const currentItem = findCurrentItem(state.itemsInBasket, action.payload)

            if (currentItem.totalCount > 1) {
                // if amount of item over 1 decrease by 1
                currentItem.totalCount -= 1;
                currentItem.totalCost = currentItem.cost * currentItem.totalCount;
            } else {
                // if amount of item less 1 delete item from basket
                currentItem.totalCount -= 1;
                const filteredBasket = state.itemsInBasket.filter(el => el.totalCount != 0);
                state.itemsInBasket = filteredBasket
            }

            // count the total number of items in basket
            state.amountItemsInBasket = counterItems(state.itemsInBasket)
        },
        deleteFullyCurrentItem: (state, action: PayloadAction<string>) => {
            const filteredBasket = state.itemsInBasket.filter(el => el.modelNumber != action.payload);
            state.itemsInBasket = filteredBasket

            // count the total number of items in basket
            state.amountItemsInBasket = counterItems(state.itemsInBasket)
        },
        toggleBasketView: (state, action: PayloadAction<boolean>) => {
            state.isOpen = !action.payload
        }
    }
})

export const { increment, 
                addOne, 
                deleteOne, 
                deleteFullyCurrentItem,
                toggleBasketView
            } = basketSlice.actions
export default basketSlice.reducer



// export hooks 
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector



// help functions
function counterItems (array: IItem[] | []): number {
    if ( array.length > 0) {
        return array.reduce(
            (accumulator: number, element: IItem) => accumulator + element.totalCount
            , 0)
        } else return 0;
    }
    
    function findCurrentItem (itemsInBasket: IItem[] | [], actionPayload: string) {
        const indexCurrentModelInBasket = itemsInBasket.findIndex(el => el.modelNumber === actionPayload);
        return itemsInBasket[indexCurrentModelInBasket];
    }
    
// console.log(current(state))