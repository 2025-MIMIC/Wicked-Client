import { useState } from 'react'
import Home from './pages/Home'
import Loadingpage from './pages/Loadingpage'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          {/* <Route path='/' element={<Loadingpage/>}></Route> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
