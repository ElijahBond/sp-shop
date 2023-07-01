import { useAppSelector } from '../../store';
import { BasketItem } from './BasketItem';
import { BasketResult } from './BasketResult';
import basketStyles from './basket.module.scss';

const Basket = () => {
    const allItemsInBasket = useAppSelector((state) => state.itemsInBasket)
    // console.log(allItemsInBasket)

    const allItemsInBasketView = allItemsInBasket.map(el => <BasketItem key={el.modelNumber} {...el} /> )

    const view = allItemsInBasketView.length === 0 ? <BasketIsEmpty /> : allItemsInBasketView

    return (
        <div className={basketStyles.main}>
            <p className={basketStyles.title}>My Basket</p>

            <div className={basketStyles.basket_list}>
                {view}
            </div>

            <BasketResult />
        </div>
    )
}

export { Basket };

const BasketIsEmpty = () => {
    return (
        <p style={{margin:' 0 0 2rem 5rem'}}>Basket is empty. Try add something</p>
    )
}