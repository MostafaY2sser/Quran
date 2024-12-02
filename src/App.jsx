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
import 'animate.css';

// Swipper 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import WishList from './Pages/WishList/WishList';
import Blogs from './Pages/Blogs/Blogs';
import AlShehk from './Pages/AlShehk/AlShehk';



function App() {

  return (
    <div className="app">

      <div className="appContainer">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shoppingCart' element={<ShoppingCart />} />
            <Route path='/wishList' element={<WishList />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/elsheikhs' element={<AlShehk />} />
            <Route path='/trialSession' element={<TrialSession />} />
            <Route path='/plan' element={<Plan />} />
            <Route path='/egazatpage' element={<EgazatPage />} />
            <Route path="/egazatpage/:card/:narration" element={<EgazatDetailsPage />} />
            <Route path="/pricingpage" element={<PricingPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>

    </div>
  )
}

export default App
