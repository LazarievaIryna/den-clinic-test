
import {  useState } from "react"
import { Additionally } from 'components/Additionally/Additionally'
import Img from '../../img/Rectangle 109.jpg'
import { ContentImg, 
    ContentText, 
    Wrapper, 
    ContentTitle, 
    RadioFormTitle,
    RadioForm,
    RadioLabel, 
    Input } from './About.styled'
export const About =()=>{
  const [choose,setChoose]=useState('');
  const handleChange=(e)=>{
    setChoose(e.target.value);
    
 }
 console.log("form result", choose)
    return(
    <>
    <Wrapper>
    <div>
        <ContentTitle>Про клініку</ContentTitle>
        <ContentText>Ми професійно і комплексно вирішуємо всі випадки, пов'язані з зубами і порожниною рота, при розумному співвідношенні ціни і якості отримуваних послуг, для всіх членів вашої родини.
        Завдяки високому професіоналізму і чуйності наших лікарів, Ви не будете відчувати болю під час лікування. Ми використовуємо найкращі анестетики і перед уколом місцеву анестезію, обробляємо спеціальним кремом місце для уколу.</ContentText>
        
  <RadioFormTitle>Боїшся стомалогів?</RadioFormTitle>
  <RadioForm>
  <RadioLabel >
    <Input type="radio" name="choose" value="Так"  onClick={handleChange}/>
    Так
  </RadioLabel>
  <RadioLabel >
    <Input type="radio" name="choose" value="Ні"  onClick={handleChange}/>
    Ні
  </RadioLabel>
  <RadioLabel >
    <Input type="radio" name="choose" value="Боюсь мовчки"  onClick={handleChange}/>
    Боюсь мовчки
  </RadioLabel>


</RadioForm>
</div>
<ContentImg src={Img} alt='dental clinic'/>

        </Wrapper>
        <Additionally/>
        </>
    )
}