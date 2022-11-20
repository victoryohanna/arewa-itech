import { Routes, Route } from 'react-router-dom';
//import './App.css';

import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import About from './pages/About';
import Footer from './components/footer/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
