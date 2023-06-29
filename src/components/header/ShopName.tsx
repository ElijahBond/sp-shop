import { Link } from "react-router-dom";
import { shopImage } from "../../assets";

const ShopName = () => {
    return (
            <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                <div style={{cursor: "pointer"}}>
                    <img  src={shopImage} alt='SP' />.shop
                </div>
            </Link>
    )
};

export { ShopName };