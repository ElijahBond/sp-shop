import itemInfoStyles from '../items/itemInfo.module.scss';
import itemPageStyles from './ItemPage.module.scss';
import { shoppingCart } from '../../assets';
import { IModels } from '../dataItems';

const ItemView = ({modelNumber, imgSrc, cost, description}: IModels) => {

    return (
        <>
            <img 
                className={itemPageStyles.itemImg}
                src={imgSrc} />

            <p className={itemPageStyles.description}>{description}</p>
            <div className={itemPageStyles.model_number}>Item model number: {modelNumber}</div>

            <div>
                <div className={itemInfoStyles.cart_button}>
                    <img src={shoppingCart} />
                </div>
                <span>$ {cost}</span>
            </div>
        </>
    )
}

export { ItemView };