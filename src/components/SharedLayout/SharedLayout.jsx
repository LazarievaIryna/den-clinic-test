

import { Outlet } from "react-router-dom";
// import { HeaderPage } from "components/Header/Header";
import { Home } from "components/Home/Home";
// import { Footer } from "components/Footer/Footer";

import { Container } from "./SharedLayout.styled";

export const SharedLayout =()=>{
    return(<Container>
         
          
            <Outlet/>
        </Container>
    )
}