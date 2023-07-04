import { ItemInfo } from "./ItemInfo";
import { useGetAllItemsQuery } from "../../store/itemsApi";

import type { IModels } from "../types";

import itemListStyles from './itemList.module.scss';

const ItemList = () => {
    const { isLoading, data } = useGetAllItemsQuery('')

    return (
        <div className={itemListStyles.wrapper}>
            <div className={itemListStyles.main}>
                {isLoading 
                    ? <h1>Waiting please, items is fething</h1> 
                    : data.record.models.map((el: IModels) => <ItemInfo key={el.modelNumber} {...el} />)
                }
                {/* {itemsCatalog} */}
            </div>
        </div>
    )
}

export { ItemList };