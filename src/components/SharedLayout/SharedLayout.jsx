

import { Outlet } from "react-router-dom";
import { HeaderPage } from "components/Header/Header";
// import { Home } from "components/Home/Home";
// import { Footer } from "components/Footer/Footer";

import { Container } from "./SharedLayout.styled";
import { NavBar } from "components/NavBar/Navbar";
import { Footer } from "components/Footer/Footer";

export const SharedLayout =()=>{
    return(<Container>
         <HeaderPage/>
         <NavBar/>
         <Outlet/>
         <Footer/>
            
        </Container>
    )
}