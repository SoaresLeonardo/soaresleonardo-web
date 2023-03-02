import { useState } from "react";
import {
  CloseSidebar,
  Header,
  HeaderContainer,
  HeaderLinks,
  Link,
  Menu,
  ThemeButton,
  ThemeSelect,
  Title,
  TitleContainer,
} from "./HeaderStyled";

import { FaTimes, FaBars } from "react-icons/fa";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export default function HeaderPage({ handleTheme, theme }) {
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
          <Link onClick={showSiderbar}>
            <a href="#home">Home</a>
          </Link>
          <Link onClick={showSiderbar}>
            <a href="#about">Sobre</a>
          </Link>
          <Link onClick={showSiderbar}>
            <a href="#skills">Skills</a>
          </Link>
          <Link onClick={showSiderbar}>
            <a href="#projects">Projetos</a>
          </Link>
          <Link onClick={showSiderbar}>
            <a href="#contact">Contato</a>
          </Link>
        </HeaderLinks>
        <ThemeSelect>
          <ThemeButton onClick={handleTheme}>
            {theme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
          </ThemeButton>
        </ThemeSelect>
      </HeaderContainer>
    </Header>
  );
}
