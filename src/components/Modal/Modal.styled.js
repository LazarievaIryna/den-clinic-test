import styled from "styled-components";
export const ModalWrapper=styled.div`
position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  display: flex;
  justify-content: center;
    align-items: center;
   
`
export const ModalContent=styled.div`
  position: absolute;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
`
export const Label=styled.div`
font-size: 18px;
`