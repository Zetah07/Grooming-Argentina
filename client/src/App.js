import './App.css';
import NavBar from './components/Pages/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/Pages/About/About';
import Home from './components/Home/Home';
import News from './components/News/News';
import NewsDetail from './components/NewDetails/NewDetails';
import Volunteer from './components/Pages/Volunteer/Volunteer';
import Login from './components/Pages/Login/Login';
import Contact from './components/Pages/Contact/Contact';
import Register from './components/Pages/Register/Register';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
        <Route exact path="/" element={<LandingPage />}/>
        <Route path="/voluntariado" element ={<Volunteer />}/>
        <Route path='/contactanos' element={<Contact/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="noticias" element={<News />}/>
        <Route path="/noticias/:id" element={<NewsDetail />}/>
        <Route path="/nosotros" element={<About />}/>
    </div>
  );
}

export default App;
