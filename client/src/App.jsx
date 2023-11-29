import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';

import Header from "./components/header/Header"
import Home from './components/home/Home';
import SeriesCollection from './components/series-collection/SeriesCollection';
import Login from './components/login/Login';
import Register from './components/register/Register';
import AddNewSeries from './components/addNewSeries/AddNewSeries';

function App() {

  return (
    <AuthProvider>
    <div id="main">
      <Header />
    
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/series' element={<SeriesCollection/>} />
     <Route path='/login' element={<Login/>} />
     <Route path='/register' element={<Register/>} />
     <Route path='/series/create' element={<AddNewSeries/>} />

    </Routes>
    </div>
    </AuthProvider>
  )
}

export default App
