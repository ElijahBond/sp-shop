import itemInfoStyles from './itemInfo.module.scss';
import { shoppingCart } from '../../assets';
import { IModels } from '../dataItems';
import { Link } from 'react-router-dom';

const ItemInfo = ({ modelNumber, description, imgSrc, cost }: IModels) => {
    return (
        <div className={itemInfoStyles.main}>
            <Link to={`/${modelNumber}`}>
                <div className={itemInfoStyles.img}>
                    <img 
                        src={imgSrc}
                        alt={modelNumber} />
                </div>
            </Link>

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