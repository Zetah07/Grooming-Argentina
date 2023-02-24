/* eslint-disable react-hooks/rules-of-hooks */
import "./App.css";
import NavBarA from "./components/Pages/NavBarA/NavBarA";
import NavBarB from "./components/Pages/NavBarB/NavBarB";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/Pages/About/About";
import Home from "./components/Home/Home";
import News from "./components/News/News";
import NewsDetail from "./components/NewDetails/NewDetails";
import Volunteer from "./components/Pages/Volunteer/Volunteer";
import Login from "./components/Pages/Login/Login";
import Contact from "./components/Pages/Contact/Contact";
import CreateNew from "./components/CreateNew/CreateNew";
import "bootstrap/dist/css/bootstrap.css";
// import Register from "./components/Pages/Register/Register";
import { Routes, Route, useLocation } from "react-router-dom";
import Footerx from "../src/components/Footerx/Footerx";


function App() {
  const usl = useLocation().pathname

  return (
    <div className="App">
      {(usl === "/" || usl === "/login") ? <NavBarB /> : <NavBarA />}
      <Routes>
          <Route exact path="/" element={<LandingPage />} />
          {/* <Route exact path="/test" element={<TestPage />} /> */}
          <Route exact path="/voluntariado" element={<Volunteer />} />
          <Route exact path="/contactanos" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/noticias" element={<News />} />
          <Route exact path="/noticias/:id" element={<NewsDetail />} />
          <Route exact path="/crearnoticia" element={<CreateNew />} />
          <Route exact path="/nosotros" element={<About />} />
      </Routes>
      {usl !== "/" ? <Footerx /> : null}
    </div>
  );
}

export default App;
