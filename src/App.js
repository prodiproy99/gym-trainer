import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
