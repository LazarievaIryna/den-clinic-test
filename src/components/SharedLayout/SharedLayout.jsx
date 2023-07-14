import { Container, 
    Header,
    LogoWrapper, 
    Logo,
    AddressLink,
    ListItem,
    List, 
    AddressWrapper, 
    ContactWrapper, 
    ContactItem, 
    ContactLink,
    ContactImg,
    
    Button,
    
    
} from "./SharedLayout.styled";

import logo from '../../img/fa6-solid_tooth.svg'
import logoText from '../../img/Vector.svg'
import phoneImg from '../../img/carbon_phone.svg'

import { NavBar } from "components/NavBar/Navbar";
import { About } from "components/About/About";
import { Price } from "components/Price/Price";
import { Footer } from "components/Footer/Footer";
import { SocialList } from "components/SocialList/SocialList";


export const SharedLayout =()=>{
    return(
        <Container>
            <Header>
                <LogoWrapper>
                <Logo src={logo} alt="logo"/>
                <img src={logoText} alt="den clinic logo"/>
                  </LogoWrapper>
                  <AddressWrapper>
                    <List>
                        <ListItem>
                            <AddressLink href="https://goo.gl/maps/wS7QEiuqttwQopA87"
                  target="_blank"
                  rel="noopener noreferrer nofollow">
                            
                            м. Київ вул. Красноткацькая, 42
                            </AddressLink>
                        </ListItem>
                        <ListItem>
                            <AddressLink href="https://goo.gl/maps/9oSuRyGGdDoHniPD8"
                  target="_blank"
                  rel="noopener noreferrer nofollow">
                            
                            м. Бровари вул. Героїв України, 28
                            </AddressLink>
                        </ListItem>
                    </List>
                  </AddressWrapper>

                  <ContactWrapper>
                    <ContactItem>
                        
                    <ContactLink  href="tel:(095)2510111"
                  >
                    <ContactImg src={phoneImg} alt="phone number"/>
                    (095)251 01 11</ContactLink>
                    </ContactItem>
                    <ContactItem>
                        
                    <ContactLink  href="tel:(098)2510111"
                  >
                    <ContactImg src={phoneImg} alt="phone number"/>
                    (098)251 01 11</ContactLink>
                    </ContactItem>
                  </ContactWrapper>
                  <SocialList/>
                  
                  <Button type="button">Замовити дзвінок</Button>

            </Header>
            <NavBar/>
            <About/>
            <Price/>
            <Footer/>
            
        </Container>
    )
}