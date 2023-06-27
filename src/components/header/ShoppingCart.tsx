import { burgerButton, shoppingCart } from '../../assets';
import shoppingCartStyles from './shoppingCart.module.scss';

const ShoppingCart = () => {
    return (
        <div className={shoppingCartStyles.main}>
            <div>
                <img src={shoppingCart} />
                <div className={shoppingCartStyles.cart_counter}>
                    0
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