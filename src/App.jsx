import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import EgazatPage from './Pages/EgazatPage';
import EgazatDetailsPage from './Pages/EgazatDetailsPage';


function App() {

  return (
    <div className="app">
        <div className="appContainer">
          <Router>
            <Routes>
            <Route path='/'  element={<Home/>}/>
            <Route path='/egazatpage'  element={<EgazatPage/>}/>
            <Route path="/details/:card/:narration" element={<EgazatDetailsPage />} />
            </Routes>
          </Router>
        </div>
    </div>
  )
}

export default App
