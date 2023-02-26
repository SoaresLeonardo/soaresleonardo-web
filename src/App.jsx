import "./App.css";
import { AboutPage } from "./components/About";
import HeaderPage from "./components/Header";
import HomePage from "./pages";

export default function App() {
  return (
    <div>
      <HeaderPage/>
      <HomePage/>
      <AboutPage/>
    </div>
  );
}
