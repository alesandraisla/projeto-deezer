import styled from 'styled-components';

export const ContentInformation = styled.div`
  padding-left: 10px;
`

export const DataItem = styled.div`
  padding-right: 10px;
`

export const Separater = styled.div `
  padding-left: 5px;
  border: 1px solid #eaeaea;
`

export const LinkDate = styled.a`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-weight: 200;
  line-height: 18.662px;
  font-size: 10px;
  color: black;
  justify-content: space-between;
  padding-bottom: 10px;
  padding: 10px;

  :hover {
    background-color: #eaeaea;
    border-radius: 10px;
    padding: 10px;
  }
`

export const SpaceItem = styled.span `
  display: inline-block;
    transition: transform 0.3s ease; 
    :hover {
      transform: translateX(5px); 
    }
`




