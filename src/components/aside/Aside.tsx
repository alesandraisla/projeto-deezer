import { ContainerAside, ItemOfList, LogoDeezer } from "./AsideStyles";
import logoDeezer from '../../images/logoDeezer.png';
import React from 'react';
import { Headphones, Radio, Ticket, Binoculars, Heart } from "phosphor-react";
import { MicrophoneStage } from "phosphor-react";


export function Aside() {

  const namesNavigation = [
    {id: 1, icon:  <Headphones size={32}/>, name: 'Música'},
    {id: 2, icon:  <MicrophoneStage size={32} />, name: 'Podcasts'},
    {id: 3, icon:  <Radio size={32} />, name: 'Rádios'},
    {id: 4, icon:  <Ticket size={32} />, name: 'Shows'},
    {id: 5, icon:  <Binoculars size={32} />, name: 'Explorar'},
    {id: 6, icon:  <Heart size={32} />, name: 'Favoritos'},
  ]

  return(
    <>
      <ContainerAside>
        <LogoDeezer src={logoDeezer} />
        {namesNavigation.map((item, index) => (
          <ItemOfList key={item.id} >
            <a href="" >
              {item.icon}
              {item.name}
            </a>
          </ItemOfList>
        ))}
      </ContainerAside>
    </>
  )
}