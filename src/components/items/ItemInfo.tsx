import { Link } from 'react-router-dom';

import { IModels } from '../types';
import { increment, useAppDispatch } from '../../store';

import itemInfoStyles from './itemInfo.module.scss';
import { shoppingCart } from '../../assets';

const ItemInfo = (props: IModels) => {
    const { modelNumber, description, imgSrc, cost } = props;
    const dispatch = useAppDispatch();
    
    return (
        <div className={itemInfoStyles.main}>
            <Link to={`/${modelNumber}`}>
                <div className={itemInfoStyles.img}>
                    <img 
                        src={imgSrc}
                        alt={modelNumber}
                    />
                </div>
            </Link>

            <p className={itemInfoStyles.description}>{description}</p>

            <div className={itemInfoStyles.cost}>
                <div 
                    onClick={() => dispatch(increment(props))}
                    className={itemInfoStyles.cart_button}
                >
                    <img src={shoppingCart} alt='shopping cart image' />
                </div>
                <span>$ {cost}</span>
            </div>
        </div>
    )
}

export { ItemInfo };