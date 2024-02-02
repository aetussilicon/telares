import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Components/Pages/Home';
import Shop from './Components/Pages/Shop';
import AboutUs from './Components/Pages/AboutUs';
import Blog from './Components/Pages/Blog';
import Contact from './Components/Pages/Contact';

function App() {

  return (
      <Routes>
        <Route Component={Home} exact path='/home' />
        <Route Component={Shop} exact path='/shop' />
        <Route Component={AboutUs} exact path='/aboutus' />
        <Route Component={Blog} exact path='/blog' />
        <Route Component={Contact} exact path='/contact' />
      </Routes>
  );
}

export default App
