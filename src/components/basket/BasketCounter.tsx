import { decrementImg, incrementImg } from '../../assets';
import basketCounterStyles from './basketCounter.module.scss';

interface IBasketCounter {
    totalCount: number,
    totalCost: number
}

const BasketCounter = ({totalCount, totalCost}: IBasketCounter) => {

    return (
        <div className={basketCounterStyles.main}>
            <img 
                className={basketCounterStyles.incrAndDecr}
                src={decrementImg} 
            />
            <span>{totalCount}</span>
            <img 
                className={basketCounterStyles.incrAndDecr}
                src={incrementImg} 
            />
            <span>$ {totalCost}</span>
        </div>
    )
}

export { BasketCounter };