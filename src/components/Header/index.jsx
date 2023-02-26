import { useState } from "react";
import {
  Header,
  HeaderContainer,
  HeaderLinks,
  Link,
  Menu,
  Title,
  TitleContainer,
} from "./HeaderStyled";

import { FaTimes, FaBars } from "react-icons/fa";

export default function HeaderPage() {
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => {
    setSidebar(!sidebar);
  };

  return (
    <Header id="home">
      <HeaderContainer>
        <TitleContainer>
          <Title>Leonardo</Title>
        </TitleContainer>
        <Menu>
          {sidebar ? (
            <FaTimes onClick={showSiderbar} />
          ) : (
            <FaBars onClick={showSiderbar} />
          )}
        </Menu>
        <HeaderLinks sidebar={sidebar}>
          <Link>
            <a href="#home">Home</a>
          </Link>
          <Link>
            <a href="#about">Sobre mim</a>
          </Link>
          <Link>
            <a href="#projects">Projetos</a>
          </Link>
          <Link>
            <a href="#contact">Contato</a>
          </Link>
        </HeaderLinks>
      </HeaderContainer>
    </Header>
  );
}
