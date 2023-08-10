import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Navigation=styled.nav`
/* display: flex; */
/* height: 40px; */
padding: 9px 0 9px 0;
box-shadow: 0px 4px 11px 0px rgba(53, 84, 97, 0.1);
position: relative;




`;
export const NavigationList=styled.ul`
display: flex;
column-gap: 130px;
justify-content: center;

`;
export const NavigationLink=styled(NavLink)`
text-decoration: none;
color: #133A4B;
font-size: 16px;
&:hover{
    color: #39ADE0;
}
`;
export const DropDown=styled.ul`
display: flex;
flex-direction: column;
top: 35px;
position: absolute;
/* width: 247px;
height: 146px; */
background-color: #fff;
box-shadow: 4px 4px 4px 0px rgba(53, 84, 97, 0.1);
padding: 20px 133px 20px 20px;
row-gap: 20px;
border-radius: 4px;
`;
export const Link=styled(NavLink)`

font-size: 16px;
color: #133A4B;
&:hover{
    color: #39ADE0;
    text-decoration: underline;
}

`