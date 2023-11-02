import styled from 'styled-components';

export const ContainerMoreMusic = styled.div `
padding-left:20px ;
`

export const ContentTop = styled.div `
/* display: flex;
padding: 20px; */
`

export const ContentBottom = styled.div ``

export const ImageProfile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 60px;
`
export const ItemsProfile = styled.div`
  padding-left: 20px;
`

export const TitleProfile = styled.h3`
  margin-bottom: 5px;
`

export const AboutProfile = styled.div`
  font-size: 12px;
  padding-bottom: 5px;
  span {
    padding-right: 10px;
  }
`
export const ButtonProfile = styled.button`
display: inline-flex;
    appearance: none;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    user-select: none;
    position: relative;
    white-space: nowrap;
    vertical-align: middle;
    outline: transparent solid 2px;
    outline-offset: 2px;
    line-height: 1;
    text-transform: uppercase;
    color: white;
    width: auto;
    background: #ef5466;
    border: none;
    border-radius: 20px;
    padding: 10px;
    font-size: 12px;
`

export const NavigationPerfil = styled.div`
  display: flex;
  padding-top: 10px;
  gap: 24px;

`

export const ItemNav = styled.li`
list-style-type: none;
  a{
    text-decoration: none;
      color: #52525d;
      background-color: rgba(0,0,0,0);
      border-bottom: 2px solid rgba(0,0,0,0);
      box-sizing: border-box;
      display: block;
      font-weight: 400;
      padding-bottom: 16px;
      transition-duration: .15s;
      transition-property: border-color,color;
  }
  a:hover {
    border-color: var(--tempo-colors-text-secondary);
    text-decoration: none;
  }
`