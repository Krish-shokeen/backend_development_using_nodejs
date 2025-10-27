import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './pages/signup'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Signup/>}/>
      </Routes>
    </Router>
  )
}

export default App
