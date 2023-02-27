import {
  Contact,
  ContactContainer,
  ContactIntro,
  Social,
  SocialContainer,
  Subtitle,
  Title,
} from "./ContactStyled";

import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";

export default function ContactPage() {
  return (
    <Contact id="contact">
      <ContactContainer>
        <ContactIntro>
          <Title>Onde me encontrar</Title>
          <Subtitle>
            Caso queira bater um papo, essas são minhas redes:
          </Subtitle>
        </ContactIntro>
        <SocialContainer>
          <Social href="https://github.com/SoaresLeonardo" target="_blank">
            <AiFillGithub />
          </Social>
          <Social
            href="https://www.instagram.com/leosoareshenrique/"
            target="_blank"
          >
            <AiOutlineInstagram />
          </Social>
        </SocialContainer>
      </ContactContainer>
    </Contact>
  );
}
