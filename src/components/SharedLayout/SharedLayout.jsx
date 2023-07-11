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
    SochialList,
    Button,
    
    
} from "./SharedLayout.styled";

import logo from '../../img/fa6-solid_tooth.svg'
import logoText from '../../img/Vector.svg'
import phoneImg from '../../img/carbon_phone.svg'
import instagramIcon from '../../img/ant-design_instagram-filled.svg'
import telegramIcon from '../../img/akar-icons_telegram-fill.svg'
import youtubeIcon from '../../img/ri_youtube-fill.svg'
import { NavBar } from "components/NavBar/Navbar";
import { About } from "components/About/About";
import { Price } from "components/Price/Price";


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
                  <SochialList>
                    <li>
                    <a  href="https://www.instagram.com/" target="_blank"
                  rel="noopener noreferrer nofollow"> 
                    <img src={instagramIcon} alt="instagramIcon"/>
                  </a>
                    </li>
                    <li>
                    <a  href="https://desktop.telegram.org/?setln=en" target="_blank"
                  rel="noopener noreferrer nofollow"> 
                    <img src={telegramIcon} alt="telegramIcon"/>
                  </a>
                    </li>
                    <li>
                    <a  href="https://www.youtube.com/" target="_blank"
                  rel="noopener noreferrer nofollow"> 
                    <img src={youtubeIcon} alt="youtubeIcon"/>
                  </a>
                    </li>
                  </SochialList>
                  <Button type="button">Замовити дзвінок</Button>

            </Header>
            <NavBar/>
            <About/>
            <Price/>
            
        </Container>
    )
}