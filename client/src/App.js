/* eslint-disable react-hooks/rules-of-hooks */
import "./App.css";
import NavBarA from "./components/Pages/NavBarA/NavBarA";
import NavBarB from "./components/Pages/NavBarB/NavBarB";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/Pages/About/About";
import Home from "./components/Home/Home";
import News from "./components/News/News";
import NewsDetail from "./components/NewDetails/NewDetails";
import FormVolunteer from "./components/FormVolunteer/FormVolunteer";
import Login from "./components/Pages/Login/Login";
import Contact from "./components/Pages/Contact/Contact";
import CreateNew from "./components/CreateNew/CreateNew";
import "bootstrap/dist/css/bootstrap.css";
// import Register from "./components/Pages/Register/Register";
import { Route, useLocation } from "react-router-dom";
import Footerx from "../src/components/Footerx/Footerx";
import Blog from "./components/Blog/Blog"
import BlogDetail from "./components/BlogDetail/BlogDetail"
import Students from "./components/Students/Students/Students";


function App() {
  const usl = useLocation().pathname

  return (
    <div className="App">
      {(usl === "/" || usl === "/login") ? <NavBarB /> : <NavBarA />}
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/voluntariado">
        <FormVolunteer />
      </Route>
      <Route exact path="/contactanos">
        <Contact />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      {/* <Route exact path="/register">
        <Register />
      </Route> */}
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/noticias">
        <News />
      </Route>
      <Route exact path="/noticias/:id">
        <NewsDetail />
      </Route>
      <Route exact path="/crearnoticia">
        <CreateNew />
      </Route>
      <Route exact path="/nosotros">
        <About />
      </Route>
      <Route exact path="/blog">
        <Blog />
      </Route>
      <Route exact path="/blog/:id">
        <BlogDetail />
      </Route>
      <Route exact path="/estudiantes">
        <Students />
      </Route>
      {usl !== "/" ? <Footerx /> : null}
    </div>
  );
}

export default App;
