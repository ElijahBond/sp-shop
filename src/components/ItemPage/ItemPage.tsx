import { ItemDescription } from './ItemDescription';
import itemPageStyles from './ItemPage.module.scss';

const ItemPage = () => {

    return (
        <div className={itemPageStyles.main}>
            <button 
                className={itemPageStyles.button}
            >
                Back in catalog
            </button>

            <ItemDescription />
        </div>
    )
}

export { ItemPage };