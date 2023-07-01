import { clearImg } from '../../assets';
import { IItem } from '../../store';
import { BasketCounter } from './BasketCounter';
import basketItemStyles from './basketItem.module.scss';

const BasketItem = ({ description, imgSrc, totalCount, totalCost }: IItem) => {

    return (
        <div className={basketItemStyles.main}>
            <img 
                className={basketItemStyles.clearImg} 
                src={clearImg} 
            />
            <img 
                className={basketItemStyles.itemImg}
                src={imgSrc} 
            />
            <p className={basketItemStyles.description}>{description}</p>
            <BasketCounter
                totalCount={totalCount}
                totalCost={totalCost}
            />
        </div>
    )
}

export { BasketItem };