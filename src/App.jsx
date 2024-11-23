import './App.css'
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';

// Swipper 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Swipper 



function App() {

  return (
    <div className="app">
        <div className="appContainer">
          <Router>
            <Header/>
            <Routes>
            <Route path='/'  element={<Home/>}/>
            </Routes>
          <Footer/>
          </Router> 
        </div>
    </div>
  )
}

export default App
