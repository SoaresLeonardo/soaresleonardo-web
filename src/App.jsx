import { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { AboutPage } from "./components/About";
import ContactPage from "./components/contact";
import FooterPage from "./components/Footer";
import HeaderPage from "./components/Header";
import ProjectsPage from "./components/Projects";
import SkillsPage from "./components/Skills";
import { GlobalStyles } from "./global";
import HomePage from "./pages";

import { lightMode, darkMode } from "./styles/theme";

export default function App() {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightMode : darkMode}>
      <GlobalStyles />
      <HeaderPage handleTheme={handleTheme} theme={theme} />
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
      <FooterPage />
    </ThemeProvider>
  );
}
