import './App.css'
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';



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
