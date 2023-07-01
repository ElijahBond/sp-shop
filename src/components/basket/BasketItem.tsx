import { clearImg } from '../../assets';
import { IItem } from '../../store';
import { BasketCounter } from './BasketCounter';
import basketItemStyles from './basketItem.module.scss';

const BasketItem = ({ modelNumber ,description, imgSrc, totalCount, totalCost }: IItem) => {

    return (
        <div className={basketItemStyles.main}>
            <img
                onClick={() => console.log('delete this item')}
                className={basketItemStyles.clearImg} 
                src={clearImg} 
            />
            <img 
                className={basketItemStyles.itemImg}
                src={imgSrc} 
            />
            <p className={basketItemStyles.description}>{description}</p>
            <BasketCounter
                modelNumber={modelNumber}
                totalCount={totalCount}
                totalCost={totalCost}
            />
        </div>
    )
}

export { BasketItem };