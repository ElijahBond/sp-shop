import { dataItems } from '../dataItems';
import { IItem, useAppSelector } from '../../store';

import basketResultStyles from './basketResult.module.scss';

const BasketResult = () => {
    const { tax, shippingCost } = dataItems.serviceInfo;

    const arrayItemsInBasket = useAppSelector((state) => state.itemsInBasket)
    const subtotalCount = arrayItemsInBasket.reduce((acc: number, el: IItem): number => acc + el.totalCost, 0)

    return (
        <div className={basketResultStyles.main}>
            <div className={basketResultStyles.string}>
                <span>Subtotal</span>
                <span>$ {subtotalCount}</span>
            </div>

            <div className={basketResultStyles.string}>
                <span>Tax</span>
                <span>$ {tax}</span>
            </div>

            <div className={basketResultStyles.string}>
                <span>Shipping</span>
                <span>$ {shippingCost}</span>
            </div>

            <div className={`${basketResultStyles.string} ${basketResultStyles.bold}`}>
                <span>Total</span>
                <span>$ {subtotalCount + tax + shippingCost}</span>
            </div>
        </div>
    )
}

export { BasketResult };