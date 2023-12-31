import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
 
padding-top: 28px;
padding-bottom: 66px;
background-color: #455D72;
margin-top: 100px;
display: flex;
    align-items: center;
    justify-content: center;
    align-items: flex-start;
  

 
`;
export const LogoWrapper = styled(NavLink)`
  font-weight: 700;
  margin: 0;
  margin-right: 89px;
  height: 50px;
`;
export const Logo= styled.img`
margin-right: 6px;`;

export const Link= styled(NavLink)`
font-size:16px;
color: #FBFDFF;
&:hover,
&:focus{
  color: #39ADE0;
}
`;
export const AboutList= styled.div`
margin-right: 99px;
display: flex;
flex-direction: column;
gap: 10px;
`;
export const LinkList= styled.div`
margin-right: 116px;
display: flex;
flex-direction: column;
gap: 10px;
`;
export const PromotionWrapper=styled.div`
/* display: flex; */
height: 20px;
margin-right: 88px;
`;
export const LicenseWrapper=styled.div`
margin-left: 88px;
display: flex;
flex-direction: column;
gap: 10px;
padding-top: 4px;
`
export const FooterLinkList=styled.div`
padding-top: 4px;
display: flex;

`