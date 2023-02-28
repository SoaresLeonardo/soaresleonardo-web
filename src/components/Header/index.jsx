import { useState } from "react";
import {
  CloseSidebar,
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
          <Title>Leonardo.</Title>
        </TitleContainer>
        <Menu>
          <FaBars onClick={showSiderbar} />
        </Menu>
        <HeaderLinks sidebar={sidebar}>
          <CloseSidebar>
          <FaTimes onClick={showSiderbar} />
          </CloseSidebar>
          <Link>
            <a href="#home">Home</a>
          </Link>
          <Link>
            <a href="#about">Sobre</a>
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
