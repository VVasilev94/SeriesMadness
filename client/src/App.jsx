import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from "./components/header/Header"
import Home from './components/home/Home';

function App() {

  return (
    <div id="main">
      <Header />
    
    <Routes>
     <Route path='/' element={<Home/>} />

    </Routes>
    </div>
  )
}

export default App
