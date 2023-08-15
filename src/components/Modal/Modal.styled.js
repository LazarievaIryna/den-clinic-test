import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const ModalWrapper=styled.div`
position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  display: flex;
  justify-content: center;
    align-items: center;
    z-index: 998;
    
   
`
export const ModalContent=styled.div`
  position: absolute;
  padding: 20px;
  background-color: #39ADE0;
  border-radius: 8px;
 
`
export const Label=styled.div`
margin-bottom: 30px;
font-size: 18px;

    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Form=styled.form`
/* display: flex;
    flex-direction: column;
    align-items: center; */
`
export const Title=styled.h2`
margin-bottom: 30px;
margin-top: 15px;
color: #fff;
position: relative;
`
export const Input=styled.input`
/* margin-bottom: 25px;
margin-top: 15px; */
width: 242px;
padding: 10px;
    height: 40px;
    border: none;
    border-radius: 4px;
     &::placeholder{
      font-size: 14px;
      
     }
`
export const Button=styled.button`
width: 242px;
height: 40px;

background-color: #39ADE0;
border: solid 1px ;
border-color: #FBFDFF;
border-radius: 4px;
font-size: 18px;
color: #FBFDFF;
cursor: pointer;
&:hover,
    &:focus{
        background-color: #1D779F;
    }
`

export const ButtonWrapper=styled.div`
display: flex;
justify-content: center;
margin-top: 10px;

`
export const LabelNumber=styled.div`
/* margin-bottom: 15px; */

font-size: 18px;

    color: #fff;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* align-items: center; */
`
export const NumberText=styled.p`
margin-top: 5px;
font-size:10px;
font-style: italic;`

export const CloseIcon=styled(AiOutlineCloseCircle)`
color: #fff;
width: 20px;
height: 20px;
position: absolute;
right: 18px;
    top: 10px;
    cursor: pointer;
    &:hover,
    &:focus{
        color: #1D779F;
    }
`