import { ContentAside, ImagePerfil, LinkAlert, SearchBarWrapper, SearchInput, TitleModal, TitleModalPerfil } from "./SearchStyles";
import React, { useState } from 'react';
import { Bell, MagnifyingGlass, CaretRight} from "phosphor-react";
import avatarIsla from '../../images/avatarIsla.jpeg';
import Modal from "../Modal/Modal";
import { Notification } from "../Notification/Notification";
import { InformationPerfil } from "../InformationPerfil/InformationPerfil";
import { SubInformationPerfil } from "../SubInformationPerfil/SubInformationPerfil";

export function Search() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenPerfil, setModalIsOpenPerfil] = useState(false);

  const openModalPerfil = () => {
    if(modalIsOpenPerfil === false) {
      setModalIsOpenPerfil(true);
    } else {
      setModalIsOpenPerfil(false);
    }
  };

  const closeModalPerfil = () => {
    setModalIsOpenPerfil(false);
  };


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
          <TitleModal>
            Notificações
          </TitleModal>
          <Notification/>
        </Modal>

        <LinkAlert onClick={openModalPerfil}>
          <ImagePerfil src={avatarIsla}/>
        </LinkAlert>

        <Modal isOpen={modalIsOpenPerfil} onClose={closeModalPerfil}>
          <TitleModalPerfil>
            <div>
              <ImagePerfil src={avatarIsla}/>
              Isla Mempis
            </div>
            <span>
            <CaretRight size={15}  />

            </span>
          </TitleModalPerfil>
          <InformationPerfil />
          <SubInformationPerfil/>
        </Modal>

      </ContentAside>
    </SearchBarWrapper>
  )
}