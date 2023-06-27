import { nb574, shoppingCart } from '../../assets';
import itemDescriptionStyles from './itemDescription.module.scss';
import itemInfoStyles from '../items/itemInfo.module.scss';

const ItemDescription = () => {

    return (
        <div className={itemDescriptionStyles.main}>
            <img 
                className={itemDescriptionStyles.itemImg}
                src={nb574} />

            <p className={itemDescriptionStyles.description}>New Balance 574 Vintage Brights</p>
            <div className={itemDescriptionStyles.model_number}>Item model number: MT91547</div>

                <div className={itemInfoStyles.cart_button}>
                    <img src={shoppingCart} />
                </div>
                <span>$ 650</span>
        </div>
    )
}

export { ItemDescription };