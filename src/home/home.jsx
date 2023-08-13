import { Button } from "../components/button/Button";
import React from 'react';
import { Aside } from "../components/aside/Aside";
import { ContainerSite } from "./HomeStyles";

export function Home() {
  return(
    <ContainerSite>
      <Aside />
      <Button variant="primary">Botão Primário</Button>
    </ContainerSite>
  )
}