import stylesHeader from './header.module.scss';
import { ShoppingCart } from './ShoppingCart';
import { ShopName } from './ShopName';

const Header = () => {
    return (
        <div style={{borderBottom: '1px solid #CFCFCF'}}>
            <div className={stylesHeader.header}>
                <ShopName />
                <ShoppingCart />
            </div>
        </div>
    )
};

export { Header };