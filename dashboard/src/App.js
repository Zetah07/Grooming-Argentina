import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import Students from "./components/Students/Students/Students"
import Login from "./pages/Login/Login";
import TestPage from "./pages/testPage/TestPAge";
import Unauthorized from "./components/Unauthorized/Unauthorized"
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Customers,
  Editor,
} from "./pages";

import { useStateContext } from "./contexts/ContextProvider";
import "./App.css";

const App = () => {
  const usl = useLocation().pathname;
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>

        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background:'blue', borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              usl !== '/' && activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            {usl !== "/" ? <Navbar /> : null}
            </div>
            <div>
              {themeSettings && <ThemeSettings />}

            <Routes>
              <Route path="/" element={<Login />} />
              {/* Login  */}

              <Route exact path="/unauthorized" element={<Unauthorized />} />
              {/* Sin acceso a la ruta */}

              <Route path="/panel/bienvenido" element={"bienvenido"} />
              {/* landing postLogin mensaje de recivimiento del usuario */}

              <Route exact path="/panel/Capacitacion" element={<Students />} />
              {/* Cursos de voluntarios */}

              <Route path="/panel/profile" element="Profile" />
              {/* Modificar mi informacion */}

              <Route path="/panel/Voluntariarios Registrados" element={<Customers />} />
              {/* Vista de Recursos humanos para aprovar o des aprovar solicitudes de Voluntarios*/}

              <Route path="/panel/noticias" element={<Editor />} />
              {/* Ruta crear noticias y/o editar/eliminar noticias */}

              <Route path="/panel/blogs" element={<Editor />} />
              {/* Ruta crear noticias y/o editar/eliminar blog */}
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
