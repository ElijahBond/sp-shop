import { clearImg, nb574 } from '../../assets';
import { BasketCounter } from './BasketCounter';
import basketItemStyles from './basketItem.module.scss';

const BasketItem = () => {

    return (
        <div className={basketItemStyles.main}>
            <img 
                className={basketItemStyles.clearImg} 
                src={clearImg} 
            />
            <img 
                className={basketItemStyles.itemImg}
                src={nb574} 
            />
            <p className={basketItemStyles.description}>New Balance 574 Vintage Brights</p>
            <BasketCounter />
        </div>
    )
}

export { BasketItem };