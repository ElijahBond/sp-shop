import { ItemInfo } from "./ItemInfo";

import { dataItems } from "../dataItems";
import itemListStyles from './itemList.module.scss';

const ItemList = () => {
    const itemsCatalog = dataItems.models.map(el => <ItemInfo key={el.modelNumber} {...el} />)

    return (
        <div className={itemListStyles.wrapper}>
            <div className={itemListStyles.main}>
                {itemsCatalog}
            </div>
        </div>
    )
}

export { ItemList };