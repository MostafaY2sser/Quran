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
<<<<<<< HEAD
import 'animate.css';
=======
import EasySteps from './Components/EasySteps/EasySteps';

>>>>>>> 4fe2b273898559c0fd2c04ea6be40f237447b011

// Swipper 
import 'swiper/css';
import 'swiper/css/navigation';
<<<<<<< HEAD
import 'swiper/css/pagination';
import SubscriptionForm from './Pages/SubscriptionForm';
=======
import 'animate.css';

>>>>>>> 4fe2b273898559c0fd2c04ea6be40f237447b011



function App() {

  return (
    <div className="app">

      <div className="appContainer">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
<<<<<<< HEAD
            <Route path='/trialSession' element={<TrialSession />} />
            <Route path='/plan' element={<Plan />} />
=======
            <Route path='/trialSession'  element={<TrialSession/>}/>
            <Route path='/plan'  element={<Plan/>}/>
            <Route path='/easySteps'  element={<EasySteps/>}/>
>>>>>>> 4fe2b273898559c0fd2c04ea6be40f237447b011
            <Route path='/egazatpage' element={<EgazatPage />} />
            <Route path="/egazatpage/:card/:narration" element={<EgazatDetailsPage />} />
            <Route path="/pricingpage" element={<PricingPage />} />
            <Route path="/subscriptionform" element={<SubscriptionForm/>} />
          </Routes>
          <Footer />
        </Router>
      </div>

    </div>
  )
}

export default App
