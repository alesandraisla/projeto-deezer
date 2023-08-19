import React from 'react';
import { Aside } from "../components/aside/Aside";
import { ContainerSite } from "./HomeStyles";
import { Search } from "../components/search/Search";

export function Home() {
  return(
    <ContainerSite>
      <Aside />
      <Search></Search>
    </ContainerSite>
  )
}