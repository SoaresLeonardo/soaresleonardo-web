import "./App.css";
import { AboutPage } from "./components/About";
import FooterPage from "./components/Footer";
import HeaderPage from "./components/Header";
import ProjectsPage from "./components/Projects";
import HomePage from "./pages";

export default function App() {
  return (
    <div>
      <HeaderPage />
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <FooterPage/>
    </div>
  );
}
