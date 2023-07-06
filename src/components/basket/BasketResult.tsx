import { IItem, useAppSelector } from '../../store';

import basketResultStyles from './basketResult.module.scss';
import { useGetAllItemsQuery } from '../../store/itemsApi';
import { useEffect, useState } from 'react';

const BasketResult = () => {
    const [tax, setTax] = useState(0)
    const [shippingCost, setShippingCost] = useState(0)

    const arrayItemsInBasket = useAppSelector((state) => state.basketSlice.itemsInBasket)
    // @ts-ignore
    const subtotalCount = arrayItemsInBasket.reduce((acc: number, el: IItem): number => acc + el.totalCost, 0)

    const { isLoading, isError, isSuccess, data } = useGetAllItemsQuery('')

    useEffect(() => {
        if (data) {
            setTax(data.record.serviceInfo.tax)
            setShippingCost(data.record.serviceInfo.shippingCost)
        }
    }, [data])

    return (
        <div className={basketResultStyles.main}>
            <div className={basketResultStyles.string}>
                <span>Subtotal</span>
                <span>$ {subtotalCount}</span>
            </div>

            <div className={basketResultStyles.string}>
                <span>Tax</span>
        
                {isError && "We fix it"}
                {isLoading && "Wait"}
                {isSuccess && `$ ${tax}`}
            </div>

            <div className={basketResultStyles.string}>
                <span>Shipping</span>

                {isError && "We fix it"}
                {isLoading && "Wait"}
                {isSuccess && `$ ${shippingCost}`}
            </div>

            <div className={`${basketResultStyles.string} ${basketResultStyles.bold}`}>
                <span>Total</span>
                <span>$ {subtotalCount + tax + shippingCost}</span>
            </div>
        </div>
    )
}

export { BasketResult };