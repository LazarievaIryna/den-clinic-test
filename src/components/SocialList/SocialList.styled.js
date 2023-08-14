import styled from "styled-components";



export const SochialList=styled.ul`
display: flex;
column-gap: 10px;
/* margin-right: 123px; */
`;
export const SocialLink=styled.svg`

/* path:hover {
    fill: aqua;
} */

`;

export const Link=styled.a`
display: block;
width: 25px;
height: 25px;
/* color: #fff; */
path:hover
{
    fill: ${(props) => (props.fill === "#1D779F" ? "#1D779F" : "#39ADE0")};
}





`
export const ListItem=styled.li`
/* width: 25px; */
height: 25px;`
