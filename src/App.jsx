
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Components/Home'
import WelcomePage from './Components/WelcomePage'
import ThemeContextProvider from './Context/ThemeContextProvider'
import Sidebar from './Components/sidebar'



function App() {
  return (
    <ThemeContextProvider>
    <Router>
      <div className="App flex">
        <Sidebar />

        <div className='grow ml-24 md:ml-20 h-screen lg:h-screen  bg-white-100'>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
      </ThemeContextProvider>
  )
}

export default App
