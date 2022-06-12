import './App.css';
import Navbar  from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import About from './Pages/About/About';
import { Routes ,Route } from 'react-router-dom';



function App() {

  return (

    
    <div>
  <Navbar />
<Hero />

<Main />

  <Footer />

  </div>

   
  );
}

export default App;
