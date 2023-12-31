import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';


import {ModalWrapper, ModalContent, Label, Form, Title, Input, Button, ButtonWrapper, LabelNumber, NumberText, CloseIcon} from './Modal.styled'

const modalRoot = document.querySelector('#modal-root');
export const Modal=({onClose})=>{
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [disabled, setDisabled] = useState(false);

   



    useEffect(() => {
      const handleKeyDown = e => {
        if (e.code === 'Escape') {
          console.log('esc');
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    },[onClose]);
    const handleBackdroapClick = event => {
      if (event.currentTarget === event.target) {
        onClose();
      }
    };
    
    

    const handleSubmit=event=>{
        event.preventDefault();
 const user={name, number}
 console.log(user)
 
       
        if(user){
          setDisabled(true)
        }
        
        reset();
        onClose()
    }
    
    const handleNameChange = event => {

        setName(event.currentTarget.value);
      };
      const handleNumberChange = event => {
        setNumber(event.currentTarget.value);
      };
     const reset=()=>{
        setName('');
        setNumber('');

    }
    
  const handleKeyDown = (event) => {
console.log(event.key)
    if (event.key === 'Escape') {
   
      onClose();
      // console.log(event)
    }
  };
 

    return(
        createPortal(
          <ModalWrapper onClick={handleBackdroapClick}>
            <ModalContent onKeyDown={handleKeyDown} tabIndex="0" onClick={(e) => e.stopPropagation()}>
              <CloseIcon onClick={onClose} />
                <Title >Залиште Ваші контактні дані</Title>
                <Form onSubmit={handleSubmit} >
                <Label>
            Ім'я
            <Input
              type="text"
              value={name}
              placeholder='Ваше ім&apos;я'
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleNameChange}
              autoFocus
              
            />
          </Label>
          <Label>
            Телефон
            <LabelNumber>
                <Input
              type="tel"
              minLength="10"
              maxLength="10"
              name="number"
              value={number}
              placeholder='Ваш номер телефону'
              pattern="^\d{10}$"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleNumberChange}
              
            />
            <NumberText>формат: 0930000000</NumberText>
            </LabelNumber>
            </Label>
            <ButtonWrapper>
            <Button type="submit" disabled={disabled}  >Чекаю на дзвінок</Button>
            </ButtonWrapper>
            </Form>
            </ModalContent>
            
        </ModalWrapper>,
        modalRoot
        )
    )
}