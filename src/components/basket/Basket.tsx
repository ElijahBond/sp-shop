import { BasketItem } from './BasketItem';
import { BasketResult } from './BasketResult';
import basketStyles from './basket.module.scss';

const Basket = () => {

    return (
        <div className={basketStyles.main}>
            <p className={basketStyles.title}>My Basket</p>

            <div className={basketStyles.basket_list}>
                <BasketItem />
                <BasketItem />
            </div>

            <BasketResult />
        </div>
    )
}

export { Basket };