import React, { useState } from 'react';
// import { useEffect } from 'react';
// import {noScroll} from 'no-scroll'
// import useScrollBlock from '../Utils/useScrollBlock'


import { 
    Header,
    LogoWrapper, 
    
    AddressLink,
    ListItem,
    List, 
    AddressWrapper, 
    ContactWrapper, 
    ContactItem, 
    ContactLink,
    ContactImg,
    
    Button,
    
    
    
} from "./Header.styled";
import { SocialList } from "components/SocialList/SocialList";
// import logo from '../../img/fa6-solid_tooth (1).svg'
// import logoText from '../../img/Vector.svg'
import phoneImg from '../../img/carbon_phone.svg'
import { Modal } from 'components/Modal/Modal';
import { ReactComponent as Logo } from "../../img/Лого.svg";




export const HeaderPage=()=>{
  const [isModalOpen, setIsModalOpen] = useState(false);


   const openModal=(evt)=>{
    setIsModalOpen(true);
   
   }

  const closeModal = (evt) => {
   
    setIsModalOpen(false);
    
    
  };
  
    return(<>
        <Header>
        <LogoWrapper to="/" end>
        <Logo  />
        
        {/* <Logo src={logoText} alt="den clinic logo"/> */}
        
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
          <SocialList fill="#1D779F"/>
          
          <Button type="button" onClick={openModal}
            
          >Замовити дзвінок</Button>
          {isModalOpen && <Modal onClose={closeModal} />}

    </Header>
    </>
    )
}