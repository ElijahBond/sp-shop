import itemPageStyles from './ItemPage.module.scss';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { dataItems } from '../dataItems';
import { ItemView } from './ItemView';

const ItemPage = () => {
    const { model } = useParams();

    const [ currentModel ] = useState(() => {
        const modelData = dataItems.models.filter(el => el.modelNumber === model)[0]
        return modelData
    });

    const view = currentModel ? <ItemView {...currentModel} /> : <h1>Bad link</h1>
    
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

                {view}
            </div>
        </div>
    )
}

export { ItemPage };