import { clearImg } from '../../assets';
import { IItem, deleteFullyCurrentItem, useAppDispatch } from '../../store';
import { BasketCounter } from './BasketCounter';
import basketItemStyles from './basketItem.module.scss';

const BasketItem = ({ modelNumber ,description, imgSrc, totalCount, totalCost }: IItem) => {
    const dispatch = useAppDispatch();

    return (
        <div className={basketItemStyles.main}>
            <img
                onClick={() => dispatch(deleteFullyCurrentItem(modelNumber))}
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