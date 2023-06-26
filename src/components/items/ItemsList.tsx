import { ItemInfo } from "./ItemInfo";
import itemListStyles from './itemList.module.scss';

const ItemList = () => {

    return (
        <div className={itemListStyles.main}>
            <ItemInfo />
            <ItemInfo />
            <ItemInfo />
            <ItemInfo />
            <ItemInfo />
            <ItemInfo />
        </div>
    )
}

export { ItemList };