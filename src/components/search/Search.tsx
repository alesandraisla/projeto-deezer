import { ContentAside, ImagePerfil, LinkAlert, SearchBarWrapper, SearchInput } from "./SearchStyles";
import React, { useState } from 'react';
import { Bell, MagnifyingGlass} from "phosphor-react";
import avatarIsla from '../../images/avatarIsla.jpeg';
import Modal from "../Modal/Modal";
import { Notification } from "../Notification/Notification";

export function Search() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    if(modalIsOpen === false) {
      setModalIsOpen(true);
    } else {
      setModalIsOpen(false);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return(
    <SearchBarWrapper>
      <MagnifyingGlass size={20} />
      <SearchInput type="text" placeholder="Buscar" />
      <ContentAside>
        <LinkAlert onClick={openModal}>
          <Bell size={20} />
        </LinkAlert>
        <Modal isOpen={modalIsOpen} onClose={closeModal}>
          <Notification/>
        </Modal>
        <ImagePerfil src={avatarIsla}/>

      </ContentAside>
      {/* <IconWrapper> */}
        {/* <SearchIcon /> */}
        {/* <BellIcon /> */}
      {/* </IconWrapper> */}
    </SearchBarWrapper>
  )
}