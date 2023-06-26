import { decrementImg, incrementImg } from '../../assets';
import basketCounterStyles from './basketCounter.module.scss';

const BasketCounter = () => {

    return (
        <div className={basketCounterStyles.main}>
            <img 
                className={basketCounterStyles.incrAndDecr}
                src={decrementImg} 
            />
            <span>0</span>
            <img 
                className={basketCounterStyles.incrAndDecr}
                src={incrementImg} 
            />
            <span>$ 650</span>
        </div>
    )
}

export { BasketCounter };