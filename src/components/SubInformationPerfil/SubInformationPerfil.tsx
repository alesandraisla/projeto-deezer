
import React from 'react';
import { ContentInformation, DataItem, LinkDate, Separater, SpaceItem } from "./SubInformationPerfilStyle";
import { CaretRight } from "phosphor-react";

const infos = [
  {id: 1, name: 'Suporte', url: '/#', icon:  <CaretRight size={15}  /> },
  {id: 2, name: 'Community e feedback', url: '/#', icon:  <CaretRight size={15} /> },
  {id: 3, name: 'Recursos', url: '/#', icon:  <CaretRight size={15} /> },
  {id: 4, name: 'Sobre nós', url: '/#', icon:  <CaretRight size={15} /> },
  {id: 5, name: 'Jobs', url: '/#', icon:  <CaretRight size={15} /> },
  {id: 5, name: 'Legal', url: '/#', icon:  <CaretRight size={15} /> }
]


export function SubInformationPerfil() {
  return(
    <div>
    {infos.map((info) => (
      <ContentInformation>
        <DataItem key={info.id}>
          <LinkDate href={info.url} >
          {info.name}
          <SpaceItem>
            {info.icon}
          </SpaceItem>
          </LinkDate>
        </DataItem>
      </ContentInformation>
    ))}
    <Separater />
    </div>
  )
}