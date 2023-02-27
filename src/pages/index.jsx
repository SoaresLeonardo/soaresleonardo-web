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

import { AiOutlineArrowRight } from "react-icons/ai";

export default function HomePage() {
  return (
    <Home>
      <HomeContainer>
        <HomeIntro>
          <Subtitle>Olá,</Subtitle>
          <Title>Eu sou Leonardo</Title>
          <Description>Desenvolvedor front-end</Description>
          <HomeActions>
            <ButtonElement href="#projects">
              Meus projetos <AiOutlineArrowRight />
            </ButtonElement>
            <ButtonElement href="#about">Quem eu sou?</ButtonElement>
          </HomeActions>
        </HomeIntro>
        <HomeImage>
          <img src="/foto.jpg" alt="Home image" />
        </HomeImage>
      </HomeContainer>
    </Home>
  );
}
