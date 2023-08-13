import styled from 'styled-components';

export const ContainerAside = styled.div `
  display: flex;
  flex-direction: column;
  background: #f8f8f9;

`

export const LogoDeezer = styled.img `
  display: flex;
  width: 200px;
`

export const ItemOfList = styled.li`
  list-style-type: none;  padding: 10px 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 20px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: black;
    font-weight: 700;
    text-decoration: none;
    font-size: 18px;
    :hover {
      color: #f44336;
    }
  }
`

export const ContentOfLists = styled.ul`
display: flex;
flex-direction: column;
padding-left: 0px;
`
export const ItemOfSubList = styled.li`
  list-style-type: none;
  font-weight: 400;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  border-left: 3px solid transparent;
  justify-content: flex-start;
  padding-left: 30px;
  :hover {
        color: #f44336;
  }
  :active {
  border-left: 3px solid #f44335;
  padding: 0px;
}

a {
    display: flex;
    align-items: center;
    color: black;
    font-weight: 700;
    text-decoration: none;
    margin-bottom: 10px;

    :hover {
      color: #f44336;
    }
  }
`

export const ContainerOfNavigation = styled.div`
display: flex;
flex-direction: column;
`
