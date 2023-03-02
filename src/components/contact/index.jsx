import {
  Contact,
  ContactContainer,
  ContactIntro,
  ContatoImage,
  Description,
  SocialContainer,
  Subtitle,
  Title,
} from "./ContactStyled";

import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { ButtonElement } from "../ButtonElement";

export default function ContactPage() {
  return (
    <Contact id="contact">
      <ContactContainer>
        <ContactIntro>
          <Subtitle>Contato</Subtitle>
          <Title>Onde me encontrar</Title>
          <Description>
            Caso tenha ficado interessado nas minhas abilidades ou quer bater um
            papo. Segue os links ai em baixo!
          </Description>
          <SocialContainer>
            <ButtonElement>
              <AiFillGithub />
              GitHub
            </ButtonElement>
            <ButtonElement>
              <AiOutlineInstagram />
              Instagram
            </ButtonElement>
          </SocialContainer>
        </ContactIntro>

        <ContatoImage>
          <img src="/contato.jpg" alt="" />
        </ContatoImage>
      </ContactContainer>
    </Contact>
  );
}
