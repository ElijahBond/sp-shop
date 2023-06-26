import itemInfoStyles from './itemInfo.module.scss';
import { nb574, shoppingCart } from '../../assets';

const ItemInfo = () => {

    return (
        <div className={itemInfoStyles.main}>

            <div className={itemInfoStyles.img}>
                <img  src={nb574} />
            </div>

            <p className={itemInfoStyles.description}>New Balance 574 Vintage Brights</p>

            <div className={itemInfoStyles.cost}>
                <div className={itemInfoStyles.cart_button}>
                    <img src={shoppingCart} />
                </div>
                <span>$ 650</span>
            </div>
        </div>
    )
}

export { ItemInfo };