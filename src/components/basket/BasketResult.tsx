import basketResultStyles from './basketResult.module.scss';
import { dataItems } from '../dataItems';

const BasketResult = () => {
    const { tax, shippingCost} = dataItems.serviceInfo;

    return (
        <div className={basketResultStyles.main}>
            <div className={basketResultStyles.string}>
                <span>Subtotal</span>
                <span>$ 1850</span>
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
                <span>$ 2100</span>
            </div>
        </div>
    )
}

export { BasketResult };