import { NavBar } from "components/NavBar/Navbar";
import { About } from "components/About/About";
import { Price } from "components/Price/Price";
import { HeaderPage } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";

export const Home=()=>{
    return(<>
    <HeaderPage/>
        <NavBar/>
            <About/>
            <Price/>
            <Footer/>
            </>
    )
}