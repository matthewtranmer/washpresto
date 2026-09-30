import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from '@/pages/Home/Home'
import About from '@/pages/About/About'
import Services from '@/pages/Services/Services'

import NavBar from './components/Navbar/Navbar'

import './App.css'

function App() {
  return (
   <BrowserRouter>
      <div className='app-container'>
        <NavBar></NavBar>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </div>
      
   </BrowserRouter>
  )
}

export default App
