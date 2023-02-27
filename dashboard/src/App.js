import React from 'react';
import './App.css';
import Navbar from "./components/NavBar/Navbar"
import { Routes, Route, useLocation} from 'react-router-dom';
import Bienvenidos from './components/pages/Bienvenidos/Bienvenidos';
import PersistLogin from './components/PersistLogin/PersistLogin';
import RequireAuth from './components/RequireAuth/RequireAuth';
import CreateBlog from './components/CreateBlog/CreateBlog';
import Login from "./components/pages/Login/Login"
import Unauthorized from './components/pages/Unauthorized/Unauthorized';
import DownloadButton from "./components/downloadButton/downloadReportButton"
import ManageBlogs from './components/pages/ManageBlogs/ManageBlogs';
import ManageBlogsById from './components/pages/ManageBlogsById/ManageBlogsById'
import ManageNewsById from './components/pages/ManageNewsById/ManageNewsById'
import ManageNews from './components/pages/ManageNews/ManageNews';
import Suscriptores from './components/pages/Sustcriptors/Suscriptors';
import Profile from './components/pages/Profile/Profile';
import Students from './components/Students/Students/Students';
import ManageVolunteers from './components/pages/ManageVolunteers/ManageVolunteers';
import CreateNew from './components/CreateNew/CreateNew';


function App() {
  const location = useLocation().pathname
  return (
    <div className='App'>
      
        {location !== "/" && <Navbar />}
        <Routes>
          <Route exact path='/' element={<Login/>} />
          <Route exact path="/unauthorized" element={<Unauthorized />} />
          <Route path="/panel/profile" element={<Profile/>} />
  
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={["user", "admin", "hr", "volunteer", "editor"]} />}>
              <Route path="/panel/bienvenidos" element={<Bienvenidos/>}/>
              <Route exact path="/panel/crearblog" element={<CreateBlog />} />
              
            </Route>
            <Route element={<RequireAuth allowedRoles={["admin", "hr"]} />}>
              <Route exact path="/panel/reportes" element={<DownloadButton />} />
              <Route path="/panel/voluntarios" element={<ManageVolunteers/>}/>
              <Route exact path='/panel/suscriptores' element={<Suscriptores/>}/>
            </Route>
            <Route element={<RequireAuth allowedRoles={["admin", "editor"]} />}>
            <Route exact path="/panel/crearNoticia" element={<CreateNew />} />
            <Route path="/panel/noticias" element={<ManageNews/>}/>
            <Route path="/panel/noticias/:id" element={<ManageNewsById/>}/>
            <Route path="/panel/blogs" element={<ManageBlogs/>}/>
            <Route path="/panel/blogs/:id" element={<ManageBlogsById/>}/>
            </Route>
            <Route element={<RequireAuth allowedRoles={["admin", "volunteer"]} />}>
            <Route path="/panel/cursos" element={<Students/>}/>
            </Route>

          </Route>
        </Routes>
   
    </div>
  );
}

export default App;
