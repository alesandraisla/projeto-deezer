
import React from 'react';
import { ContentInformation, DataItem, LinkDate, Separater, SpaceItem } from "./InformationPerfilStyle";
import { CaretRight } from "phosphor-react";

const infos = [
  {id: 1, name: 'Configurações da conta', url: '/#', icon:  <CaretRight size={15}  /> },
  {id: 2, name: 'Gerenciar minha assinatura', url: '/#', icon:  <CaretRight size={15} /> },
  {id: 3, name: 'Gerenciar minhas exclusões', url: '/#', icon:  <CaretRight size={15} /> },
  {id: 4, name: 'Comprar um vale presente', url: '/#', icon:  <CaretRight size={15} /> },
  {id: 5, name: 'Desconectar', url: '/#', icon:  <CaretRight size={15} /> }
]


export function InformationPerfil() {
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