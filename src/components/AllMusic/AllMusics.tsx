import { ButtonSinger, ContainerAllMusics, ImageMusic, InfoSinger, TitlePrimary } from "./AllMusicsStyle";


export function AllMusics() {
  return(
    <ContainerAllMusics>
      <TitlePrimary>
        Principal resultado
      </TitlePrimary>
      <div>
        <ImageMusic />
        <InfoSinger>
          <h3>nome do cantor</h3>
          <p>1.017 fãs</p>
          <ButtonSinger>
            Artista
          </ButtonSinger>
          dsds
        </InfoSinger>
      </div>


    </ContainerAllMusics>
  )
}