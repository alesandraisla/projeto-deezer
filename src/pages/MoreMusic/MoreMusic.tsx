import React from 'react';
import { Layout } from '../../Layout/Layout';
import { AboutProfile, ButtonProfile, ContainerMoreMusic, ContentBottom, ContentTop, ImageProfile, ItemNav, ItemsProfile, NavigationPerfil, TitleProfile } from './MoreMusicStyle';
import avatarIsla from '../../images/avatarIsla.jpeg';
import { Link } from 'react-router-dom';

const namesNavigationProfile = [
  {id: 1,  name: 'Destaques', url: '/#'},
  {id: 2,  name: 'Mais queridas', url: '/#'},
  {id: 3,  name: 'playlists', url: '/#'},
  {id: 4,  name: 'Álbuns', url: '/#'},
  {id: 5,  name: 'Artistas', url: '/#'},
  {id: 6,  name: 'Histórico de reprodução', url: '/#'},
  {id: 7,  name: 'Podcasts', url: '/#'},
  {id: 8,  name: 'Mais', url: '/#'},

]
export function MoreMusic() {
  return(
    <Layout>
      <ContainerMoreMusic>
        <ContentTop>
          <ImageProfile src={avatarIsla}/>
          <ItemsProfile>
            <TitleProfile>
              Alesandra Isla
            </TitleProfile>
            <AboutProfile>
              <span>
                34 seguidores
              </span>
              <span>
                77 seguindo
              </span>
            </AboutProfile>
            <ButtonProfile>
              MINHA MÚSICA - ALEATÓRIO
            </ButtonProfile>
          </ItemsProfile>
        </ContentTop>
        <ContentBottom>
          <NavigationPerfil>
          {namesNavigationProfile.map((item, index) => (
            <ItemNav key={item.id}> 
            <Link to={item.url}>
              {item.name} 
            </Link>
            </ItemNav>
          ))}
          </NavigationPerfil>
        </ContentBottom>
        </ContainerMoreMusic>
    </Layout>
  )
}