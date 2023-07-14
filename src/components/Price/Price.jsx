import {  useState } from "react"
import {Wrapper, Button, ContainerPrice, PriceItem, Title} from './Price.styled'
import ButtonDown from '../../img/VectorDown.png'
import ButtonUp from '../../img/VectorUp.png'
import price from '../Dataset/price.json'


export const Price=()=>{
const [visible, setVisible]=useState(false)
const [show, setShow]=useState(false)
console.log(price)


    return(
        <Wrapper>
            <Title>
            <h2>Прайс</h2>
            </Title>
            <Button onClick={() => setShow(prevState => !show)}>
                
                Лікування зубів
                {show? <img src={ButtonUp} alt="button up"/>: <img src={ButtonDown} alt="button down"/>}
                </Button>
                <ContainerPrice>
            {show && (
                price.map(({name, price})=>
                 (
                        <PriceItem key={name}>
                            <p>{name}</p>
                            <span>{price}</span>
                        </PriceItem>
                    )
                )
                
               
          )}</ContainerPrice>

            <Button onClick={() => setVisible(prevState => !visible)}>
                
                Видалення зуба (хірургія)
                {visible? <img src={ButtonUp} alt="button up"/>: <img src={ButtonDown} alt="button down"/>}
                </Button>
                <ContainerPrice>
            {visible && (
                price.map(({name, price})=>
                 (
                        <PriceItem key={name}>
                            <p>{name}</p>
                            <span>{price}</span>
                        </PriceItem>
                    )
                )
                
               
          )}</ContainerPrice>
                

        </Wrapper>
    )
}