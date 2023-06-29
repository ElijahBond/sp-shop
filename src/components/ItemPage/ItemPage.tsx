import itemPageStyles from './ItemPage.module.scss';

import itemInfoStyles from '../items/itemInfo.module.scss';
import { shoppingCart } from '../../assets';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IModels, dataItems } from '../dataItems';

const ItemPage = () => {
    const { model } = useParams();

    const [ currentModel ] = useState(() => {
        const modelData = dataItems.models.filter(el => el.modelNumber === model)
        return modelData[0]
    });
    
    return (
        <div className={itemPageStyles.wrapper}>
            <div className={itemPageStyles.main}>

                <Link to={'/'} style={{textDecoration: 'none'}}>
                    <button 
                        className={itemPageStyles.button}
                        >
                        Back in catalog
                    </button>
                </Link>

                <img 
                    className={itemPageStyles.itemImg}
                    src={currentModel.imgSrc} />

                <p className={itemPageStyles.description}>{currentModel.description}</p>
                <div className={itemPageStyles.model_number}>Item model number: {currentModel.modelNumber}</div>

                <div>
                    <div className={itemInfoStyles.cart_button}>
                        <img src={shoppingCart} />
                    </div>
                    <span>$ {currentModel.cost}</span>
                </div>
            </div>
        </div>
    )
}

export { ItemPage };