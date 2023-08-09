import { useState } from 'react';


import {ModalWrapper, ModalContent, Label, Form, Title, Input, Button, ButtonWrapper, LabelNumber, NumberText, CloseIcon} from './Modal.styled'
export const Modal=({onClose})=>{
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [disabled, setDisabled] = useState(false);

    const handleSubmit=event=>{
        event.preventDefault();
 const user={name, number}
 console.log(user)
       
        if(user){
          setDisabled(true)
        }
        
        reset();
        onClose(true)
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
   

    return(
        <ModalWrapper>
            <ModalContent>
              <CloseIcon onClick={onClose}/>
                <Title>Залиште Ваші контактні дані</Title>
                <Form>
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
            <Button type="submit" disabled={disabled}  onSubmit={handleSubmit}>Чекаю на дзвінок</Button>
            </ButtonWrapper>
            </Form>
            </ModalContent>
            
        </ModalWrapper>
    )
}