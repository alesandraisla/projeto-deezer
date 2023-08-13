import { ContainerAside, ContainerOfNavigation, ContentOfLists, ItemOfList, ItemOfSubList, LogoDeezer } from "./AsideStyles";
import logoDeezer from '../../images/logoDeezer.png';
import React from 'react';
import { Headphones, Radio, Ticket, Binoculars, Heart } from "phosphor-react";
import { MicrophoneStage } from "phosphor-react";


export function Aside() {

  const namesNavigation = [
    {id: 1, icon:  <Headphones size={32}/>, name: 'Música', url: '/#'},
    {id: 2, icon:  <MicrophoneStage size={32} />, name: 'Podcasts', url: '/#'},
    {id: 3, icon:  <Radio size={32} />, name: 'Rádios', url: '/#'},
    {id: 4, icon:  <Ticket size={32} />, name: 'Shows', url: '/#'},
    {id: 5, icon:  <Binoculars size={32} />, name: 'Explorar', url: '/#'},
    {id: 6, icon:  <Heart size={32} />, name: 'Favoritos', url: '/#'},
  ]

  const namesSubNavigation = [
    {id: 1, name: 'Mais queridas', url: '/#'},
    {id: 2, name: 'Playlist', url: '/#'},
    {id: 3, name: 'Álbuns', url: '/#'},
    {id: 4, name: 'Artistas', url: '/#'},
    {id: 5, name: 'Podcasts', url: '/#'},
  ]

  return(
    <>
      <ContainerAside>
        <LogoDeezer src={logoDeezer} />
        <ContainerOfNavigation>
        <ContentOfLists>
          {namesNavigation.map((item, index) => (
            <ItemOfList key={item.id} >
              <a href={item.url}>
                {item.icon}
                {item.name}

              </a>
            </ItemOfList>
          ))}
        </ContentOfLists>
        <ContentOfLists>
          {namesSubNavigation.map((item, index) => (
            <ItemOfSubList key={item.id}> 
            <a href={item.url}>
              {item.name} 
            </a>
            </ItemOfSubList>
          ))}
        </ContentOfLists>
        </ContainerOfNavigation>
      </ContainerAside>
    </>
  )
}