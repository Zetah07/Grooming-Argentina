import './App.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import About from './components/Pages/About';
import Home from './components/Home';
import News from './components/News';
import NewsDetail from './components/NewsDetail';
import Volunteer from './components/Pages/Volunteer';
import Login from './components/Pages/Login';
import Contact from './component/Pages/Contact/Contact';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route exact path="/voluntariado" element ={<Volunteer />}/>
        <Route path='/contactanos' element={<Contact/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="noticias" element={<News />}/>
        <Route path="/noticias/:id" element={<NewsDetail />}/>
        <Route path="/nosotros" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
