import { ContentAside, ImagePerfil, SearchBarWrapper, SearchInput } from "./SearchStyles";
import React from 'react';
import { Bell, MagnifyingGlass} from "phosphor-react";
import avatarIsla from '../../images/avatarIsla.jpeg';

export function Search() {
  return(
    <SearchBarWrapper>
      <MagnifyingGlass size={20} />
      <SearchInput type="text" placeholder="Buscar" />
      <ContentAside>
        <Bell size={20} />
        <ImagePerfil src={avatarIsla}/>

      </ContentAside>
      {/* <IconWrapper> */}
        {/* <SearchIcon /> */}
        {/* <BellIcon /> */}
      {/* </IconWrapper> */}
    </SearchBarWrapper>
  )
}