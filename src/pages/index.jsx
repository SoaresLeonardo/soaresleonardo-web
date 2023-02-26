import { ButtonElement } from "../components/ButtonElement";
import {
  Description,
  Home,
  HomeActions,
  HomeContainer,
  HomeImage,
  HomeIntro,
  Subtitle,
  Title,
} from "../styles/HomeStyled";

export default function HomePage() {
  return (
    <Home>
      <HomeContainer>
        <HomeIntro>
          <Subtitle>Olá,</Subtitle>
          <Title>Eu sou Leonardo.</Title>
          <Description>Desenvolvedor front-end</Description>
          <HomeActions>
            <ButtonElement>Meus projetos</ButtonElement>
          </HomeActions>
        </HomeIntro>
        <HomeImage>
          <img src="../../public/foto.jpg" alt="Home image" />
        </HomeImage>
      </HomeContainer>
    </Home>
  );
}
