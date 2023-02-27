/* eslint-disable react-hooks/rules-of-hooks */
import "./App.css";
import NavBarA from "./components/Pages/NavBarA/NavBarA";
import NavBarB from "./components/Pages/NavBarB/NavBarB";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/Pages/About/About";
import Home from "./components/Home/Home";
import News from "./components/News/News";
import NewsDetail from "./components/NewDetails/NewDetails";
import Login from "./components/Pages/Login/Login";
import Contact from "./components/Pages/Contact/Contact";
import CreateNew from "./components/CreateNew/CreateNew";
import "bootstrap/dist/css/bootstrap.css";
// import Register from "./components/Pages/Register/Register";
import { Route, Routes, useLocation } from "react-router-dom";
import Footerx from "../src/components/Footerx/Footerx";
import Blog from "./components/Blog/Blog";
import BlogDetail from "./components/BlogDetail/BlogDetail";
import Students from "./components/Students/Students/Students";
import PasswordRecovery from "./components/Pages/passwordRecovery/PasswordRecovery";
import PasswordReset from "./components/Pages/passwordReset/PasswordReset";
import Layout from "./components/Layout/Layout";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Unauthorized from "./components/Unauthorized/Unauthorized";
import PersistLogin from "./components/PersistLogin/PersistLogin";
import CreateBlog from "./components/CreateBlog/CreateBlog";
import StudentsPlayer from "./components/Students/StudentsPlayer/StudentsPlayer";
import ManageVolunteers from "./components/Pages/ManageVolunteers/ManageVolunteers";
import VolunteerForm from "./components/FormVolunteer/VolunteerForm";


function App() {
  const usl = useLocation().pathname;

  return (
    <div className="App">
      {usl === "/" /*|| usl === "/login"*/ ? null : <NavBarA />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/contactanos" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/noticias" element={<News />} />
          <Route exact path="/noticias/:id" element={<NewsDetail />} />
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={["admin", "hr", "editor"]} />}>
              <Route exact path="/crearnoticia" element={<CreateNew />} />
            </Route>
          </Route>
          <Route exact path="/nosotros" element={<About />} />
          <Route exact path="/voluntariado" element={<VolunteerForm />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog/:id" element={<BlogDetail />} />
          <Route exact path="/recuperar" element={<PasswordRecovery />} />
          <Route exact path="/recuperar/:token" element={<PasswordReset />} />
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={["user", "admin", "hr", "volunteer", "editor"]} />}>
              <Route exact path="/crearblog" element={<CreateBlog />} />
            </Route>
          </Route>

          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={["admin"]} />}>
              <Route exact path="/voluntarios" element={<ManageVolunteers />} />
            </Route>
          </Route>

          <Route exact path="/unauthorized" element={<Unauthorized />} />
          <Route exact path="/estudiantes" element={<Students />} />
          <Route exact path="/estudiantes/:id" element={<StudentsPlayer />} />
        </Route>
      </Routes>
      {usl !== "/" ? <Footerx /> : null}
    </div>
  );
}

export default App;
