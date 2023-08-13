import styled from 'styled-components';

export const ContainerAside = styled.div `
  display: flex;
  flex-direction: column;
`

export const LogoDeezer = styled.img `
  display: flex;
  width: 200px;
`

export const ItemOfList = styled.li`
  list-style-type: none;
  padding: 10px 0px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: black;
    font-weight: 700;

    :hover {
      color: #f44336;
    }
  }
`


