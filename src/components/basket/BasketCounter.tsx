import { decrementImg, incrementImg } from '../../assets';
import { addOne, deleteOne, useAppDispatch } from '../../store';
import basketCounterStyles from './basketCounter.module.scss';

interface IBasketCounter {
    modelNumber: string
    totalCount: number,
    totalCost: number
}

const BasketCounter = ({modelNumber, totalCount, totalCost}: IBasketCounter) => {
    const dispatch = useAppDispatch();

    return (
        <div className={basketCounterStyles.main}>
            <img
                onClick={() => dispatch(deleteOne(modelNumber as string))}
                className={basketCounterStyles.incrAndDecr}
                src={decrementImg} 
            />
            <span>{totalCount}</span>
            <img
                onClick={() => dispatch(addOne(modelNumber as string))}
                className={basketCounterStyles.incrAndDecr}
                src={incrementImg} 
            />
            <span>$ {totalCost}</span>
        </div>
    )
}

export { BasketCounter };