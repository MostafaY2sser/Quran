import './App.css'
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import EgazatPage from './Pages/EgazatPage';
import EgazatDetailsPage from './Pages/EgazatDetailsPage';
import Header from "./Components/Header/Header"
import QuranCourses from './Pages/QuranCourses';
import QuranDetailsCourses from './Pages/QuranDetailsCourses';


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
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/egazatpage' element={<EgazatPage />} />
            <Route path="/egazatpage/:card/:narration" element={<EgazatDetailsPage />} />
            <Route path="/qurancourse" element={<QuranCourses/>} />
            <Route path="/details/:id" element={<QuranDetailsCourses/>} />

          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  )
}

export default App
