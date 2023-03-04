import {
  Contact,
  ContactContainer,
  ContactIntro,
  ContatoImage,
  Description,
  SocialActions,
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
            Caso tenha ficado interessado nas minhas habilidades ou quer bater um
            papo. Segue os links ai em baixo!
          </Description>
          <SocialContainer>
            <SocialActions>
              <ButtonElement
                href="https://github.com/SoaresLeonardo"
                target="_blank"
              >
                <AiFillGithub />
                GitHub
              </ButtonElement>
              <ButtonElement
                href="https://www.instagram.com/leosoareshenrique/"
                target="_blank"
              >
                <AiOutlineInstagram />
                Instagram
              </ButtonElement>
            </SocialActions>
          </SocialContainer>
        </ContactIntro>

        <ContatoImage>
          <img src="/contato.jpg" alt="" />
        </ContatoImage>
      </ContactContainer>
    </Contact>
  );
}
