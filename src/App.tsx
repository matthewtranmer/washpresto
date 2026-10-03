import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'

import Home from '@/pages/Home/Home'
import About from '@/pages/About/About'

import BookLayout from '@/components/BookLayout/BookLayout'
import Service from '@/pages/Book/Service/Service'
import Timeslot from '@/pages/Book/Timeslot/Timeslot'
import Confirm from '@/pages/Book/Confirm/Confirm'


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
          <Route path="/about" element={<About />} />

          {/* <Route path="/book" element={<BookCollection />}>
          <Route path="/book/timeslot" element={<Timeslot />} /> */}

          <Route path='/book' element={<BookLayout />}>
            <Route index element={<Navigate to="service" replace />} />
            
            <Route path='service' element={<Service />}></Route>
            <Route path='timeslot' element={<Timeslot/>}></Route>
            <Route path='confirm' element={<Confirm/>}></Route>
          </Route>

        </Routes>
      </div>
      
   </BrowserRouter>
  )
}

export default App
