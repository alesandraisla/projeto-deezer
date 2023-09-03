import { ContainerFeels, SubTitleFeels, TitleFeels } from "./FeelsStyles";
import React from 'react';


export function Feels() {
  return (
    <ContainerFeels>
      <TitleFeels>Flow: toque o que você sente</TitleFeels>
      <SubTitleFeels>
        Um mix infinito e personalizado das músicas que você ama e também de novas descobertas.
      </SubTitleFeels>
    </ContainerFeels>
  );
}
