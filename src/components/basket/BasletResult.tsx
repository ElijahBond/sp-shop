import basketResultStyles from './basketResult.module.scss';

const BasketResult = () => {

    return (
        <div className={basketResultStyles.main}>
            <div className={basketResultStyles.string}>
                <span>Subtotal</span>
                <span>$ 1850</span>
            </div>

            <div className={basketResultStyles.string}>
                <span>Tax</span>
                <span>$ 100</span>
            </div>

            <div className={basketResultStyles.string}>
                <span>Shipping</span>
                <span>$ 150</span>
            </div>

            <div className={`${basketResultStyles.string} ${basketResultStyles.bold}`}>
                <span>Total</span>
                <span>$ 2100</span>
            </div>
        </div>
    )
}

export { BasketResult };