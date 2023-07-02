import { useAppSelector } from '../../store';

import { burgerButton, shoppingCart } from '../../assets';

import shoppingCartStyles from './shoppingCart.module.scss';

const ShoppingCart = () => {
    const amountItemsInBasket = useAppSelector((state) => state.amountItemsInBasket)

    return (
        <div className={shoppingCartStyles.main}>
            <div>
                <img src={shoppingCart} />
                <div className={shoppingCartStyles.cart_counter}>
                    {amountItemsInBasket}
                </div>
            </div>

            <img 
                className={shoppingCartStyles.burger_button}
                src={burgerButton} 
            />
        </div>
    )
};

export { ShoppingCart };


