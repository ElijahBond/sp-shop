import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { ItemView } from './ItemView';
import { useGetAllItemsQuery } from '../../store/itemsApi';

import { IModels } from '../types';

import itemPageStyles from './ItemPage.module.scss';

const ItemPage = () => {
    const { model } = useParams();
    const [ currentModel, setCurrentModel ] = useState({});

    const { isLoading, isError, isSuccess, data } = useGetAllItemsQuery('')

    useEffect(() => {
        if (data) {
            const modelData = data.record.models.filter((el: IModels) => el.modelNumber === model)[0]
            setCurrentModel(modelData);
        }
    }, [data, model])
    
    // @ts-ignore
    const view = currentModel ? <ItemView {...currentModel} /> : <h1>Bad link</h1>
    
    return (
        <div className={itemPageStyles.wrapper}>
            <div className={itemPageStyles.main}>

                <Link 
                    to={'/'} 
                    style={{textDecoration: 'none'}} 
                    className={itemPageStyles.link}
                >
                    <button 
                        className={itemPageStyles.button}
                        >
                        Back in catalog
                    </button>
                </Link>

                {isError && <h1 style={{margin: '0 auto'}}> Sorry( <br/>We fix it</h1>}
                {isLoading && <h1>Be patient please</h1>}
                {isSuccess && view}
            </div>
        </div>
    )
}

export { ItemPage };