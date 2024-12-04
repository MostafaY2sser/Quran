import './App.css'
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import TrialSession from './Pages/trialSession/trialSession';
import Plan from './Components/Plan/Plan';
import EgazatPage from './Pages/EgazatPage';
import EgazatDetailsPage from './Pages/EgazatDetailsPage';
import Header from "./Components/Header/Header"
import PricingPage from './Pages/PricingPage';
import EasySteps from './Components/EasySteps/EasySteps';
import About from './Pages/About/About';
import { ItsLibrary } from './Pages/ItsLibrary/ItsLibrary';
import Login from './Pages/Authpages/Login';
import Regester from './Pages/Authpages/regester';
import Newpass from "./Pages/Authpages/newpass"; 
import Joinus from './Pages/Joinus';
import Contact from './Pages/contact';


import 'animate.css';

// Swipper 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Read from './Components/read/read';
import Books from './Components/books/books';
import Visible from './Components/Visible/Visible';
import Voice from './Components/Itsvoice/voice';




function App() {

  return (
    <div className="app">

      <div className="appContainer">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/trialSession'  element={<TrialSession/>}/>
            <Route path='/plan'  element={<Plan/>}/>
            <Route path='/about'  element={<About/>}/>
            <Route path='/easySteps'  element={<EasySteps/>}/>
            <Route path='/trialSession' element={<TrialSession />} />
            <Route path='/plan' element={<Plan />} />
            <Route path='/egazatpage' element={<EgazatPage />} />
            <Route path='/itsLibrary' element={<ItsLibrary />} />
            <Route path='/read' element={<Read />} /> 
            <Route path='/books' element={<Books />} />
            <Route path='/visible' element={<Visible />} />
            <Route path='/Voice' element={<Voice />} />
            <Route path="/egazatpage/:card/:narration" element={<EgazatDetailsPage />} />
            <Route path="/pricingpage" element={<PricingPage />} />
              <Route path='/login'  element={<Login/>}/>
              <Route path='/Regester' element={<Regester/>}/>
              <Route path= '/newpass' element={<Newpass/>}/>
              <Route path='/joinus'  element={<Joinus/>}/>
              <Route path='/contact'  element={<Contact/>}/>
          </Routes>
          <Footer />
        </Router>
      </div>

    </div>
  )
}

export default App