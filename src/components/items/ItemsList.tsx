import { ItemInfo } from "./ItemInfo";
import { useGetAllItemsQuery } from "../../store/itemsApi";

import type { IModels } from "../types";

import itemListStyles from './itemList.module.scss';

const ItemList = () => {
    const { isLoading, isError, data } = useGetAllItemsQuery('')

    const view = data?.record.models.map((el: IModels) => <ItemInfo key={el.modelNumber} {...el} />)

    return (
        <div className={itemListStyles.wrapper}>
            <div className={itemListStyles.main}>
                { isLoading && <h1>Waiting please, items is fething</h1> }
                { isError && <h1 style={{margin: '0 auto'}}>Something went wrong( <br /> We alredy fix it</h1>}
                {view}
            </div>
        </div>
    )
}

export { ItemList };