import stylesHeader from './header.module.scss';
import { ShoppingCart } from './ShoppingCart';
import { ShopName } from './ShopName';
import { Gh } from './Gh';

const Header = () => {
    return (
        <div style={{borderBottom: '1px solid #CFCFCF'}}>
            <div className={stylesHeader.header}>
                <ShopName />
                <Gh />
                <ShoppingCart />
            </div>
        </div>
    )
};

export { Header };