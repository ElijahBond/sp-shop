import shoppingCart from '../../assets/shoppingCart.svg';
import shoppingCartStyles from './shoppingCart.module.scss';

const ShoppingCart = () => {
    return (
        <div className={shoppingCartStyles.main}>
            <img src={shoppingCart} />
            <div className={shoppingCartStyles.cart_counter}>
                0
            </div>
        </div>
    )
};

export { ShoppingCart };