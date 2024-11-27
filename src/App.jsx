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



import 'animate.css';

// Swipper 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
<<<<<<< HEAD
import SubscriptionForm from './Pages/SubscriptionForm';
import CommonQuestions from './Pages/ComonQuestions';
=======
import Read from './Components/read/read';
import Books from './Components/books/books';
import Visible from './Components/Visible/Visible';
import Voice from './Components/Itsvoice/voice';
>>>>>>> 22eae4eb33cce4e4dabf49d7f32a6c0d8d31024a



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
            <Route path="/subsriptionform" element={<SubscriptionForm/>} />
            <Route path="/commonQuestions" element={<CommonQuestions/>} />

          </Routes>
          <Footer />
        </Router>
      </div>

    </div>
  )
}

export default App
