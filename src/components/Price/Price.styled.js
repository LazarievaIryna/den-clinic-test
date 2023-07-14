import styled from "styled-components";

export const Wrapper = styled.div`
 
 margin-top: 100px;
 display: flex;
 flex-direction: column;

 justify-content: center;
 align-items: center;
 /* background-color: #39ADE0; */
  

 
`;
export const Button = styled.button`
 
 /* margin-top: 40px; */
 display: flex;


 justify-content: space-between;
 align-items: center;
 margin-bottom: 5px;
 padding-left: 24px;
 padding-right: 24px;

 width: 1000px;
 height: 50px;
 background-color: #39ADE0;
 border-radius: 4px;
 border: none;
 font-size: 18px;
 line-height: 1.4;
 color: #FBFDFF;
  

 
`;
export const ContainerPrice=styled.ul`
display: flex;
flex-direction: column;
gap: 5px;


`
export const PriceItem=styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 936px;
    height: 40px;
    background-color: #DAECFA;
    font-size: 18px;
    padding-left: 24px;
    padding-right: 24px;
    `

    export const Title=styled.div`
    display: flex;
    justify-content: flex-start;
    width: 1000px;
    margin-bottom: 40px;
    `