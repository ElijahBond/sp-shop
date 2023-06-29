import { Outlet } from "react-router-dom";
import { Basket } from "./basket/Basket";
import { Header } from "./header/Header";

const Layout = () => {

    return (
        <>
            <Header />
            <Outlet />
            <Basket />
        </>
    )
};

export { Layout };