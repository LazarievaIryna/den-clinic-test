import { DateTimePicker } from 'components/Utils/DateTimePicker'
import {ModalWrapper, ModalContent} from './Modal.styled'
export const Modal=()=>{
    return(
        <ModalWrapper>
            <ModalContent>
                <h2>Хочете, зателефонуємо Вам рівно о:</h2>
                <DateTimePicker/>
                <input
              type="tel"
              name="number"
              placeholder='Ваш номер телефону'
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              
            />
            <button>Чекаю на дзвінок</button>
            </ModalContent>
        </ModalWrapper>
    )
}