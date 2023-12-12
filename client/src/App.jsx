import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import Header from "./components/header/Header";
import Home from './components/home/Home';
import SeriesCollection from './components/series-collection/SeriesCollection';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Register from './components/register/Register';
import AddNewSeries from './components/addNewSeries/AddNewSeries';
import SeriesDetails from './components/seriesDetails/SeriesDetails';
import AuthGuard from './components/guards/AuthGuard';
import EditSeries from './components/editSeries/editSeries';



export function App() {

  return (
    <AuthProvider>
      <Header />
      <div id="main-section" >

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/series' element={<SeriesCollection />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/series/:serieId" element={<SeriesDetails />} />
          

          <Route element={<AuthGuard />}>

          <Route path='/logout' element={<Logout />} />
          <Route path='/series/:serieId/edit' element={<EditSeries />} />
          <Route path='/series/create' element={<AddNewSeries />} />
          </Route>

        </Routes>
      </div>
      


    </AuthProvider>
  );
}
