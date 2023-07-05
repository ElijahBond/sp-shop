import { toggleBasketView, useAppDispatch, useAppSelector } from '../../store';

import { burgerButton, shoppingCart } from '../../assets';

import shoppingCartStyles from './shoppingCart.module.scss';

const ShoppingCart = () => {
    const amountItemsInBasket = useAppSelector((state) => state.basketSlice.amountItemsInBasket)
    const isOpen = useAppSelector((state) => state.basketSlice.isOpen)
    const dispatch = useAppDispatch()

    return (
        <div className={shoppingCartStyles.main}>
            <div>
                <img src={shoppingCart} alt='shopping cart image' />
                <div className={shoppingCartStyles.cart_counter}>
                    {amountItemsInBasket}
                </div>
            </div>

            <img 
                onClick={() => dispatch(toggleBasketView(isOpen))}
                className={shoppingCartStyles.burger_button}
                src={burgerButton} 
                alt='burger button image'
            />
        </div>
    )
};

export { ShoppingCart };


