import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none; 
  
  &.open {
    display: block; 
  }
`;

export const ModalContainer = styled.div`
  background-color: white;
  width: 60%;
  max-width: 400px;
  padding: 20px;
  position: fixed;
  top: 51px; 
  right: 20px; 
  border: 1px solid #eaeaea;
  padding: 12px 24px;
  border-radius: 3px;
  padding-left: 0px;
    padding-right: 0px;
`;

export const TitleModal = styled.h2`
border-bottom: 1px solid #eaeaea;
font-size: 14px;
padding-bottom: 10px;
padding-left: 10px;


`
