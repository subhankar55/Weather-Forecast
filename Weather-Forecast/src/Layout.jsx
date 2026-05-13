import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout(){

    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;
        