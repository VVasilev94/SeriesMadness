import { Routes, Route } from 'react-router-dom';


import Header from "./components/header/Header"
import Home from './components/home/Home';
import SeriesCollection from './components/series-collection/SeriesCollection';
import Login from './components/login/Login';

function App() {

  return (
    <div id="main">
      <Header />
    
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/series' element={<SeriesCollection/>} />
     <Route path='/login' element={<Login/>} />

    </Routes>
    </div>
  )
}

export default App
