import React from 'react';
import { Aside } from "../components/aside/Aside";
import { ContainerSite, ContentSite } from "./LayoutStyle";
import { Search } from "../components/Search/Search";
import { Outlet } from 'react-router-dom'; // Importe Outlet

export function Layout({children}) {
  return (
    <ContainerSite>
      <Search />
      <ContentSite>
        <Aside />
        {children}
        <Outlet /> {/* O Outlet renderizará o conteúdo da rota atual */}
      </ContentSite>
    </ContainerSite>
  );
}
