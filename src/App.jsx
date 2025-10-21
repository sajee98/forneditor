
import './App.css'
import Home from './Components/Home'
import Sidebar from './Components/sidebar'

function App() {

  return (
    <div className="App">
      <Sidebar />
      <div className='grow ml-16 md:ml-24 h-screen lg-h-screen bg-white-100 text-gray-900'>
          <Home />
      </div>
    </div>
  )
}

export default App
