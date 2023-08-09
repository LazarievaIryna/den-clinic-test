import { useState } from 'react';
import { Input } from 'components/About/About.styled';
import {ModalWrapper, ModalContent, Label} from './Modal.styled'
export const Modal=()=>{
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const handleSubmit=event=>{
        event.preventDefault();
        const user = {name, number};
        console.log(user);
        reset();
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
                <h2>Залиште Ваші контактні дані</h2>
                <form>
                <Label>
            Ім'я
            <Input
              type="text"
              value={name}
              placeholder='Ваше ім'я'%
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleNameChange}
            />
          </Label>
          <Label>
            Телефон
                <Input
              type="tel"
              name="number"
              value={number}
              placeholder='Ваш номер телефону'
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleNumberChange}
              
            />
            </Label>
            <button type='submit' onSubmit={handleSubmit}>Чекаю на дзвінок</button>
            </form>
            </ModalContent>
            
        </ModalWrapper>
    )
}