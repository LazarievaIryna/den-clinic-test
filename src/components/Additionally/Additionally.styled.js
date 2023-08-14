import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Link = styled(NavLink)`
 /* height: 100%; */
 background-color: #39ADE0;
  display: flex;
  align-items: center;
  width: 382px;
  /* height: 100px; */
  padding-top: 19px;
  padding-bottom: 19px;
  /* padding-left: 24px; */
  font-size: 18px;
  border-radius: 4px;
  color: #FBFDFF;

  &:hover,
  &:focus {
   
    background-color: #1D779F;
  }
`;
export const Wrapper = styled.div`
 
 margin-top: 70px;
 display: flex;
 column-gap: 30px;
 justify-content: center;
 /* background-color: #39ADE0; */
  

 
`;
export const ImgCard = styled.img`
 
 
 margin-left: 24px;
 margin-right: 17px;
  

 
`;