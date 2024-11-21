import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';


function App() {

  return (
    <div className="app">
        <div className="appContainer">
          <Router>
            <Routes>
            <Route path='/'  element={<Home/>}/>
            </Routes>
          </Router>
          <button className='globalButton'> حجز حصة تجريبية</button>
        </div>
    </div>
  )
}

export default App
