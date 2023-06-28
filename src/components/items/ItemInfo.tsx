import itemInfoStyles from './itemInfo.module.scss';
import { shoppingCart } from '../../assets';
import { IModels } from '../dataItems';

const ItemInfo = ({ modelNumber, description, imgSrc, cost }: IModels) => {
    return (
        <div className={itemInfoStyles.main}>

            <div className={itemInfoStyles.img}>
                <img 
                    src={imgSrc}
                    alt={modelNumber} />
            </div>

            <p className={itemInfoStyles.description}>{description}</p>

            <div className={itemInfoStyles.cost}>
                <div className={itemInfoStyles.cart_button}>
                    <img src={shoppingCart} />
                </div>
                <span>$ {cost}</span>
            </div>
        </div>
    )
}

export { ItemInfo };