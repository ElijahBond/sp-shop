import itemPageStyles from './ItemPage.module.scss';

import itemInfoStyles from '../items/itemInfo.module.scss';
import { nb574, shoppingCart } from '../../assets';

const ItemPage = () => {

    return (
        <div className={itemPageStyles.wrapper}>
            <div className={itemPageStyles.main}>
                <button 
                    className={itemPageStyles.button}
                >
                    Back in catalog
                </button>

                <img 
                    className={itemPageStyles.itemImg}
                    src={nb574} />

                <p className={itemPageStyles.description}>New Balance 574 Vintage Brights</p>
                <div className={itemPageStyles.model_number}>Item model number: MT91547</div>

                <div>
                    <div className={itemInfoStyles.cart_button}>
                        <img src={shoppingCart} />
                    </div>
                    <span>$ 650</span>
                </div>
            </div>
        </div>
    )
}

export { ItemPage };