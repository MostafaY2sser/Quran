import './App.css'
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import TrialSession from './Pages/trialSession/trialSession';
import Plan from './Components/Plan/Plan';




function App() {

  return (
    <div className="app">
        <div className="appContainer">
          <Router>
            <Header/>
            <Routes>
            <Route path='/'  element={<Home/>}/>
            <Route path='/trialSession'  element={<TrialSession/>}/>
            <Route path='/plan'  element={<Plan/>}/>
            </Routes>
          <Footer/>
          </Router> 
        </div>
    </div>
  )
}

export default App
