import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

import Home from './pages/Home/Home'

function App() {
  return (
   <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
