import styled from 'styled-components';
export const ContainerSearch = styled.div``

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #eaeaea;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: 8px;
  font-size: 16px;
  background-color: transparent;
  outline: none;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

export const ImagePerfil = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 40px;
`

export const ContentAside = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

export const LinkAlert = styled.a`
  cursor: pointer;
`

export const TitleModal = styled.h2`
border-bottom: 1px solid #eaeaea;
font-size: 14px;
padding-bottom: 10px;
padding-left: 10px;

`

export const TitleModalPerfil = styled.h2`
border-bottom: 1px solid #eaeaea;
padding-bottom: 10px;
padding-left: 10px;
align-items: center;
gap: 10px;
font-weight: 100;
font-size: 11px;
display: flex;
justify-content: space-between;
  div {
    display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 10px;
  }
  span {
    padding-right: 20px;
    display: inline-block;
    transition: transform 0.3s ease; 
    :hover {
      transform: translateX(5px); 
    }
  }
  :hover {
      background-color: #eaeaea;
    }

`
export const LogoDeezer = styled.img `
  display: flex;
  width: 200px;
`
