/* eslint-disable react-hooks/rules-of-hooks */
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes, useLocation } from 'react-router-dom';

//Components
import NavBarA from './components/Pages/NavBarA/NavBarA';
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/Pages/About/About';
import Home from './components/Home/Home';
import News from './components/News/News';
import NewsDetail from './components/NewDetails/NewDetails';
import Contact from './components/Pages/Contact/Contact';
import Footerx from '../src/components/Footerx/Footerx';
import Blog from './components/Blog/Blog';
import BlogDetail from './components/BlogDetail/BlogDetail';
import VolunteerForm from './components/FormVolunteer/VolunteerForm';
import WhatsApp from './components/Whatsapp/Whatsapp';
import Denounces from './components/Pages/Denounces/Denounces';

function App() {
  const usl = useLocation().pathname;

  return (
    <div className='App'>
      {usl === '/' /*|| usl === "/login"*/ ? null : <NavBarA />}
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/contactanos' element={<Contact />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/noticias' element={<News />} />
        <Route exact path='/noticias/:id' element={<NewsDetail />} />
        <Route exact path='/nosotros' element={<About />} />
        <Route exact path='/voluntariado' element={<VolunteerForm />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/blog/:id' element={<BlogDetail />} />
        <Route exact path='/denuncias' element={<Denounces />} />
      </Routes>
      {usl !== '/' && (
        <>
          <Footerx />
          <WhatsApp phoneNumber='+5491124811722' />
        </>
      )}
    </div>
  );
}

export default App;
