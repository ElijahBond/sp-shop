import itemInfoStyles from '../items/itemInfo.module.scss';
import itemPageStyles from './ItemPage.module.scss';
import { shoppingCart } from '../../assets';
import { IModels } from '../types';
import { increment, useAppDispatch } from '../../store';

const ItemView = (props: IModels) => {
    const {modelNumber, imgSrc, cost, description} = props;
    const dispatch = useAppDispatch();

    return (
        <>
            <img 
                className={itemPageStyles.itemImg}
                src={imgSrc}
                alt='item image'
            />

            <p className={itemPageStyles.description}>{description}</p>
            <div className={itemPageStyles.model_number}>Item model number: {modelNumber}</div>

            <div>
                <div className={itemInfoStyles.cart_button}>
                    <img 
                        onClick={() => dispatch(increment(props))}
                        src={shoppingCart} 
                        alt='shopping cart image'
                    />
                </div>
                <span>$ {cost}</span>
            </div>
        </>
    )
}

export { ItemView };