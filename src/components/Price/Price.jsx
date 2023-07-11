import {  useState } from "react"
import {Wrapper, Button} from './Price.styled'
import ButtonDown from '../../img/VectorDown.png'
import ButtonUp from '../../img/VectorUp.png'
import price from '../Dataset/price.json'
export const Price=()=>{
const [visible, setVisible]=useState(false)
console.log(price)


    return(
        <Wrapper>
            <h2>Прайс</h2>
            <Button onClick={() => setVisible(prevState => !visible)}>
                
                Лікування зубів
                {visible? <img src={ButtonUp} alt="button up"/>: <img src={ButtonDown} alt="button down"/>}
                </Button>
            {visible && (<ContainerPrice>
                <div>
            <p>Мікроінвазивне пломбування без використання бормашини</p>
            <span>550 грн</span>
            </div>

            <div>
            <p>Склоіономерна пломба - середній карієс</p>
            <span>450 грн</span>
            </div>

            <div>
            <p>Склоіономерна пломба - глибокий карієс</p>
            <span>550 грн</span>
            </div>
            <div>

            <p>Фотополімерна пломба - початковий карієc </p>
            <span>750 грн</span>
            </div></ContainerPrice>)}

        </Wrapper>
    )
}