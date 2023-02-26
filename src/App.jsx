import "./App.css";
import { AboutPage } from "./components/About";
import HeaderPage from "./components/Header";
import Projects from "./components/Projects";
import HomePage from "./pages";

export default function App() {
  return (
    <div>
      <HeaderPage />
      <HomePage />
      <AboutPage />
      <Projects />
    </div>
  );
}
